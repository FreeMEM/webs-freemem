#!/usr/bin/env python3
"""Publica las webs en el CT 108 de cosmos: construye cada una, copia su `out/` a /var/www/<dominio> y deja su
configuración de nginx (solo HTTP mientras no haya certificado; con él, HTTPS y el HTTP redirigido).

    python3 herramientas/desplegar.py                    # todas
    python3 herramientas/desplegar.py dash trasfondo     # solo esas
    python3 herramientas/desplegar.py dash --certificado # además pide su certificado (hace falta el DNS)
    python3 herramientas/desplegar.py --sin-construir    # copia lo que ya haya en out/

Necesita `ssh webs` (en ~/.ssh/config, saltando por cosmos). Una web nueva: añadirla a SITIOS, a la familia
(paquetes/retro/src/familia.tsx), al DNS y a la regla `webs_host` del haproxy del CT 101.
"""
import argparse
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
HOST = "webs"
CORREO = "devel@freemem.space"

SITIOS = {
    "dash": "dash.freemem.space",
    "tachyon": "tachyon.freemem.space",
    "trasfondo": "trasfondo.freemem.space",
}

# Lo común a HTTP y HTTPS: el export de Next.js (con barra final), caché larga para lo que lleva huella y su 404.
CUERPO = """
    root /var/www/{dominio};
    index index.html;
    error_page 404 /404.html;

    location /_next/static/ {{
        add_header Cache-Control "public, max-age=31536000, immutable";
    }}
    location ~* \\.(?:webp|png|jpg|svg|ico|ttf|woff2?)$ {{
        add_header Cache-Control "public, max-age=604800";
    }}
    location / {{
        try_files $uri $uri/ $uri.html =404;
    }}
"""

# La página privada de descargas (herramientas/descargas.py la llena cada día), con usuario y contraseña.
ESTADISTICAS = """
    location ^~ /estadisticas/ {{
        alias /var/www/estadisticas/;
        auth_basic "Descargas de FreeMEM";
        auth_basic_user_file /etc/nginx/estadisticas.htpasswd;
        add_header X-Robots-Tag "noindex, nofollow" always;
        add_header Cache-Control "no-store" always;
        add_header Strict-Transport-Security "max-age=31536000" always;
    }}
"""
# Los informes de depuración de Tachyon (su menú «Enviar informe de depuración...»): los recibe
# herramientas/servidor/tachyon_informes.py; aquí, el tope de tamaño y de peticiones (la zona, en INFORMES_ZONA).
INFORMES = """
    location = /informe {{
        limit_req zone=informes burst=4 nodelay;
        limit_req_status 429;
        client_max_body_size 512k;
        proxy_pass http://127.0.0.1:8471;
        proxy_set_header Host $host;
        add_header X-Robots-Tag "noindex, nofollow" always;
        add_header Strict-Transport-Security "max-age=31536000" always;
    }}
"""
EXTRA = {"dash.freemem.space": ESTADISTICAS, "tachyon.freemem.space": INFORMES}

SOLO_HTTP = """# {dominio}: generado por herramientas/desplegar.py (sin certificado todavía)
server {{
    listen 80;
    listen [::]:80;
    server_name {dominio};
    set_real_ip_from 10.0.0.1;
    real_ip_header X-Forwarded-For;
    location /.well-known/acme-challenge/ {{
        root /var/www/acme;
    }}
{cuerpo}}}
"""

CON_HTTPS = """# {dominio}: generado por herramientas/desplegar.py
server {{
    listen 80;
    listen [::]:80;
    server_name {dominio};
    location /.well-known/acme-challenge/ {{
        root /var/www/acme;
    }}
    location / {{
        return 301 https://$host$request_uri;
    }}
}}

# El haproxy del CT 101 pasa el TLS sin abrirlo y con PROXY protocol: así se ve la IP del visitante.
server {{
    listen 443 ssl http2 proxy_protocol;
    server_name {dominio};
    set_real_ip_from 10.0.0.1;
    real_ip_header proxy_protocol;

    ssl_certificate /etc/letsencrypt/live/{dominio}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/{dominio}/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_session_cache shared:webs:10m;

    add_header Strict-Transport-Security "max-age=31536000" always;
    add_header X-Content-Type-Options nosniff always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;
{cuerpo}}}
"""


# compresión de lo que no es HTML (nginx, por defecto, solo comprime el HTML)
GZIP = """# generado por herramientas/desplegar.py
gzip_vary on;
gzip_comp_level 6;
gzip_types text/css application/javascript application/json image/svg+xml text/plain application/xml text/xml;
"""
# seis informes por minuto y por IP (los de Tachyon; la IP es la del visitante, por el PROXY protocol)
INFORMES_ZONA = """# generado por herramientas/desplegar.py
limit_req_zone $binary_remote_addr zone=informes:1m rate=6r/m;
"""


def ssh(orden, entrada=None):
    return subprocess.run(["ssh", HOST, orden], input=entrada, text=True, capture_output=True)


def main():
    a = argparse.ArgumentParser()
    a.add_argument("sitios", nargs="*", help=f"de entre: {', '.join(SITIOS)} (sin nada, todas)")
    a.add_argument("--certificado", action="store_true", help="pedir el certificado de Let's Encrypt (webroot)")
    a.add_argument("--sin-construir", action="store_true")
    args = a.parse_args()
    sitios = args.sitios or list(SITIOS)
    ssh("cat > /etc/nginx/conf.d/webs-gzip.conf", GZIP)
    ssh("cat > /etc/nginx/conf.d/webs-informes.conf", INFORMES_ZONA)
    if otros := [s for s in sitios if s not in SITIOS]:
        a.error(f"no conozco: {', '.join(otros)}")

    for nombre in sitios:
        dominio = SITIOS[nombre]
        carpeta = RAIZ / "sitios" / nombre
        if not args.sin_construir:
            print(f"== {nombre}: construyendo")
            subprocess.run(["pnpm", "build"], cwd=carpeta, check=True, stdout=subprocess.DEVNULL)
        print(f"== {nombre}: copiando a {HOST}:/var/www/{dominio}")
        ssh(f"mkdir -p /var/www/{dominio} /var/www/acme")
        subprocess.run(["rsync", "-a", "--delete", "--chmod=D755,F644", "--chown=webs:webs", f"{carpeta}/out/", f"{HOST}:/var/www/{dominio}/"], check=True)

        tiene = ssh(f"test -f /etc/letsencrypt/live/{dominio}/fullchain.pem").returncode == 0
        if args.certificado and not tiene:
            # el reto se sirve por HTTP, así que primero la configuración sin HTTPS
            poner_conf(dominio, SOLO_HTTP)
            print(f"== {nombre}: pidiendo el certificado")
            r = ssh(f"certbot certonly --webroot -w /var/www/acme -d {dominio} -m {CORREO} --agree-tos -n --no-eff-email --deploy-hook 'systemctl reload nginx'")
            print(r.stdout + r.stderr)
            if r.returncode:
                sys.exit(f"certbot falló para {dominio}")
            tiene = True
        poner_conf(dominio, CON_HTTPS if tiene else SOLO_HTTP)
        print(f"== {nombre}: {'HTTPS' if tiene else 'solo HTTP'}")


def poner_conf(dominio, plantilla):
    cuerpo = CUERPO.format(dominio=dominio)
    if plantilla is CON_HTTPS:
        cuerpo += EXTRA.get(dominio, "").format()
    conf = plantilla.format(dominio=dominio, cuerpo=cuerpo)
    destino = f"/etc/nginx/sites-available/{dominio}"
    r = ssh(f"cat > {destino} && ln -sf {destino} /etc/nginx/sites-enabled/{dominio} && nginx -t && systemctl reload nginx", conf)
    if r.returncode:
        sys.exit(f"nginx no acepta la configuración de {dominio}:\n{r.stderr}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Las visitas de cada web, día a día, para la página privada de estadísticas.

    python3 herramientas/visitas.py [HISTORICO.json] [PAGINA_DIR]

Lee el registro propio de cada web en el CT 108 (/var/log/nginx/<dominio>.access.log y sus rotados, desde el
17/11/2026; antes todas iban a un registro común y no se pueden separar). Cuenta personas (IPs distintas) que abren
alguna página con un navegador: sin robots, sin ficheros sueltos (imágenes, estilos...) y sin las IPs de
/etc/webs-freemem/visitas-fuera (las pruebas propias, una por línea). Los registros duran 14 días: cada pasada rehace
los días que aún están y deja los demás como estaban. Lo lanza descargas.py cada hora.
"""
import gzip
import json
import re
import sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path

WEBS = {"Dash": "dash.freemem.space", "Trasfondo": "trasfondo.freemem.space", "Tachyon": "tachyon.freemem.space",
        "Forja": "forja.freemem.space", "Inferencia": "inferencia.freemem.space", "DashOS": "dashos.freemem.space"}
LINEA = re.compile(r'^(\S+) \S+ \S+ \[([^\]]+)\] "(\S+) (\S+) [^"]*" (\d{3}) \S+ "[^"]*" "([^"]*)"')
ROBOT = re.compile(r"bot|crawl|spider|slurp|curl|wget|python|go-http|java/|monitor|preview|facebookexternal|headless|"
                   r"scan|httpx|okhttp|libwww|feed", re.IGNORECASE)
NO_PAGINA = re.compile(r"^/(_next/|estadisticas|informe|favicon|robots|sitemap)|"
                       r"\.(png|jpe?g|gif|svg|ico|css|js|webp|woff2?|txt|xml|json|map|mp4|vtt|lha|vsix)$")


def lineas(dominio):
    for f in sorted(Path("/var/log/nginx").glob(f"{dominio}.access.log*")):
        abre = gzip.open if f.suffix == ".gz" else open
        with abre(f, "rt", encoding="latin-1", errors="replace") as h:
            yield from h


def main():
    historico = Path(sys.argv[1] if len(sys.argv) > 1 else "/var/lib/webs-freemem/visitas.json")
    pagina = Path(sys.argv[2] if len(sys.argv) > 2 else "/var/www/estadisticas")
    fuera_f = Path("/etc/webs-freemem/visitas-fuera")
    fuera = {l.strip() for l in fuera_f.read_text().splitlines() if l.strip() and not l.startswith("#")} if fuera_f.exists() else set()
    tomas = json.loads(historico.read_text()) if historico.exists() else {}
    for nombre, dominio in WEBS.items():
        ips, dias = defaultdict(set), set()
        for l in lineas(dominio):
            m = LINEA.match(l)
            if not m:
                continue
            ip, cuando, metodo, ruta, estado, agente = m.groups()
            try:
                dia = datetime.strptime(cuando.split()[0], "%d/%b/%Y:%H:%M:%S").date().isoformat()
            except ValueError:
                continue
            dias.add(dia)
            if ip in fuera or ROBOT.search(agente) or metodo != "GET" or estado != "200":
                continue
            if not NO_PAGINA.search(ruta.split("?")[0]):
                ips[dia].add(ip)
        for dia in dias:
            tomas.setdefault(dia, {})[nombre] = len(ips[dia])
    tomas = dict(sorted(tomas.items()))
    historico.write_text(json.dumps(tomas, indent=1) + "\n")
    pagina.mkdir(parents=True, exist_ok=True)
    (pagina / "visitas.json").write_text(json.dumps(tomas) + "\n")
    if tomas:
        hoy = max(tomas)
        print(f"visitas {hoy}: {tomas[hoy]}")


if __name__ == "__main__":
    main()

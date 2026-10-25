#!/usr/bin/env python3
"""Recibe los informes de depuración de Tachyon (su menú «Enviar informe de depuración...», tarea 54 de Tachyon).

Tachyon manda por POST a https://tachyon.freemem.space/informe un formulario con el campo `informe` (el texto que
el usuario ha visto antes de enviarlo). Se guarda en /var/lib/tachyon-informes/<año-mes-día>/<código>.txt y se
contesta con una página corta con el código, para citarlo en la incidencia de GitHub.

Cualquiera puede mandar algo (el código de Tachyon es público: una firma con una clave dentro del programa no la
pararía), así que lo que protege son los topes, firmes:
- nginx (herramientas/desplegar.py): 200 KB por petición, 6 por minuto y 2 conexiones a la vez por IP, y sin
  apuntar las IP de /informe en su registro.
- Aquí: solo se guarda un texto con la forma de un informe de Tachyon (sus primeras líneas y su "--- log ---"), de
  64 KB como mucho, con los caracteres de control cambiados por "?"; 200 al día y 100 MB en total (pasado eso se rechazan los nuevos:
  nunca llena el disco del contenedor); los de más de 90 días se borran solos.
- Nunca se ejecuta ni se sirve lo que llega: es texto en una carpeta que solo lee root.

No se guarda la IP. Para leer uno: `ssh webs less /var/lib/tachyon-informes/*/<código>.txt`.

Lo arranca tachyon-informes.service (en esta carpeta). Solo usa la biblioteca de Python.
"""
import html
import os
import re
import secrets
import sys
import threading
import time
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs

DIRECCION = ("127.0.0.1", 8471)
CARPETA = Path(os.environ.get("STATE_DIRECTORY", "/var/lib/tachyon-informes"))
CUERPO_MAXIMO = 200 * 1024        # bytes de la petición (va en %XX: hasta tres veces el texto); nginx corta igual
TEXTO_MAXIMO = 64 * 1024          # caracteres del informe (uno de verdad: el registro de 32 KB y poco más)
POR_DIA = 200
TOTAL_MAXIMO = 100 * 1024 * 1024  # bytes de todos los informes guardados
DIAS = 90                         # los más viejos, se borran
LETRAS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"   # sin 0/O ni 1/I: el código se copia a mano

# La forma de un informe (lib/informe.dash de Tachyon): "Tachyon 0.7.4-alfa", "System: exec ...", y su registro
FORMA = re.compile(r"Tachyon \d{1,3}\.\d{1,3}(\.\d{1,3})?(-[A-Za-z0-9]{1,12})?\nSystem: exec \d")
# Un carácter de control que no sea salto de línea ni tabulador (ni los C1 de Latin-1)
CONTROL = re.compile(r"[\x00-\x08\x0b-\x1f\x7f-\x9f]")

TEXTOS = {
    "es": {
        "titulo": "Informe recibido",
        "gracias": "Gracias. El informe ha llegado.",
        "codigo": "Su código es",
        "issue": "Abre una incidencia en <a href=\"https://github.com/FreeMEM/tachyon/issues/new\">github.com/FreeMEM/tachyon/issues</a> "
                 "con el código: di qué hacías, qué esperabas y qué pasó.",
        "error": "No se pudo guardar el informe",
        "invalido": "Esto no parece un informe de Tachyon.",
        "lleno": "Ahora no se admiten más informes: prueba mañana.",
    },
    "en": {
        "titulo": "Report received",
        "gracias": "Thank you. The report has arrived.",
        "codigo": "Its code is",
        "issue": "Open an issue at <a href=\"https://github.com/FreeMEM/tachyon/issues/new\">github.com/FreeMEM/tachyon/issues</a> "
                 "with the code: say what you were doing, what you expected and what happened.",
        "error": "The report couldn't be saved",
        "invalido": "This doesn't look like a Tachyon report.",
        "lleno": "No more reports are accepted right now: please try again tomorrow.",
    },
}

_cerrojo = threading.Lock()


def idioma(cabecera):
    for parte in (cabecera or "").split(","):
        if parte.strip().lower().startswith("es"):
            return "es"
        if parte.strip():
            return "en"
    return "en"


def pagina(t, cuerpo):
    return ("<!doctype html><html><head><meta charset=\"utf-8\"><title>" + t["titulo"] + "</title><style>"
            "body { font-family: sans-serif; margin: 24px; color: #0b1736 } h1 { color: #2e5bff } "
            ".codigo { font-size: 28px; font-weight: bold; font-family: monospace; background: #eef2fb; "
            "padding: 6px 12px; border: 1px solid #d5ddef }</style></head><body>" + cuerpo + "</body></html>")


def limpio(texto, largo):
    """Una cabecera para el fichero: sin caracteres de control y corta"""
    return CONTROL.sub("?", texto or "")[:largo]


def ocupado():
    """Bytes de todos los informes guardados"""
    total = 0
    for dia in CARPETA.iterdir():
        if dia.is_dir():
            for f in os.scandir(dia):
                total += f.stat().st_size
    return total


def borrar_viejos():
    """Cada seis horas, los informes de más de DIAS días (y sus carpetas, vacías)"""
    while True:
        limite = time.time() - DIAS * 86400
        try:
            for dia in CARPETA.iterdir():
                if not dia.is_dir():
                    continue
                for f in dia.iterdir():
                    if f.stat().st_mtime < limite:
                        f.unlink()
                if not any(dia.iterdir()):
                    dia.rmdir()
        except OSError as e:
            print(f"borrando los viejos: {e}", file=sys.stderr)
        time.sleep(6 * 3600)


class Receptor(BaseHTTPRequestHandler):
    server_version = "tachyon-informes"
    timeout = 10    # segundos sin recibir nada: se cierra

    def contestar(self, estado, texto):
        datos = texto.encode("utf-8")
        self.send_response(estado)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(datos)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(datos)

    def fallo(self, estado, t, motivo):
        self.contestar(estado, pagina(t, "<h1>" + t["error"] + "</h1><p>" + t[motivo] + "</p>"))

    def do_GET(self):
        t = TEXTOS[idioma(self.headers.get("Accept-Language"))]
        self.contestar(405, pagina(t, "<h1>" + t["error"] + "</h1>"))

    def do_POST(self):
        t = TEXTOS[idioma(self.headers.get("Accept-Language"))]
        try:
            largo = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            largo = 0
        if largo <= 0 or largo > CUERPO_MAXIMO:
            return self.fallo(413 if largo > CUERPO_MAXIMO else 400, t, "invalido")
        crudo = self.rfile.read(largo)
        try:
            campos = parse_qs(crudo.decode("ascii"), keep_blank_values=True, strict_parsing=True,
                              encoding="utf-8", errors="strict", max_num_fields=2)
        except (UnicodeDecodeError, ValueError):
            return self.fallo(400, t, "invalido")
        # (los caracteres de control, cambiados por "?": que no muevan nada en la terminal de quien lo lea)
        informe = CONTROL.sub("?", (campos.get("informe") or [""])[0].replace("\r\n", "\n")).strip()
        if (len(campos) != 1 or len(campos.get("informe", [])) != 1 or not informe or len(informe) > TEXTO_MAXIMO
                or not FORMA.match(informe) or "\n--- log ---\n" not in informe):
            return self.fallo(400, t, "invalido")
        ahora = datetime.now(timezone.utc)
        dia = CARPETA / ahora.strftime("%Y-%m-%d")
        try:
            with _cerrojo:
                dia.mkdir(parents=True, exist_ok=True)
                if sum(1 for _ in dia.iterdir()) >= POR_DIA or ocupado() + len(informe.encode("utf-8")) + 512 > TOTAL_MAXIMO:
                    print("informe rechazado: tope del día o del total", file=sys.stderr)
                    return self.fallo(503, t, "lleno")
                while True:
                    codigo = "".join(secrets.choice(LETRAS) for _ in range(6))
                    fichero = dia / (codigo + ".txt")
                    if not fichero.exists():
                        break
                cabecera = (f"Código: {codigo}\nRecibido: {ahora.strftime('%Y-%m-%d %H:%M:%S')} UTC\n"
                            f"Agente: {limpio(self.headers.get('User-Agent'), 120)}\n"
                            f"Idioma: {limpio(self.headers.get('Accept-Language'), 80)}\n\n")
                fichero.write_text(cabecera + informe + "\n", encoding="utf-8")
                fichero.chmod(0o640)
        except OSError as e:
            print(f"no se pudo guardar: {e}", file=sys.stderr)
            return self.contestar(500, pagina(t, "<h1>" + t["error"] + "</h1>"))
        print(f"informe {codigo} ({len(informe)} caracteres)", file=sys.stderr)
        self.contestar(200, pagina(t, "<h1>" + t["titulo"] + "</h1><p>" + t["gracias"] + " " + t["codigo"] + ":</p>"
                                      "<p class=codigo>" + html.escape(codigo) + "</p><p>" + t["issue"] + "</p>"))

    def log_message(self, formato, *args):
        pass   # sin IPs en el diario


if __name__ == "__main__":
    CARPETA.mkdir(parents=True, exist_ok=True)
    threading.Thread(target=borrar_viejos, daemon=True).start()
    ThreadingHTTPServer(DIRECCION, Receptor).serve_forever()

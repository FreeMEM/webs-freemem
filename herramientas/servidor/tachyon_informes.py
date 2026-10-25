#!/usr/bin/env python3
"""Recibe los informes de depuración de Tachyon (su menú «Enviar informe de depuración...», tarea 54 de Tachyon).

Tachyon manda por POST a https://tachyon.freemem.space/informe un formulario con el campo `informe` (el texto que
el usuario ha visto antes de enviarlo). Se guarda en /var/lib/tachyon-informes/<año-mes-día>/<código>.txt y se
contesta con una página corta con el código, para citarlo en la incidencia de GitHub. nginx lo pasa aquí
(127.0.0.1:8471) con un límite de tamaño y de peticiones por IP; esto añade un tope por día y otro de disco.

No se guarda la IP. Para leer uno: `ssh webs cat /var/lib/tachyon-informes/*/<código>.txt`.

Lo arranca tachyon-informes.service (en esta carpeta). Solo usa la biblioteca de Python.
"""
import html
import os
import secrets
import shutil
import sys
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs

DIRECCION = ("127.0.0.1", 8471)
CARPETA = Path(os.environ.get("STATE_DIRECTORY", "/var/lib/tachyon-informes"))
MAXIMO = 512 * 1024          # bytes del cuerpo (nginx corta antes, con client_max_body_size)
POR_DIA = 500                # informes al día; pasados, se rechazan
DISCO_LIBRE = 500 * 1024 * 1024
LETRAS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"   # sin 0/O ni 1/I: el código se copia a mano

TEXTOS = {
    "es": {
        "titulo": "Informe recibido",
        "gracias": "Gracias. El informe ha llegado.",
        "codigo": "Su código es",
        "issue": "Abre una incidencia en <a href=\"https://github.com/FreeMEM/tachyon/issues/new\">github.com/FreeMEM/tachyon/issues</a> "
                 "con el código: di qué hacías, qué esperabas y qué pasó.",
        "error": "No se pudo guardar el informe",
        "vacio": "El informe llegó vacío.",
        "lleno": "Hoy han llegado demasiados informes: prueba mañana.",
    },
    "en": {
        "titulo": "Report received",
        "gracias": "Thank you. The report has arrived.",
        "codigo": "Its code is",
        "issue": "Open an issue at <a href=\"https://github.com/FreeMEM/tachyon/issues/new\">github.com/FreeMEM/tachyon/issues</a> "
                 "with the code: say what you were doing, what you expected and what happened.",
        "error": "The report couldn't be saved",
        "vacio": "The report arrived empty.",
        "lleno": "Too many reports today: please try again tomorrow.",
    },
}


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


class Receptor(BaseHTTPRequestHandler):
    server_version = "tachyon-informes"

    def contestar(self, estado, texto):
        datos = texto.encode("utf-8")
        self.send_response(estado)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(datos)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(datos)

    def do_GET(self):
        t = TEXTOS[idioma(self.headers.get("Accept-Language"))]
        self.contestar(405, pagina(t, "<h1>" + t["error"] + "</h1>"))

    def do_POST(self):
        t = TEXTOS[idioma(self.headers.get("Accept-Language"))]
        try:
            largo = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            largo = 0
        if largo <= 0 or largo > MAXIMO:
            return self.contestar(413 if largo > MAXIMO else 400, pagina(t, "<h1>" + t["error"] + "</h1><p>" + t["vacio"] + "</p>"))
        crudo = self.rfile.read(largo)
        try:
            texto = crudo.decode("ascii")
        except UnicodeDecodeError:
            texto = crudo.decode("latin-1")
        campos = parse_qs(texto, keep_blank_values=True, encoding="utf-8", errors="replace")
        informe = (campos.get("informe") or [""])[0].strip()
        if not informe:
            return self.contestar(400, pagina(t, "<h1>" + t["error"] + "</h1><p>" + t["vacio"] + "</p>"))
        ahora = datetime.now(timezone.utc)
        dia = CARPETA / ahora.strftime("%Y-%m-%d")
        try:
            dia.mkdir(parents=True, exist_ok=True)
            if sum(1 for _ in dia.iterdir()) >= POR_DIA or shutil.disk_usage(CARPETA).free < DISCO_LIBRE:
                return self.contestar(503, pagina(t, "<h1>" + t["error"] + "</h1><p>" + t["lleno"] + "</p>"))
            while True:
                codigo = "".join(secrets.choice(LETRAS) for _ in range(6))
                fichero = dia / (codigo + ".txt")
                if not fichero.exists():
                    break
            cabecera = (f"Código: {codigo}\nRecibido: {ahora.strftime('%Y-%m-%d %H:%M:%S')} UTC\n"
                        f"Agente: {self.headers.get('User-Agent', '')}\n"
                        f"Idioma: {self.headers.get('Accept-Language', '')}\n\n")
            fichero.write_text(cabecera + informe + "\n", encoding="utf-8")
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
    ThreadingHTTPServer(DIRECCION, Receptor).serve_forever()

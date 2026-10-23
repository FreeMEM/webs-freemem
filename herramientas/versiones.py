#!/usr/bin/env python3
"""Pregunta a GitHub por la última versión de cada programa y la deja en `sitios/<web>/src/version.json`, que es
lo que leen los botones de descarga. Sin dependencias: solo la API pública de GitHub (60 consultas por hora sin
token; con GITHUB_TOKEN en el entorno, más).

    python3 herramientas/versiones.py            # todas
    python3 herramientas/versiones.py tachyon

Escribe el fichero solo si cambia, y dice qué ha cambiado (la salida vacía es que no hay nada nuevo).
"""
import fnmatch
import json
import os
import sys
import urllib.request
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent

# web: (repositorio, fichero que se baja, si valen las prerreleases, prefijo de la etiqueta)
FUENTES = {
    "trasfondo": ("FreeMEM/trasfondo", "*.lha", False, "v"),
    "tachyon": ("FreeMEM/tachyon", "*.lha", True, "v"),
    "dash": ("FreeMEM/dash", "*.vsix", False, "vscode-"),
}


def api(ruta):
    pet = urllib.request.Request(f"https://api.github.com/{ruta}", headers={"Accept": "application/vnd.github+json"})
    if os.environ.get("GITHUB_TOKEN"):
        pet.add_header("Authorization", f"Bearer {os.environ['GITHUB_TOKEN']}")
    with urllib.request.urlopen(pet, timeout=20) as r:
        return json.load(r)


def ultima(repo, patron, pre, prefijo):
    for rel in api(f"repos/{repo}/releases?per_page=30"):
        if rel["draft"] or (rel["prerelease"] and not pre) or not rel["tag_name"].startswith(prefijo):
            continue
        fichero = next((a for a in rel["assets"] if fnmatch.fnmatch(a["name"], patron)), None)
        if not fichero:
            continue
        return {
            "version": rel["tag_name"][len(prefijo):],
            "etiqueta": rel["tag_name"],
            "fecha": rel["published_at"][:10],
            "notas": rel["html_url"],
            "descarga": fichero["browser_download_url"],
            "fichero": fichero["name"],
            "bytes": fichero["size"],
        }
    raise SystemExit(f"{repo}: no hay ninguna release con un {patron}")


def main():
    webs = sys.argv[1:] or list(FUENTES)
    for web in webs:
        nueva = ultima(*FUENTES[web])
        destino = RAIZ / "sitios" / web / "src" / "version.json"
        vieja = json.loads(destino.read_text()) if destino.exists() else {}
        if vieja != nueva:
            destino.write_text(json.dumps(nueva, ensure_ascii=False, indent=1) + "\n")
            print(f"{web}: {vieja.get('etiqueta', 'nada')} -> {nueva['etiqueta']}")


if __name__ == "__main__":
    main()

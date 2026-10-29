#!/usr/bin/env python3
"""Mantiene las webs al día desde el propio servidor (el CT 108): trae el repositorio de GitHub, pregunta por la
última release de cada programa y, si algo ha cambiado para una web, la construye y la copia a /var/www/<dominio>.
Lo lanza un temporizador de systemd cada 5 minutos (herramientas/servidor/).

    python3 herramientas/actualizar.py            # lo que haya cambiado
    python3 herramientas/actualizar.py --todas    # todas, haya cambios o no

Cada web tiene su firma: el árbol de git de su carpeta, el del paquete común, el lockfile y su version.json. Si la
firma es la de la última vez, no se toca. La copia del repositorio aquí es solo para construir: se pone siempre
igual que origin/main.
"""
import argparse
import hashlib
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(RAIZ / "herramientas"))
from desplegar import SITIOS  # noqa: E402

ESTADO = Path("/var/lib/webs-freemem/firmas")


def git(*args):
    return subprocess.run(["git", *args], cwd=RAIZ, check=True, capture_output=True, text=True).stdout.strip()


def firma(web):
    partes = [git("rev-parse", f"HEAD:{ruta}") for ruta in (f"sitios/{web}", "paquetes", "pnpm-lock.yaml")]
    version = RAIZ / "sitios" / web / "src" / "version.json"
    partes.append(hashlib.sha256(version.read_bytes()).hexdigest() if version.exists() else "-")
    return "\n".join(partes)


def main():
    a = argparse.ArgumentParser()
    a.add_argument("--todas", action="store_true")
    args = a.parse_args()

    git("fetch", "-q", "origin", "main")
    git("reset", "-q", "--hard", "origin/main")
    cambios = subprocess.run([sys.executable, str(RAIZ / "herramientas/versiones.py")], check=True, capture_output=True, text=True).stdout
    if cambios:
        print(cambios.strip())

    ESTADO.mkdir(parents=True, exist_ok=True)
    pendientes = [w for w in SITIOS if args.todas or not (ESTADO / w).exists() or (ESTADO / w).read_text() != firma(w)]
    if not pendientes:
        return
    subprocess.run(["pnpm", "install", "--frozen-lockfile", "--silent"], cwd=RAIZ, check=True)
    for web in pendientes:
        print(f"{web}: construyendo")
        subprocess.run(["pnpm", "build"], cwd=RAIZ / "sitios" / web, check=True, stdout=subprocess.DEVNULL)
        subprocess.run(["rsync", "-a", "--delete", "--chmod=D755,F644", f"{RAIZ}/sitios/{web}/out/", f"/var/www/{SITIOS[web]}/"], check=True)
        (ESTADO / web).write_text(firma(web))
        print(f"{web}: publicada en https://{SITIOS[web]}/")


if __name__ == "__main__":
    main()

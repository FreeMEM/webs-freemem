#!/usr/bin/env python3
"""Los iconos de Workbench de verdad (los mismos que van en los .info de los paquetes) en PNG para las webs: el gris
del Workbench (color 0) es transparente, como en el escritorio, y cada píxel del Amiga se dobla (nítido, sin
suavizar).

    python3 herramientas/iconos_png.py DIR
"""
import sys
from pathlib import Path

from PIL import Image

sys.path.insert(0, str(Path.home() / "Projects/dashweb/tools"))
sys.path.insert(0, str(Path.home() / "Projects/trasfondo/tools"))
from iconos_wb import Lienzo, cajon, documento, instalador, navegador, GRIS, NEGRO, BLANCO, AZUL  # noqa: E402
from icono import icono, icono_prefs  # noqa: E402

# la paleta del Workbench 3.x por omisión
PALETA = {GRIS: (170, 170, 170, 0), NEGRO: (0, 0, 0, 255), BLANCO: (255, 255, 255, 255), AZUL: (102, 136, 187, 255)}


def disco(etiqueta_azul=True):
    """Un disco duro, como los del Workbench 3: caja con ranura y luz."""
    l = Lienzo(34, 20)
    l.rect(1, 4, 32, 17, NEGRO)
    l.rect(2, 5, 31, 16, BLANCO)
    l.rect(2, 13, 31, 16, AZUL if etiqueta_azul else NEGRO)
    l.rect(5, 8, 22, 9, NEGRO)
    l.rect(26, 7, 28, 9, AZUL)
    return l


def ram():
    """RAM Disk: un chip con patas."""
    l = Lienzo(34, 20)
    l.rect(6, 4, 27, 15, NEGRO)
    l.rect(7, 5, 26, 14, AZUL)
    for x in range(8, 27, 3):
        l.rect(x, 2, x, 3, NEGRO)
        l.rect(x, 16, x, 17, NEGRO)
    l.rect(10, 8, 23, 11, BLANCO)
    return l


def a_png(lienzo, ruta, escala=2):
    img = Image.new("RGBA", (lienzo.ancho, lienzo.alto))
    img.putdata([PALETA[c] for fila in lienzo.p for c in fila])
    img.resize((lienzo.ancho * escala, lienzo.alto * escala), Image.NEAREST).save(ruta)


def main():
    dest = Path(sys.argv[1])
    dest.mkdir(parents=True, exist_ok=True)
    for nombre, lienzo in {"trasfondo": icono(), "trasfondoprefs": icono_prefs(), "cajon": cajon(),
                           "instalar": instalador(), "leeme": documento(), "tachyon": navegador(),
                           "disco": disco(), "sistema": disco(False), "ram": ram()}.items():
        a_png(lienzo, dest / f"{nombre}.png")
        print(dest / f"{nombre}.png", lienzo.ancho, lienzo.alto)


if __name__ == "__main__":
    main()

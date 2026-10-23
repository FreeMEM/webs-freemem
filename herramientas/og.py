#!/usr/bin/env python3
"""La imagen para compartir (Open Graph, 1200x630) de una web: el nombre en Topaz, una línea de qué es y una
imagen real del programa a la derecha.

    python3 herramientas/og.py SALIDA.png "Nombre" "Qué es" IMAGEN [--fondo #13264a] [--acento #50c8ff]
"""
import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
TOPAZ = RAIZ / "paquetes/retro/fuentes/TopazPlus_a1200_v1.0.ttf"


def color(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def envolver(texto, fuente, ancho, d):
    lineas, l = [], ""
    for p in texto.split():
        prueba = (l + " " + p).strip()
        if d.textlength(prueba, font=fuente) <= ancho:
            l = prueba
        else:
            lineas.append(l)
            l = p
    return lineas + [l]


def main():
    a = argparse.ArgumentParser()
    a.add_argument("salida")
    a.add_argument("nombre")
    a.add_argument("lema")
    a.add_argument("imagen")
    a.add_argument("--fondo", default="#13264a")
    a.add_argument("--acento", default="#50c8ff")
    a.add_argument("--pixelada", action="store_true", help="escalar la imagen sin suavizar (capturas de AGA)")
    o = a.parse_args()
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), color(o.fondo))
    d = ImageDraw.Draw(img)
    # la imagen, a la derecha, a sangre por arriba, abajo y el borde
    foto = Image.open(o.imagen).convert("RGB")
    alto = H
    ancho = round(foto.width * alto / foto.height)
    foto = foto.resize((ancho, alto), Image.NEAREST if o.pixelada else Image.LANCZOS)
    x = max(560, W - ancho)
    img.paste(foto.crop((0, 0, W - x, alto)), (x, 0))
    d.rectangle([x - 6, 0, x - 1, H], fill=(0, 0, 0))
    grande = ImageFont.truetype(str(TOPAZ), 92)
    mediana = ImageFont.truetype(str(TOPAZ), 34)
    d.text((64 + 5, 150 + 5), o.nombre, font=grande, fill=(0, 0, 0))
    d.text((64, 150), o.nombre, font=grande, fill=(232, 238, 246))
    d.rectangle([64, 270, 64 + 300, 278], fill=color(o.acento))
    y = 310
    for l in envolver(o.lema, mediana, x - 64 - 48, d):
        d.text((64, y), l, font=mediana, fill=(200, 212, 230))
        y += 46
    img.save(o.salida, optimize=True)
    print(o.salida)


if __name__ == "__main__":
    main()

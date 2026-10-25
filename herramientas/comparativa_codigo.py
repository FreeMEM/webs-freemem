#!/usr/bin/env python3
"""El código de cada prueba de la comparativa de Dash (tools/comparativa/src del repositorio de Dash), en un JSON
para la web: {prueba: {dash, blitz, amos, c}}. El mismo .c es el de SAS/C y el de GCC.

    python3 herramientas/comparativa_codigo.py DASH_DIR sitios/dash/src/comparativa_codigo.json
"""
import json
import sys
from pathlib import Path

PRUEBAS = ["bucle", "llamada", "texto", "lista", "flotante", "lineas"]
LENGUAJES = {"dash": "dash", "blitz": "ab3", "amos": "asc", "c": "c"}


def main():
    src = Path(sys.argv[1]) / "tools" / "comparativa" / "src"
    salida = {p: {l: (src / l / f"{p}.{ext}").read_text(encoding="latin-1").rstrip() + "\n"
                  for l, ext in LENGUAJES.items()} for p in PRUEBAS}
    Path(sys.argv[2]).write_text(json.dumps(salida, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Los ejemplos de la web de Dash, de verdad: compila cada programa con el compilador de Dash, saca del C generado
la parte que corresponde al código del usuario y mide el ejecutable. Deja todo en un JSON para la web.

    python3 herramientas/ejemplos_dash.py DASH_DIR SALIDA.json

DASH_DIR: una copia de Dash al día con origin/main (p. ej. ~/Projects/FreeMEMLang/.worktrees/dashweb).
"""
import json
import os
import re
import subprocess
import sys
import tempfile
import textwrap
from pathlib import Path

RAIZ = Path(__file__).resolve().parent
EJEMPLOS = RAIZ / "ejemplos_dash"

# nombre del fichero, qué fragmento de C enseñar (desde/hasta, la primera línea que encaje con cada patrón)
FRAGMENTOS = {
    "hola.dash": (r"// User Code", r"_dash_tmp_release\(_dash_tmev\);\s*$"),
    "mui_hola.dash": (r"// User Code", r"_dash_exit_cleanup\(\);"),
    "gravedad.dash": (r"static void Bola_mover\(", r"^}"),
}


def fragmento(c, desde, hasta):
    lineas = c.splitlines()
    i = next(n for n, l in enumerate(lineas) if re.search(desde, l))
    j = next(n for n in range(i + 1, len(lineas)) if re.search(hasta, lineas[n]))
    trozo = [l for l in lineas[i:j + 1] if "DASH_MEMCHECK" not in l and l.strip() not in ("#endif", "_dash_tmp_release_f(0);")]
    while trozo and not trozo[-1].strip():
        trozo.pop()
    return textwrap.dedent("\n".join(trozo))


def main():
    dash, salida = Path(sys.argv[1]).expanduser(), Path(sys.argv[2])
    res = {}
    with tempfile.TemporaryDirectory() as tmp:
        for nombre, (desde, hasta) in FRAGMENTOS.items():
            fuente = (EJEMPLOS / nombre).read_text()
            prog = Path(tmp) / nombre
            prog.write_text(fuente)
            exe = Path(tmp) / prog.stem
            subprocess.run([str(dash / "dash"), str(prog), "-o", str(exe)], cwd=tmp, check=True, capture_output=True,
                           env=dict(os.environ, PYTHONPATH=str(dash)))
            c = (Path(tmp) / "build" / f"{prog.stem}.c").read_text(errors="replace")
            res[prog.stem] = {
                "dash": fuente.strip("\n"),
                "c": fragmento(c, desde, hasta),
                "bytes": exe.stat().st_size,
                "lineas_c": c.count("\n"),
            }
            print(nombre, res[prog.stem]["bytes"], "bytes,", res[prog.stem]["lineas_c"], "líneas de C")
    salida.write_text(json.dumps(res, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()

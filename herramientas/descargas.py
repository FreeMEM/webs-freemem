#!/usr/bin/env python3
"""Guarda cada día cuántas veces se ha bajado cada fichero de cada release (el contador de GitHub, que solo da el
total acumulado) y deja el histórico en la página privada de estadísticas.

    python3 herramientas/descargas.py [HISTORICO.json] [PAGINA_DIR]

Por defecto, /var/lib/webs-freemem/descargas.json y /var/www/estadisticas (en el CT 108, con el temporizador de
herramientas/servidor/webs-descargas.timer). Una toma por día: si se lanza dos veces el mismo día, vale la última.
"""
import datetime
import json
import shutil
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from versiones import api  # noqa: E402

PROGRAMAS = {"Trasfondo": "FreeMEM/trasfondo", "Tachyon": "FreeMEM/tachyon", "Dash": "FreeMEM/dash"}


def toma():
    datos = {}
    for nombre, repo in PROGRAMAS.items():
        datos[nombre] = {
            f"{rel['tag_name']}/{a['name']}": a["download_count"]
            for rel in api(f"repos/{repo}/releases?per_page=100")
            if not rel["draft"]
            for a in rel["assets"]
        }
    return datos


def main():
    historico = Path(sys.argv[1] if len(sys.argv) > 1 else "/var/lib/webs-freemem/descargas.json")
    pagina = Path(sys.argv[2] if len(sys.argv) > 2 else "/var/www/estadisticas")
    tomas = json.loads(historico.read_text()) if historico.exists() else []
    hoy = datetime.date.today().isoformat()
    tomas = [t for t in tomas if t["fecha"] != hoy] + [{"fecha": hoy, "datos": toma()}]
    historico.write_text(json.dumps(tomas, ensure_ascii=False, indent=1) + "\n")

    pagina.mkdir(parents=True, exist_ok=True)
    shutil.copy(historico, pagina / "datos.json")
    shutil.copy(Path(__file__).resolve().parent / "estadisticas" / "index.html", pagina / "index.html")
    print(f"{hoy}: " + ", ".join(f"{p} {sum(d.values())}" for p, d in tomas[-1]["datos"].items()))


if __name__ == "__main__":
    main()

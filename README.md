# Webs de FreeMEM

Las webs de los programas para Amiga de FreeMEM:

- [dash.freemem.space](https://dash.freemem.space): Dash, el lenguaje.
- [tachyon.freemem.space](https://tachyon.freemem.space): Tachyon, el navegador.
- [trasfondo.freemem.space](https://trasfondo.freemem.space): Trasfondo, el monitor.

Cada una es una app de Next.js exportada a HTML estático, en castellano (`/`) y en inglés (`/en/`). Las piezas
que comparten (las ventanas del Workbench, la bola Boing, la cabecera de la familia, el SEO) están en
`paquetes/retro`.

## Construir

Hace falta Node 20.9 o posterior y pnpm.

```bash
pnpm install
python3 herramientas/versiones.py      # la última release de cada programa, para los botones de descarga
pnpm --filter dash dev                 # una web en local
pnpm build                             # todas, a sitios/<web>/out/
```

## Publicar

El servidor se mantiene solo: cada 15 minutos trae este repositorio, mira si hay una release nueva de algún
programa y reconstruye y publica la web que haya cambiado (`herramientas/actualizar.py`, con el temporizador
de `herramientas/servidor/`). Para sacar una versión nueva de un programa basta con publicar su release en
GitHub; para cambiar una web, con subir el cambio aquí.

`herramientas/desplegar.py` es para lo demás: dar de alta una web nueva, su configuración de nginx y su
certificado.

## Licencia

El código, MIT (ver [LICENSE](LICENSE)). La fuente Topaz Plus lleva la suya (`paquetes/retro/fuentes/LEEME.md`);
las capturas muestran webs de sus autores.

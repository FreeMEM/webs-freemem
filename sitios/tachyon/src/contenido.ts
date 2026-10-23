import { tamano, type Idioma } from "retro";

import version from "./version.json";

/** Los textos de la web de Tachyon. Lo que hace sale de las notas de las versiones (hasta la v0.4.0-alfa) y del README del repositorio. */
/** La última release (también las alfas): la pone herramientas/versiones.py antes de construir. */
export const VERSION = version.version;
export const REPO = "https://github.com/FreeMEM/tachyon";
export const RELEASE = version.notas;
export const DESCARGA = version.descarga;
export const BASE = "https://tachyon.freemem.space";

export const CONTENIDO = {
  es: {
    titulo: "Tachyon: un navegador web moderno para Amiga (AmigaOS 3.x)",
    descripcion:
      "Tachyon es un navegador web para Commodore Amiga con AmigaOS 3.x y MUI: HTML5, CSS moderno (Flexbox, Grid, @font-face, animaciones), JavaScript ES2023 y HTTPS con AmiSSL. Libre, escrito en Dash. Versión alfa.",
    lema: "La web de hoy, en un Workbench.",
    texto:
      "Un navegador para el Amiga clásico que entiende HTML5, CSS moderno y JavaScript, y abre webs por HTTPS. En una ventana MUI, con sus menús y su icono.",
    descargar: "Bajar la alfa",
    peso: `${version.fichero} · versión ${VERSION} · ${tamano(version.bytes, "es")}`,
    codigo: "El código en GitHub",
    alfa: "Es una alfa: hay páginas que no se verán bien o que tardarán.",
    portadaAlt: "Tachyon mostrando freemem.space en el Workbench de Coffin, con Trasfondo en la esquina",
    motor: {
      titulo: "Lo que entiende",
      texto: "No es un visor de texto: maqueta la página como un navegador de ahora, con sus hojas de estilo, sus fuentes y su JavaScript.",
      lista: [
        ["HTML5", "El analizador de NetSurf (Hubbub), con su árbol DOM y UTF-8."],
        ["CSS", "Flexbox, Grid, tablas, calc() y clamp(), :has() y :is(), @layer, @media, Color 4 y 5, transformaciones, animaciones con @keyframes y :hover."],
        ["Fuentes", "Las de cada web (TTF, OTF, WOFF y WOFF2) se convierten en fuentes del Amiga, también las finas."],
        ["JavaScript", "QuickJS con ES2023: DOM, eventos, fetch, XMLHttpRequest, IntersectionObserver, crypto. Next.js y GSAP arrancan."],
        ["Red", "HTTP/1.1 con gzip y HTTPS con AmiSSL 5, que reanuda la sesión TLS. Los rastreadores conocidos no se descargan."],
        ["Imágenes", "JPEG, PNG, GIF, BMP, WebP y SVG, decodificadas en otro proceso: la ventana no se para mientras llegan."],
      ],
      acid: "Acid2: 10 de sus 11 piezas. Del flujo normal de CSS 2.1 de las Web Platform Tests, pasa en el Amiga 76 de las 100 primeras.",
    },
    navegador: {
      titulo: "Un navegador de verdad",
      texto: "Barra de dirección, atrás y adelante, historial, marcadores, página de inicio, hasta cuatro ventanas, descargas al disco, formularios y cookies que se guardan entre sesiones. Las páginas llegan sin congelar la ventana, y la red sigue bajando mientras la página se maqueta.",
      amigaworld: "amigaworld.net en Tachyon",
      articulo: "Un artículo de freemem.space con su foto",
    },
    alfaSeccion: {
      titulo: "Lo que aún no hace",
      texto: "Es una alfa. Para que nadie se lleve sorpresas:",
      lista: [
        "Las páginas grandes (Wikipedia, periódicos) tardan en un Amiga lento: decenas de segundos en maquetarse.",
        "Algunos scripts de webs grandes fallan al cargar; la página sale igual.",
        "YouTube todavía no se ve dentro del navegador.",
        "No se ha medido en hardware real: las pruebas son en emulador (FS-UAE y Amiberry).",
      ],
      avisos: "Los avisos, en los issues de GitHub",
    },
    requisitos: {
      titulo: "Qué necesita",
      lista: [
        "AmigaOS 3.2 (o 3.5/3.9) para las imágenes. Con 3.0 o 3.1 la página se ve sin imágenes. También va en AmigaOS 4, con su emulación de 68k.",
        "Un 68020 con FPU, o un 68040 o 68060. Mejor con tarjeta gráfica (Picasso96 o CyberGraphX).",
        "Memoria Fast: decenas de megas para las webs de hoy.",
        "MUI 3.8 o 5, una pila TCP/IP (Roadshow, AmiTCP, Genesis, Miami) y AmiSSL 5.1 o posterior.",
      ],
      instalar: `Descomprime ${version.fichero} y haz doble clic en Instalar, o copia el cajón Tachyon donde quieras.`,
      notas: "Notas de la versión",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Tachyon está escrito en Dash, un lenguaje para el Amiga que compila a 68k: más de 28.000 líneas. Lo que el navegador ha necesitado (red, TLS, fuentes, imágenes) se ha añadido al lenguaje.",
      enlace: "Conoce Dash",
    },
    pie: [
      { texto: "Tachyon en GitHub", url: REPO },
      { texto: "Notas de la versión", url: RELEASE },
    ],
  },
  en: {
    titulo: "Tachyon: a modern web browser for the Amiga (AmigaOS 3.x)",
    descripcion:
      "Tachyon is a web browser for the Commodore Amiga with AmigaOS 3.x and MUI: HTML5, modern CSS (Flexbox, Grid, @font-face, animations), JavaScript ES2023 and HTTPS with AmiSSL. Open source, written in Dash. Alpha release.",
    lema: "Today's web, on a Workbench.",
    texto:
      "A browser for the classic Amiga that understands HTML5, modern CSS and JavaScript, and opens sites over HTTPS. In an MUI window, with its menus and its icon.",
    descargar: "Download the alpha",
    peso: `${version.fichero} · version ${VERSION} · ${tamano(version.bytes, "en")}`,
    codigo: "Source on GitHub",
    alfa: "It's an alpha: some pages won't look right, or will take a while.",
    portadaAlt: "Tachyon showing freemem.space on the Coffin Workbench, with Trasfondo in the corner",
    motor: {
      titulo: "What it understands",
      texto: "It isn't a text viewer: it lays out the page like a current browser, with its style sheets, its fonts and its JavaScript.",
      lista: [
        ["HTML5", "The NetSurf parser (Hubbub), with its DOM tree and UTF-8."],
        ["CSS", "Flexbox, Grid, tables, calc() and clamp(), :has() and :is(), @layer, @media, Color 4 and 5, transforms, @keyframes animations and :hover."],
        ["Fonts", "Each site's own (TTF, OTF, WOFF and WOFF2) become Amiga fonts, thin weights included."],
        ["JavaScript", "QuickJS with ES2023: DOM, events, fetch, XMLHttpRequest, IntersectionObserver, crypto. Next.js and GSAP start up."],
        ["Network", "HTTP/1.1 with gzip and HTTPS with AmiSSL 5, resuming the TLS session. Known trackers are never downloaded."],
        ["Images", "JPEG, PNG, GIF, BMP, WebP and SVG, decoded in another process: the window keeps responding while they arrive."],
      ],
      acid: "Acid2: 10 of its 11 pieces. Of the CSS 2.1 normal-flow Web Platform Tests, it passes 76 of the first 100 on the Amiga.",
    },
    navegador: {
      titulo: "A real browser",
      texto: "Address bar, back and forward, history, bookmarks, a home page, up to four windows, downloads to disk, forms and cookies kept between sessions. Pages load without freezing the window, and downloads keep going while the page is laid out.",
      amigaworld: "amigaworld.net in Tachyon",
      articulo: "A freemem.space article with its photo",
    },
    alfaSeccion: {
      titulo: "What it doesn't do yet",
      texto: "It's an alpha. So nobody gets surprised:",
      lista: [
        "Big pages (Wikipedia, newspapers) are slow on a slow Amiga: tens of seconds to lay out.",
        "Some scripts on big sites fail to load; the page still shows.",
        "YouTube doesn't play inside the browser yet.",
        "It hasn't been measured on real hardware: testing is on emulators (FS-UAE and Amiberry).",
      ],
      avisos: "Report issues on GitHub",
    },
    requisitos: {
      titulo: "What it needs",
      lista: [
        "AmigaOS 3.2 (or 3.5/3.9) for images. With 3.0 or 3.1 pages show without images. It also runs on AmigaOS 4, under its 68k emulation.",
        "A 68020 with an FPU, or a 68040 or 68060. Better with a graphics card (Picasso96 or CyberGraphX).",
        "Fast memory: tens of megabytes for today's sites.",
        "MUI 3.8 or 5, a TCP/IP stack (Roadshow, AmiTCP, Genesis, Miami) and AmiSSL 5.1 or later.",
      ],
      instalar: `Unpack ${version.fichero} and double-click Instalar (the installer), or copy the Tachyon drawer anywhere you like.`,
      notas: "Release notes",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Tachyon is written in Dash, an Amiga language that compiles to 68k: over 28,000 lines. Whatever the browser needed (networking, TLS, fonts, images) was added to the language.",
      enlace: "Meet Dash",
    },
    pie: [
      { texto: "Tachyon on GitHub", url: REPO },
      { texto: "Release notes", url: RELEASE },
    ],
  },
} satisfies Record<Idioma, unknown>;

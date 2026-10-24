import { tamano, type Idioma } from "retro";

import version from "./version.json";

/** Los textos de la web de Tachyon. Lo que hace sale de las notas de las versiones (hasta la v0.6.0-alfa) y del README del repositorio. */
/** La última release (también las alfas): la pone herramientas/versiones.py antes de construir. */
export const VERSION = version.version;
export const REPO = "https://github.com/FreeMEM/tachyon";
export const RELEASE = version.notas;
export const DESCARGA = version.descarga;
export const BASE = "https://tachyon.freemem.space";

export const CONTENIDO = {
  es: {
    titulo: "Tachyon: navegador web moderno para Amiga (AmigaOS 3.x)",
    descripcion:
      "Navegador web para el Amiga clásico (AmigaOS 3.x, MUI): HTML5, CSS moderno, JavaScript ES2023 y HTTPS con AmiSSL. Libre y escrito en Dash. En alfa.",
    lema: "La web de hoy, en tu Amiga.",
    texto:
      "Abrir una web actual en un Amiga clásico parecía cosa de otro siglo. Tachyon lo hace: entiende HTML5, el CSS de ahora y JavaScript, abre webs por HTTPS, y todo dentro de una ventana MUI de las de siempre, con sus menús y su icono.",
    descargar: "Bajar la alfa",
    peso: `${version.fichero} · versión ${VERSION} · ${tamano(version.bytes, "es")}`,
    codigo: "El código en GitHub",
    alfa: "Es una alfa: todavía hay páginas que se le resisten o que tardan.",
    portadaAlt: "Tachyon mostrando freemem.space con tarjeta gráfica: el candado del HTTPS, la estrella de marcadores, el historial y el aviso verde de versión nueva",
    coffinAlt: "Tachyon en el Workbench de Coffin, con Trasfondo en la esquina",
    motor: {
      titulo: "Habla el idioma de la web actual",
      texto: "Nada de enseñar el texto pelado y cruzar los dedos. Tachyon maqueta cada página como lo haría el navegador de tu PC: con sus hojas de estilo, sus tipografías y su JavaScript.",
      lista: [
        ["HTML5", "Lee el HTML de hoy con el mismo analizador que usa NetSurf (Hubbub) y monta su árbol DOM en UTF-8."],
        ["CSS", "Flexbox, Grid, calc(), clamp(), :has(), @layer, los colores modernos, transformaciones y animaciones. Lo que usan las webs de ahora para maquetarse, también en tu Workbench."],
        ["Tipografías", "Cada web trae las suyas (TTF, OTF, WOFF y WOFF2) y Tachyon las convierte en fuentes del Amiga, las finas incluidas."],
        ["JavaScript", "QuickJS con ES2023, retocado para el Amiga: lleva bien la cuenta de su memoria, corta los scripts que se eternizan sin dejar la página a medias, y hace las cuentas con fdlibm, porque las de la ROM daban resultados erróneos. DOM, eventos, fetch, XMLHttpRequest, IntersectionObserver… Hasta Next.js y GSAP arrancan en un 68k."],
        ["Red", "HTTP/1.1 con gzip y HTTPS con AmiSSL 5, que reaprovecha la sesión TLS. Y los rastreadores conocidos ni se descargan: tu Amiga tiene cosas mejores que hacer."],
        ["Imágenes", "JPEG, PNG, GIF, BMP, WebP y SVG, decodificadas en otro proceso para que la ventana no se congele mientras llegan."],
      ],
      acid: "¿Y las pruebas de estándares? En Acid2, 10 de sus 11 piezas. Y de las pruebas de flujo normal de CSS 2.1 de las Web Platform Tests, 76 de las 100 primeras pasan en el propio Amiga.",
    },
    navegador: {
      titulo: "Todo lo que esperas de un navegador",
      texto: "Escribe en la barra de dirección y busca: DuckDuckGo de serie, o Google, Bing, Brave, Wikipedia y hasta Aminet. Un candado te dice si la conexión va cifrada y una estrella guarda la página en marcadores. Historial por días, hasta cuatro ventanas, formularios y cookies que recuerda entre sesiones. Las descargas van varias a la vez y siguen aunque cambies de página: en su página ves cuánto llevan, a qué velocidad y lo que falta, y puedes pararlas o reintentarlas. Y mientras la página se maqueta, la red sigue bajando: la ventana no se queda congelada.",
      actualiza: "Además, se cuida solo. Cuando sale una versión nueva se enciende un icono verde: un clic, y Tachyon la baja, comprueba que ha llegado entera y se instala. Sin buscar en Aminet ni descomprimir nada.",
      amigaworld: "amigaworld.net, la web de la comunidad, en Tachyon",
    },
    alfaSeccion: {
      titulo: "Lo que todavía no hace",
      texto: "Es una alfa, y prefiero que lo sepas antes de bajarla:",
      lista: [
        "Las páginas grandes (Wikipedia, periódicos) tardan en un Amiga lento: decenas de segundos en maquetarse.",
        "Google te enseña primero su aviso de cookies.",
        "YouTube todavía no se ve dentro del navegador.",
        "Los dibujos de <canvas>, como muchas animaciones, todavía no se ven.",
        "No se ha medido en hardware real: las pruebas son en emulador (FS-UAE y Amiberry).",
      ],
      avisos: "¿Una web se le atraganta? Cuéntamelo en GitHub",
    },
    requisitos: {
      titulo: "Lo que necesita tu Amiga",
      lista: [
        "AmigaOS 3.2 (o 3.5/3.9) para las imágenes. Con 3.0 o 3.1 la página se ve, pero sin imágenes. También funciona en AmigaOS 4, con su emulación de 68k.",
        "Un 68020 con FPU, o un 68040 o 68060. Con tarjeta gráfica (Picasso96 o CyberGraphX) luce mucho más.",
        "Memoria Fast: las webs de hoy piden decenas de megas.",
        "MUI 3.8 o 5, una pila TCP/IP (Roadshow, AmiTCP, Genesis, Miami) y AmiSSL 5.1 o posterior.",
      ],
      instalar: `Descomprime ${version.fichero} y haz doble clic en Instalar, o copia el cajón Tachyon donde quieras. Si ya lo tenías, respeta tus marcadores, preferencias y cookies.`,
      notas: "Qué trae esta versión",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Tachyon es la prueba de fuego de Dash, un lenguaje para el Amiga que compila a 68k nativo: más de 30.000 líneas. Cada cosa que el navegador necesitaba y el lenguaje no tenía (red, TLS, fuentes, imágenes) se añadió a Dash. Ahora también es tuya.",
      enlace: "Descubre Dash",
    },
    pie: [
      { texto: "Tachyon en GitHub", url: REPO },
      { texto: "Qué trae esta versión", url: RELEASE },
    ],
  },
  en: {
    titulo: "Tachyon: a modern web browser for the Amiga (AmigaOS 3.x)",
    descripcion:
      "Web browser for the classic Amiga (AmigaOS 3.x, MUI): HTML5, modern CSS, JavaScript ES2023 and HTTPS with AmiSSL. Free, written in Dash. In alpha.",
    lema: "Today's web, on your Amiga.",
    texto:
      "Opening a modern website on a classic Amiga sounded like something from another century. Tachyon does it: it understands HTML5, today's CSS and JavaScript, opens sites over HTTPS, and does it all inside a good old MUI window, with its menus and its icon.",
    descargar: "Download the alpha",
    peso: `${version.fichero} · version ${VERSION} · ${tamano(version.bytes, "en")}`,
    codigo: "Source on GitHub",
    alfa: "It's an alpha: some pages still put up a fight, or take their time.",
    portadaAlt: "Tachyon showing freemem.space with a graphics card: the HTTPS padlock, the bookmark star, history and the green new-version notice",
    coffinAlt: "Tachyon on the Coffin Workbench, with Trasfondo in the corner",
    motor: {
      titulo: "It speaks today's web",
      texto: "No bare text and crossed fingers. Tachyon lays out each page the way the browser on your PC would: with its style sheets, its typefaces and its JavaScript.",
      lista: [
        ["HTML5", "It reads today's HTML with the same parser NetSurf uses (Hubbub) and builds its DOM tree in UTF-8."],
        ["CSS", "Flexbox, Grid, calc(), clamp(), :has(), @layer, modern colours, transforms and animations. What today's sites use for their layout, now on your Workbench too."],
        ["Typefaces", "Every site brings its own (TTF, OTF, WOFF and WOFF2) and Tachyon turns them into Amiga fonts, thin weights included."],
        ["JavaScript", "QuickJS with ES2023, tuned for the Amiga: it keeps proper track of its memory, stops runaway scripts without leaving the page half-done, and does its maths with fdlibm, because the ROM's gave wrong results. DOM, events, fetch, XMLHttpRequest, IntersectionObserver… Even Next.js and GSAP start up on a 68k."],
        ["Network", "HTTP/1.1 with gzip and HTTPS with AmiSSL 5, reusing the TLS session. And known trackers are never even downloaded: your Amiga has better things to do."],
        ["Images", "JPEG, PNG, GIF, BMP, WebP and SVG, decoded in another process so the window doesn't freeze while they arrive."],
      ],
      acid: "And the standards tests? Acid2: 10 of its 11 pieces. Of the CSS 2.1 normal-flow Web Platform Tests, 76 of the first 100 pass on the Amiga itself.",
    },
    navegador: {
      titulo: "Everything you expect from a browser",
      texto: "Type in the address bar and search: DuckDuckGo by default, or Google, Bing, Brave, Wikipedia and even Aminet. A padlock tells you whether the connection is encrypted and a star adds the page to your bookmarks. History by day, up to four windows, forms and cookies remembered between sessions. Downloads run several at a time and keep going when you change page: their page shows how far along they are, the speed and what's left, and lets you pause or retry them. And while the page is being laid out, downloads keep going: the window doesn't freeze.",
      actualiza: "It also looks after itself. When a new version is out, a green icon lights up: one click, and Tachyon downloads it, checks it arrived whole and installs it. No hunting on Aminet, nothing to unpack.",
      amigaworld: "amigaworld.net, the community's home, in Tachyon",
    },
    alfaSeccion: {
      titulo: "What it doesn't do yet",
      texto: "It's an alpha, and I'd rather you knew before you download it:",
      lista: [
        "Big pages (Wikipedia, newspapers) are slow on a slow Amiga: tens of seconds to lay out.",
        "Google shows you its cookie notice first.",
        "YouTube doesn't play inside the browser yet.",
        "<canvas> drawings, like many animations, don't show up yet.",
        "It hasn't been measured on real hardware: testing is on emulators (FS-UAE and Amiberry).",
      ],
      avisos: "A site it chokes on? Tell me on GitHub",
    },
    requisitos: {
      titulo: "What your Amiga needs",
      lista: [
        "AmigaOS 3.2 (or 3.5/3.9) for images. With 3.0 or 3.1 pages show, but without images. It also runs on AmigaOS 4, under its 68k emulation.",
        "A 68020 with an FPU, or a 68040 or 68060. With a graphics card (Picasso96 or CyberGraphX) it looks much better.",
        "Fast memory: today's sites want tens of megabytes.",
        "MUI 3.8 or 5, a TCP/IP stack (Roadshow, AmiTCP, Genesis, Miami) and AmiSSL 5.1 or later.",
      ],
      instalar: `Unpack ${version.fichero} and double-click Instalar (the installer), or copy the Tachyon drawer anywhere you like. If you already had it, your bookmarks, settings and cookies are kept.`,
      notas: "What's in this version",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Tachyon is Dash's acid test, an Amiga language that compiles to native 68k: over 30,000 lines. Everything the browser needed that the language lacked (networking, TLS, fonts, images) was added to Dash. Now it's yours too.",
      enlace: "Discover Dash",
    },
    pie: [
      { texto: "Tachyon on GitHub", url: REPO },
      { texto: "What's in this version", url: RELEASE },
    ],
  },
} satisfies Record<Idioma, unknown>;

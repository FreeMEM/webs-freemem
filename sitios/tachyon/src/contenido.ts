import { tamano, type Idioma } from "retro";

import version from "./version.json";

/** Los textos de la web de Tachyon. Lo que hace sale de las notas de las versiones (hasta la v0.7.4-alfa) y del README del repositorio. */
/** La última release (también las alfas): la pone herramientas/versiones.py antes de construir. */
export const VERSION = version.version;
export const REPO = "https://github.com/FreeMEM/tachyon";
export const RELEASE = version.notas;
export const DESCARGA = version.descarga;
export const BASE = "https://tachyon.freemem.space";
/** El vídeo de YouTube, uno por idioma (el mismo montaje, con sus subtítulos y rótulos en cada uno). */
export const VIDEO = { es: "rC5oXsmzjX0", en: "HLoaIwRBwMo" } satisfies Record<Idioma, string>;

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
    verVideo: "Verlo en vídeo",
    alfa: "Es una alfa: todavía hay páginas que se le resisten o que tardan.",
    portadaAlt: "Tachyon mostrando freemem.space con tarjeta gráfica: el candado del HTTPS, la estrella de marcadores, el historial y el aviso verde de versión nueva",
    coffinAlt: "Tachyon en el Workbench de Coffin, con Trasfondo en la esquina",
    novedades: {
      titulo: "Novedades",
      texto: "Lo que hay en la rama de desarrollo desde la 0.7.4-alfa, camino de la próxima alfa. Tal como está a 29 de octubre de 2026: aún no se puede bajar.",
      boton: "Novedades",
      lista: [
        {
          estado: "En desarrollo",
          titulo: "La web de YouTube, la de verdad",
          texto: "Con todo su JavaScript, carga entera en un 68040 emulado con 128 MB: su portada, su aviso de cookies y el botón \"Reject all\", que funciona. Cero errores de JavaScript en la carga. Aún le faltan detalles por pintar.",
        },
        {
          estado: "Más rápido",
          titulo: "Scripts gigantes, en la mitad de tiempo",
          texto: "QuickJS compila el script principal de YouTube, de 10,8 MB, en 66 segundos; antes tardaba 138. Y su hoja de estilo, de 3,8 MB, se lee en unos 7 segundos; antes tardaba 184.",
        },
        {
          estado: "Menos memoria",
          titulo: "Lo que no se usa, ni se lee",
          texto: "Las declaraciones de cada regla de CSS se leen solo cuando un elemento las necesita: la hoja de YouTube ocupa 15,8 MB de memoria en vez de 22. Y un cambio con :has() ya casi nunca obliga a rehacer el estilo de toda la página: al cargar YouTube pasa 4 veces en vez de 18.",
        },
        {
          estado: "Camino de Dash 2.0",
          titulo: "Menos C, más Dash",
          texto: "Tachyon se pasa a Dash 2.0, el compilador nuevo de Dash que no necesita C. La red en segundo plano, el gzip, las imágenes, las fuentes web, el vídeo y el actualizador ya van con funciones del propio Dash y pasan sus pruebas. Falta el pegamento de QuickJS y del HTML5, que seguirán enlazados como librerías.",
        },
      ],
    },
    video: {
      titulo: "Míralo en marcha",
      texto: "Cinco minutos y medio en CoffinOS con tarjeta gráfica (en Amiberry): cómo se instala, cómo se actualiza solo con un clic, la búsqueda desde la barra, webs con JavaScript y canvas, pestañas, menús, descargas y el cambio de idioma. Sin trucos: solo van aceleradas las esperas.",
      boton: "Reproducir",
      titulo_video: "Tachyon 0.7.1: la web de hoy en tu Amiga clásico",
    },
    motor: {
      titulo: "Habla el idioma de la web actual",
      texto: "Nada de enseñar el texto pelado y cruzar los dedos. Tachyon maqueta cada página como lo haría el navegador de tu PC: con sus hojas de estilo, sus tipografías y su JavaScript.",
      lista: [
        ["HTML5", "Lee el HTML de hoy con el mismo analizador que usa NetSurf (Hubbub) y monta su árbol DOM en UTF-8."],
        ["CSS", "Flexbox, Grid, calc(), clamp(), :has(), @layer, los colores modernos, transformaciones y animaciones. Lo que usan las webs de ahora para maquetarse, también en tu Workbench."],
        ["Tipografías", "Cada web trae las suyas (TTF, OTF, WOFF y WOFF2) y Tachyon las convierte en fuentes del Amiga, las finas incluidas."],
        ["JavaScript", "QuickJS con ES2023, retocado para el Amiga: lleva bien la cuenta de su memoria, corta los scripts que se eternizan sin dejar la página a medias, y hace las cuentas con fdlibm, porque las de la ROM daban resultados erróneos. DOM, eventos, fetch, XMLHttpRequest, IntersectionObserver, MutationObserver, TreeWalker, Range, plantillas, canvas 2D… Se traga scripts de más de 10 MB, como el de YouTube, y los números salen con las cifras justas, como en Chrome (con Ryu). Hasta Next.js y GSAP arrancan en un 68k."],
        ["Red", "HTTP/1.1 con gzip y HTTPS con AmiSSL 5, que reaprovecha la sesión TLS. Y los rastreadores conocidos ni se descargan: tu Amiga tiene cosas mejores que hacer."],
        ["Imágenes", "JPEG, PNG, GIF, BMP, WebP y SVG, decodificadas en otro proceso para que la ventana no se congele mientras llegan."],
      ],
      acid: "¿Y las pruebas de estándares? Acid2 tiene 11 comprobaciones y Tachyon pasa 10. De las 100 primeras pruebas de CSS 2.1 de las Web Platform Tests (las del flujo normal), pasa 76, en el propio Amiga.",
    },
    navegador: {
      titulo: "Todo lo que esperas de un navegador",
      texto: "Escribe en la barra de dirección y busca: DuckDuckGo de serie, o Google, Bing, Brave, Wikipedia y hasta Aminet. Un candado te dice si la conexión va cifrada y una estrella guarda la página en marcadores. Pestañas (Amiga-T abre una, Amiga-W la cierra, y Mayúsculas o Amiga más clic manda un enlace a otra), historial por días, hasta cuatro ventanas, formularios y cookies que recuerda entre sesiones. Las descargas van varias a la vez y siguen aunque cambies de página: en su página ves cuánto llevan, a qué velocidad y lo que falta, y puedes pararlas o reintentarlas. Y mientras la página se maqueta, la red sigue bajando: la ventana no se queda congelada. Además te habla en tu idioma: en inglés de serie y, según tus Preferencias de Locale, en castellano, alemán, francés, italiano, portugués, neerlandés, sueco, danés o noruego. Y se lo dice a las webs, como Chrome, para que te salgan en tu idioma.",
      actualiza: "Además, se cuida solo. Cuando sale una versión nueva se enciende un icono verde: un clic, y Tachyon la baja, comprueba que ha llegado entera y se instala. Sin buscar en Aminet ni descomprimir nada.",
      amigaworld: "amigaworld.net, la web de la comunidad, en Tachyon",
    },
    alfaSeccion: {
      titulo: "Lo que todavía no hace",
      texto: "Es una alfa, y prefiero que lo sepas antes de bajarla:",
      lista: [
        "Las páginas grandes (Wikipedia, periódicos) tardan en un Amiga lento: decenas de segundos en maquetarse.",
        "Google te enseña primero su aviso de cookies.",
        "La web de YouTube ya carga entera, pero todavía no se pinta bien.",
        "Las traducciones, menos la castellana, no las ha revisado nadie nativo: si ves algo raro en tu idioma, avísame.",
        "No se ha medido en hardware real: las pruebas son en emulador (FS-UAE y Amiberry).",
      ],
      informe: "¿Algo va mal? En el menú Proyecto, «Enviar informe de depuración...» te enseña lo que Tachyon ha apuntado (las versiones, la memoria, las páginas abiertas y lo que dijo su JavaScript; nada de cookies ni de lo escrito en formularios) y, si quieres, lo manda. Te da un código para ponerlo en la incidencia.",
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
      texto: "Tachyon es la prueba de fuego de Dash, un lenguaje para el Amiga que compila a 68k nativo: más de 33.000 líneas. Cada cosa que el navegador necesitaba y el lenguaje no tenía (red, TLS, fuentes, imágenes) se añadió a Dash. Ahora también es tuya.",
      enlace: "Descubre Dash",
    },
    pie: [
      { texto: "Tachyon en GitHub", url: REPO },
      { texto: "Qué trae esta versión", url: RELEASE },
      { texto: "Vídeo en YouTube", url: `https://youtu.be/${VIDEO.es}` },
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
    verVideo: "Watch it in action",
    alfa: "It's an alpha: some pages still put up a fight, or take their time.",
    portadaAlt: "Tachyon showing freemem.space with a graphics card: the HTTPS padlock, the bookmark star, history and the green new-version notice",
    coffinAlt: "Tachyon on the Coffin Workbench, with Trasfondo in the corner",
    novedades: {
      titulo: "What's new",
      texto: "What's in the development branch since 0.7.4-alpha, on its way to the next alpha. As it stands on 29 October 2026: not downloadable yet.",
      boton: "What's new",
      lista: [
        {
          estado: "In development",
          titulo: "The real YouTube website",
          texto: "With all its JavaScript, it loads completely on an emulated 68040 with 128 MB: its home page, its cookie notice and the \"Reject all\" button, which works. Zero JavaScript errors while loading. Some details still don't draw.",
        },
        {
          estado: "Faster",
          titulo: "Huge scripts, in half the time",
          texto: "QuickJS compiles YouTube's main script, 10.8 MB of it, in 66 seconds; it used to take 138. And its 3.8 MB style sheet is read in about 7 seconds; it used to take 184.",
        },
        {
          estado: "Less memory",
          titulo: "What isn't used isn't even read",
          texto: "The declarations of each CSS rule are read only when an element needs them: YouTube's sheet takes 15.8 MB of memory instead of 22. And a change involving :has() hardly ever means restyling the whole page now: loading YouTube, it happens 4 times instead of 18.",
        },
        {
          estado: "On to Dash 2.0",
          titulo: "Less C, more Dash",
          texto: "Tachyon is moving to Dash 2.0, the new Dash compiler that needs no C. Background networking, gzip, images, web fonts, video and the updater already use Dash's own functions and pass their tests. Still to go: the glue for QuickJS and HTML5, which will stay linked in as libraries.",
        },
      ],
    },
    video: {
      titulo: "See it in action",
      texto: "Five and a half minutes on CoffinOS with a graphics card (in Amiberry): installing it, updating itself with one click, searching from the address bar, sites with JavaScript and canvas, tabs, menus, downloads and switching languages. No tricks: only the waits are sped up.",
      boton: "Play",
      titulo_video: "Tachyon 0.7.1: the modern web on your classic Amiga",
    },
    motor: {
      titulo: "It speaks today's web",
      texto: "No bare text and crossed fingers. Tachyon lays out each page the way the browser on your PC would: with its style sheets, its typefaces and its JavaScript.",
      lista: [
        ["HTML5", "It reads today's HTML with the same parser NetSurf uses (Hubbub) and builds its DOM tree in UTF-8."],
        ["CSS", "Flexbox, Grid, calc(), clamp(), :has(), @layer, modern colours, transforms and animations. What today's sites use for their layout, now on your Workbench too."],
        ["Typefaces", "Every site brings its own (TTF, OTF, WOFF and WOFF2) and Tachyon turns them into Amiga fonts, thin weights included."],
        ["JavaScript", "QuickJS with ES2023, tuned for the Amiga: it keeps proper track of its memory, stops runaway scripts without leaving the page half-done, and does its maths with fdlibm, because the ROM's gave wrong results. DOM, events, fetch, XMLHttpRequest, IntersectionObserver, MutationObserver, TreeWalker, Range, templates, 2D canvas… It swallows scripts of more than 10 MB, like YouTube's, and numbers come out with exactly the right digits, as in Chrome (thanks to Ryu). Even Next.js and GSAP start up on a 68k."],
        ["Network", "HTTP/1.1 with gzip and HTTPS with AmiSSL 5, reusing the TLS session. And known trackers are never even downloaded: your Amiga has better things to do."],
        ["Images", "JPEG, PNG, GIF, BMP, WebP and SVG, decoded in another process so the window doesn't freeze while they arrive."],
      ],
      acid: "And the standards tests? Acid2 has 11 checks and Tachyon passes 10. Of the first 100 CSS 2.1 tests in the Web Platform Tests (the normal-flow ones), it passes 76, on the Amiga itself.",
    },
    navegador: {
      titulo: "Everything you expect from a browser",
      texto: "Type in the address bar and search: DuckDuckGo by default, or Google, Bing, Brave, Wikipedia and even Aminet. A padlock tells you whether the connection is encrypted and a star adds the page to your bookmarks. Tabs (Amiga-T opens one, Amiga-W closes it, and Shift or Amiga plus click sends a link to a new one), history by day, up to four windows, forms and cookies remembered between sessions. Downloads run several at a time and keep going when you change page: their page shows how far along they are, the speed and what's left, and lets you pause or retry them. And while the page is being laid out, downloads keep going: the window doesn't freeze. It also speaks your language: English by default and, following your Locale preferences, Spanish, German, French, Italian, Portuguese, Dutch, Swedish, Danish or Norwegian. And it tells websites too, like Chrome, so they show up in your language.",
      actualiza: "It also looks after itself. When a new version is out, a green icon lights up: one click, and Tachyon downloads it, checks it arrived whole and installs it. No hunting on Aminet, nothing to unpack.",
      amigaworld: "amigaworld.net, the community's home, in Tachyon",
    },
    alfaSeccion: {
      titulo: "What it doesn't do yet",
      texto: "It's an alpha, and I'd rather you knew before you download it:",
      lista: [
        "Big pages (Wikipedia, newspapers) are slow on a slow Amiga: tens of seconds to lay out.",
        "Google shows you its cookie notice first.",
        "The YouTube website now loads completely, but it doesn't draw properly yet.",
        "The translations, except the Spanish one, haven't been checked by native speakers: if something reads oddly in your language, let me know.",
        "It hasn't been measured on real hardware: testing is on emulators (FS-UAE and Amiberry).",
      ],
      informe: "Something wrong? In the Project menu, “Send debug report...” shows you what Tachyon noted down (versions, memory, the pages you opened and what their JavaScript said; no cookies, nothing typed in forms) and, if you want, sends it. You get a code to put in the issue.",
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
      texto: "Tachyon is Dash's acid test, an Amiga language that compiles to native 68k: over 33,000 lines. Everything the browser needed that the language lacked (networking, TLS, fonts, images) was added to Dash. Now it's yours too.",
      enlace: "Discover Dash",
    },
    pie: [
      { texto: "Tachyon on GitHub", url: REPO },
      { texto: "What's in this version", url: RELEASE },
      { texto: "Video on YouTube", url: `https://youtu.be/${VIDEO.en}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

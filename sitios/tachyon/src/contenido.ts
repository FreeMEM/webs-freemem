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
      "Tachyon es un navegador web para el Amiga clásico. Entiende HTML5, el CSS actual y JavaScript, abre webs por HTTPS y funciona en una ventana MUI normal, con sus menús y su icono.",
    descargar: "Bajar la alfa",
    peso: `${version.fichero} · versión ${VERSION} · ${tamano(version.bytes, "es")}`,
    codigo: "El código en GitHub",
    verVideo: "Verlo en vídeo",
    alfa: "Es una alfa. Todavía hay páginas que no se ven bien o que tardan mucho.",
    portadaAlt: "Tachyon mostrando freemem.space con tarjeta gráfica: el candado del HTTPS, la estrella de marcadores, el historial y el aviso verde de versión nueva",
    coffinAlt: "Tachyon en el Workbench de Coffin, con Trasfondo en la esquina",
    novedades: {
      titulo: "Novedades",
      texto: "Esto es lo que se ha hecho desde la 0.7.4-alfa para la próxima versión, a 29 de octubre de 2026. Todavía no se puede descargar.",
      boton: "Novedades",
      lista: [
        {
          estado: "En desarrollo",
          titulo: "La web completa de YouTube",
          texto: "La web de YouTube carga entera, con todo su JavaScript, en un 68040 emulado con 128 MB. Se ven la portada y el aviso de cookies, y el botón \"Reject all\" funciona. No da ningún error de JavaScript al cargar, aunque todavía hay detalles que no se dibujan.",
        },
        {
          estado: "Más rápido",
          titulo: "Scripts enormes en la mitad de tiempo",
          texto: "QuickJS compila el script principal de YouTube, que ocupa 10,8 MB, en 66 segundos. Antes tardaba 138. Su hoja de estilo, de 3,8 MB, se lee ahora en unos 7 segundos, cuando antes tardaba 184.",
        },
        {
          estado: "Menos memoria",
          titulo: "Solo se lee lo que se usa",
          texto: "Las declaraciones de cada regla de CSS se leen solo cuando algún elemento las necesita. Así, la hoja de estilo de YouTube ocupa 15,8 MB de memoria en vez de 22. Además, un cambio con :has() casi nunca obliga ya a recalcular el estilo de toda la página: al cargar YouTube pasa 4 veces, cuando antes pasaba 18.",
        },
        {
          estado: "Camino de Dash 2.0",
          titulo: "Menos C, más Dash",
          texto: "Tachyon se está pasando a Dash 2.0, el compilador nuevo de Dash que no necesita C. La red en segundo plano, el gzip, las imágenes, las fuentes web, el vídeo y el actualizador ya usan funciones del propio Dash y pasan sus pruebas. Falta el código que une Tachyon con QuickJS y con el analizador de HTML5, que seguirán enlazados como librerías.",
        },
      ],
    },
    video: {
      titulo: "Míralo en marcha",
      texto: "Cinco minutos y medio en CoffinOS con tarjeta gráfica, en Amiberry. Se ve cómo se instala, cómo se actualiza con un clic, la búsqueda desde la barra de direcciones, webs con JavaScript y canvas, pestañas, menús, descargas y el cambio de idioma. Solo se han acelerado las esperas.",
      boton: "Reproducir",
      titulo_video: "Tachyon 0.7.1: la web de hoy en tu Amiga clásico",
    },
    motor: {
      titulo: "Habla el idioma de la web actual",
      texto: "Tachyon maqueta cada página como lo haría el navegador de tu PC, con sus hojas de estilo, sus tipografías y su JavaScript.",
      lista: [
        ["HTML5", "Lee el HTML de hoy con el mismo analizador que usa NetSurf (Hubbub) y monta su árbol DOM en UTF-8."],
        ["CSS", "Flexbox, Grid, calc(), clamp(), :has(), @layer, los colores modernos, transformaciones y animaciones, que es lo que usan las webs actuales para maquetarse."],
        ["Tipografías", "Usa las fuentes de cada web (TTF, OTF, WOFF y WOFF2) y las convierte en fuentes del Amiga, también las de trazo fino."],
        ["JavaScript", "QuickJS con ES2023, adaptado al Amiga. Controla bien su memoria, corta los scripts que tardan demasiado sin dejar la página a medias y hace los cálculos con fdlibm, porque los de la ROM daban resultados erróneos. Tiene DOM, eventos, fetch, XMLHttpRequest, IntersectionObserver, MutationObserver, TreeWalker, Range, plantillas y canvas 2D. Puede con scripts de más de 10 MB, como el de YouTube, y escribe los números con las mismas cifras que Chrome (usa Ryu). Incluso Next.js y GSAP arrancan en un 68k."],
        ["Red", "HTTP/1.1 con gzip y HTTPS con AmiSSL 5, que reaprovecha la sesión TLS entre conexiones. Los rastreadores conocidos no se descargan."],
        ["Imágenes", "JPEG, PNG, GIF, BMP, WebP y SVG. Se decodifican en otro proceso, así la ventana no se queda congelada mientras llegan."],
      ],
      acid: "¿Y las pruebas de estándares? Acid2 tiene 11 comprobaciones y Tachyon pasa 10. De las 100 primeras pruebas de CSS 2.1 de las Web Platform Tests (las del flujo normal), pasa 76, en el propio Amiga.",
    },
    navegador: {
      titulo: "Todo lo que esperas de un navegador",
      texto: "Escribe en la barra de direcciones y busca con DuckDuckGo, o con Google, Bing, Brave, Wikipedia o Aminet si lo prefieres. Un candado indica si la conexión va cifrada y una estrella guarda la página en marcadores. Tiene pestañas (Amiga-T abre una, Amiga-W la cierra y Mayúsculas o Amiga más clic abre un enlace en otra), historial por días, hasta cuatro ventanas, formularios y cookies que se guardan entre sesiones. Las descargas pueden ir varias a la vez y siguen aunque cambies de página. En su página ves cuánto llevan, a qué velocidad van y cuánto falta, y puedes pararlas o reintentarlas. Mientras se maqueta una página, la red sigue descargando y la ventana no se queda congelada. Tachyon está en inglés y, según tus preferencias de Locale, en castellano, alemán, francés, italiano, portugués, neerlandés, sueco, danés o noruego. También le dice a las webs tu idioma, como hace Chrome, para que salgan en tu idioma.",
      actualiza: "Tachyon se actualiza solo. Cuando sale una versión nueva se enciende un icono verde. Al pulsarlo, la descarga, comprueba que ha llegado entera y la instala, sin tener que buscarla en Aminet ni descomprimir nada.",
      amigaworld: "amigaworld.net, la web de la comunidad, en Tachyon",
    },
    alfaSeccion: {
      titulo: "Lo que todavía no hace",
      texto: "Es una alfa, y esto es lo que todavía falla:",
      lista: [
        "Las páginas grandes, como Wikipedia o los periódicos, tardan decenas de segundos en maquetarse en un Amiga lento.",
        "Google muestra primero su aviso de cookies.",
        "La web de YouTube ya carga entera, pero todavía no se dibuja bien.",
        "Las traducciones, salvo la castellana, no las ha revisado nadie que hable el idioma. Si ves algo raro en el tuyo, avísame.",
        "No se ha probado en un Amiga real, solo en emuladores (FS-UAE y Amiberry).",
      ],
      informe: "Si algo va mal, en el menú Proyecto está \"Enviar informe de depuración...\". Te enseña lo que Tachyon ha anotado (las versiones, la memoria, las páginas abiertas y los mensajes de su JavaScript, pero no las cookies ni lo escrito en formularios) y, si quieres, lo envía. Después te da un código para ponerlo en la incidencia.",
      avisos: "Si una web no se ve bien, cuéntamelo en GitHub",
    },
    requisitos: {
      titulo: "Lo que necesita tu Amiga",
      lista: [
        "AmigaOS 3.2 (o 3.5/3.9) para las imágenes. Con 3.0 o 3.1 la página se ve, pero sin imágenes. También funciona en AmigaOS 4, con su emulación de 68k.",
        "Un 68020 con FPU, o un 68040 o 68060. Con tarjeta gráfica (Picasso96 o CyberGraphX) se ve mucho mejor.",
        "Memoria Fast: las webs actuales necesitan decenas de megas.",
        "MUI 3.8 o 5, una pila TCP/IP (Roadshow, AmiTCP, Genesis, Miami) y AmiSSL 5.1 o posterior.",
      ],
      instalar: `Descomprime ${version.fichero} y haz doble clic en Instalar, o copia el cajón Tachyon donde quieras. Si ya lo tenías, respeta tus marcadores, preferencias y cookies.`,
      notas: "Qué trae esta versión",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Tachyon está escrito en Dash, un lenguaje para el Amiga que compila a 68k nativo, y tiene más de 33.000 líneas. Es el programa más grande hecho con Dash. Todo lo que el navegador necesitaba y el lenguaje no tenía (red, TLS, fuentes, imágenes) se añadió a Dash, así que ahora cualquier programa puede usarlo.",
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
      "Tachyon is a web browser for the classic Amiga. It understands HTML5, current CSS and JavaScript, opens sites over HTTPS and runs in a normal MUI window, with its menus and its icon.",
    descargar: "Download the alpha",
    peso: `${version.fichero} · version ${VERSION} · ${tamano(version.bytes, "en")}`,
    codigo: "Source on GitHub",
    verVideo: "Watch it in action",
    alfa: "It's an alpha. Some pages still don't look right or take a long time.",
    portadaAlt: "Tachyon showing freemem.space with a graphics card: the HTTPS padlock, the bookmark star, history and the green new-version notice",
    coffinAlt: "Tachyon on the Coffin Workbench, with Trasfondo in the corner",
    novedades: {
      titulo: "What's new",
      texto: "This is what has been done since 0.7.4-alpha for the next version, as of 29 October 2026. It can't be downloaded yet.",
      boton: "What's new",
      lista: [
        {
          estado: "In development",
          titulo: "The full YouTube website",
          texto: "The YouTube website loads completely, with all its JavaScript, on an emulated 68040 with 128 MB. The home page and the cookie notice show up, and the \"Reject all\" button works. There are no JavaScript errors while loading, although some details still don't draw.",
        },
        {
          estado: "Faster",
          titulo: "Huge scripts in half the time",
          texto: "QuickJS compiles YouTube's main script, which is 10.8 MB, in 66 seconds. It used to take 138. Its 3.8 MB style sheet is now read in about 7 seconds, where it used to take 184.",
        },
        {
          estado: "Less memory",
          titulo: "Only what's used gets read",
          texto: "The declarations of each CSS rule are read only when an element needs them. That way, YouTube's style sheet takes 15.8 MB of memory instead of 22. Also, a change involving :has() now hardly ever means restyling the whole page: loading YouTube, it happens 4 times, where it used to happen 18.",
        },
        {
          estado: "On to Dash 2.0",
          titulo: "Less C, more Dash",
          texto: "Tachyon is moving to Dash 2.0, the new Dash compiler that needs no C. Background networking, gzip, images, web fonts, video and the updater already use Dash's own functions and pass their tests. What's left is the code that connects Tachyon to QuickJS and to the HTML5 parser, which will stay linked in as libraries.",
        },
      ],
    },
    video: {
      titulo: "See it in action",
      texto: "Five and a half minutes on CoffinOS with a graphics card, in Amiberry. It shows how to install it, how it updates with one click, searching from the address bar, sites with JavaScript and canvas, tabs, menus, downloads and switching languages. Only the waits are sped up.",
      boton: "Play",
      titulo_video: "Tachyon 0.7.1: the modern web on your classic Amiga",
    },
    motor: {
      titulo: "It speaks today's web",
      texto: "Tachyon lays out each page the way the browser on your PC would, with its style sheets, its typefaces and its JavaScript.",
      lista: [
        ["HTML5", "It reads today's HTML with the same parser NetSurf uses (Hubbub) and builds its DOM tree in UTF-8."],
        ["CSS", "Flexbox, Grid, calc(), clamp(), :has(), @layer, modern colours, transforms and animations, which is what today's sites use for their layout."],
        ["Typefaces", "It uses each site's own fonts (TTF, OTF, WOFF and WOFF2) and turns them into Amiga fonts, thin weights included."],
        ["JavaScript", "QuickJS with ES2023, adapted to the Amiga. It keeps proper track of its memory, stops scripts that take too long without leaving the page half-done, and does its maths with fdlibm, because the ROM's gave wrong results. It has DOM, events, fetch, XMLHttpRequest, IntersectionObserver, MutationObserver, TreeWalker, Range, templates and 2D canvas. It can handle scripts over 10 MB, like YouTube's, and writes numbers with the same digits as Chrome (it uses Ryu). Even Next.js and GSAP start up on a 68k."],
        ["Network", "HTTP/1.1 with gzip and HTTPS with AmiSSL 5, which reuses the TLS session between connections. Known trackers are not downloaded."],
        ["Images", "JPEG, PNG, GIF, BMP, WebP and SVG. They're decoded in another process, so the window doesn't freeze while they arrive."],
      ],
      acid: "And the standards tests? Acid2 has 11 checks and Tachyon passes 10. Of the first 100 CSS 2.1 tests in the Web Platform Tests (the normal-flow ones), it passes 76, on the Amiga itself.",
    },
    navegador: {
      titulo: "Everything you expect from a browser",
      texto: "Type in the address bar to search with DuckDuckGo, or with Google, Bing, Brave, Wikipedia or Aminet if you prefer. A padlock shows whether the connection is encrypted and a star adds the page to your bookmarks. It has tabs (Amiga-T opens one, Amiga-W closes it, and Shift or Amiga plus click opens a link in another), history by day, up to four windows, forms, and cookies kept between sessions. Several downloads can run at once and keep going when you change page. Their page shows how far along they are, how fast they're going and how much is left, and you can pause or retry them. While a page is being laid out, the network keeps downloading and the window doesn't freeze. Tachyon is in English and, following your Locale preferences, in Spanish, German, French, Italian, Portuguese, Dutch, Swedish, Danish or Norwegian. It also tells websites your language, like Chrome does, so they show up in your language.",
      actualiza: "Tachyon updates itself. When a new version is out, a green icon lights up. Click it and Tachyon downloads the new version, checks it arrived whole and installs it, with no hunting on Aminet and nothing to unpack.",
      amigaworld: "amigaworld.net, the community's home, in Tachyon",
    },
    alfaSeccion: {
      titulo: "What it doesn't do yet",
      texto: "It's an alpha, and this is what still doesn't work:",
      lista: [
        "Big pages, like Wikipedia or newspapers, take tens of seconds to lay out on a slow Amiga.",
        "Google shows its cookie notice first.",
        "The YouTube website now loads completely, but it doesn't draw properly yet.",
        "The translations, except the Spanish one, haven't been checked by anyone who speaks the language. If something reads oddly in yours, let me know.",
        "It hasn't been tested on a real Amiga, only on emulators (FS-UAE and Amiberry).",
      ],
      informe: "If something goes wrong, the Project menu has \"Send debug report...\". It shows you what Tachyon has noted down (versions, memory, the pages you opened and their JavaScript messages, but not cookies or anything typed in forms) and, if you want, sends it. Then it gives you a code to put in the issue.",
      avisos: "If a site doesn't look right, tell me on GitHub",
    },
    requisitos: {
      titulo: "What your Amiga needs",
      lista: [
        "AmigaOS 3.2 (or 3.5/3.9) for images. With 3.0 or 3.1 pages show, but without images. It also runs on AmigaOS 4, under its 68k emulation.",
        "A 68020 with an FPU, or a 68040 or 68060. It looks much better with a graphics card (Picasso96 or CyberGraphX).",
        "Fast memory: today's sites need tens of megabytes.",
        "MUI 3.8 or 5, a TCP/IP stack (Roadshow, AmiTCP, Genesis, Miami) and AmiSSL 5.1 or later.",
      ],
      instalar: `Unpack ${version.fichero} and double-click Instalar (the installer), or copy the Tachyon drawer anywhere you like. If you already had it, your bookmarks, settings and cookies are kept.`,
      notas: "What's in this version",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Tachyon is written in Dash, an Amiga language that compiles to native 68k, and has over 33,000 lines. It's the biggest program made with Dash. Everything the browser needed that the language lacked (networking, TLS, fonts, images) was added to Dash, so now any program can use it.",
      enlace: "Discover Dash",
    },
    pie: [
      { texto: "Tachyon on GitHub", url: REPO },
      { texto: "What's in this version", url: RELEASE },
      { texto: "Video on YouTube", url: `https://youtu.be/${VIDEO.en}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

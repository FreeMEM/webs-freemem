import type { Idioma } from "retro";

import extension from "./version.json";

/** Los textos de la web de Dash. Cifras de docs/BUILTINS.md, el README y el ROADMAP del repositorio. */
export const REPO = "https://github.com/FreeMEM/dash";
/** La última versión de la extensión de VS Code: la pone herramientas/versiones.py antes de construir. */
export const EXTENSION = extension.notas;
export const VIDEO = "_UTJ_0s3xLc";
export const BASE = "https://dash.freemem.space";
export const BUILTINS = 611;

/** Las funciones de Dash por área (docs/BUILTINS.md): nombre en castellano, en inglés y cuántas. */
export const AREAS = [
  ["MUI", "MUI", 82],
  ["Procesos, escritorio y medidores", "Tasks, desktop and meters", 80],
  ["ReAction", "ReAction", 79],
  ["Intuition", "Intuition", 52],
  ["Gráficos avanzados", "Advanced graphics", 43],
  ["Entrada", "Input", 30],
  ["Gráficos", "Graphics", 29],
  ["Sistema", "System", 26],
  ["Red (TCP)", "Network (TCP)", 26],
  ["DOS", "DOS", 24],
  ["RTG", "RTG", 21],
  ["Audio", "Audio", 21],
  ["GadTools", "GadTools", 19],
  ["Texto", "Text", 18],
  ["Menús, búferes, TLS, fuentes y más", "Menus, buffers, TLS, fonts and more", 61],
] as const;

export const CONTENIDO = {
  es: {
    titulo: "Dash: un lenguaje moderno para el Amiga, a 68k nativo",
    descripcion:
      "Lenguaje de alto nivel para el Commodore Amiga: se escribe como Ruby o Python y compila a un ejecutable 68k nativo. MUI, gráficos, red y HTTPS. Libre.",
    lema: "Escribe código limpio, sintetiza ejecutables nativos.",
    texto:
      "Programar el Amiga en C tiene su encanto… hasta que llevas media hora peleándote con punteros, estructuras de Intuition y castings. Dash es la otra forma: un lenguaje que se lee como Ruby o Python y se convierte en un ejecutable de 68k de verdad. Sin intérprete ni máquina virtual: código nativo, como debe ser.",
    empezar: "Empieza en GitHub",
    vscode: "Extensión para VS Code",
    bola: "La bola Boing, la demo del Amiga de 1984, botando",
    tuberia: {
      titulo: "De tus líneas a un ejecutable de 68k",
      texto: "Tres programas de verdad, paso a paso: primero lo que escribes, después un trozo del C que Dash genera por ti y, al final, lo que aparece en el Amiga. Y mira lo poco que ocupan.",
      pasos: ["Dash", "C", "m68k-amigaos-gcc", "Amiga"],
      dash: "Lo que escribes",
      c: "El C que genera Dash",
      amiga: "En el Amiga",
      bytes: "de ejecutable",
      pestanas: { hola: "Una ventana", mui_hola: "MUI", gravedad: "Coma fija" },
      notas: {
        hola: "Una ventana con su bucle de eventos, en quince líneas. El ejecutable entero, con su runtime, ocupa esto:",
        mui_hola: "Una ventana MUI con dos botones y sus atajos de teclado, sin calcular una sola coordenada. Para MUI 3.8 o 5.",
        gravedad: "Bolas que caen y rebotan con números de coma fija: tú escribes 0,85 y Dash lo convierte en aritmética entera. En un 68000, multiplicar en Fixed es 2,6 veces más rápido que en Float.",
      },
    },
    todo: {
      titulo: `${BUILTINS} funciones para exprimir el Amiga`,
      texto: "Ventanas, gráficos, sonido, red y el sistema entero, sin escribir C y sin ir a buscar en qué librería estaba cada cosa:",
      lista: [
        ["Interfaz", "Intuition, GadTools, ReAction y MUI 3.8 o 5, con zona de dibujo y doble búfer. Usa la que más te guste."],
        ["Gráficos", "Copper, Blitter y BOBs, sprites de hardware y por software, doble búfer, tarjetas gráficas (CyberGraphX y Picasso96) e imágenes IFF, PNG, JPEG o GIF. Lo que hizo famoso al Amiga, a tu alcance."],
        ["Red", "TCP, UDP y HTTPS con AmiSSL 5.1, que reanuda la sesión TLS. Tu Amiga, hablando con la Internet de hoy."],
        ["El lenguaje", "Tipos inferidos, structs con métodos, lambdas, listas y diccionarios con tipo, Float y Fixed 16.16, módulos. La memoria se gestiona sola, por contador de referencias: no hay recolector que pare el programa en mitad de una animación."],
        ["En tu idioma", "Tu programa puede hablar el idioma de quien lo usa. Sus textos van con tr, y las traducciones, en catálogos de locale.library, como los de los programas del sistema."],
        ["Si hace falta", "¿Toca bajar al metal? Mete C dentro del código (@native, @c) o enlaza la librería que quieras (@link)."],
      ],
    },
    editor: {
      titulo: "Programa en VS Code, prueba en el Amiga",
      texto: "La extensión «Dash for Amiga» colorea el código, marca los errores mientras escribes, autocompleta, salta a la definición y formatea. Compila y lanza el programa en FS-UAE o Amiberry, depura con F5 (también en un Amiga de verdad, por la red) y trae un diseñador visual de ventanas MUI: colocas los objetos y la extensión escribe el código por ti. Se acabó calcular coordenadas a ojo.",
      instalar: `Se instala desde el fichero .vsix de su página en GitHub (versión ${extension.version}).`,
      boton: "Bajar la extensión",
      verVideo: "Reproducir",
      tituloVideo: "Dash para Amiga en VS Code: tutorial de la extensión (6 min)",
      editorMui: "El diseñador visual de ventanas MUI",
    },
    hecho: {
      titulo: "Hecho con Dash",
      texto: "Un lenguaje se demuestra escribiendo algo grande con él. Estos dos programas han hecho crecer Dash: todo lo que les faltaba se añadió al lenguaje, y ahora lo tienes tú.",
      tachyon: ["Tachyon", "Un navegador web moderno para AmigaOS 3.x: HTML5, el CSS de ahora, JavaScript ES2023 y HTTPS. Más de 30.000 líneas de Dash. En alfa, y creciendo."],
      trasfondo: ["Trasfondo", "Tu Amiga te cuenta qué hace, sin tapar nada: un monitor de recursos pintado en el fondo del Workbench. Unas 800 líneas de Dash, ni una de C a mano."],
      tachyonAlt: "Tachyon mostrando un artículo de freemem.space en AmigaOS",
      trasfondoAlt: "El panel de Trasfondo en el escritorio de Coffin",
    },
    requisitos: {
      titulo: "Lo que necesitas",
      amiga: ["En el Amiga", "AmigaOS 3.0 o posterior; con un 68000 basta. Para MUI y HTTPS, un 68020."],
      pc: ["En tu PC", "Linux, macOS o WSL2, con Python 3.10, la librería Lark y el compilador cruzado m68k-amigaos-gcc. Compilas en tu PC y el Amiga recibe un ejecutable listo para usar."],
      guia: "Empieza en una tarde: la guía",
    },
    pie: [
      { texto: "Dash en GitHub", url: REPO },
      { texto: "Tutorial en YouTube", url: `https://youtu.be/${VIDEO}` },
    ],
  },
  en: {
    titulo: "Dash: a modern Amiga language that compiles to native 68k",
    descripcion:
      "A high-level language for the Commodore Amiga: reads like Ruby or Python, compiles to a native 68k executable. MUI, graphics, networking, HTTPS. Free.",
    lema: "Write clean code, synthesize native executables.",
    texto:
      "Programming the Amiga in C has its charm… until you've spent half an hour wrestling with pointers, Intuition structures and casts. Dash is the other way: a language that reads like Ruby or Python and turns into a real 68k executable. No interpreter, no virtual machine: native code, the way it should be.",
    empezar: "Get started on GitHub",
    vscode: "VS Code extension",
    bola: "The Boing ball, the 1984 Amiga demo, bouncing",
    tuberia: {
      titulo: "From your lines to a 68k executable",
      texto: "Three real programs, step by step: first what you write, then an excerpt of the C that Dash writes for you and, finally, what shows up on the Amiga. And look how little they take.",
      pasos: ["Dash", "C", "m68k-amigaos-gcc", "Amiga"],
      dash: "What you write",
      c: "The C that Dash generates",
      amiga: "On the Amiga",
      bytes: "executable",
      pestanas: { hola: "A window", mui_hola: "MUI", gravedad: "Fixed point" },
      notas: {
        hola: "A window with its event loop, in fifteen lines. The whole executable, runtime included, takes this much:",
        mui_hola: "An MUI window with two buttons and their keyboard shortcuts, without working out a single coordinate. MUI 3.8 or 5.",
        gravedad: "Balls that fall and bounce using fixed-point numbers: you write 0.85 and Dash turns it into integer maths. On a 68000, multiplying in Fixed is 2.6 times faster than in Float.",
      },
    },
    todo: {
      titulo: `${BUILTINS} functions to get the most out of the Amiga`,
      texto: "Windows, graphics, sound, networking and the whole system, without writing C or digging up which library each thing lived in:",
      lista: [
        ["Interface", "Intuition, GadTools, ReAction and MUI 3.8 or 5, with a double-buffered drawing area. Use whichever you like."],
        ["Graphics", "Copper, Blitter and BOBs, hardware and software sprites, double buffering, graphics cards (CyberGraphX and Picasso96) and IFF, PNG, JPEG or GIF images. What made the Amiga famous, at your fingertips."],
        ["Network", "TCP, UDP and HTTPS with AmiSSL 5.1, resuming the TLS session. Your Amiga, talking to today's Internet."],
        ["The language", "Type inference, structs with methods, lambdas, typed lists and dictionaries, Float and Fixed 16.16, modules. Memory looks after itself, by reference counting: no garbage collector stopping your program mid-animation."],
        ["In your language", "Your program can speak its user's language. Its texts go through tr, and the translations live in locale.library catalogs, like those of the system's own programs."],
        ["When you need it", "Need to get down to the metal? Put C right in your code (@native, @c) or link any library (@link)."],
      ],
    },
    editor: {
      titulo: "Write in VS Code, run on the Amiga",
      texto: "The “Dash for Amiga” extension highlights your code, flags errors as you type, completes, jumps to definitions and formats. It compiles and runs your program on FS-UAE or Amiberry, debugs with F5 (on a real Amiga too, over the network) and comes with a visual MUI window designer: you place the gadgets and the extension writes the code for you. No more guessing coordinates.",
      instalar: `Install it from the .vsix file on its GitHub page (version ${extension.version}).`,
      boton: "Download the extension",
      verVideo: "Play",
      tituloVideo: "Dash for Amiga in VS Code: extension tutorial (6 min, Spanish)",
      editorMui: "The visual MUI window designer",
    },
    hecho: {
      titulo: "Made with Dash",
      texto: "A language proves itself by building something big. These two programs made Dash grow: whatever they lacked was added to the language, and now you have it too.",
      tachyon: ["Tachyon", "A modern web browser for AmigaOS 3.x: HTML5, today's CSS, JavaScript ES2023 and HTTPS. Over 30,000 lines of Dash. In alpha, and growing."],
      trasfondo: ["Trasfondo", "Your Amiga tells you what it's up to, without covering anything: a resource monitor painted on the Workbench backdrop. About 800 lines of Dash, not one line of hand-written C."],
      tachyonAlt: "Tachyon showing a freemem.space article on AmigaOS",
      trasfondoAlt: "The Trasfondo panel on the Coffin desktop",
    },
    requisitos: {
      titulo: "What you need",
      amiga: ["On the Amiga", "AmigaOS 3.0 or later; a 68000 is enough. For MUI and HTTPS, a 68020."],
      pc: ["On your PC", "Linux, macOS or WSL2, with Python 3.10, the Lark library and the m68k-amigaos-gcc cross compiler. You compile on your PC and the Amiga gets a ready-to-run executable."],
      guia: "Get going in an afternoon: the guide",
    },
    pie: [
      { texto: "Dash on GitHub", url: REPO },
      { texto: "Tutorial on YouTube", url: `https://youtu.be/${VIDEO}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

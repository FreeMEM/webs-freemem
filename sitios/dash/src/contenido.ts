import type { Idioma } from "retro";

import extension from "./version.json";

/** Los textos de la web de Dash. Cifras de docs/BUILTINS.md, el README y el ROADMAP del repositorio. */
export const REPO = "https://github.com/FreeMEM/dash";
/** La última versión de la extensión de VS Code: la pone herramientas/versiones.py antes de construir. */
export const EXTENSION = extension.notas;
export const VIDEO = "_UTJ_0s3xLc";
export const BASE = "https://dash.freemem.space";
export const BUILTINS = 581;

/** Las funciones de Dash por área (docs/BUILTINS.md): nombre en castellano, en inglés y cuántas. */
export const AREAS = [
  ["MUI", "MUI", 82],
  ["ReAction", "ReAction", 79],
  ["Tareas en otro proceso", "Tasks in another process", 58],
  ["Intuition", "Intuition", 46],
  ["Gráficos avanzados", "Advanced graphics", 43],
  ["Entrada", "Input", 30],
  ["Gráficos", "Graphics", 29],
  ["Sistema", "System", 26],
  ["Red (TCP)", "Network (TCP)", 24],
  ["DOS", "DOS", 24],
  ["RTG", "RTG", 21],
  ["Audio", "Audio", 21],
  ["GadTools", "GadTools", 19],
  ["Texto", "Text", 18],
  ["Menús, búferes, TLS, fuentes y más", "Menus, buffers, TLS, fonts and more", 61],
] as const;

export const CONTENIDO = {
  es: {
    titulo: "Dash: un lenguaje de programación para el Amiga que compila a 68k nativo",
    descripcion:
      "Dash es un lenguaje de alto nivel para Commodore Amiga, con sintaxis tipo Ruby y Python, que se traduce a C y se compila a un ejecutable nativo de 68k. Intuition, MUI, ReAction, gráficos, sonido, red y HTTPS. Libre, con extensión para VS Code.",
    lema: "Escribe código limpio, sintetiza ejecutables nativos.",
    texto:
      "Un lenguaje de alto nivel para el Amiga, con una sintaxis que se lee como Ruby o Python. Se traduce a C y se compila en tu PC a un ejecutable de 68k: sin intérprete ni máquina virtual en el Amiga.",
    empezar: "Empezar en GitHub",
    vscode: "Extensión para VS Code",
    bola: "La bola Boing, la demo del Amiga de 1984, botando",
    tuberia: {
      titulo: "De tu código a un ejecutable de 68k",
      texto: "Tres programas de verdad. Lo que escribes, el C que genera Dash (un fragmento) y lo que sale en el Amiga.",
      pasos: ["Dash", "C", "m68k-amigaos-gcc", "Amiga"],
      dash: "Lo que escribes",
      c: "El C que genera Dash",
      amiga: "En el Amiga",
      bytes: "de ejecutable",
      pestanas: { hola: "Una ventana", mui_hola: "MUI", gravedad: "Coma fija" },
      notas: {
        hola: "Una ventana con su bucle de eventos. El ejecutable entero, con su runtime, ocupa esto:",
        mui_hola: "Una ventana MUI con dos botones y sus atajos de teclado. MUI 3.8 o 5.",
        gravedad: "Bolas que caen y botan con números de coma fija: la gravedad, 0,85 al rebotar… y en C, enteros. En un 68000, multiplicar en Fixed es 2,6 veces más rápido que en Float.",
      },
    },
    todo: {
      titulo: `${BUILTINS} funciones para todo el Amiga`,
      texto: "Ventanas, gráficos, sonido, red y el sistema, sin escribir C y sin acordarte de qué librería abrir:",
      lista: [
        ["Interfaz", "Intuition, GadTools, ReAction y MUI 3.8 o 5 (con zona de dibujo con doble búfer)."],
        ["Gráficos", "Copper, Blitter y BOBs, sprites de hardware y por software, doble búfer, RTG (CyberGraphX y Picasso96), y IFF, PNG, JPEG o GIF por datatypes."],
        ["Red", "TCP y UDP, y HTTPS con AmiSSL 5.1 que reanuda la sesión TLS."],
        ["El lenguaje", "Tipos inferidos, structs con métodos, lambdas, listas y diccionarios con tipo, Float y Fixed 16.16, módulos. Memoria por contador de referencias: sin recolector y sin pausas."],
        ["Si hace falta", "C dentro del código (@native, @c) y enlazar librerías (@link)."],
      ],
    },
    editor: {
      titulo: "Con VS Code",
      texto: "La extensión «Dash for Amiga» colorea el código, marca los errores mientras escribes, completa, va a la definición y formatea. Compila y ejecuta en FS-UAE o Amiberry, depura con F5 (también en un Amiga de verdad, por la red) y trae un editor visual de ventanas MUI.",
      instalar: `Se instala desde el fichero .vsix de su página en GitHub (versión ${extension.version}).`,
      boton: "Bajar la extensión",
      verVideo: "Reproducir",
      tituloVideo: "Dash para Amiga en VS Code: tutorial de la extensión (6 min)",
      editorMui: "El editor visual de ventanas MUI",
    },
    hecho: {
      titulo: "Hecho con Dash",
      texto: "Dash crece con programas de verdad: lo que les falta se añade al lenguaje, y luego lo tiene cualquiera.",
      tachyon: ["Tachyon", "Un navegador web para AmigaOS 3.x: HTML5, CSS moderno, JavaScript ES2023 y HTTPS. Más de 28.000 líneas de Dash. En alfa."],
      trasfondo: ["Trasfondo", "Un monitor de recursos pintado en el fondo del Workbench. Unas 800 líneas de Dash, con su configurador, sin C a mano."],
      tachyonAlt: "Tachyon mostrando un artículo de freemem.space en AmigaOS",
      trasfondoAlt: "El panel de Trasfondo en el escritorio de Coffin",
    },
    requisitos: {
      titulo: "Qué necesitas",
      amiga: ["En el Amiga", "AmigaOS 3.0 o posterior; un 68000 basta. MUI y HTTPS piden un 68020."],
      pc: ["En tu PC", "Linux, macOS o WSL2, con Python 3.10, la librería Lark y el compilador cruzado m68k-amigaos-gcc. Dash compila en el PC: no en el Amiga."],
      guia: "La guía de instalación",
    },
    pie: [
      { texto: "Dash en GitHub", url: REPO },
      { texto: "Tutorial en YouTube", url: `https://youtu.be/${VIDEO}` },
    ],
  },
  en: {
    titulo: "Dash: an Amiga programming language that compiles to native 68k",
    descripcion:
      "Dash is a high-level language for the Commodore Amiga, with a Ruby and Python-like syntax, that translates to C and compiles to a native 68k executable. Intuition, MUI, ReAction, graphics, sound, networking and HTTPS. Open source, with a VS Code extension.",
    lema: "Write clean code, synthesize native executables.",
    texto:
      "A high-level language for the Amiga, with a syntax that reads like Ruby or Python. It translates to C and compiles on your PC into a 68k executable: no interpreter and no virtual machine on the Amiga.",
    empezar: "Get started on GitHub",
    vscode: "VS Code extension",
    bola: "The Boing ball, the 1984 Amiga demo, bouncing",
    tuberia: {
      titulo: "From your code to a 68k executable",
      texto: "Three real programs. What you write, the C that Dash generates (an excerpt) and what shows up on the Amiga.",
      pasos: ["Dash", "C", "m68k-amigaos-gcc", "Amiga"],
      dash: "What you write",
      c: "The C that Dash generates",
      amiga: "On the Amiga",
      bytes: "executable",
      pestanas: { hola: "A window", mui_hola: "MUI", gravedad: "Fixed point" },
      notas: {
        hola: "A window with its event loop. The whole executable, runtime included, takes this much:",
        mui_hola: "An MUI window with two buttons and their keyboard shortcuts. MUI 3.8 or 5.",
        gravedad: "Balls that fall and bounce using fixed-point numbers: gravity, 0.85 on each bounce… and integers in C. On a 68000, multiplying in Fixed is 2.6 times faster than in Float.",
      },
    },
    todo: {
      titulo: `${BUILTINS} functions for the whole Amiga`,
      texto: "Windows, graphics, sound, networking and the system, without writing C and without remembering which library to open:",
      lista: [
        ["Interface", "Intuition, GadTools, ReAction and MUI 3.8 or 5 (with a double-buffered drawing area)."],
        ["Graphics", "Copper, Blitter and BOBs, hardware and software sprites, double buffering, RTG (CyberGraphX and Picasso96), and IFF, PNG, JPEG or GIF through datatypes."],
        ["Network", "TCP and UDP, and HTTPS with AmiSSL 5.1, resuming the TLS session."],
        ["The language", "Type inference, structs with methods, lambdas, typed lists and dictionaries, Float and Fixed 16.16, modules. Reference-counted memory: no garbage collector, no pauses."],
        ["When you need it", "Inline C (@native, @c) and linking libraries (@link)."],
      ],
    },
    editor: {
      titulo: "With VS Code",
      texto: "The “Dash for Amiga” extension highlights your code, flags errors as you type, completes, jumps to definitions and formats. It compiles and runs on FS-UAE or Amiberry, debugs with F5 (on a real Amiga too, over the network) and comes with a visual editor for MUI windows.",
      instalar: `Install it from the .vsix file on its GitHub page (version ${extension.version}).`,
      boton: "Download the extension",
      verVideo: "Play",
      tituloVideo: "Dash for Amiga in VS Code: extension tutorial (6 min, Spanish)",
      editorMui: "The visual MUI window editor",
    },
    hecho: {
      titulo: "Made with Dash",
      texto: "Dash grows with real programs: whatever they lack is added to the language, and then everyone has it.",
      tachyon: ["Tachyon", "A web browser for AmigaOS 3.x: HTML5, modern CSS, JavaScript ES2023 and HTTPS. Over 28,000 lines of Dash. In alpha."],
      trasfondo: ["Trasfondo", "A resource monitor painted on the Workbench backdrop. About 800 lines of Dash, settings window included, no hand-written C."],
      tachyonAlt: "Tachyon showing a freemem.space article on AmigaOS",
      trasfondoAlt: "The Trasfondo panel on the Coffin desktop",
    },
    requisitos: {
      titulo: "What you need",
      amiga: ["On the Amiga", "AmigaOS 3.0 or later; a 68000 is enough. MUI and HTTPS need a 68020."],
      pc: ["On your PC", "Linux, macOS or WSL2, with Python 3.10, the Lark library and the m68k-amigaos-gcc cross compiler. Dash compiles on the PC, not on the Amiga."],
      guia: "Installation guide",
    },
    pie: [
      { texto: "Dash on GitHub", url: REPO },
      { texto: "Tutorial on YouTube", url: `https://youtu.be/${VIDEO}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

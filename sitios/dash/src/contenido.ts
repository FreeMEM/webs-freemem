import type { Idioma } from "retro";

import extension from "./version.json";

/** Los textos de la web de Dash. Cifras de docs/BUILTINS.md, el README y el ROADMAP del repositorio. */
export const REPO = "https://github.com/FreeMEM/dash";
/** La última versión de la extensión de VS Code: la pone herramientas/versiones.py antes de construir. */
export const EXTENSION = extension.notas;
export const VIDEO = "_UTJ_0s3xLc";
export const BASE = "https://dash.freemem.space";
export const BUILTINS = 617;

/** Las funciones de Dash por área (docs/BUILTINS.md): nombre en castellano, en inglés y cuántas. */
export const AREAS = [
  ["MUI", "MUI", 82],
  ["Procesos, escritorio y medidores", "Tasks, desktop and meters", 84],
  ["ReAction", "ReAction", 79],
  ["Intuition", "Intuition", 52],
  ["Gráficos avanzados", "Advanced graphics", 43],
  ["Entrada", "Input", 30],
  ["Gráficos", "Graphics", 29],
  ["Sistema", "System", 28],
  ["Red (TCP)", "Network (TCP)", 26],
  ["DOS", "DOS", 24],
  ["RTG", "RTG", 21],
  ["Audio", "Audio", 21],
  ["GadTools", "GadTools", 19],
  ["Texto", "Text", 18],
  ["Menús, búferes, TLS, fuentes y más", "Menus, buffers, TLS, fonts and more", 61],
] as const;

/** Dash frente a Blitz, AMOS y C (docs/COMPARATIVA.md de Dash, tools/comparativa): A1200 emulado a velocidad
 *  real, milisegundos por programa (menos es mejor); memoria en KB al ejecutar. Columnas: Dash, AmiBlitz3, AMOS
 *  Pro, SAS/C, GCC. */
export const LENGUAJES = ["Dash", "AmiBlitz3", "AMOS Pro", "SAS/C", "GCC (C)"] as const;
export const COMPARATIVA = [
  ["Arranque (programa vacío), ms", "Startup (empty program), ms", [54, 34, 862, 36, 42]],
  ["Memoria al ejecutar, KB", "Memory while running, KB", [16, 30, 165, 20, 38]],
] as const;
/** Las seis pruebas de velocidad: id, qué hace en castellano y en inglés */
export const PRUEBAS = [
  ["bucle", "300.000 vueltas de un bucle", "300,000 loop iterations"],
  ["llamada", "100.000 llamadas a una función", "100,000 function calls"],
  ["texto", "20.000 veces texto + número", "20,000 times string + number"],
  ["lista", "100.000 accesos a una lista", "100,000 list accesses"],
  ["flotante", "20.000 operaciones de coma flotante", "20,000 floating point operations"],
  ["lineas", "2.000 líneas en pantalla", "2,000 lines on screen"],
] as const;
/** Milisegundos de cada programa (tools/comparativa/res_*.txt de Dash), en el orden de LENGUAJES */
export const VELOCIDAD = {"a1200": {"bucle": [629, 7399, 9963, 754, 629], "llamada": [219, 2115, 9080, 522, 224], "texto": [2011, 4001, 3049, 3591, 6062], "lista": [1563, 31375, 25837, 3159, 2399], "flotante": [486, 845, 1865, 277, 497], "lineas": [5009, 5818, 5694, 4652, 4654]}, "a500": {"bucle": [2850, 30298, 36385, 3879, 2861], "llamada": [962, 9803, 33674, 2698, 987], "texto": [8714, 13862, 10306, 15421, 29780], "lista": [7527, 106401, 78128, 13437, 16586], "flotante": [2385, 3375, 5355, 1243, 2027], "lineas": [6851, 9549, 9222, 5826, 5744]}} as const;
/** Lo que ha ganado Dash desde la primera medida (tests/bench/results.json): en un A500, microsegundos por vuelta
 *  de la primera medida de la prueba y de la última */
export const HISTORIA = [["Recorrer una lista con for", "Going through a list with for", 696, 80], ["Crear un struct y cambiar un campo", "Creating a struct and changing a field", 531, 121], ["Crear una lista de tres", "Creating a three-item list", 886, 248], ["Interpolar dos números en un texto", "Interpolating two numbers into a string", 2238, 669], ["Leer y escribir en una lista", "Reading and writing a list", 197, 68], ["Crear un struct dentro de otro", "Creating a struct inside another", 2106, 791], ["Texto + número", "String + number", 1141, 468], ["Multiplicar Float", "Multiplying Floats", 175, 118], ["Escribir texto en una ventana", "Drawing text in a window", 5389, 3889]] as const;
/** Qué pasa ante una división por cero (medido igual): es, en y si es bueno */
export const DIVISION_CERO = [
  ["Mensaje y salida limpia", "Message and clean exit", true],
  ["Sigue con un resultado falso", "Goes on with a wrong result", false],
  ["Para con un error", "Stops with an error", true],
  ["Cuelga el Amiga", "Hangs the Amiga", false],
  ["Cuelga el Amiga", "Hangs the Amiga", false],
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
    indice: {
      titulo: "En esta página",
      enlace: "Enlace a esta sección",
      tuberia: "De Dash a 68k",
      todo: "Funciones",
      tecnica: "Bajo el capó",
      comparativa: "Frente a Blitz y AMOS",
      historia: "Cada vez más rápido",
      editor: "VS Code",
      hecho: "Hecho con Dash",
      documentacion: "Documentación",
      requisitos: "Lo que necesitas",
    },
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
        ["Sin Gurus", "Un campo de un struct que es nil, una división por cero o una instrucción ilegal ya no se llevan el Amiga por delante. El programa dice qué pasó y dónde, cierra sus ventanas, libera su memoria y el sistema sigue. En cualquier Amiga, también en un 68000 sin MMU."],
      ],
    },
    tecnica: {
      titulo: "Bajo el capó",
      texto: "Dash no es un intérprete: traduce tu código a C, y ese C lo compila GCC a código de 68k. Lo que hace con tu código, y con qué:",
      lista: [
        ["La cadena", "Tu .dash pasa por un analizador hecho con Lark, se convierte en un árbol, se comprueba (tipos, nombres, structs) y se escribe en C. Ese C lo compila m68k-amigaos-gcc con -O2 y sale un ejecutable de AmigaOS: hunks de 68k, nada más."],
        ["Los tipos", "Int de 32 bits, Float, Fixed 16.16, String y Bool; listas [T] y diccionarios {String: T} con tipo; structs con métodos y campos weak, enums, constantes y funciones como valor. Los tipos se deducen: casi nunca hace falta escribirlos."],
        ["Los números", "Float va por software (la suma y la multiplicación, en ensamblador de 68000), o con la FPU 68881/68882 si compilas con --fpu. Fixed 16.16 hace decimales con aritmética entera: en un 68000, multiplicar es 2,6 veces más rápido que en Float."],
        ["La memoria", "Textos, listas y structs llevan un contador de referencias y se liberan solos; los temporales de cada vuelta de un bucle, también. Sin recolector y sin pausas. Para cazar fallos, --memcheck avisa de dobles liberaciones y de lo que queda vivo al salir, y --profile cuenta llamadas y tiempo de cada función."],
        ["Lo que sale", "Un ejecutable para Kickstart 3.0 o posterior (usa los pools de memoria de exec V39) que funciona en un 68000. Una ventana con su bucle de eventos ocupa 5 KB. --small lo deja un 7 % más pequeño; --debug, listo para el depurador, con las líneas apuntando a tu .dash."],
        ["Probado en el Amiga", "Más de 300 programas de prueba se compilan y se ejecutan en FS-UAE: en un A1200, en un A500 y en un A1200 con AmigaOS 3.2, y con MUI, AmiSSL o tarjeta gráfica cuando hacen falta. El compilador son unas 30.000 líneas de Python, y el mismo código hace de servidor de lenguaje para VS Code."],
      ],
    },
    comparativa: {
      titulo: "Frente a Blitz y AMOS",
      texto:
        "Los mismos programas en Dash, AmiBlitz3, AMOS Professional y C (SAS/C y GCC), compilados con lo que trae Coffin OS y medidos en un A1200 emulado a velocidad real. Dash va a la par que C en cálculo y llamadas, y es el más rápido con textos y listas; AmiBlitz3 y AMOS van de 10 a 40 veces más despacio ahí. En coma flotante y en líneas gana C.",
      prueba: "Prueba",
      menos: "Menos es mejor; en naranja, el mejor de cada fila.",
      division: "División por cero",
      enlace: "La comparativa completa: también en un A500, el tamaño de los ejecutables, la estabilidad y cómo se midió",
      velocidad: "Velocidad: milisegundos de cada programa, de principio a fin. Menos es mejor; la barra, respecto al más lento de cada prueba.",
      porqueTitulo: "Por qué salen así",
      porque: [
        ["Dash y GCC", "Dash no compila mejor que GCC: genera C y lo compila el mismo GCC, y donde hacen lo mismo empatan (bucle y llamadas). Gana donde usa su runtime en lugar de la librería C. Para pasar un número a texto saca dos cifras por división, en vez del sprintf genérico de libnix, que va leyendo el formato. Para el resto (%) usa la división de 16 bits del 68000 cuando los números caben, en vez de la rutina de 32 bits de libgcc. Y escribe con Printf de dos.library, sin los búferes del printf de C: por eso gasta menos memoria. Un programador de C podría hacer lo mismo a mano; la prueba mide lo que sale escribiendo lo normal en cada lenguaje."],
        ["SAS/C", "Un compilador de 1995 que optimiza menos que GCC 6. GCC mete la función dentro del bucle y SAS/C la llama de verdad: las llamadas cuestan más del doble (522 ms frente a 224), y el bucle, un 20 % más. Gana en coma flotante porque con MATH=FFP usa el formato rápido de Motorola de la ROM (mathffp.library), con menos precisión que el IEEE de los demás. Su sprintf es más rápido que el de libnix y sus ejecutables son pequeños."],
        ["AmiBlitz3", "Hace los ejecutables más pequeños (476 bytes uno vacío), porque solo enlaza las rutinas que usas, y es el que antes arranca. Con enteros va de 6 a 13 veces más despacio que C (con GCC). Está compilado con -r, que según su ayuda optimiza el tamaño, y con el resto de opciones por defecto: sin afinar y sin mirar el código que genera. Sin su depurador no comprueba nada: dividir por cero da 2147483647 y un índice fuera de rango escribe en otra memoria."],
        ["AMOS Pro", "Su compilador copia en cada ejecutable las rutinas de su librería y sus datos de sistema (lo dice al compilar). Por eso un programa vacío ocupa 54 KB, tarda casi un segundo en arrancar mientras monta su propio sistema de pantallas, y usa unos 165 KB. Lo más lento son los procedimientos: de 34 a 41 veces más que C. A cambio, comprueba los errores igual que su intérprete: ante una división por cero o un índice fuera de rango, para con un error."],
      ],
    },
    historia: {
      titulo: "Cada vez más rápido",
      texto: "Dash se mide en un A500 y un A1200 emulados cada vez que cambia algo que importa, y cada medida se guarda. Desde la primera, del 14 de octubre de 2026, esto es lo que ha ganado en un A500:",
      antes: "antes",
      ahora: "ahora",
      unidad: "µs por vuelta",
      veces: "veces más rápido",
      hitosTitulo: "Lo que se hizo",
      hitos: [
        ["14 oct.", "Los temporales de cada vuelta se sueltan de golpe; *, / y % usan la división del 68000 cuando caben; los textos salen de una caché de bloques y los números se escriben de dos en dos cifras."],
        ["14 oct.", "Float propio: la suma y la multiplicación, en ensamblador de 68000: multiplicar es hoy 1,5 veces más rápido que con su primera versión en C."],
        ["15 oct.", "Una caché de bloques en clases de 8 bytes para structs y listas, funciones static y pila propia de 16 KB."],
        ["15 oct.", "Conteo de referencias completo: las listas son dueñas de lo que guardan y los objetos nuevos ya no se ponen a cero, porque su constructor rellena cada campo."],
        ["15 oct.", "Fixed 16.16: decimales con aritmética entera, 2,6 veces más rápidos que Float en un 68000."],
        ["25 oct.", "--cpu 68020 a 68060: en un 68040, Fixed divide 34 veces más rápido y los textos van un 13 % más deprisa."],
        ["25 oct.", "Cabecera de objetos de 16 bytes: 1.000 structs pequeños pasan de 33 KB a 24 KB."],
      ],
    },
    documentacion: {
      titulo: "La documentación",
      texto: "Todo está en GitHub, en castellano y en inglés:",
      lista: [
        ["DOCUMENTACION_LENGUAJE", "Guía del lenguaje", "de cero a tu primer programa completo"],
        ["MANUAL_REFERENCIA", "Manual de referencia", "cada parte del lenguaje y de la API del Amiga, con ejemplos"],
        ["QUICK_REFERENCE", "Referencia rápida", "la sintaxis entera en una chuleta"],
        ["BUILTINS", `Las ${BUILTINS} funciones`, "la lista, sacada del propio compilador"],
        ["INSTALACION", "Instalación", "Dash, el compilador cruzado y el emulador, paso a paso"],
        ["MUI_EDITOR", "El editor visual de MUI", "el formato .dashui y la extensión de VS Code"],
        ["COMPARATIVA", "Comparativa", "Dash frente a Blitz, AMOS y C, con números"],
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
      trasfondo: ["Trasfondo", "Tu Amiga te cuenta qué hace, sin tapar nada: un monitor de recursos pintado en el fondo del Workbench. Unas 2.200 líneas de Dash, ni una de C a mano."],
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
    indice: {
      titulo: "On this page",
      enlace: "Link to this section",
      tuberia: "From Dash to 68k",
      todo: "Functions",
      tecnica: "Under the hood",
      comparativa: "Against Blitz and AMOS",
      historia: "Faster and faster",
      editor: "VS Code",
      hecho: "Made with Dash",
      documentacion: "Documentation",
      requisitos: "What you need",
    },
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
        ["No Gurus", "A struct field that is nil, a division by zero or an illegal instruction no longer takes the whole Amiga down. The program says what happened and where, closes its windows, frees its memory and the system goes on. On any Amiga, even a 68000 with no MMU."],
      ],
    },
    tecnica: {
      titulo: "Under the hood",
      texto: "Dash is not an interpreter: it translates your code into C, and GCC compiles that C into 68k code. What it does with your code, and with what:",
      lista: [
        ["The pipeline", "Your .dash goes through a parser built with Lark, becomes a tree, gets checked (types, names, structs) and is written out as C. m68k-amigaos-gcc compiles that C with -O2 into an AmigaOS executable: 68k hunks, nothing else."],
        ["The types", "32-bit Int, Float, Fixed 16.16, String and Bool; typed lists [T] and dictionaries {String: T}; structs with methods and weak fields, enums, constants and functions as values. Types are inferred: you hardly ever write them."],
        ["The numbers", "Float is done in software (addition and multiplication in 68000 assembly), or with the 68881/68882 FPU if you compile with --fpu. Fixed 16.16 does decimals with integer maths: on a 68000, multiplying is 2.6 times faster than in Float."],
        ["Memory", "Strings, lists and structs are reference-counted and freed on their own; so are the temporaries of each loop iteration. No garbage collector, no pauses. To hunt bugs, --memcheck reports double frees and whatever is still alive at exit, and --profile counts calls and time per function."],
        ["What comes out", "An executable for Kickstart 3.0 or later (it uses exec V39 memory pools) that runs on a 68000. A window with its event loop takes 5 KB. --small makes it 7% smaller; --debug makes it debugger-ready, with line numbers pointing back to your .dash."],
        ["Tested on the Amiga", "Over 300 test programs are compiled and run in FS-UAE: on an A1200, an A500 and an A1200 with AmigaOS 3.2, plus MUI, AmiSSL or a graphics card when they need them. The compiler is about 30,000 lines of Python, and the same code is the language server behind VS Code."],
      ],
    },
    comparativa: {
      titulo: "Against Blitz and AMOS",
      texto:
        "The same programs in Dash, AmiBlitz3, AMOS Professional and C (SAS/C and GCC), built with the compilers that ship with Coffin OS and measured on an emulated A1200 at real speed. Dash is on par with C for arithmetic and calls, and the fastest with strings and lists; AmiBlitz3 and AMOS are 10 to 40 times slower there. C wins floating point and drawing lines.",
      prueba: "Test",
      menos: "Lower is better; the best of each row in orange.",
      division: "Division by zero",
      enlace: "The full comparison: also on an A500, executable sizes, stability and how it was measured",
      velocidad: "Speed: milliseconds for each program, start to finish. Lower is better; each bar is relative to the slowest in its test.",
      porqueTitulo: "Why the numbers look like this",
      porque: [
        ["Dash and GCC", "Dash doesn't compile better than GCC: it writes C that the same GCC compiles, and where both do the same work they tie (loop and calls). It wins where it uses its own runtime instead of the C library. To turn a number into text it gets two digits per division, instead of libnix's general-purpose sprintf, which parses the format as it goes. For the remainder (%) it uses the 68000's 16-bit division when the numbers fit, instead of libgcc's 32-bit routine. And it prints with dos.library's Printf, without C's printf buffers: that's why it uses less memory. A C programmer could do the same by hand; the test measures what you get writing the usual way in each language."],
        ["SAS/C", "A 1995 compiler that optimizes less than GCC 6. GCC puts the function inside the loop while SAS/C really calls it: calls cost more than twice as much (522 ms against 224), and the loop 20 % more. It wins floating point because with MATH=FFP it uses Motorola's fast format from the ROM (mathffp.library), less precise than the others' IEEE. Its sprintf is faster than libnix's and its executables are small."],
        ["AmiBlitz3", "It makes the smallest executables (476 bytes for an empty one), since it only links the routines you use, and it starts first. With integers it is 6 to 13 times slower than C (GCC). It was built with -r, which its help says optimizes for size, and every other option at its default: not tuned, and the code it generates not examined. Without its debugger it checks nothing: dividing by zero gives 2147483647 and an index out of range writes over other memory."],
        ["AMOS Pro", "Its compiler copies its library routines and system data into every executable (it says so while compiling). That's why an empty program takes 54 KB, needs almost a second to start while it sets up its own screen system, and uses about 165 KB. Procedures are the slowest part: 34 to 41 times slower than C. In return it checks errors like its interpreter does: on a division by zero or an index out of range, it stops with an error."],
      ],
    },
    historia: {
      titulo: "Faster and faster",
      texto: "Dash is measured on an emulated A500 and A1200 whenever something that matters changes, and every run is kept. Since the first one, on 14 October 2026, this is what it has gained on an A500:",
      antes: "before",
      ahora: "now",
      unidad: "µs per iteration",
      veces: "times faster",
      hitosTitulo: "What was done",
      hitos: [
        ["14 Oct", "Each iteration's temporaries are released in one go; *, / and % use the 68000's division when the numbers fit; strings come from a block cache and numbers are written two digits at a time."],
        ["14 Oct", "Dash's own Float: addition and multiplication in 68000 assembly: multiplying is now 1.5 times faster than with its first C version."],
        ["15 Oct", "A block cache in 8-byte classes for structs and lists, static functions and a 16 KB stack of its own."],
        ["15 Oct", "Full reference counting: lists own what they hold and new objects are no longer cleared, since their constructor fills every field."],
        ["15 Oct", "Fixed 16.16: decimals with integer maths, 2.6 times faster than Float on a 68000."],
        ["25 Oct", "--cpu 68020 to 68060: on a 68040, Fixed divides 34 times faster and strings are 13% quicker."],
        ["25 Oct", "16-byte object header: 1,000 small structs go from 33 KB to 24 KB."],
      ],
    },
    documentacion: {
      titulo: "The documentation",
      texto: "It's all on GitHub, in English and Spanish:",
      lista: [
        ["DOCUMENTACION_LENGUAJE", "Language guide", "from zero to your first complete program"],
        ["MANUAL_REFERENCIA", "Reference manual", "every part of the language and of the Amiga API, with examples"],
        ["QUICK_REFERENCE", "Quick reference", "the whole syntax on one cheat sheet"],
        ["BUILTINS", `The ${BUILTINS} functions`, "the list, taken from the compiler itself"],
        ["INSTALACION", "Installation", "Dash, the cross compiler and the emulator, step by step"],
        ["MUI_EDITOR", "The visual MUI editor", "the .dashui format and the VS Code extension"],
        ["COMPARATIVA", "Comparison", "Dash against Blitz, AMOS and C, with numbers"],
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
      trasfondo: ["Trasfondo", "Your Amiga tells you what it's up to, without covering anything: a resource monitor painted on the Workbench backdrop. About 2,200 lines of Dash, not one line of hand-written C."],
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

import type { Idioma } from "retro";

import extension from "./version.json";

/** Los textos de la web de Dash. Cifras de docs/BUILTINS.md, el README y el ROADMAP del repositorio. */
export const REPO = "https://github.com/FreeMEM/dash";
/** La última versión de la extensión de VS Code: la pone herramientas/versiones.py antes de construir. */
export const EXTENSION = extension.notas;
export const VIDEO = "_UTJ_0s3xLc";
export const BASE = "https://dash.freemem.space";
export const BUILTINS = 836;

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
  ["Nuevas en la 2.0: depurador, gestor de ventanas, imágenes y más", "New in 2.0: debugger, window manager, images and more", 219],
] as const;

/** Dash frente a Blitz, AMOS y C (docs/COMPARATIVA.md de Dash, tools/comparativa): A1200 emulado a velocidad
 *  real, milisegundos por programa (menos es mejor); memoria en KB al ejecutar. Columnas: Dash, AmiBlitz3, AMOS
 *  Pro, SAS/C, GCC. Dash por sus dos caminos, medido de nuevo el 2026-11-02 con la 2.0.1; los demás, de la primera medida. */
export const LENGUAJES = ["Dash (directo)", "Dash (por C)", "AmiBlitz3", "AMOS Pro", "SAS/C", "GCC (C)"] as const;
/** Las dos primeras columnas son Dash: el compilador directo (./dash) y el camino por C con gcc (./dash --gcc) */
export const COLUMNAS_DASH = 2;
export const COMPARATIVA = [
  ["Arranque (programa vacío), ms", "Startup (empty program), ms", [42, 46, 34, 862, 36, 42]],
  ["Memoria al ejecutar, KB", "Memory while running, KB", [18, 17, 30, 165, 20, 38]],
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
export const VELOCIDAD = {"a1200": {"bucle": [623, 632, 7399, 9963, 754, 629], "llamada": [272, 225, 2115, 9080, 522, 224], "texto": [2758, 1516, 4001, 3049, 3591, 6062], "lista": [2601, 1553, 31375, 25837, 3159, 2399], "flotante": [999, 491, 845, 1865, 277, 497], "lineas": [4934, 4989, 5818, 5694, 4652, 4654]}, "a500": {"bucle": [2831, 3237, 30298, 36385, 3879, 2861], "llamada": [1213, 1069, 9803, 33674, 2698, 987], "texto": [11817, 6411, 13862, 10306, 15421, 29780], "lista": [12596, 7524, 106401, 78128, 13437, 16586], "flotante": [4880, 2378, 3375, 5355, 1243, 2027], "lineas": [6685, 6733, 9549, 9222, 5826, 5744]}} as const;
/** Lo que ha ganado Dash desde la primera medida (tests/bench/results.json): en un A500, microsegundos por vuelta
 *  de la primera medida de la prueba y de la última */
export const HISTORIA = [["Recorrer una lista con for", "Going through a list with for", 696, 80], ["Crear un struct y cambiar un campo", "Creating a struct and changing a field", 531, 121], ["Crear una lista de tres", "Creating a three-item list", 886, 248], ["Interpolar dos números en un texto", "Interpolating two numbers into a string", 2238, 669], ["Leer y escribir en una lista", "Reading and writing a list", 197, 68], ["Crear un struct dentro de otro", "Creating a struct inside another", 2106, 791], ["Texto + número", "String + number", 1141, 468], ["Multiplicar Float", "Multiplying Floats", 175, 118], ["Escribir texto en una ventana", "Drawing text in a window", 5389, 3889]] as const;
/** Qué pasa ante una división por cero (medido igual): es, en y si es bueno */
export const DIVISION_CERO = [
  ["Mensaje y salida limpia", "Message and clean exit", true],
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
      "Dash es un lenguaje para programar el Amiga sin pelearse con punteros, estructuras de Intuition ni castings. Se escribe parecido a Ruby o Python y se compila a un ejecutable nativo de 68k, sin intérprete ni máquina virtual.",
    empezar: "Empieza en GitHub",
    vscode: "Extensión para VS Code",
    bola: "La bola Boing, la demo del Amiga de 1984, botando",
    novedades: {
      titulo: "Novedades: Dash 2.0 ya está aquí",
      texto: "Dash 2.0.1 se publicó el 2 de noviembre de 2026 y ya está en la rama principal del repositorio. Hay una sola orden, dash, que compila de dos formas: directo a hunk, por defecto, o por C con el GCC de Amiga, con --gcc.",
      lista: [
        {
          estado: "Nuevo",
          titulo: "Sin compilador de C",
          texto: "El compilador de Dash genera él mismo el código 68000 y el ejecutable del Amiga. Para compilar un programa en Dash ya no hace falta el GCC de Amiga: en Linux o en un Mac, el compilador se construye en unos segundos con el compilador de C del sistema.",
        },
        {
          estado: "Para el Amiga",
          titulo: "Y compila en el propio Amiga",
          texto: "La orden dash funciona en Linux y en el Amiga, desde un 68000 con OS 2.0. Se instala con dash-2.0.1-amiga.lha y su propio instalador, que trae también Forja, el IDE de Dash, e Inferencia, la IA que programa en el Amiga. Un \"hola\" se compila en menos de un segundo en un A1200 emulado, y en 2 o 3 segundos en un A500. El ejecutable que sale es idéntico en el PC y en el Amiga.",
        },
        {
          estado: "Medido",
          titulo: "Los dos caminos, medidos",
          texto: "En la comparativa de abajo salen los dos. El directo empata con el de C en bucles y dibujando líneas, y arranca antes. En textos, listas y coma flotante el camino por C sigue siendo más rápido: de 1,7 a 2 veces en un A1200. Para un programa que necesite cada ciclo, --gcc.",
        },
        {
          estado: "Hecho",
          titulo: "836 funciones, en dos idiomas",
          texto: "Todas están documentadas en castellano y en inglés. Entre las nuevas hay imágenes JPEG, PNG, WebP y SVG que decodifica el propio programa, fuentes TrueType y WOFF, red en segundo plano, un gestor de ventanas y un depurador que también usa VS Code. Con @link se pueden enlazar librerías de C; QuickJS ya funciona compilado directo a hunk.",
        },
        {
          estado: "Se mantiene",
          titulo: "Por C con GCC, con --gcc",
          texto: "Los programas que llevan C dentro (@native) pasan por el GCC de Amiga de bebbo, como en la 1.x: dash lo hace solo, o con --gcc. Y se mantiene pensando en el futuro: GCC sabe generar código PowerPC, el camino para compilar para MorphOS y AmigaOS 4.",
        },
      ],
    },
    indice: {
      titulo: "En esta página",
      enlace: "Enlace a esta sección",
      novedades: "Novedades",
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
      texto: "Aquí tienes tres ejemplos. En cada uno puedes ver el código en Dash, el C que sintetiza el camino por C (dash --gcc) y cómo queda en el Amiga. Sin --gcc, el compilador se salta el C y genera el código 68000 directamente.",
      pasos: ["Dash", "C", "m68k-amigaos-gcc", "Amiga"],
      dash: "Lo que escribes",
      c: "El C que genera Dash",
      amiga: "En el Amiga",
      bytes: "de ejecutable",
      pestanas: { hola: "Una ventana", mui_hola: "MUI", gravedad: "Coma fija" },
      notas: {
        hola: "Una ventana con su bucle de eventos, en quince líneas. El ejecutable completo, con su runtime, ocupa:",
        mui_hola: "Una ventana MUI con dos botones y sus atajos de teclado, sin calcular ninguna coordenada. Funciona con MUI 3.8 y 5.",
        gravedad: "Bolas que caen y rebotan usando números de coma fija. Escribes 0,85 y Dash lo convierte en aritmética entera. En un 68000, multiplicar en Fixed es 2,6 veces más rápido que en Float.",
      },
    },
    todo: {
      titulo: `${BUILTINS} funciones para exprimir el Amiga`,
      texto: "Ventanas, gráficos, sonido, red y el resto del sistema, sin escribir C y sin tener que buscar en qué librería está cada cosa:",
      lista: [
        ["Interfaz", "Intuition, GadTools, ReAction y MUI 3.8 o 5, con zona de dibujo y doble búfer. Puedes usar la que prefieras."],
        ["Gráficos", "Copper, Blitter y BOBs, sprites de hardware y por software, doble búfer, tarjetas gráficas (CyberGraphX y Picasso96) e imágenes IFF, PNG, JPEG o GIF."],
        ["Red", "TCP, UDP y HTTPS con AmiSSL 5.1, que reaprovecha la sesión TLS entre conexiones."],
        ["El lenguaje", "Tipos inferidos, structs con métodos, lambdas, listas y diccionarios con tipo, Float y Fixed 16.16 y módulos. La memoria se libera sola con contadores de referencias, así que no hay un recolector de basura que pare el programa en mitad de una animación."],
        ["En tu idioma", "Los programas pueden salir en el idioma de quien los usa. Los textos se marcan con tr y las traducciones van en catálogos de locale.library, como en los programas del sistema."],
        ["Si hace falta", "Si necesitas ir a más bajo nivel, puedes meter C dentro del código (@native, @c) o enlazar cualquier librería (@link)."],
        ["Sin Gurus", "Un campo de un struct que es nil, una división por cero o una instrucción ilegal ya no tiran el Amiga. El programa dice qué ha pasado y dónde, cierra sus ventanas, libera su memoria y el sistema sigue funcionando. Vale para cualquier Amiga, también para un 68000 sin MMU."],
      ],
    },
    tecnica: {
      titulo: "Bajo el capó",
      texto: "Dash no es un intérprete. Desde la 2.0, su compilador genera él mismo el código de 68k; con --gcc, traduce a C y lo compila GCC, como en la 1.x. Así funciona por dentro:",
      lista: [
        ["La cadena", "El compilador, escrito en C, lee tu .dash, lo comprueba (tipos, nombres, structs), genera el código 68000 y lo enlaza con su runtime en un ejecutable normal de AmigaOS, en el PC o en el propio Amiga. Con --gcc, lo pasa por un analizador hecho con Lark, lo escribe en C y lo compila m68k-amigaos-gcc con -O2."],
        ["Los tipos", "Int de 32 bits, Float, Fixed 16.16, String y Bool; listas [T] y diccionarios {String: T} con tipo; structs con métodos y campos weak, enums, constantes y funciones como valor. Los tipos se deducen solos y casi nunca hace falta escribirlos."],
        ["Los números", "Float se calcula por software, con la suma y la multiplicación en ensamblador de 68000, o con la FPU 68881/68882 si compilas con --fpu. Fixed 16.16 hace decimales con aritmética entera; en un 68000, multiplicar así es 2,6 veces más rápido que con Float."],
        ["La memoria", "Textos, listas y structs llevan un contador de referencias y se liberan solos, igual que los temporales de cada vuelta de un bucle. No hay recolector de basura ni pausas. Para buscar fallos, --memcheck avisa de las dobles liberaciones y de lo que queda sin liberar al salir, y --profile cuenta las llamadas y el tiempo de cada función."],
        ["Lo que sale", "Un ejecutable para Kickstart 3.0 o posterior (usa los pools de memoria de exec V39) que funciona en un 68000. Una ventana con su bucle de eventos ocupa 5 KB. Con --small ocupa un 7 % menos, y con --debug sale preparado para el depurador, con los números de línea de tu .dash."],
        ["Probado en el Amiga", "Más de 300 programas de prueba se compilan y se ejecutan en FS-UAE, en un A1200, un A500 y un A1200 con AmigaOS 3.2, y con MUI, AmiSSL o tarjeta gráfica cuando los necesitan. El compilador tiene unas 30.000 líneas de Python, y VS Code usa ese mismo código para entender el lenguaje."],
      ],
    },
    comparativa: {
      titulo: "Frente a Blitz y AMOS",
      texto:
        "Los mismos programas escritos en Dash, AmiBlitz3, AMOS Professional y C (SAS/C y GCC), compilados con lo que trae Coffin OS y medidos en un A1200 emulado a velocidad real. Dash sale dos veces: compilado directo a hunk y por C con GCC. Por C, en cálculos y llamadas va igual de rápido que C, y con textos y listas es el más rápido de todos; ahí AmiBlitz3 y AMOS tardan de 10 a 40 veces más. El directo empata en bucles y líneas, y en textos, listas y coma flotante tarda de 1,7 a 2 veces lo que el de C. En coma flotante y dibujando líneas gana C.",
      prueba: "Prueba",
      menos: "Menos es mejor. En naranja, el mejor de cada fila.",
      division: "División por cero",
      enlace: "La comparativa completa: también en un A500, el tamaño de los ejecutables, la estabilidad y cómo se midió",
      velocidad: "Velocidad: milisegundos que tarda cada programa de principio a fin. Menos es mejor. Cada barra se compara con la del más lento de su prueba.",
      verCodigo: "Ver el código",
      codigoC: "C (SAS/C y GCC)",
      porqueTitulo: "Por qué salen así",
      porque: [
        ["Dash directo", "El compilador directo genera el código él mismo, sin las optimizaciones de GCC: guarda más valores en memoria y llama al runtime donde GCC mete el código en línea. Por eso, con textos, listas y coma flotante, va más lento que Dash por C. En cambio, arranca antes, no necesita GCC y compila en el propio Amiga."],
        ["Dash por C y GCC", "Dash no compila mejor que GCC. Por C, genera C y lo compila el mismo GCC, así que donde hacen lo mismo empatan (bucle y llamadas). Gana donde usa su propio runtime en vez de la librería de C. Para pasar un número a texto saca dos cifras en cada división, en vez de usar el sprintf de libnix, que tiene que ir leyendo el formato. Para el resto (%) usa la división de 16 bits del 68000 cuando los números caben, en vez de la rutina de 32 bits de libgcc. Y escribe con Printf de dos.library, sin los búferes del printf de C, por eso gasta menos memoria. Un programador de C podría hacer lo mismo a mano. La prueba mide lo que sale escribiendo cada lenguaje de la forma normal."],
        ["SAS/C", "Es un compilador de 1995 que optimiza menos que GCC 6. GCC mete la función dentro del bucle y SAS/C la llama de verdad, así que las llamadas tardan más del doble que con GCC (522 ms frente a 224 ms) y el bucle un 20 % más. Gana en coma flotante porque con MATH=FFP usa el formato rápido de Motorola de la ROM (mathffp.library), que tiene menos precisión que el IEEE de los demás. Su sprintf es más rápido que el de libnix y sus ejecutables son pequeños."],
        ["AmiBlitz3", "Hace los ejecutables más pequeños (476 bytes uno vacío), porque solo enlaza las rutinas que usas, y es el que antes arranca. Con enteros tarda de 6 a 13 veces más que C compilado con GCC. Se compiló con -r, que según su ayuda optimiza el tamaño, y con el resto de opciones por defecto, sin afinarlo ni revisar el código que genera. Sin su depurador no comprueba nada: dividir por cero da 2147483647 y un índice fuera de rango escribe en otra zona de memoria."],
        ["AMOS Pro", "Su compilador copia en cada ejecutable las rutinas de su librería y sus datos de sistema (lo avisa al compilar). Por eso un programa vacío ocupa 54 KB, tarda casi un segundo en arrancar mientras monta su propio sistema de pantallas y usa unos 165 KB. Lo más lento son los procedimientos, que tardan de 34 a 41 veces más que en C. A cambio, comprueba los errores igual que su intérprete: si divides por cero o usas un índice fuera de rango, se para con un mensaje de error."],
      ],
    },
    historia: {
      titulo: "Cada vez más rápido",
      texto: "Dash se mide en un A500 y un A1200 emulados cada vez que cambia algo importante, y se guardan todas las medidas. Esto es lo que ha mejorado en un A500 desde la primera, el 14 de octubre de 2026:",
      antes: "antes",
      ahora: "ahora",
      unidad: "microsegundos por vuelta",
      veces: "veces más rápido",
      hitosTitulo: "Lo que se hizo",
      hitos: [
        ["25 oct.", "Cabecera de objetos de 16 bytes: 1.000 structs pequeños ocupan 24 KB en vez de 33 KB."],
        ["25 oct.", "--cpu 68020 a 68060: compilando para un 68040 en vez de para un 68000, Fixed divide 34 veces más rápido y los textos van un 13 % más deprisa."],
        ["15 oct.", "Fixed 16.16: decimales con aritmética entera, 2,6 veces más rápidos que Float en un 68000."],
        ["15 oct.", "Conteo de referencias completo. Las listas son dueñas de lo que guardan, y los objetos nuevos ya no se ponen a cero porque su constructor rellena todos los campos."],
        ["15 oct.", "Una caché de bloques en clases de 8 bytes para structs y listas, funciones static y pila propia de 16 KB."],
        ["14 oct.", "Float propio, con la suma y la multiplicación en ensamblador de 68000. Multiplicar es ahora 1,5 veces más rápido que con la primera versión, escrita en C."],
        ["14 oct.", "Los temporales de cada vuelta se liberan de una vez; *, / y % usan la división del 68000 cuando los números caben; los textos salen de una caché de bloques y los números se escriben de dos en dos cifras."],
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
      texto: "La extensión \"Dash for Amiga\" colorea el código, marca los errores mientras escribes, autocompleta, salta a la definición y da formato. Compila el programa y lo lanza en FS-UAE o Amiberry, depura con F5 (también en un Amiga real, por la red) e incluye un diseñador visual de ventanas MUI: colocas los objetos y la extensión escribe el código.",
      instalar: `Se instala desde el fichero .vsix de su página en GitHub (versión ${extension.version}).`,
      boton: "Bajar la extensión",
      verVideo: "Reproducir",
      tituloVideo: "Dash para Amiga en VS Code: tutorial de la extensión (6 min)",
      editorMui: "El diseñador visual de ventanas MUI",
    },
    hecho: {
      titulo: "Hecho con Dash",
      texto: "Tachyon y Trasfondo están escritos en Dash. Lo que necesitaban y el lenguaje no tenía se añadió a Dash, así que ahora cualquier programa puede usarlo.",
      tachyon: ["Tachyon", "Un navegador web para AmigaOS 3.x con HTML5, CSS actual, JavaScript ES2023 y HTTPS. Tiene más de 30.000 líneas de Dash y está en alfa."],
      trasfondo: ["Trasfondo", "Un monitor de recursos que se dibuja en el fondo del Workbench, sin tapar nada. Son unas 2.200 líneas de Dash, sin nada de C escrito a mano."],
      tachyonAlt: "Tachyon mostrando un artículo de freemem.space en AmigaOS",
      trasfondoAlt: "El panel de Trasfondo en el escritorio de Coffin",
    },
    requisitos: {
      titulo: "Lo que necesitas",
      amiga: ["En el Amiga", "AmigaOS 3.0 o posterior; con un 68000 basta. Para MUI y HTTPS, un 68020."],
      pc: ["En tu PC", "Linux, macOS o WSL2, con un compilador de C, make y Python 3 para construir el compilador de Dash (en un Mac todavía sin probar). Compilas en el PC y pasas al Amiga un ejecutable listo para usar, o compilas en el propio Amiga. Para --gcc (y los programas con C dentro), además Lark y el compilador cruzado m68k-amigaos-gcc."],
      guia: "Guía para empezar",
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
      "Dash is a language for programming the Amiga without fighting pointers, Intuition structures or casts. It reads a lot like Ruby or Python and compiles to a native 68k executable, with no interpreter or virtual machine.",
    empezar: "Get started on GitHub",
    vscode: "VS Code extension",
    bola: "The Boing ball, the 1984 Amiga demo, bouncing",
    novedades: {
      titulo: "What's new: Dash 2.0 is here",
      texto: "Dash 2.0.1 was released on 2 November 2026 and is now in the repository's main branch. There is one command, dash, which compiles in two ways: straight to hunk, the default, or through C with the Amiga GCC, with --gcc.",
      lista: [
        {
          estado: "New",
          titulo: "No C compiler needed",
          texto: "Dash's compiler produces the 68000 code and the Amiga executable itself. You no longer need the Amiga GCC to build a Dash program: on Linux or a Mac, the compiler builds in a few seconds with the system's C compiler.",
        },
        {
          estado: "For the Amiga",
          titulo: "And it compiles on the Amiga itself",
          texto: "The dash command runs on Linux and on the Amiga, from a 68000 with OS 2.0. It installs with dash-2.0.1-amiga.lha and its own installer, which also brings Forja, Dash's IDE, and Inferencia, the AI that programs on the Amiga. A \"hello\" compiles in under a second on an emulated A1200, and in 2 to 3 seconds on an A500. The executable it produces is identical on the PC and on the Amiga.",
        },
        {
          estado: "Measured",
          titulo: "Both paths, measured",
          texto: "The comparison below shows both. The straight one ties with the C one in loops and drawing lines, and starts faster. With strings, lists and floating point the C path is still faster: 1.7 to 2 times on an A1200. For a program that needs every cycle, --gcc.",
        },
        {
          estado: "Done",
          titulo: "836 functions, in two languages",
          texto: "All of them are documented in English and Spanish. The new ones include JPEG, PNG, WebP and SVG images decoded by the program itself, TrueType and WOFF fonts, background networking, a window manager and a debugger that VS Code uses too. With @link you can link C libraries; QuickJS already works compiled straight to hunk.",
        },
        {
          estado: "Still there",
          titulo: "Through C with GCC, with --gcc",
          texto: "Programs with C inside (@native) go through bebbo's Amiga GCC, as in 1.x: dash does it by itself, or with --gcc. It is also kept with the future in mind: GCC can generate PowerPC code, the way to compiling for MorphOS and AmigaOS 4.",
        },
      ],
    },
    indice: {
      titulo: "On this page",
      enlace: "Link to this section",
      novedades: "What's new",
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
      texto: "Here are three examples. For each one you can see the Dash code, the C that the C path (dash --gcc) synthesizes and how it looks on the Amiga. Without --gcc, the compiler skips the C and generates the 68000 code directly.",
      pasos: ["Dash", "C", "m68k-amigaos-gcc", "Amiga"],
      dash: "What you write",
      c: "The C that Dash generates",
      amiga: "On the Amiga",
      bytes: "executable",
      pestanas: { hola: "A window", mui_hola: "MUI", gravedad: "Fixed point" },
      notas: {
        hola: "A window with its event loop, in fifteen lines. The whole executable, runtime included, takes:",
        mui_hola: "An MUI window with two buttons and their keyboard shortcuts, without working out any coordinates. It works with MUI 3.8 and 5.",
        gravedad: "Balls that fall and bounce using fixed-point numbers. You write 0.85 and Dash turns it into integer maths. On a 68000, multiplying in Fixed is 2.6 times faster than in Float.",
      },
    },
    todo: {
      titulo: `${BUILTINS} functions to get the most out of the Amiga`,
      texto: "Windows, graphics, sound, networking and the rest of the system, without writing C or looking up which library each thing is in:",
      lista: [
        ["Interface", "Intuition, GadTools, ReAction and MUI 3.8 or 5, with a double-buffered drawing area. Use whichever you prefer."],
        ["Graphics", "Copper, Blitter and BOBs, hardware and software sprites, double buffering, graphics cards (CyberGraphX and Picasso96) and IFF, PNG, JPEG or GIF images."],
        ["Network", "TCP, UDP and HTTPS with AmiSSL 5.1, which reuses the TLS session between connections."],
        ["The language", "Type inference, structs with methods, lambdas, typed lists and dictionaries, Float and Fixed 16.16, and modules. Memory is freed automatically with reference counting, so there's no garbage collector stopping your program in the middle of an animation."],
        ["In your language", "Programs can show up in their user's language. Texts are marked with tr and translations go in locale.library catalogs, like the system's own programs."],
        ["When you need it", "If you need to go lower level, you can put C inside your code (@native, @c) or link any library (@link)."],
        ["No Gurus", "A struct field that is nil, a division by zero or an illegal instruction no longer brings the Amiga down. The program says what happened and where, closes its windows, frees its memory and the system keeps running. This works on any Amiga, including a 68000 with no MMU."],
      ],
    },
    tecnica: {
      titulo: "Under the hood",
      texto: "Dash is not an interpreter. Since 2.0, its compiler generates the 68k code itself; with --gcc, it translates to C for GCC to compile, as in 1.x. This is how it works inside:",
      lista: [
        ["The pipeline", "The compiler, written in C, reads your .dash, checks it (types, names, structs), generates the 68000 code and links it with its runtime into a normal AmigaOS executable, on the PC or on the Amiga itself. With --gcc, it runs it through a parser built with Lark, writes it out as C and m68k-amigaos-gcc compiles it with -O2."],
        ["The types", "32-bit Int, Float, Fixed 16.16, String and Bool; typed lists [T] and dictionaries {String: T}; structs with methods and weak fields, enums, constants and functions as values. Types are inferred, so you hardly ever need to write them."],
        ["The numbers", "Float is calculated in software, with addition and multiplication in 68000 assembly, or with the 68881/68882 FPU if you compile with --fpu. Fixed 16.16 does decimals with integer maths; on a 68000, multiplying this way is 2.6 times faster than with Float."],
        ["Memory", "Strings, lists and structs have a reference count and are freed automatically, and so are the temporaries of each loop iteration. There's no garbage collector and no pauses. To find bugs, --memcheck reports double frees and anything left unfreed at exit, and --profile counts the calls and time of each function."],
        ["What comes out", "An executable for Kickstart 3.0 or later (it uses exec V39 memory pools) that runs on a 68000. A window with its event loop takes 5 KB. With --small it is 7% smaller, and with --debug it comes out ready for the debugger, with the line numbers of your .dash."],
        ["Tested on the Amiga", "Over 300 test programs are compiled and run in FS-UAE, on an A1200, an A500 and an A1200 with AmigaOS 3.2, plus MUI, AmiSSL or a graphics card when they need them. The compiler is about 30,000 lines of Python, and VS Code uses that same code to understand the language."],
      ],
    },
    comparativa: {
      titulo: "Against Blitz and AMOS",
      texto:
        "The same programs written in Dash, AmiBlitz3, AMOS Professional and C (SAS/C and GCC), built with the compilers that come with Coffin OS and measured on an emulated A1200 at real speed. Dash shows up twice: compiled straight to hunk and through C with GCC. Through C, it is as fast as C for arithmetic and calls, and the fastest of all with strings and lists; there AmiBlitz3 and AMOS take 10 to 40 times longer. The straight one ties in loops and lines, and with strings, lists and floating point it takes 1.7 to 2 times as long as the C one. C wins at floating point and drawing lines.",
      prueba: "Test",
      menos: "Lower is better. The best of each row is in orange.",
      division: "Division by zero",
      enlace: "The full comparison: also on an A500, executable sizes, stability and how it was measured",
      velocidad: "Speed: milliseconds each program takes from start to finish. Lower is better. Each bar is compared with the slowest one in its test.",
      verCodigo: "Show the code",
      codigoC: "C (SAS/C and GCC)",
      porqueTitulo: "Why the numbers look like this",
      porque: [
        ["Dash straight", "The straight compiler generates the code itself, without GCC's optimizations: it keeps more values in memory and calls the runtime where GCC puts the code inline. That is why, with strings, lists and floating point, it is slower than Dash through C. On the other hand, it starts faster, needs no GCC and compiles on the Amiga itself."],
        ["Dash through C and GCC", "Dash doesn't compile better than GCC. Through C, it writes C that the same GCC compiles, so where both do the same work they tie (loop and calls). It wins where it uses its own runtime instead of the C library. To turn a number into text it gets two digits per division, instead of using libnix's sprintf, which has to parse the format as it goes. For the remainder (%) it uses the 68000's 16-bit division when the numbers fit, instead of libgcc's 32-bit routine. And it prints with dos.library's Printf, without C's printf buffers, which is why it uses less memory. A C programmer could do the same by hand. The test measures what you get writing each language the normal way."],
        ["SAS/C", "It's a 1995 compiler that optimizes less than GCC 6. GCC puts the function inside the loop while SAS/C really calls it, so calls take more than twice as long as with GCC (522 ms against 224 ms) and the loop 20% longer. It wins at floating point because with MATH=FFP it uses Motorola's fast format from the ROM (mathffp.library), which is less precise than the others' IEEE. Its sprintf is faster than libnix's and its executables are small."],
        ["AmiBlitz3", "It makes the smallest executables (476 bytes for an empty one), because it only links the routines you use, and it starts the fastest. With integers it takes 6 to 13 times longer than C built with GCC. It was built with -r, which its help says optimizes for size, and every other option at its default, without tuning it or checking the code it generates. Without its debugger it checks nothing: dividing by zero gives 2147483647 and an index out of range writes over other memory."],
        ["AMOS Pro", "Its compiler copies its library routines and system data into every executable (it tells you while compiling). That's why an empty program takes 54 KB, needs almost a second to start while it sets up its own screen system, and uses about 165 KB. Procedures are the slowest part: they take 34 to 41 times longer than in C. In return, it checks errors like its interpreter does: if you divide by zero or use an index out of range, it stops with an error message."],
      ],
    },
    historia: {
      titulo: "Faster and faster",
      texto: "Dash is measured on an emulated A500 and A1200 whenever something important changes, and every measurement is kept. This is how much it has improved on an A500 since the first one, on 14 October 2026:",
      antes: "before",
      ahora: "now",
      unidad: "microseconds per iteration",
      veces: "times faster",
      hitosTitulo: "What was done",
      hitos: [
        ["25 Oct", "16-byte object header: 1,000 small structs take 24 KB instead of 33 KB."],
        ["25 Oct", "--cpu 68020 to 68060: compiling for a 68040 instead of a 68000, Fixed divides 34 times faster and strings are 13% quicker."],
        ["15 Oct", "Fixed 16.16: decimals with integer maths, 2.6 times faster than Float on a 68000."],
        ["15 Oct", "Full reference counting. Lists own what they hold, and new objects are no longer cleared because their constructor fills every field."],
        ["15 Oct", "A block cache in 8-byte classes for structs and lists, static functions and a 16 KB stack of its own."],
        ["14 Oct", "Dash's own Float, with addition and multiplication in 68000 assembly. Multiplying is now 1.5 times faster than with the first version, written in C."],
        ["14 Oct", "Each iteration's temporaries are freed at once; *, / and % use the 68000's division when the numbers fit; strings come from a block cache and numbers are written two digits at a time."],
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
      texto: "The \"Dash for Amiga\" extension highlights your code, flags errors as you type, completes, jumps to definitions and formats. It compiles your program and runs it on FS-UAE or Amiberry, debugs with F5 (on a real Amiga too, over the network) and includes a visual MUI window designer: you place the objects and the extension writes the code.",
      instalar: `Install it from the .vsix file on its GitHub page (version ${extension.version}).`,
      boton: "Download the extension",
      verVideo: "Play",
      tituloVideo: "Dash for Amiga in VS Code: extension tutorial (6 min, Spanish)",
      editorMui: "The visual MUI window designer",
    },
    hecho: {
      titulo: "Made with Dash",
      texto: "Tachyon and Trasfondo are written in Dash. Whatever they needed that the language didn't have was added to Dash, so now any program can use it.",
      tachyon: ["Tachyon", "A web browser for AmigaOS 3.x with HTML5, current CSS, JavaScript ES2023 and HTTPS. It has over 30,000 lines of Dash and is in alpha."],
      trasfondo: ["Trasfondo", "A resource monitor drawn on the Workbench backdrop, without covering anything. About 2,200 lines of Dash, with no hand-written C."],
      tachyonAlt: "Tachyon showing a freemem.space article on AmigaOS",
      trasfondoAlt: "The Trasfondo panel on the Coffin desktop",
    },
    requisitos: {
      titulo: "What you need",
      amiga: ["On the Amiga", "AmigaOS 3.0 or later; a 68000 is enough. For MUI and HTTPS, a 68020."],
      pc: ["On your PC", "Linux, macOS or WSL2, with a C compiler, make and Python 3 to build Dash's compiler (not tried on a Mac yet). You compile on the PC and copy a ready-to-run executable to the Amiga, or you compile on the Amiga itself. For --gcc (and programs with C inside), also Lark and the m68k-amigaos-gcc cross compiler."],
      guia: "Getting started guide",
    },
    pie: [
      { texto: "Dash on GitHub", url: REPO },
      { texto: "Tutorial on YouTube", url: `https://youtu.be/${VIDEO}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

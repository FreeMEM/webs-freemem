import type { Idioma } from "retro";

import extension from "./version.json";

/** Los textos de la web de Dash. Cifras de docs/BUILTINS.md, el README y el ROADMAP del repositorio. */
export const REPO = "https://github.com/FreeMEM/dash";
/** La última versión de la extensión de VS Code: la pone herramientas/versiones.py antes de construir. */
export const EXTENSION = extension.notas;
export const VIDEO = "_UTJ_0s3xLc";
export const BASE = "https://dash.freemem.space";
export const BUILTINS = 893;

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
  ["Nuevas en la 2.2: mapas de tiles, pantallas, sprites y BOBs", "New in 2.2: tile maps, screens, sprites and BOBs", 57],
] as const;

/** Dash frente a Blitz, AMOS y C (docs/COMPARATIVA.md de Dash, tools/comparativa): A1200 emulado a velocidad
 *  real, milisegundos por programa (menos es mejor); memoria en KB al ejecutar. Columnas: Dash, AmiBlitz3, AMOS
 *  Pro, SAS/C, GCC. Dash por sus dos caminos, medido de nuevo el 2026-11-03 con la 2.0.2; los demás, de la primera medida. */
export const LENGUAJES = ["Dash (directo)", "Dash (por C)", "AmiBlitz3", "AMOS Pro", "SAS/C", "GCC (C)"] as const;
/** Las dos primeras columnas son Dash: el compilador directo (./dash) y el camino por C con gcc (./dash --gcc) */
export const COLUMNAS_DASH = 2;
export const COMPARATIVA = [
  ["Arranque (programa vacío), ms", "Startup (empty program), ms", [37, 46, 34, 862, 36, 42]],
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
export const VELOCIDAD = {"a1200": {"bucle": [632, 645, 7399, 9963, 754, 629], "llamada": [249, 224, 2115, 9080, 522, 224], "texto": [1381, 1522, 4001, 3049, 3591, 6062], "lista": [1790, 1555, 31375, 25837, 3159, 2399], "flotante": [491, 493, 845, 1865, 277, 497], "lineas": [4935, 5009, 5818, 5694, 4652, 4654]}, "a500": {"bucle": [2833, 3233, 30298, 36385, 3879, 2861], "llamada": [1086, 1068, 9803, 33674, 2698, 987], "texto": [5951, 6413, 13862, 10306, 15421, 29780], "lista": [8468, 7539, 106401, 78128, 13437, 16586], "flotante": [2421, 2388, 3375, 5355, 1243, 2027], "lineas": [6684, 6729, 9549, 9222, 5826, 5744]}} as const;
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
      titulo: "Novedades: Dash 2.2",
      texto: "La última versión es la 2.3.1, del 4 de noviembre de 2026. Trae en el paquete del Amiga dashgit, un git escrito en Dash, todavía en alfa. Compila también para DashOS (AArch64), trae lo que piden el dock y los colores de Trasfondo y lo que necesita dashgit, un git escrito en Dash, y un instalador que pone al día una instalación anterior. Desde la 2.0, con la misma orden, dash, un programa se compila de dos formas: a un ejecutable hunk nativo del Amiga, o a C intermedio que compila GCC.",
      lista: [
        {
          estado: "Nuevo en la 2.2",
          titulo: "Para hacer juegos",
          texto: "Mapas de tiles con capas, celdas en espejo y objetos (tilemap_*), en el formato del editor de mapas de Forja; tilemap_draw pinta un trozo del mapa de una vez. Sprites acoplados de 15 colores, bob_paste para pintar un fotograma con máscara, doble búfer de pantalla (screen_double_buffer y screen_flip) y key_down, que dice si una tecla está pulsada ahora. Lo que ya compilaba sigue igual; solo cambia que una ventana sin pantalla propia se abre en la pantalla pública por defecto, que casi siempre es el Workbench.",
        },
        {
          estado: "Desde la 2.0",
          titulo: "Dos formas de compilar",
          texto: "Por defecto, dash genera directamente el ejecutable hunk nativo del Amiga, con su código 68000. Con --gcc genera C intermedio y lo compila el GCC de Amiga. El lenguaje, las funciones y lo que hace el programa son los mismos por los dos caminos.",
        },
        {
          estado: "Para el Amiga",
          titulo: "Y compila en el propio Amiga",
          texto: "La orden dash funciona en Linux y en el Amiga, desde un 68000 con OS 2.0. Se instala con dash-2.3.1-amiga.lha y su propio instalador, que trae también Forja, el IDE de Dash, con sus editores de sprites y de mapas, e Inferencia, la IA que programa en el Amiga. Un \"hola\" se compila en menos de un segundo en un A1200 emulado, y en 2 o 3 segundos en un A500. El ejecutable que sale es idéntico en el PC y en el Amiga.",
        },
        {
          estado: "Medido",
          titulo: "Los dos caminos, medidos",
          texto: "En la comparativa de abajo salen los dos. El directo es más rápido que el de C en textos y bucles, y arranca antes; en coma flotante y dibujando líneas empatan. El de C sigue por delante con listas (un 15 %) y en llamadas a funciones en un A1200 (un 11 %).",
        },
        {
          estado: "Hecho",
          titulo: "893 funciones, en dos idiomas",
          texto: "Todas están documentadas en castellano y en inglés. Entre las nuevas de la 2.x hay imágenes JPEG, PNG, WebP y SVG que decodifica el propio programa, fuentes TrueType y WOFF, red en segundo plano, un gestor de ventanas, un depurador que también usa VS Code y, en la 2.2, mapas de tiles. Con @link se pueden enlazar librerías de C; QuickJS ya funciona compilado directo a hunk.",
        },
        {
          estado: "Futuro",
          titulo: "C intermedio, camino a PowerPC",
          texto: "El modo --gcc genera C y lo compila el GCC de Amiga de bebbo. Hoy da ejecutables de 68000 y sirve para los programas que llevan C dentro (@native). Esos ejecutables ya funcionan en MorphOS con su emulación de 68k. Como GCC también genera código PowerPC, por ahí llegará la versión nativa para MorphOS y AmigaOS 4.",
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
        ["Gráficos", "Copper, Blitter y BOBs, sprites de hardware (también acoplados) y por software, mapas de tiles con capas y objetos, doble búfer, tarjetas gráficas (CyberGraphX y Picasso96) e imágenes IFF, PNG, JPEG o GIF."],
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
        ["Probado en el Amiga", "Más de 400 programas de prueba se compilan y se ejecutan en FS-UAE, en un A1200, un A500 y un A1200 con AmigaOS 3.2, y con MUI, AmiSSL o tarjeta gráfica cuando los necesitan. El compilador directo está escrito en C (unas 13.000 líneas). El camino por C es de Python (unas 42.000 líneas), y VS Code usa ese mismo código para entender el lenguaje."],
      ],
    },
    comparativa: {
      titulo: "Frente a Blitz y AMOS",
      texto:
        "Los mismos programas escritos en Dash, AmiBlitz3, AMOS Professional y C (SAS/C y GCC), compilados con lo que trae Coffin OS y medidos en un A1200 emulado a velocidad real. Dash sale dos veces: compilado directo a hunk y por C con GCC. Por C, en cálculos y llamadas va igual de rápido que C, y con textos y listas es el más rápido de todos; ahí AmiBlitz3 y AMOS tardan de 10 a 40 veces más. El directo va más rápido que el de C en textos y bucles, empata en coma flotante y líneas, y va algo más lento con listas. En coma flotante y dibujando líneas gana C.",
      prueba: "Prueba",
      menos: "Menos es mejor. En naranja, el mejor de cada fila.",
      division: "División por cero",
      enlace: "La comparativa completa: también en un A500, el tamaño de los ejecutables, la estabilidad y cómo se midió",
      velocidad: "Velocidad: milisegundos que tarda cada programa de principio a fin. Menos es mejor. Cada barra se compara con la del más lento de su prueba.",
      verCodigo: "Ver el código",
      codigoC: "C (SAS/C y GCC)",
      porqueTitulo: "Por qué salen así",
      porque: [
        ["Dash directo", "El compilador directo genera el código él mismo. Hace en línea el acceso a las listas, saca del bucle los cálculos que no cambian y une texto y número en una sola llamada, escrita para eso. Con listas aún va algo más lento que Dash por C, porque GCC comprueba una sola vez, fuera del bucle, que la lista existe. Arranca antes y compila también en el propio Amiga."],
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
        ["8 nov.", "Dash 2.6.3: el paquete del Amiga trae Forja 0.5.1, donde al depurar el código ya no salta ni se repinta entero (lo contó David Martínez)."],
        ["8 nov.", "Dash 2.6.2: las interpolaciones con más de 16 números ya salen bien en ./dash, y Forja 0.5 elige dónde dejar los ejecutables (idea de Ferrán García)."],
        ["7 nov.", "Dash 2.6.1: dos programas con lienzo en el escritorio a la vez (Trasfondo y otro) ya no cuelgan la pantalla, y los sprites en una pantalla PAL normal ya no avisan de RTG."],
        ["7 nov.", "Dash 2.6.0: soltar iconos del Workbench sobre las ventanas MUI (Tachyon abre así una página guardada), los builtins propios de DashOS y return en Main por los dos caminos."],
        ["7 nov.", "Dash 2.5.0: arreglos del compilador que encontró Forja, la fuga de memoria del fondo de Trasfondo e imágenes a otro tamaño con bordes suaves; el paquete del Amiga trae Forja 0.4, con autocompletado e ir a la definición, y dashgit 0.2 alfa."],
        ["6 nov.", "Dash 2.4.0: un puerto ARexx propio, avisos en el escritorio, iconos a otro tamaño y pegar con Amiga + V en los campos de GadTools y ReAction."],
        ["4 nov.", "Dash 2.3.1: el paquete del Amiga trae dashgit (en alfa, con mucho por probar) y Forja 0.3 con su menú Git; y la red ya se cierra al salir con el compilador directo."],
        ["4 nov.", "Dash 2.3.0: compila para DashOS (AArch64), SHA-1 y lo demás para dashgit, iconos .info y ventanas de otros programas para el dock de Trasfondo, y un instalador que pone al día la instalación anterior sin cortar el arranque."],
        ["3 nov.", "Dash 2.2.0: mapas de tiles con capas y objetos, sprites acoplados, doble búfer de pantalla y key_down, lo que piden los editores de Forja y Fragua, la biblioteca de juegos."],
        ["3 nov.", "Dash 2.1.0: el mismo C enlazado vale por los dos caminos, el directo y por C con GCC, el paso para llevar programas a PowerPC."],
        ["3 nov.", "Dash 2.0.2: el compilador directo une textos en la mitad de tiempo y ya es más rápido que el camino por C en textos y bucles."],
        ["2 nov.", "Dash 2.0.1: una sola orden, dash, directo a hunk o por C con --gcc. Varios programas que miden la CPU a la vez ven todas las tareas."],
        ["31 oct.", "Dash 2.0: un compilador propio genera el código 68000 sin GCC, en el PC o en el propio Amiga. Un \"hola\" se compila en menos de un segundo en un A1200."],
        ["30 oct.", "Los bloques pequeños vuelven al sistema: tras soltar 3.000 structs con texto, el programa devuelve 149 KB que antes se quedaba."],
        ["28 oct.", "Dash 1.0.1: cada texto guarda su longitud. Texto + número va un 17 % más rápido, buscar en un diccionario con una clave literal un 34-41 %, y cada programa usa 8 KB menos de memoria."],
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
        ["INSTALACION", "Instalación", "Dash en el Amiga o en el PC (directo o por C con gcc) y el emulador, paso a paso"],
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
      texto: "Tachyon y Trasfondo están escritos en Dash, y también Forja, el IDE de Dash, e Inferencia, la IA para el Amiga. Lo que necesitaban y el lenguaje no tenía se añadió a Dash, así que ahora cualquier programa puede usarlo.",
      tachyon: ["Tachyon", "Un navegador web para AmigaOS 3.x con HTML5, CSS actual, JavaScript ES2023 y HTTPS. Tiene más de 30.000 líneas de Dash y está en alfa."],
      trasfondo: ["Trasfondo", "Un monitor de recursos que se dibuja en el fondo del Workbench, sin tapar nada. Son unas 2.200 líneas de Dash, sin nada de C escrito a mano."],
      tachyonAlt: "Tachyon mostrando un artículo de freemem.space en AmigaOS",
      trasfondoAlt: "El panel de Trasfondo en el escritorio de Coffin",
    },
    requisitos: {
      titulo: "Lo que necesitas",
      amiga: ["Para los programas", "AmigaOS 3.0 o posterior; con un 68000 basta. Para MUI y HTTPS, un 68020. También funcionan en MorphOS, con su emulación de 68k."],
      instalarAmiga: ["Para compilar en el Amiga", "Un 68000 y AmigaOS 2.0 o posterior. Descarga dash-2.3.1-amiga.lha de las releases de GitHub, descomprímelo y haz doble clic en Instalar: deja el cajón Dash donde elijas y añade el Assign DASH: y el Path a S:User-Startup (si ya tienes Dash, lo pone al día en su sitio). Luego, en un Shell: dash DASH:examples/hola.dash -o RAM:hola. Trae también Forja, el IDE de Dash, e Inferencia, la IA que programa en el Amiga (las dos usan MUI: Forja, la 3.8 o la 5; Inferencia, la 5)."],
      pc: ["Para compilar en el PC", "Linux, macOS o WSL2, con un compilador de C, make y Python 3 para construir el compilador de Dash (en un Mac todavía sin probar). Compilas en el PC y pasas al Amiga un ejecutable listo para usar, o compilas en el propio Amiga. Para --gcc (y los programas con C dentro), además Lark y el compilador cruzado m68k-amigaos-gcc."],
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
      titulo: "What's new: Dash 2.2",
      texto: "The latest version is 2.3.1, from 4 November 2026. Its Amiga package brings dashgit, a git written in Dash, still in alpha. It also compiles for DashOS (AArch64), brings what Trasfondo's dock and colours ask for and what dashgit, a git written in Dash, needs, and an installer that updates an earlier installation. Since 2.0, with the same command, dash, a program compiles in two ways: to a native Amiga hunk executable, or to intermediate C that GCC compiles.",
      lista: [
        {
          estado: "New in 2.2",
          titulo: "For making games",
          texto: "Tile maps with layers, mirrored cells and objects (tilemap_*), in the format of Forja's map editor; tilemap_draw draws a piece of the map in one go. Attached 15-colour sprites, bob_paste to draw a frame with its mask, screen double buffering (screen_double_buffer and screen_flip) and key_down, which tells whether a key is held down right now. What compiled before still does; the only change is that a window without its own screen opens on the default public screen, which is nearly always the Workbench.",
        },
        {
          estado: "Since 2.0",
          titulo: "Two ways to compile",
          texto: "By default, dash generates the native Amiga hunk executable directly, with its 68000 code. With --gcc it generates intermediate C and the Amiga GCC compiles it. The language, the functions and what the program does are the same on both paths.",
        },
        {
          estado: "For the Amiga",
          titulo: "And it compiles on the Amiga itself",
          texto: "The dash command runs on Linux and on the Amiga, from a 68000 with OS 2.0. It installs with dash-2.3.1-amiga.lha and its own installer, which also brings Forja, Dash's IDE, with its sprite and map editors, and Inferencia, the AI that programs on the Amiga. A \"hello\" compiles in under a second on an emulated A1200, and in 2 to 3 seconds on an A500. The executable it produces is identical on the PC and on the Amiga.",
        },
        {
          estado: "Measured",
          titulo: "Both paths, measured",
          texto: "The comparison below shows both. The straight one is faster than the C one with strings and loops, and starts faster; at floating point and drawing lines they tie. The C one is still ahead with lists (15%) and with function calls on an A1200 (11%).",
        },
        {
          estado: "Done",
          titulo: "893 functions, in two languages",
          texto: "All of them are documented in English and Spanish. The new ones in 2.x include JPEG, PNG, WebP and SVG images decoded by the program itself, TrueType and WOFF fonts, background networking, a window manager, a debugger that VS Code uses too and, in 2.2, tile maps. With @link you can link C libraries; QuickJS already works compiled straight to hunk.",
        },
        {
          estado: "Future",
          titulo: "Intermediate C, the way to PowerPC",
          texto: "The --gcc mode generates C and bebbo's Amiga GCC compiles it. Today it makes 68000 executables and handles programs with C inside (@native). Those executables already run on MorphOS through its 68k emulation. Since GCC also generates PowerPC code, that is how the native version for MorphOS and AmigaOS 4 will come.",
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
        ["Graphics", "Copper, Blitter and BOBs, hardware (also attached) and software sprites, tile maps with layers and objects, double buffering, graphics cards (CyberGraphX and Picasso96) and IFF, PNG, JPEG or GIF images."],
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
        ["Tested on the Amiga", "Over 400 test programs are compiled and run in FS-UAE, on an A1200, an A500 and an A1200 with AmigaOS 3.2, plus MUI, AmiSSL or a graphics card when they need them. The direct compiler is written in C (about 13,000 lines). The path through C is Python (about 42,000 lines), and VS Code uses that same code to understand the language."],
      ],
    },
    comparativa: {
      titulo: "Against Blitz and AMOS",
      texto:
        "The same programs written in Dash, AmiBlitz3, AMOS Professional and C (SAS/C and GCC), built with the compilers that come with Coffin OS and measured on an emulated A1200 at real speed. Dash shows up twice: compiled straight to hunk and through C with GCC. Through C, it is as fast as C for arithmetic and calls, and the fastest of all with strings and lists; there AmiBlitz3 and AMOS take 10 to 40 times longer. The straight one is faster than the C one with strings and loops, ties at floating point and lines, and is a little slower with lists. C wins at floating point and drawing lines.",
      prueba: "Test",
      menos: "Lower is better. The best of each row is in orange.",
      division: "Division by zero",
      enlace: "The full comparison: also on an A500, executable sizes, stability and how it was measured",
      velocidad: "Speed: milliseconds each program takes from start to finish. Lower is better. Each bar is compared with the slowest one in its test.",
      verCodigo: "Show the code",
      codigoC: "C (SAS/C and GCC)",
      porqueTitulo: "Why the numbers look like this",
      porque: [
        ["Dash straight", "The straight compiler generates the code itself. It does list access inline, moves calculations that don't change out of the loop and joins string and number in a single call written for it. With lists it is still a little slower than Dash through C, because GCC checks only once, outside the loop, that the list exists. It starts faster and also compiles on the Amiga itself."],
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
        ["8 Nov", "Dash 2.6.3: the Amiga package brings Forja 0.5.1, where the code no longer jumps or repaints as a whole while debugging (reported by David Martínez)."],
        ["8 Nov", "Dash 2.6.2: interpolations with more than 16 numbers now come out right in ./dash, and Forja 0.5 picks where the executables go (an idea of Ferrán García)."],
        ["7 Nov", "Dash 2.6.1: two programs with a desktop canvas at once (Trasfondo and another) no longer hang the display, and sprites on a plain PAL screen no longer warn about RTG."],
        ["7 Nov", "Dash 2.6.0: dropping Workbench icons on MUI windows (Tachyon opens a saved page that way), DashOS's own builtins and return in Main both ways."],
        ["7 Nov", "Dash 2.5.0: compiler fixes found by Forja, the memory leak in Trasfondo's backdrop and pictures at another size with smooth edges; the Amiga package brings Forja 0.4, with completion and go to definition, and dashgit 0.2 alpha."],
        ["6 Nov", "Dash 2.4.0: an ARexx port of its own, desktop notifications, icons at another size and pasting with Amiga + V in GadTools and ReAction fields."],
        ["4 Nov", "Dash 2.3.1: the Amiga package brings dashgit (in alpha, with much still to test) and Forja 0.3 with its Git menu; and the network now closes at exit with the direct compiler."],
        ["4 Nov", "Dash 2.3.0: compiles for DashOS (AArch64), SHA-1 and the rest for dashgit, .info icons and other programs' windows for Trasfondo's dock, and an installer that updates the earlier installation without stopping the boot."],
        ["3 Nov", "Dash 2.2.0: tile maps with layers and objects, attached sprites, screen double buffering and key_down, what Forja's editors and Fragua, the games library, need."],
        ["3 Nov", "Dash 2.1.0: the same linked C works on both paths, straight and through C with GCC, the step to take programs to PowerPC."],
        ["3 Nov", "Dash 2.0.2: the straight compiler joins strings in half the time and is now faster than the C path with strings and loops."],
        ["2 Nov", "Dash 2.0.1: one command, dash, straight to hunk or through C with --gcc. Several programs measuring the CPU at once see every task."],
        ["31 Oct", "Dash 2.0: its own compiler generates the 68000 code without GCC, on the PC or on the Amiga itself. A \"hello\" compiles in under a second on an A1200."],
        ["30 Oct", "Small blocks go back to the system: after freeing 3,000 structs with text, the program returns 149 KB it used to keep."],
        ["28 Oct", "Dash 1.0.1: every string keeps its length. String + number is 17% faster, looking up a dictionary with a literal key 34-41% faster, and every program uses 8 KB less memory."],
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
        ["INSTALACION", "Installation", "Dash on the Amiga or on the PC (straight or through C with gcc) and the emulator, step by step"],
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
      texto: "Tachyon and Trasfondo are written in Dash, and so are Forja, Dash's IDE, and Inferencia, the AI for the Amiga. Whatever they needed that the language didn't have was added to Dash, so now any program can use it.",
      tachyon: ["Tachyon", "A web browser for AmigaOS 3.x with HTML5, current CSS, JavaScript ES2023 and HTTPS. It has over 30,000 lines of Dash and is in alpha."],
      trasfondo: ["Trasfondo", "A resource monitor drawn on the Workbench backdrop, without covering anything. About 2,200 lines of Dash, with no hand-written C."],
      tachyonAlt: "Tachyon showing a freemem.space article on AmigaOS",
      trasfondoAlt: "The Trasfondo panel on the Coffin desktop",
    },
    requisitos: {
      titulo: "What you need",
      amiga: ["For the programs", "AmigaOS 3.0 or later; a 68000 is enough. For MUI and HTTPS, a 68020. They also run on MorphOS, through its 68k emulation."],
      instalarAmiga: ["To compile on the Amiga", "A 68000 and AmigaOS 2.0 or later. Download dash-2.3.1-amiga.lha from the GitHub releases, unpack it and double-click Instalar: it puts the Dash drawer wherever you choose and adds the DASH: assign and the Path to S:User-Startup (if you already have Dash, it updates it where it is). Then, in a Shell: dash DASH:examples/hola.dash -o RAM:hola. It also brings Forja, Dash's IDE, and Inferencia, the AI that programs on the Amiga (both use MUI: Forja 3.8 or 5, Inferencia 5)."],
      pc: ["To compile on the PC", "Linux, macOS or WSL2, with a C compiler, make and Python 3 to build Dash's compiler (not tried on a Mac yet). You compile on the PC and copy a ready-to-run executable to the Amiga, or you compile on the Amiga itself. For --gcc (and programs with C inside), also Lark and the m68k-amigaos-gcc cross compiler."],
      guia: "Getting started guide",
    },
    pie: [
      { texto: "Dash on GitHub", url: REPO },
      { texto: "Tutorial on YouTube", url: `https://youtu.be/${VIDEO}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

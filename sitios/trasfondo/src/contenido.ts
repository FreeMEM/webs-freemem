import { tamano, type Idioma } from "retro";

import version from "./version.json";

/** Los textos de la web en sus dos idiomas. Cada promesa, contrastada con el README y las notas de las versiones. */
/** La última release: la pone herramientas/versiones.py antes de construir. */
export const VERSION = version.version;
export const DESCARGA = version.descarga;
export const RELEASE = version.notas;
export const REPO = "https://github.com/FreeMEM/trasfondo";
export const VERSIONES = `${REPO}/releases`;
/** El vídeo de cada idioma (el de la 2.9, grabado en CoffinOS con tarjeta gráfica). */
export const VIDEO = { es: "8QoDB70rUyU", en: "D6iDQhWC1JI" } satisfies Record<Idioma, string>;
export const BASE = "https://trasfondo.freemem.space";

/** Las funciones, en el orden de la franja de la portada y de sus secciones. El icono, en IconoFuncion.tsx. */
export type IdFuncion = "monitor" | "encajar" | "alttab" | "espacios" | "archivos" | "barra" | "dock" | "colores";

/** Una imagen de una función: la ruta lleva {idioma} si hay una captura por idioma. */
type Imagen = {
  readonly src: string;
  /** El ancho de la imagen, o uno por idioma si no miden igual (TrasfondoPrefs es más ancha en castellano). */
  readonly ancho: number | Record<Idioma, number>;
  readonly alto: number;
  readonly marco?: string;
};

/** TrasfondoPrefs 2.9.13 en CoffinOS: 475 de ancho en castellano y 402 en inglés. */
export const ANCHO_PREFS = { es: 475, en: 402 } satisfies Record<Idioma, number>;

/**
 * Las capturas de cada función. Las de las ventanas, los espacios, la tira y el explorador son de Trasfondo 2.9.13 en
 * CoffinOS R65 con tarjeta gráfica (Amiberry, 1280x1024), sacadas el 22/11/2026 con ~/.cache/web-trasfondo.
 */
export const IMAGENES: Record<IdFuncion, readonly Imagen[]> = {
  monitor: [{ src: "/imagenes/panel-rtg-{idioma}.webp", ancho: 870, alto: 696, marco: "Workbench Screen" }],
  encajar: [{ src: "/imagenes/encajar-{idioma}.webp", ancho: 1024, alto: 819 }],
  alttab: [
    { src: "/imagenes/alttab-{idioma}.webp", ancho: 640, alto: 512 },
    { src: "/imagenes/menu-{idioma}.webp", ancho: 640, alto: 512 },
  ],
  espacios: [
    { src: "/imagenes/espacio-{idioma}.webp", ancho: 1024, alto: 819 },
    { src: "/imagenes/tira-{idioma}.webp", ancho: 1024, alto: 819 },
  ],
  archivos: [
    { src: "/imagenes/archivos-dos-{idioma}.webp", ancho: 895, alto: 716 },
    { src: "/imagenes/archivos-iconos-{idioma}.webp", ancho: 895, alto: 716 },
  ],
  barra: [{ src: "/imagenes/barra-{idioma}.webp", ancho: 640, alto: 384 }],
  dock: [{ src: "/imagenes/dock-{idioma}.webp", ancho: 600, alto: 104 }],
  colores: [
    { src: "/imagenes/prefs-colores-{idioma}.webp", ancho: ANCHO_PREFS, alto: 421 },
    { src: "/imagenes/prefs-arranque-{idioma}.webp", ancho: ANCHO_PREFS, alto: 421 },
  ],
};

/** Una función de la página: la casilla de la franja (corto y frase) y su sección. */
export type Funcion = {
  readonly id: IdFuncion;
  readonly corto: string;
  readonly frase: string;
  readonly titulo: string;
  readonly entradilla: string;
  readonly texto: readonly string[];
  readonly teclas?: readonly (readonly [string, string])[];
  readonly lista?: readonly { readonly que: string; readonly como: string }[];
  readonly nota?: string;
  /** El pie de cada imagen, en el orden de IMAGENES. */
  readonly pies: readonly string[];
};

const FUNCIONES_ES: readonly Funcion[] = [
  {
    id: "monitor",
    corto: "Monitor en el fondo",
    frase: "CPU, memoria, tareas, discos y red, detrás de tus iconos.",
    titulo: "El monitor, pintado en el fondo",
    entradilla: "No es una ventana. Está pintado en el fondo del Workbench: no tapa nada ni se queda con tus clics.",
    texto: ["Sale arriba a la derecha, o en la esquina que elijas. Se pone al día cada 2 segundos, o cada 1, 5 o 10."],
    lista: [
      { que: "Fecha y hora", como: "Arriba del todo y en tu idioma, por ejemplo \"sábado 24-oct-26\", con la hora." },
      { que: "CPU", como: "Lo que trabaja el procesador y una gráfica de los dos últimos minutos: 60 medidas, una cada 2 segundos. Se mide tarea a tarea, no se estima." },
      { que: "Memoria", como: "La Chip y la Fast libres y, si quieres, una gráfica de la memoria en uso." },
      { que: "Tareas", como: "Las que más CPU gastan, de una a veinte, cada una con su barra." },
      { que: "Discos", como: "Lo lleno que está cada volumen y su tamaño. Nunca pide que metas un disco." },
      { que: "Red y WiFi", como: "Lo que entra y sale por segundo, con gráfica si la quieres. Si el driver la da, la señal de la WiFi en dBm." },
      { que: "PiStorm", como: "Con Emu68, la temperatura de su Raspberry Pi. En naranja desde 70 °C." },
    ],
    pies: ["En CoffinOS con tarjeta gráfica: fondo fijo granate, la gráfica de la memoria y un List del disco entero en marcha"],
  },
  {
    id: "encajar",
    corto: "Ventanas que encajan",
    frase: "Suelta una ventana en un borde: media pantalla o un cuarto.",
    titulo: "Ventanas que encajan",
    entradilla: "Arrastra una ventana contra un borde y suéltala. Encaja sola.",
    texto: [
      "A la izquierda o a la derecha, ocupa media pantalla. En una esquina, un cuarto. Arriba, la pantalla entera, sin tapar la barra ni el dock. Si la separas del borde, vuelve a su tamaño.",
      "Con Alt pulsada, la mueves desde cualquier punto de la ventana. Al llegar a un borde, un marco enseña dónde va a quedar.",
      "Doble clic en la barra de título y se maximiza. Otro doble clic y queda como estaba.",
    ],
    teclas: [
      ["Ctrl Alt ↑", "maximizar"],
      ["Ctrl Alt ← →", "mitad izquierda o derecha"],
      ["Ctrl Alt T", "todas en mosaico"],
      ["Alt + botón derecho", "cambiar el tamaño desde cualquier punto"],
    ],
    nota: "No parchea el sistema. Va en cualquier pantalla, también con MCP o PowerWindows (los de CoffinOS).",
    pies: ["Una ventana en la mitad izquierda, otra en el cuarto de arriba y una tercera movida con Alt: el marco azul enseña dónde va a encajar"],
  },
  {
    id: "alttab",
    corto: "Alt+Tab",
    frase: "Salta de una ventana a otra con una lista, sin soltar Alt.",
    titulo: "Alt+Tab y el menú de ventana",
    entradilla: "Mantén Alt y pulsa Tab: sale la lista de ventanas abiertas. Al soltar Alt, saltas a la elegida.",
    texto: [
      "Con el botón central en la barra de título, o con Ctrl Alt Espacio, sale el menú de la ventana: maximizar, mitades, cuartos, delante, detrás, encoger y cerrar.",
      "El menú se usa con el ratón o con las flechas, Return y Esc.",
    ],
    pies: ["Alt+Tab con tres ventanas abiertas", "El menú de la ventana, con el botón central en su barra de título"],
  },
  {
    id: "espacios",
    corto: "Espacios y tira",
    frase: "Varios escritorios, o las ventanas en tira como Niri.",
    titulo: "Espacios virtuales y ventanas en tira",
    entradilla: "Varios escritorios, uno encima de otro, como en Linux. Vienen cuatro, y pueden ser hasta nueve.",
    texto: [
      "Ctrl Alt y un número cambia de espacio: las ventanas de los demás se esconden. Ctrl Alt Mayús y el número lleva allí la ventana activa. Un aviso en el centro y la barra dicen en cuál estás.",
      "Y el modo tira, como Niri: cada ventana es una columna de una tira más ancha que la pantalla. Las nuevas entran a la derecha y la vista sigue a la activa.",
    ],
    teclas: [
      ["Ctrl Alt 1 … 4", "ir a ese espacio"],
      ["Ctrl Alt Mayús 1 … 4", "llevar allí la ventana activa"],
      ["Ctrl Alt ← →", "en la tira, a la columna de al lado"],
      ["Ctrl Alt R", "el ancho de la columna: 33, 50, 67 o 100 %"],
    ],
    nota: "Necesita AmigaOS 3.2, que sabe esconder ventanas.",
    pies: ["Ctrl Alt 2: un escritorio limpio y el aviso del espacio", "Ventanas en tira: un Shell y dos imágenes, cada una en su columna (aquí al 33 %)"],
  },
  {
    id: "archivos",
    corto: "Explorador de archivos",
    frase: "TrasfondoArchivos: dos paneles, papelera, deshacer y miniaturas.",
    titulo: "TrasfondoArchivos, el explorador",
    entradilla: "Un explorador de archivos como el Nautilus de Linux. Con F3, dos paneles como en Directory Opus.",
    texto: [
      "A la izquierda, los sitios, los discos y la papelera. En medio, una lista con columnas que ordenan, o iconos con miniaturas de las imágenes. Arriba, atrás, adelante y la ruta en trozos que se pulsan.",
      "Con dos paneles, el activo es el origen y el otro el destino. F5 copia y F6 mueve, con barra de progreso y botón de cancelar. Borrar manda a la papelera, y Amiga+Z lo deshace. Los .info van siempre con su fichero.",
      "Abajo, botones con su tecla: en una fila, como Opus 5, o en dos filas, como Opus 4. Se abre desde el dock o desde los ajustes rápidos de la barra.",
    ],
    teclas: [
      ["F2", "renombrar ahí mismo"],
      ["Amiga+F", "filtrar"],
      ["Amiga+B", "buscar en los subcajones"],
      ["Amiga+I", "información, comentario y permisos"],
    ],
    nota: "Necesita MUI. También acepta iconos arrastrados desde el Workbench.",
    pies: ["F3: dos paneles, origen y destino, con los botones abajo", "La vista de iconos, con miniaturas de las imágenes"],
  },
  {
    id: "barra",
    corto: "Barra y avisos",
    frase: "Hora, tiempo y calendario arriba. Avisos desde cualquier programa.",
    titulo: "La barra y los avisos",
    entradilla: "Arriba, la hora, la fecha, el tiempo de tu ciudad, la CPU y la memoria.",
    texto: [
      "Pulsa la hora: sale un panel con reloj, calendario, tiempo y avisos. A la derecha, los ajustes rápidos: red, discos, memoria, preferencias, reiniciar y hasta 8 botones tuyos.",
      "Puede ser una barra entera o ir dentro de la barra de título de la pantalla, sin taparla.",
      "AmigaOS 3.x no tiene avisos. Trasfondo pone uno, con tres maneras de llegar a él:",
    ],
    teclas: [
      ["Avisa \"Copia terminada\"", "la orden Avisa, desde el Shell o un guion"],
      ["ADDRESS TRASFONDO 'NOTIFY TITLE=\"Copia\" TEXT=\"hecha\"'", "el puerto ARexx de la barra, que también entiende COUNT y CLEAR"],
      ["notify(\"Copia terminada\", \"12 ficheros\")", "en un programa escrito en Dash"],
    ],
    nota: "Si la barra no está en marcha, el aviso queda guardado y sale al arrancarla. Y Ctrl + Alt izquierda + S guarda la pantalla en PNG, con la fecha en el nombre.",
    pies: ["El panel de la hora: reloj, tiempo, calendario y dos avisos"],
  },
  {
    id: "dock",
    corto: "Dock",
    frase: "Tus programas abiertos y los que fijes, a un clic.",
    titulo: "El dock",
    entradilla: "Los programas abiertos y los que fijes, cada uno en una casilla igual.",
    texto: [
      "Fijas un programa soltando su icono encima. Lo cambias de sitio arrastrándolo. Al pasar el ratón, sale su nombre. Si mantienes pulsado, un menú: fijar en el dock o abrir otro.",
      "Va abajo, arriba o a un lado, y puede esconderse hasta que acercas el ratón. Sus programas se ordenan en TrasfondoPrefs.",
    ],
    pies: ["El dock en CoffinOS, con el ratón encima del reloj: la casilla se resalta y dice su nombre"],
  },
  {
    id: "colores",
    corto: "Colores y ajustes",
    frase: "Todo toma el color de tu fondo. Todo se cambia en TrasfondoPrefs.",
    titulo: "Colores y preferencias",
    entradilla: "La barra, los paneles y el dock toman los colores de tu fondo de escritorio.",
    texto: [
      "En oscuro o en claro, con varios esquemas. Uno imita los colores del Workbench. TrasfondoPrefs enseña una vista previa.",
      "Cada pieza es un programa aparte. En TrasfondoPrefs, sección Arranque, marcas las que quieres y se ponen en marcha. Quitas la marca y se paran.",
    ],
    nota: "La barra, sus paneles y el dock necesitan una tarjeta gráfica de 15 bits o más. El monitor del fondo y las ventanas van en cualquier pantalla.",
    pies: ["TrasfondoPrefs, sección Colores, con la vista previa", "TrasfondoPrefs, sección Arranque: qué piezas están en marcha"],
  },
];

const FUNCIONES_EN: readonly Funcion[] = [
  {
    id: "monitor",
    corto: "Backdrop monitor",
    frase: "CPU, memory, tasks, disks and network, behind your icons.",
    titulo: "The monitor, painted on the backdrop",
    entradilla: "It isn't a window. It's painted on the Workbench backdrop: it covers nothing and doesn't take your clicks.",
    texto: ["It sits at the top right, or in the corner you choose. It refreshes every 2 seconds, or every 1, 5 or 10."],
    lista: [
      { que: "Date and time", como: "Right at the top, in your language: the day, the date and the time." },
      { que: "CPU", como: "How hard the CPU works, and a graph of the last two minutes: 60 readings, one every 2 seconds. Measured task by task, not estimated." },
      { que: "Memory", como: "Free Chip and Fast memory and, if you like, a graph of memory in use." },
      { que: "Tasks", como: "The ones using the most CPU, one to twenty, each with its bar." },
      { que: "Disks", como: "How full each volume is and its size. It never asks you to insert a disk." },
      { que: "Network and WiFi", como: "What comes in and goes out per second, with a graph if you want it. If the driver reports it, the WiFi signal in dBm." },
      { que: "PiStorm", como: "With Emu68, its Raspberry Pi's temperature. Orange from 70 °C." },
    ],
    pies: ["On CoffinOS with a graphics card: solid wine background, the memory graph and a List of the whole disk running"],
  },
  {
    id: "encajar",
    corto: "Snapping windows",
    frase: "Drop a window on an edge: half the screen or a quarter.",
    titulo: "Windows that snap",
    entradilla: "Drag a window against an edge and let go. It snaps into place.",
    texto: [
      "Left or right, it takes half the screen. In a corner, a quarter. At the top, the whole screen, without covering the bar or the dock. Pull it away from the edge and it gets its size back.",
      "With Alt held, you move it from anywhere inside the window. Near an edge, a frame shows where it will go.",
      "Double-click the title bar to maximize it. Double-click again and it goes back as it was.",
    ],
    teclas: [
      ["Ctrl Alt ↑", "maximize"],
      ["Ctrl Alt ← →", "left or right half"],
      ["Ctrl Alt T", "tile them all"],
      ["Alt + right button", "resize from anywhere inside"],
    ],
    nota: "No system patches. It works on any screen, also with MCP or PowerWindows (the ones in CoffinOS).",
    pies: ["One window on the left half, another in the top quarter and a third moved with Alt: the blue frame shows where it will snap"],
  },
  {
    id: "alttab",
    corto: "Alt+Tab",
    frase: "Jump between windows from a list, holding Alt.",
    titulo: "Alt+Tab and the window menu",
    entradilla: "Hold Alt and press Tab: a list of the open windows shows up. Let go of Alt to jump to the one you picked.",
    texto: [
      "Middle-click a title bar, or press Ctrl Alt Space, for the window menu: maximize, halves, quarters, front, back, shrink and close.",
      "The menu works with the mouse or with the arrows, Return and Esc.",
    ],
    pies: ["Alt+Tab with three open windows", "The window menu, from a middle click on its title bar"],
  },
  {
    id: "espacios",
    corto: "Workspaces and strip",
    frase: "Several desktops, or your windows in a strip like Niri.",
    titulo: "Virtual workspaces and windows in a strip",
    entradilla: "Several desktops stacked, as on Linux. Four out of the box, up to nine.",
    texto: [
      "Ctrl Alt and a number switches workspace: the other workspaces' windows hide. Ctrl Alt Shift and the number takes the active window there. A notice in the middle and the bar tell you where you are.",
      "And strip mode, like Niri: each window is a column in a strip wider than the screen. New ones come in on the right and the view follows the active one.",
    ],
    teclas: [
      ["Ctrl Alt 1 … 4", "go to that workspace"],
      ["Ctrl Alt Shift 1 … 4", "send the active window there"],
      ["Ctrl Alt ← →", "in the strip, the next column"],
      ["Ctrl Alt R", "column width: 33, 50, 67 or 100%"],
    ],
    nota: "Needs AmigaOS 3.2, which can hide windows.",
    pies: ["Ctrl Alt 2: a clean desktop and the workspace notice", "Windows in a strip: a Shell and two pictures, each in its own column (here at 33%)"],
  },
  {
    id: "archivos",
    corto: "File manager",
    frase: "TrasfondoArchivos: two panes, trash, undo and thumbnails.",
    titulo: "TrasfondoArchivos, the file manager",
    entradilla: "A file manager like Linux's Nautilus. Press F3 for two panes, as in Directory Opus.",
    texto: [
      "On the left, places, disks and the trash. In the middle, a list with sortable columns, or icons with picture thumbnails. On top, back, forward and the path in pieces you can click.",
      "With two panes, the active one is the source and the other the destination. F5 copies and F6 moves, with a progress bar and a cancel button. Delete sends to the trash, and Amiga+Z undoes it. .info files always go with their file.",
      "At the bottom, buttons with their key: in one row, like Opus 5, or in two rows, like Opus 4. Open it from the dock or from the bar's quick settings.",
    ],
    teclas: [
      ["F2", "rename in place"],
      ["Amiga+F", "filter"],
      ["Amiga+B", "search the subdrawers"],
      ["Amiga+I", "information, comment and protection bits"],
    ],
    nota: "Needs MUI. It also takes icons dragged from the Workbench.",
    pies: ["F3: two panes, source and destination, with the buttons at the bottom", "Icon view, with picture thumbnails"],
  },
  {
    id: "barra",
    corto: "Bar and notifications",
    frase: "Time, weather and calendar up top. Notifications from any program.",
    titulo: "The bar and notifications",
    entradilla: "At the top, the time, the date, your city's weather, the CPU and the memory.",
    texto: [
      "Click the time for a panel with a clock, a calendar, the weather and your notifications. On the right, the quick settings: network, disks, memory, preferences, reboot and up to 8 buttons of your own.",
      "It can be a whole bar or sit inside the screen's title bar, without covering it.",
      "AmigaOS 3.x has no notifications. Trasfondo brings them, with three ways in:",
    ],
    teclas: [
      ["Avisa \"Backup done\"", "the Avisa command, from the Shell or a script"],
      ["ADDRESS TRASFONDO 'NOTIFY TITLE=\"Backup\" TEXT=\"done\"'", "the bar's ARexx port, which also understands COUNT and CLEAR"],
      ["notify(\"Backup done\", \"12 files\")", "in a program written in Dash"],
    ],
    nota: "If the bar isn't running, the notification is kept and shows when it starts. And Ctrl + left Alt + S saves the screen as a PNG, with the date in its name.",
    pies: ["The clock panel: time, weather, calendar and two notifications"],
  },
  {
    id: "dock",
    corto: "Dock",
    frase: "Your open and pinned programs, one click away.",
    titulo: "The dock",
    entradilla: "The open programs and the ones you pin, each in an equal box.",
    texto: [
      "Pin a program by dropping its icon on the dock. Drag it to move it. Hover over it to see its name. Hold the button down for a menu: keep in dock or open another.",
      "It sits at the bottom, at the top or on a side, and can hide until the mouse gets close. You order its programs in TrasfondoPrefs.",
    ],
    pies: ["The dock on CoffinOS, with the mouse over the clock: the box lights up and says its name"],
  },
  {
    id: "colores",
    corto: "Colours and settings",
    frase: "Everything takes your backdrop's colours. Change it all in TrasfondoPrefs.",
    titulo: "Colours and preferences",
    entradilla: "The bar, the panels and the dock take their colours from your desktop backdrop.",
    texto: [
      "Dark or light, with several schemes. One copies the Workbench colours. TrasfondoPrefs shows a preview.",
      "Each piece is a separate program. In TrasfondoPrefs, Startup section, tick the ones you want and they start. Untick one and it stops.",
    ],
    nota: "The bar, its panels and the dock need a graphics card with 15 bits or more. The backdrop monitor and the windows work on any screen.",
    pies: ["TrasfondoPrefs, Colours section, with the preview", "TrasfondoPrefs, Startup section: which pieces are running"],
  },
];

export const CONTENIDO = {
  es: {
    titulo: "Trasfondo: ventanas que encajan, Alt+Tab, explorador, barra y dock para el Workbench",
    descripcion:
      "Para AmigaOS 3.x: ventanas que encajan en los bordes, Alt+Tab, espacios virtuales, un explorador de dos paneles, una barra con avisos, un dock y un monitor de recursos en el fondo del Workbench. Gratis y libre.",
    entradilla: "El Workbench de siempre, con lo que esperas de un escritorio de hoy.",
    subtitulo: "Ventanas que encajan, Alt+Tab, espacios virtuales, un explorador de dos paneles, una barra con avisos, un dock y un monitor de recursos pintado en el fondo. Cada pieza se usa o no. Escrito en Dash, para cualquier Amiga con AmigaOS 3.",
    descargar: `Descargar la ${VERSION}`,
    peso: `${tamano(version.bytes, "es")}, para AmigaOS 3.0 o posterior`,
    verVideo: "Verlo en vídeo",
    verFunciones: "Qué hace",
    aviso: "Prueba: arrastra un icono por encima del panel",
    escritorioAlt: "Simulación de un escritorio de Workbench con el panel de Trasfondo",
    iconos: { ram: "RAM Disk", sistema: "System", work: "Work", cajon: "Trasfondo", prefs: "TrasfondoPrefs" },
    franja: { titulo: "Qué hace" },
    funciones: FUNCIONES_ES,
    teclas: "Teclas",
    cuelgue: {
      titulo: "No se cuelga. Nunca espera",
      frase: "Nunca espera más de un tercio de segundo a que conteste un disco o un driver.",
      texto: "Si un volumen o una tarjeta de red no contestan, el panel pone \"sin respuesta\" y sigue. Si se cae la red, lo ves al momento, y cuando vuelve, los datos aparecen otra vez sin reiniciar nada.",
      ligero: "Gasta poco porque solo vuelve a dibujar lo que cambia. Midiendo cada 2 segundos, el monitor del fondo usa un 8 % de la CPU de un A1200 y un 11 % de la de un 68030 con tarjeta gráfica (medido en el emulador).",
    },
    pantallas: {
      titulo: "Se lee en cualquier pantalla",
      texto: "Con tarjeta gráfica y color real, el panel es translúcido y deja ver el fondo. En AGA, ECS o con 256 colores lleva un fondo sólido para que se lea bien. El tipo de fondo y su color se cambian en TrasfondoPrefs.",
      rtg: "RTG a 1280x1024: el panel translúcido, y un icono encima",
      aga: "AGA a 640x256: fondo sólido",
    },
    eliges: {
      titulo: "A tu manera",
      texto: "En TrasfondoPrefs (en SYS:Prefs) eliges qué sale en el panel, cuántas tareas, cada cuánto mide, el fondo y su color, la tecla rápida y si arranca oculto. \"Usar\" aplica los cambios al momento, sin reiniciar, y \"Guardar\" los deja guardados. La ventana sale en inglés o en castellano, según el idioma del sistema.",
      prefsAlt: "TrasfondoPrefs 2.9.13, sección Fondo: qué enseña el panel, cada cuánto mide, el fondo y la esquina",
      exchange: "Trasfondo en Exchange",
      commodity: "Es una commodity: desde Exchange se oculta, se muestra, se desactiva o se cierra. Y se pone al día solo: cuando sale una versión nueva, un piloto verde lo avisa en el panel y TrasfondoPrefs la instala con un botón. Desde la 2.9.9 solo instala versiones firmadas. Si prefieres los tooltypes, también los entiende:",
      tooltypes: [
        ["MOSTRAR=FECHA,CPU,DISCOS", "qué secciones salen y en qué orden"],
        ["TAREAS=3", "cuántas tareas"],
        ["CX_POPKEY=ctrl alt t", "la tecla para ocultarlo y mostrarlo"],
        ["INTERVAL=5", "cada cuántos segundos mide"],
        ["BACKGROUND=SOLID", "fondo fijo, sin velo"],
        ["CX_POPUP=NO", "arranca oculto"],
      ],
    },
    novedades: {
      titulo: "Novedades",
      texto: "Las cinco últimas versiones, a 21 de noviembre de 2026.",
      todas: "Todas las versiones, en GitHub",
      lista: [
        {
          estado: "Publicada el 21/11",
          titulo: "Trasfondo 2.9.13",
          texto: "TrasfondoPrefs ya no se cierra al pulsar Guardar o Usar: puedes cambiar varias cosas seguidas. La línea de abajo dice qué se hizo, y el tercer botón es Cerrar.",
        },
        {
          estado: "Publicada el 21/11",
          titulo: "Trasfondo 2.9.12",
          texto: "Arreglo del dock: al mantener pulsado un programa abierto vuelve a salir su menú (Fijar en el dock, Abrir otro).",
        },
        {
          estado: "Publicada el 21/11",
          titulo: "Trasfondo 2.9.11",
          texto: "Los tooltypes valen también en un icono de proyecto, por ejemplo uno de WBStartup que arranca una pieza. Antes solo se leían los del programa (lo contó Ferrán García).",
        },
        {
          estado: "Publicada el 20/11",
          titulo: "Trasfondo 2.9.10",
          texto: "Si todo Trasfondo acabó en WBStartup, un botón en TrasfondoPrefs, sección Arranque, lo pasa a SYS:Utilities/Trasfondo. Y el explorador ya no se abre solo al arrancar (lo contó Ferrán García).",
        },
        {
          estado: "Publicada el 19/11",
          titulo: "Trasfondo 2.9.9",
          texto: "Actualizaciones firmadas: el botón Actualizar solo instala versiones firmadas, con el SHA-256 de cada fichero (lo propuso Rodrigo Sáez).",
        },
      ],
    },
    video: { titulo: "Míralo en marcha", texto: "Cinco minutos de la 2.9 en CoffinOS (AmigaOS 3.2) con tarjeta gráfica: las ventanas que encajan, Alt+Tab, los escritorios virtuales, el explorador TrasfondoArchivos y las ventanas en tira. La música es \"Psilocybin\", de Legend & Yolk.", boton: "Reproducir", titulo_video: "Trasfondo 2.9: ventanas modernas, un explorador y escritorios virtuales para el Workbench" },
    instalar: {
      titulo: "Listo en un minuto",
      pasos: [
        `Descomprime ${version.fichero} donde quieras.`,
        "Haz doble clic en Instalar. Elige dónde dejar el cajón Trasfondo y qué piezas arrancan con el Workbench. Si tenías una versión anterior, la quita.",
        "Después, en TrasfondoPrefs, sección Arranque, enciendes y apagas cada pieza. Si ya tienes Trasfondo, el botón Actualizar trae la versión nueva entera.",
      ],
      codigo: "Código fuente",
      notas: `Qué trae la ${VERSION}`,
    },
    requisitos: {
      titulo: "Lo que necesitas",
      lista: [
        "AmigaOS 3.0 o posterior, con el Workbench en marcha. También con Directory Opus 5 haciendo de escritorio.",
        "Cualquier 68k: es código de 68000 y no necesita FPU.",
        "OCS, ECS, AGA o tarjeta gráfica (CyberGraphX o Picasso96).",
        "La barra, sus paneles y el dock: una tarjeta gráfica de 15 bits o más. Los espacios virtuales: AmigaOS 3.2. El explorador: MUI.",
        "Para ver la red en KB/s hace falta Roadshow o un driver que cuente bytes. Si no, muestra paquetes por segundo.",
      ],
      probado: "Probado en AmigaOS 3.2.3 (A1200 emulado, con AGA y con tarjeta gráfica) y en CoffinOS R65, también con Directory Opus 5 como escritorio. Con Scalos debería ir, pero no se ha probado. Si lo usas en un Amiga de verdad y algo falla, cuéntamelo en GitHub.",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Trasfondo está escrito entero en Dash, sin nada de C a mano. Lo que el lenguaje no sabía hacer (dibujar en el fondo del Workbench, medir la CPU de cada tarea, funcionar como commodity, saber qué ventanas tiene cada programa, dibujar iconos a cualquier tamaño, recibir órdenes ARexx) se añadió a Dash para Trasfondo, y ahora lo puede usar cualquier programa.",
      enlace: "Descubre Dash",
    },
    pie: [
      { texto: "Trasfondo en GitHub", url: REPO },
      { texto: "Vídeo en YouTube", url: `https://youtu.be/${VIDEO.es}` },
    ],
  },
  en: {
    titulo: "Trasfondo: snapping windows, Alt+Tab, file manager, bar and dock for the Workbench",
    descripcion:
      "For AmigaOS 3.x: windows that snap to the edges, Alt+Tab, virtual workspaces, a two-pane file manager, a bar with notifications, a dock and a resource monitor on the Workbench backdrop. Free, open source.",
    entradilla: "The Workbench you know, with what you expect from a desktop today.",
    subtitulo: "Windows that snap, Alt+Tab, virtual workspaces, a two-pane file manager, a bar with notifications, a dock and a resource monitor painted on the backdrop. Use each piece or not. Written in Dash, for any Amiga with AmigaOS 3.",
    descargar: `Download ${VERSION}`,
    peso: `${tamano(version.bytes, "en")}, for AmigaOS 3.0 or later`,
    verVideo: "Watch it in action",
    verFunciones: "What it does",
    aviso: "Try it: drag an icon over the panel",
    escritorioAlt: "Simulated Workbench desktop with the Trasfondo panel",
    iconos: { ram: "RAM Disk", sistema: "System", work: "Work", cajon: "Trasfondo", prefs: "TrasfondoPrefs" },
    franja: { titulo: "What it does" },
    funciones: FUNCIONES_EN,
    teclas: "Keys",
    cuelgue: {
      titulo: "It never hangs. It never waits",
      frase: "It never waits more than a third of a second for a disk or a driver to answer.",
      texto: "If a volume or a network card doesn't answer, the panel says \"no answer\" and keeps going. If the network drops, you see it at once, and when it comes back the figures show up again with nothing to restart.",
      ligero: "It uses little because it only redraws what changes. Measuring every 2 seconds, the backdrop monitor takes about 8% of an A1200's CPU and 11% of a 68030's with a graphics card (measured in the emulator).",
    },
    pantallas: {
      titulo: "Readable on any screen",
      texto: "With a graphics card in true colour, the panel is translucent and lets the backdrop show through. On AGA, ECS or 256 colours it gets a solid background so it reads well. You can change the background type and colour in TrasfondoPrefs.",
      rtg: "RTG at 1280x1024: the translucent panel, with an icon on top",
      aga: "AGA at 640x256: solid background",
    },
    eliges: {
      titulo: "Your way",
      texto: "In TrasfondoPrefs (in SYS:Prefs) you choose what the panel shows, how many tasks, how often it measures, the background and its colour, the hotkey and whether it starts hidden. Use applies the changes straight away, with nothing to restart, and Save keeps them. The window appears in English or Spanish, following your system's language.",
      prefsAlt: "TrasfondoPrefs 2.9.13, Background section: what the panel shows, how often it measures, the background and the corner",
      exchange: "Trasfondo in Exchange",
      commodity: "It's a commodity: hide, show, disable or quit it from Exchange. And it updates itself: when a new version is out, a green light on the panel tells you and TrasfondoPrefs installs it with one button. Since 2.9.9 it only installs signed versions. If you prefer tooltypes, it understands those too:",
      tooltypes: [
        ["SHOW=DATE,CPU,DISKS", "which sections appear, and in what order"],
        ["TASKS=3", "how many tasks"],
        ["CX_POPKEY=ctrl alt t", "the key to hide and show it"],
        ["INTERVAL=5", "how many seconds between readings"],
        ["BACKGROUND=SOLID", "solid background, no veil"],
        ["CX_POPUP=NO", "start hidden"],
      ],
    },
    novedades: {
      titulo: "What's new",
      texto: "The last five releases, as of 21 November 2026.",
      todas: "Every release, on GitHub",
      lista: [
        {
          estado: "Released 21 Nov",
          titulo: "Trasfondo 2.9.13",
          texto: "TrasfondoPrefs no longer closes on Save or Use: change several things in a row. The line at the bottom says what was done, and the third button is now Close.",
        },
        {
          estado: "Released 21 Nov",
          titulo: "Trasfondo 2.9.12",
          texto: "Dock fix: holding down a running program's icon shows its menu again (Keep in dock, Open another).",
        },
        {
          estado: "Released 21 Nov",
          titulo: "Trasfondo 2.9.11",
          texto: "Tooltypes on a project icon now count, for example a WBStartup icon that starts a piece. Before, only the program's own icon was read (reported by Ferrán García).",
        },
        {
          estado: "Released 20 Nov",
          titulo: "Trasfondo 2.9.10",
          texto: "If all of Trasfondo ended up in WBStartup, a button in TrasfondoPrefs, Startup section, moves it to SYS:Utilities/Trasfondo. And the file manager no longer opens by itself at boot (reported by Ferrán García).",
        },
        {
          estado: "Released 19 Nov",
          titulo: "Trasfondo 2.9.9",
          texto: "Signed updates: the Update button only installs signed versions, with the SHA-256 of each file (suggested by Rodrigo Sáez).",
        },
      ],
    },
    video: { titulo: "See it in action", texto: "Five minutes of 2.9 on CoffinOS (AmigaOS 3.2) with a graphics card: windows that snap, Alt+Tab, virtual desktops, the TrasfondoArchivos file manager and windows in a strip. The music is \"Psilocybin\" by Legend & Yolk.", boton: "Play", titulo_video: "Trasfondo 2.9: modern windows, a file manager and virtual desktops for the Workbench" },
    instalar: {
      titulo: "Ready in a minute",
      pasos: [
        `Unpack ${version.fichero} anywhere.`,
        "Double-click Instalar (the installer). Choose where to put the Trasfondo drawer and which pieces start with the Workbench. If you had an earlier version, it removes it.",
        "Then, in TrasfondoPrefs, Startup section, you turn each piece on and off. If you already have Trasfondo, the Update button brings the whole new version.",
      ],
      codigo: "Source code",
      notas: `What's in ${VERSION}`,
    },
    requisitos: {
      titulo: "What you need",
      lista: [
        "AmigaOS 3.0 or later, with the Workbench running. Also with Directory Opus 5 as your desktop.",
        "Any 68k: it's 68000 code and needs no FPU.",
        "OCS, ECS, AGA or a graphics card (CyberGraphX or Picasso96).",
        "The bar, its panels and the dock: a graphics card with 15 bits or more. Virtual workspaces: AmigaOS 3.2. The file manager: MUI.",
        "To see network speed in KB/s you need Roadshow or a driver that counts bytes. Otherwise it shows packets per second.",
      ],
      probado: "Tested on AmigaOS 3.2.3 (emulated A1200, with AGA and with a graphics card) and on CoffinOS R65, also with Directory Opus 5 as the desktop. Scalos should work, but it hasn't been tested. If you use it on a real Amiga and something breaks, tell me on GitHub.",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Trasfondo is written entirely in Dash, with no hand-written C. What the language couldn't do yet (draw on the Workbench backdrop, measure each task's CPU, work as a commodity, know every program's windows, draw icons at any size, receive ARexx commands) was added to Dash for Trasfondo, and now any program can use it.",
      enlace: "Discover Dash",
    },
    pie: [
      { texto: "Trasfondo on GitHub", url: REPO },
      { texto: "Video on YouTube", url: `https://youtu.be/${VIDEO.en}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

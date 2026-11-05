import { tamano, type Idioma } from "retro";

import version from "./version.json";

/** Los textos de la web en sus dos idiomas. Cada promesa, contrastada con el README y las notas de las versiones. */
/** La última release: la pone herramientas/versiones.py antes de construir. */
export const VERSION = version.version;
export const DESCARGA = version.descarga;
export const RELEASE = version.notas;
export const REPO = "https://github.com/FreeMEM/trasfondo";
/** El vídeo de cada idioma (el de la 0.11, grabado en Coffin R65 con tarjeta gráfica). */
export const VIDEO = { es: "QyzxsXAyeg4", en: "asdHx5MZsJA" } satisfies Record<Idioma, string>;
export const BASE = "https://trasfondo.freemem.space";

export const CONTENIDO = {
  es: {
    titulo: "Trasfondo: monitor, barra, dock y avisos para el Workbench",
    descripcion:
      "Para AmigaOS 3.x: un monitor de recursos pintado en el fondo del Workbench, una barra con calendario y avisos, un dock y teclas para las ventanas. Se pone al día solo. Gratis y libre.",
    entradilla: "Tu Amiga te cuenta qué hace, sin tapar nada.",
    subtitulo: "Muestra la fecha y la hora, la CPU, la memoria, las tareas, los discos y la red en el fondo del Workbench, detrás de los iconos. No es una ventana, así que no tapa nada ni se queda con tus clics. Desde la 2.0 trae también una barra arriba, avisos, un dock y teclas para las ventanas, y cada pieza se usa o no.",
    descargar: `Descargar la ${VERSION}`,
    peso: `${tamano(version.bytes, "es")}, para AmigaOS 3.0 o posterior`,
    verVideo: "Verlo en vídeo",
    aviso: "Prueba: arrastra un icono por encima del panel",
    escritorioAlt: "Simulación de un escritorio de Workbench con el panel de Trasfondo",
    iconos: { ram: "RAM Disk", sistema: "System", work: "Work", cajon: "Trasfondo", prefs: "TrasfondoPrefs" },
    panel: {
      titulo: "Todo a la vista, de un vistazo",
      texto: "Aparece arriba a la derecha del escritorio y se actualiza cada dos segundos. También puedes elegir uno, cinco o diez:",
      imagen: "Trasfondo 0.11 en Coffin R65 con tarjeta gráfica: fondo fijo granate, la gráfica de la memoria y un List de todo el disco en marcha",
      cosas: [
        { que: "Fecha y hora", como: "Arriba del todo y en tu idioma, por ejemplo \"sábado 24-oct-26\", con la hora." },
        { que: "CPU", como: "Cuánto trabaja el procesador y una gráfica de los dos últimos minutos (60 medidas, una cada 2 segundos). Se mide tarea a tarea con los ganchos de cambio de tarea de exec, no es una estimación." },
        { que: "Memoria", como: "La memoria Chip y Fast libre y, si quieres, una gráfica con la memoria en uso sobre el total." },
        { que: "Tareas", como: "Las tareas que más CPU gastan, de una a veinte, cada una con su barra." },
        { que: "Discos", como: "Lo lleno que está cada volumen montado y su tamaño. Nunca te pide que metas un disco." },
        { que: "Red y WiFi", como: "Lo que entra y sale por segundo, con gráfica si la quieres. Si el driver lo permite, también la señal de la WiFi en dBm." },
        { que: "PiStorm", como: "Si usas una PiStorm con Emu68, la temperatura de su Raspberry Pi. Se pone en naranja a partir de 70 °C." },
      ],
    },
    cuelgue: {
      titulo: "No se cuelga. Nunca espera",
      frase: "Nunca espera más de un tercio de segundo a que conteste un disco o un driver.",
      texto: "Si un volumen o una tarjeta de red no contestan, el panel pone \"sin respuesta\" y sigue funcionando. Si se cae la red, lo ves al momento, y cuando vuelve, los datos aparecen otra vez sin reiniciar nada.",
      ligero: "Gasta poco porque solo vuelve a dibujar lo que cambia. Midiendo cada 2 segundos, usa un 7 % de la CPU de un A1200 y un 11 % de la de un 68030 con tarjeta gráfica (medido en el emulador).",
    },
    pantallas: {
      titulo: "Luce en cualquier pantalla",
      texto: "Con tarjeta gráfica y color real, el panel es translúcido y deja ver el fondo del escritorio. En AGA, ECS o con 256 colores lleva un fondo sólido para que se lea bien. El tipo de fondo y su color se pueden cambiar en TrasfondoPrefs.",
      rtg: "RTG a 1280x1024: el panel translúcido, y un icono encima",
      aga: "AGA a 640x256: fondo sólido",
    },
    escritorio: {
      titulo: "Un escritorio entero, pieza a pieza",
      texto: "Desde la 2.0, Trasfondo trae más piezas para la pantalla del Workbench. Cada una es un programa aparte: en TrasfondoPrefs, sección Arranque, marcas las que quieres y se ponen en marcha; quitas la marca y se paran.",
      imagen: "Trasfondo 2.3 en AmigaOS 3.2.3 con tarjeta gráfica: la barra arriba, el panel del fondo a la derecha, tres ventanas y el dock abajo",
      piezas: [
        { que: "La barra", como: "Arriba, con la hora, la fecha, el tiempo de tu ciudad, la CPU y la memoria. Al pulsar la hora sale un panel con reloj, calendario, tiempo y avisos; a la derecha, los ajustes rápidos: red, discos, memoria, preferencias y reiniciar. Puede ser una barra entera o ir dentro de la barra de título de la pantalla, sin taparla." },
        { que: "Los avisos", como: "Salen un momento arriba a la derecha y quedan en la lista del panel hasta que los descartas. Los deja la orden Avisa, cualquier guion ARexx o cualquier programa escrito en Dash." },
        { que: "El dock", como: "Los programas abiertos y los que fijes, en casillas iguales. Fijas uno soltando su icono encima, lo cambias de sitio arrastrándolo y, al pasar el ratón, sale su nombre. Puede ir en cualquier borde y esconderse solo hasta que acercas el ratón." },
        { que: "Las ventanas", como: "Teclas para maximizar, mandar a una mitad, restaurar o poner en mosaico cualquier ventana, a mano o según se abren. Con Alt y el ratón, se mueven y cambian de tamaño desde cualquier punto." },
        { que: "Los colores", como: "La barra, los paneles y el dock toman sus colores del fondo de escritorio, en oscuro o claro, con seis esquemas. Uno imita los colores del Workbench. TrasfondoPrefs enseña una vista previa." },
      ],
      panel: "El panel de la barra: reloj, tiempo, calendario y dos avisos",
      dock: "El dock con el ratón encima de un icono: se resalta y dice su nombre",
      colores: "TrasfondoPrefs, sección Colores, con la vista previa",
      arranque: "TrasfondoPrefs, sección Arranque: qué piezas están en marcha",
      rtg: "La barra, sus paneles y el dock necesitan una tarjeta gráfica (15 bits o más). El fondo y las teclas de las ventanas funcionan en cualquier pantalla.",
    },
    avisos: {
      titulo: "Avisos desde cualquier programa",
      texto: "AmigaOS 3.x no tiene un sistema de avisos. Trasfondo pone uno, con tres maneras de llegar a él:",
      formas: [
        ["Avisa \"Copia terminada\"", "la orden Avisa, desde el Shell o un guion"],
        ["ADDRESS TRASFONDO 'NOTIFY TITLE=\"Copia\" TEXT=\"hecha\"'", "el puerto ARexx de la barra, que también entiende COUNT y CLEAR"],
        ["notify(\"Copia terminada\", \"12 ficheros\")", "en un programa escrito en Dash (Dash 2.4)"],
      ],
      nota: "Si la barra no está en marcha, el aviso queda guardado y sale cuando arranca.",
    },
    eliges: {
      titulo: "A tu manera",
      texto: "En TrasfondoPrefs (en SYS:Prefs) eliges qué secciones salen, incluidas las gráficas de memoria y de red, cuántas tareas se muestran, cada cuánto mide, el fondo y su color, la tecla rápida y si arranca oculto. \"Usar\" aplica los cambios al momento, sin reiniciar, y \"Guardar\" los deja guardados. La ventana se adapta a la fuente de tu pantalla y sale en inglés o en castellano, según el idioma del sistema.",
      prefs: "TrasfondoPrefs",
      exchange: "Trasfondo en Exchange",
      commodity: "Es una commodity, así que desde Exchange se puede ocultar, mostrar, desactivar o cerrar. También se actualiza solo: cuando sale una versión nueva, un piloto verde lo avisa en el panel y TrasfondoPrefs la instala con un botón. Si prefieres los tooltypes, también los entiende:",
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
      texto: "Lo último que ha salido y lo que viene, a 5 de noviembre de 2026.",
      boton: "Novedades",
      lista: [
        {
          estado: "Publicada el 5/11",
          titulo: "Trasfondo 2.4",
          texto: "La barra puede ir dentro de la barra de título de la pantalla, sin taparla (idea de Ferrán García). Ya no se para todo al cerrar los paneles pulsando en el escritorio, y busca versiones nuevas cada hora.",
        },
        {
          estado: "Publicada el 5/11",
          titulo: "Trasfondo 2.3",
          texto: "Avisos desde cualquier programa: la barra tiene un puerto ARexx, TRASFONDO, y los programas escritos en Dash avisan con notify().",
        },
        {
          estado: "Publicada el 4/11",
          titulo: "Trasfondo 2.2",
          texto: "El dock rehecho, con casillas iguales, el nombre al pasar el ratón y la opción de esconderse solo. En Arranque, cada pieza se enciende y se apaga con su casilla. Y lo que contó Ferrán García al probarla en su PiStorm.",
        },
        {
          estado: "Publicadas el 4/11",
          titulo: "Trasfondo 2.0 y 2.1",
          texto: "La barra con sus paneles, los avisos, el dock, las teclas de las ventanas y los colores sacados del fondo. Desde la 2.1, el botón Actualizar trae todas las piezas, también si vienes de la 0.11.",
        },
        {
          estado: "Lo que viene",
          titulo: "Más como un escritorio moderno",
          texto: "Estilos de barra, un lanzador de programas con buscador, un selector de fondos y un panel grande con música, interruptores y portapapeles.",
        },
      ],
    },
    video: { titulo: "Míralo en marcha", texto: "Cinco minutos de la 0.11, el monitor del fondo, en CoffinOS con tarjeta gráfica, en Amiberry. Se ve cómo se instala, todo lo que muestra, cómo se actualiza de la 0.9 a la 0.11 con un clic, TrasfondoPrefs y Exchange. La música es de Mantronix & Tip.", boton: "Reproducir", titulo_video: "Trasfondo 0.11: un monitor de recursos en el fondo del Workbench" },
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
        "Para ver la red en KB/s hace falta Roadshow o un driver de red que cuente bytes. Si no, muestra paquetes por segundo.",
        "La barra, sus paneles y el dock: una tarjeta gráfica de 15 bits o más.",
      ],
      probado: "Probado en AmigaOS 3.2.3 (A1200 emulado, con AGA y con tarjeta gráfica) y en Coffin R65, también con Directory Opus 5 como escritorio. Con Scalos debería funcionar, pero no se ha probado. La red y la WiFi solo se han probado con un driver de pruebas. Si lo usas con una tarjeta de red real, cuéntamelo en GitHub.",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Trasfondo tiene unas 6.300 líneas de Dash entre todas sus piezas, sin nada de C escrito a mano. Lo que el lenguaje no sabía hacer (dibujar en el fondo del Workbench, medir la CPU de cada tarea, funcionar como commodity, saber qué ventanas tiene cada programa, dibujar iconos a cualquier tamaño, recibir órdenes ARexx) se añadió a Dash para Trasfondo, y ahora lo puede usar cualquier programa.",
      enlace: "Descubre Dash",
    },
    pie: [
      { texto: "Trasfondo en GitHub", url: REPO },
      { texto: "Vídeo en YouTube", url: `https://youtu.be/${VIDEO.es}` },
    ],
  },
  en: {
    titulo: "Trasfondo: monitor, bar, dock and notifications for the Workbench",
    descripcion:
      "For AmigaOS 3.x: a resource monitor painted on the Workbench backdrop, a bar with a calendar and notifications, a dock and keys for your windows. Updates itself. Free, open source.",
    entradilla: "Your Amiga tells you what it's up to, without covering anything.",
    subtitulo: "It shows the date and time, CPU, memory, tasks, disks and network on the Workbench backdrop, behind your icons. It isn't a window, so it doesn't cover anything or take your clicks. Since 2.0 it also brings a bar at the top, notifications, a dock and keys for your windows, and you use each piece or not.",
    descargar: `Download ${VERSION}`,
    peso: `${tamano(version.bytes, "en")}, for AmigaOS 3.0 or later`,
    verVideo: "Watch it in action",
    aviso: "Try it: drag an icon over the panel",
    escritorioAlt: "Simulated Workbench desktop with the Trasfondo panel",
    iconos: { ram: "RAM Disk", sistema: "System", work: "Work", cajon: "Trasfondo", prefs: "TrasfondoPrefs" },
    panel: {
      titulo: "Everything in view, at a glance",
      texto: "It sits at the top right of the desktop and refreshes every two seconds. You can also choose one, five or ten:",
      imagen: "Trasfondo 0.11 on Coffin R65 with a graphics card: solid wine background, the memory graph and a List of the whole disk running",
      cosas: [
        { que: "Date and time", como: "Right at the top, in your language: the day, the date and the time." },
        { que: "CPU", como: "How hard the CPU is working, and a graph of the last two minutes (60 readings, one every 2 seconds). It's measured task by task with exec's task-switch hooks, not estimated." },
        { que: "Memory", como: "Free Chip and Fast memory and, if you like, a graph of memory in use over the total." },
        { que: "Tasks", como: "The tasks using the most CPU, one to twenty of them, each with its bar." },
        { que: "Disks", como: "How full each mounted volume is and its size. It never asks you to insert a disk." },
        { que: "Network and WiFi", como: "What comes in and goes out per second, with a graph if you want it. If the driver reports it, the WiFi signal in dBm too." },
        { que: "PiStorm", como: "If you use a PiStorm with Emu68, its Raspberry Pi's temperature. It turns orange from 70 °C." },
      ],
    },
    cuelgue: {
      titulo: "It never hangs. It never waits",
      frase: "It never waits more than a third of a second for a disk or a driver to answer.",
      texto: "If a volume or a network card doesn't answer, the panel says \"no answer\" and keeps going. If the network drops, you see it at once, and when it comes back the figures show up again with nothing to restart.",
      ligero: "It uses little because it only redraws what changes. Measuring every 2 seconds, it takes about 7% of an A1200's CPU and 11% of a 68030's with a graphics card (measured in the emulator).",
    },
    pantallas: {
      titulo: "Looks good on any screen",
      texto: "With a graphics card in true colour, the panel is translucent and lets the desktop backdrop show through. On AGA, ECS or 256 colours it gets a solid background so it reads well. You can change the background type and colour in TrasfondoPrefs.",
      rtg: "RTG at 1280x1024: the translucent panel, with an icon on top",
      aga: "AGA at 640x256: solid background",
    },
    escritorio: {
      titulo: "A whole desktop, piece by piece",
      texto: "Since 2.0, Trasfondo brings more pieces for the Workbench screen. Each one is a separate program: in TrasfondoPrefs, Startup section, you tick the ones you want and they start; untick one and it stops.",
      imagen: "Trasfondo 2.3 on AmigaOS 3.2.3 with a graphics card: the bar at the top, the backdrop panel on the right, three windows and the dock at the bottom",
      piezas: [
        { que: "The bar", como: "At the top, with the time, the date, your city's weather, the CPU and the memory. Click the time for a panel with a clock, a calendar, the weather and notifications; on the right, the quick settings: network, disks, memory, preferences and reboot. It can be a whole bar or sit inside the screen's title bar, without covering it." },
        { que: "Notifications", como: "They show for a moment at the top right and stay in the panel's list until you dismiss them. The Avisa command, any ARexx script or any program written in Dash can leave one." },
        { que: "The dock", como: "The open programs and the ones you pin, in equal boxes. Pin one by dropping its icon on it, move it by dragging it, and hover over it to see its name. It can sit on any edge and hide by itself until the mouse gets close." },
        { que: "Windows", como: "Keys to maximize any window, send it to one half, restore it or tile them, by hand or as they open. With Alt and the mouse, they move and resize from anywhere inside." },
        { que: "Colours", como: "The bar, the panels and the dock take their colours from the desktop backdrop, dark or light, with six schemes. One copies the Workbench colours. TrasfondoPrefs shows a preview." },
      ],
      panel: "The bar's panel: clock, weather, calendar and two notifications",
      dock: "The dock with the mouse over an icon: it lights up and says its name",
      colores: "TrasfondoPrefs, Colours section, with the preview",
      arranque: "TrasfondoPrefs, Startup section: which pieces are running",
      rtg: "The bar, its panels and the dock need a graphics card (15 bits or more). The backdrop and the window keys work on any screen.",
    },
    avisos: {
      titulo: "Notifications from any program",
      texto: "AmigaOS 3.x has no notification system. Trasfondo brings one, with three ways in:",
      formas: [
        ["Avisa \"Backup done\"", "the Avisa command, from the Shell or a script"],
        ["ADDRESS TRASFONDO 'NOTIFY TITLE=\"Backup\" TEXT=\"done\"'", "the bar's ARexx port, which also understands COUNT and CLEAR"],
        ["notify(\"Backup done\", \"12 files\")", "in a program written in Dash (Dash 2.4)"],
      ],
      nota: "If the bar isn't running, the notification is kept and shows when it starts.",
    },
    eliges: {
      titulo: "Your way",
      texto: "In TrasfondoPrefs (in SYS:Prefs) you choose which sections appear, memory and network graphs included, how many tasks are shown, how often it measures, the background and its colour, the hotkey and whether it starts hidden. Use applies the changes straight away, with nothing to restart, and Save keeps them. The window fits your screen font and appears in English or Spanish, following your system's language.",
      prefs: "TrasfondoPrefs",
      exchange: "Trasfondo in Exchange",
      commodity: "It's a commodity, so you can hide, show, disable or quit it from Exchange. It also updates itself: when a new version is out, a green light on the panel tells you and TrasfondoPrefs installs it with one button. If you prefer tooltypes, it understands those too:",
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
      texto: "The latest releases and what's coming, as of 5 November 2026.",
      boton: "What's new",
      lista: [
        {
          estado: "Released 5 Nov",
          titulo: "Trasfondo 2.4",
          texto: "The bar can sit inside the screen's title bar, without covering it (Ferrán García's idea). Closing the panels by clicking on the desktop no longer freezes everything, and it checks for new versions every hour.",
        },
        {
          estado: "Released 5 Nov",
          titulo: "Trasfondo 2.3",
          texto: "Notifications from any program: the bar has an ARexx port, TRASFONDO, and programs written in Dash notify with notify().",
        },
        {
          estado: "Released 4 Nov",
          titulo: "Trasfondo 2.2",
          texto: "The dock redone, with equal boxes, the name on hover and the option to hide by itself. In Startup, each piece turns on and off with its checkbox. And what Ferrán García found testing it on his PiStorm.",
        },
        {
          estado: "Released 4 Nov",
          titulo: "Trasfondo 2.0 and 2.1",
          texto: "The bar with its panels, notifications, the dock, the window keys and colours taken from the backdrop. Since 2.1, the Update button brings every piece, also if you come from 0.11.",
        },
        {
          estado: "Coming next",
          titulo: "More like a modern desktop",
          texto: "Bar styles, a program launcher with search, a backdrop picker and a big panel with music, switches and clipboard.",
        },
      ],
    },
    video: { titulo: "See it in action", texto: "Five minutes of 0.11, the backdrop monitor, on CoffinOS with a graphics card, in Amiberry. It shows how to install it, everything it displays, updating from 0.9 to 0.11 with one click, TrasfondoPrefs and Exchange. The music is by Mantronix & Tip.", boton: "Play", titulo_video: "Trasfondo 0.11: a resource monitor on your Workbench backdrop" },
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
        "To see network speed in KB/s you need Roadshow or a network driver that counts bytes. Otherwise it shows packets per second.",
        "The bar, its panels and the dock: a graphics card with 15 bits or more.",
      ],
      probado: "Tested on AmigaOS 3.2.3 (emulated A1200, with AGA and with a graphics card) and on Coffin R65, also with Directory Opus 5 as the desktop. Scalos should work, but it hasn't been tested. Network and WiFi have only been tested with a test driver. If you use it with a real network card, tell me on GitHub.",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Trasfondo has about 6,300 lines of Dash across all its pieces, with no hand-written C. What the language couldn't do yet (draw on the Workbench backdrop, measure each task's CPU, work as a commodity, know every program's windows, draw icons at any size, receive ARexx commands) was added to Dash for Trasfondo, and now any program can use it.",
      enlace: "Discover Dash",
    },
    pie: [
      { texto: "Trasfondo on GitHub", url: REPO },
      { texto: "Video on YouTube", url: `https://youtu.be/${VIDEO.en}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

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
    titulo: "Trasfondo: monitor de recursos en el fondo del Workbench",
    descripcion:
      "Monitor de recursos para AmigaOS 3.x pintado en el fondo del Workbench: CPU, memoria, tareas, discos, red y la hora. Se pone al día solo. Gratis y libre.",
    entradilla: "Tu Amiga te cuenta qué hace, sin tapar nada.",
    subtitulo: "Muestra la fecha y la hora, la CPU, la memoria, las tareas, los discos y la red en el fondo del Workbench, detrás de los iconos. No es una ventana, así que no tapa nada ni se queda con tus clics.",
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
      texto: "Lo último que ha salido y lo que viene, a 29 de octubre de 2026.",
      boton: "Novedades",
      lista: [
        {
          estado: "Publicada el 25/10",
          titulo: "Trasfondo 0.11",
          texto: "Muestra la temperatura de la Raspberry Pi en una PiStorm (en naranja desde 70 °C), añade gráficas de memoria y de red y gasta menos CPU en el A1200. Si tienes la 0.8 o una posterior, se actualiza con un clic.",
        },
        {
          estado: "Hecho",
          titulo: "La documentación, en inglés y en castellano",
          texto: "Ahora también la documentación de GitHub está en los dos idiomas. El README y cada documento tienen su selector de idioma.",
        },
        {
          estado: "Camino de Dash 2.0",
          titulo: "Listo para el compilador nuevo",
          texto: "Trasfondo está escrito entero en Dash, sin nada de C, así que se podrá compilar con dashc, el compilador de Dash 2.0 que no necesita C, incluso en el propio Amiga. TrasfondoPrefs ya compila con él. Para el panel falta arreglar una cosa del compilador.",
        },
        {
          estado: "Lo que viene",
          titulo: "Más paneles y Aminet",
          texto: "Más paneles, elegir la posición y los colores con tooltypes, y publicarlo en Aminet.",
        },
      ],
    },
    video: { titulo: "Míralo en marcha", texto: "Cinco minutos en CoffinOS con tarjeta gráfica, en Amiberry. Se ve cómo se instala, todo lo que muestra, cómo se actualiza de la 0.9 a la 0.11 con un clic, TrasfondoPrefs y Exchange. La música es de Mantronix & Tip.", boton: "Reproducir", titulo_video: "Trasfondo 0.11: un monitor de recursos en el fondo del Workbench" },
    instalar: {
      titulo: "Listo en un minuto",
      pasos: [
        `Descomprime ${version.fichero} donde quieras.`,
        "Haz doble clic en Instalar. Si aceptas, se copia a SYS:WBStartup y arranca solo con el Workbench.",
        "Para quitarlo, haz doble clic otra vez en su icono o pulsa Eliminar en Exchange. El fondo queda como estaba.",
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
      ],
      probado: "Probado en AmigaOS 3.2.3 (A1200 emulado, con AGA y con tarjeta gráfica) y en Coffin R65, también con Directory Opus 5 como escritorio. Con Scalos debería funcionar, pero no se ha probado. La red y la WiFi solo se han probado con un driver de pruebas. Si lo usas con una tarjeta de red real, cuéntamelo en GitHub.",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Trasfondo tiene unas 2.200 líneas de Dash, contando el configurador y el actualizador, sin nada de C escrito a mano. Lo que el lenguaje no sabía hacer (dibujar en el fondo del Workbench, medir la CPU de cada tarea, funcionar como commodity) se añadió a Dash para Trasfondo, y ahora lo puede usar cualquier programa.",
      enlace: "Descubre Dash",
    },
    pie: [
      { texto: "Trasfondo en GitHub", url: REPO },
      { texto: "Vídeo en YouTube", url: `https://youtu.be/${VIDEO.es}` },
    ],
  },
  en: {
    titulo: "Trasfondo: a resource monitor on the Workbench backdrop",
    descripcion:
      "Resource monitor for AmigaOS 3.x painted on the Workbench backdrop: CPU, memory, tasks, disks, network and the time. Updates itself. Free, open source.",
    entradilla: "Your Amiga tells you what it's up to, without covering anything.",
    subtitulo: "It shows the date and time, CPU, memory, tasks, disks and network on the Workbench backdrop, behind your icons. It isn't a window, so it doesn't cover anything or take your clicks.",
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
      texto: "The latest release and what's coming, as of 29 October 2026.",
      boton: "What's new",
      lista: [
        {
          estado: "Released 25 Oct",
          titulo: "Trasfondo 0.11",
          texto: "It shows the Raspberry Pi's temperature on a PiStorm (orange from 70 °C), adds memory and network graphs and uses less CPU on the A1200. If you have 0.8 or later, it updates with one click.",
        },
        {
          estado: "Done",
          titulo: "The documentation, in English and Spanish",
          texto: "The documentation on GitHub is now in both languages too. The README and every document have a language switch.",
        },
        {
          estado: "On to Dash 2.0",
          titulo: "Ready for the new compiler",
          texto: "Trasfondo is written entirely in Dash, with no C, so it will build with dashc, the Dash 2.0 compiler that needs no C, even on the Amiga itself. TrasfondoPrefs already compiles with it. The panel still needs one compiler fix.",
        },
        {
          estado: "Coming next",
          titulo: "More panels, and Aminet",
          texto: "More panels, setting the position and colours with tooltypes, and releasing it on Aminet.",
        },
      ],
    },
    video: { titulo: "See it in action", texto: "Five minutes on CoffinOS with a graphics card, in Amiberry. It shows how to install it, everything it displays, updating from 0.9 to 0.11 with one click, TrasfondoPrefs and Exchange. The music is by Mantronix & Tip.", boton: "Play", titulo_video: "Trasfondo 0.11: a resource monitor on your Workbench backdrop" },
    instalar: {
      titulo: "Ready in a minute",
      pasos: [
        `Unpack ${version.fichero} anywhere.`,
        "Double-click Instalar (the installer). If you say yes, it's copied to SYS:WBStartup and starts with the Workbench.",
        "To remove it, double-click its icon again or use Remove in Exchange. The backdrop is left as it was.",
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
      ],
      probado: "Tested on AmigaOS 3.2.3 (emulated A1200, with AGA and with a graphics card) and on Coffin R65, also with Directory Opus 5 as the desktop. Scalos should work, but it hasn't been tested. Network and WiFi have only been tested with a test driver. If you use it with a real network card, tell me on GitHub.",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Trasfondo has about 2,200 lines of Dash, counting the settings window and the updater, with no hand-written C. What the language couldn't do yet (draw on the Workbench backdrop, measure each task's CPU, work as a commodity) was added to Dash for Trasfondo, and now any program can use it.",
      enlace: "Discover Dash",
    },
    pie: [
      { texto: "Trasfondo on GitHub", url: REPO },
      { texto: "Video on YouTube", url: `https://youtu.be/${VIDEO.en}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

import type { Idioma } from "retro";

/** Los textos de la web en sus dos idiomas. Cada promesa, contrastada con el README y las notas de la 0.3. */
export const VERSION = "0.3";
export const DESCARGA = "https://github.com/FreeMEM/trasfondo/releases/download/v0.3/trasfondo-0.3.lha";
export const RELEASE = "https://github.com/FreeMEM/trasfondo/releases/tag/v0.3";
export const REPO = "https://github.com/FreeMEM/trasfondo";
export const VIDEO = "vMqksMRh4rI";
export const BASE = "https://trasfondo.freemem.space";

export const CONTENIDO = {
  es: {
    titulo: "Trasfondo: un monitor de recursos en el fondo del Workbench",
    descripcion:
      "Trasfondo pinta en el fondo de pantalla del Amiga la CPU con su último minuto, la memoria, las tareas, los discos y la red, detrás de los iconos. Para AmigaOS 3.x, gratis y libre.",
    entradilla: "Un monitor de recursos pintado en el fondo del Workbench.",
    subtitulo: "La CPU, la memoria, las tareas, los discos y la red, siempre a la vista y detrás de tus iconos. No es una ventana: no tapa nada ni recibe clics.",
    descargar: `Descargar la ${VERSION}`,
    peso: "53 KB, para AmigaOS 3.0 o posterior",
    verVideo: "Ver el vídeo",
    aviso: "Arrastra un icono por encima del panel",
    escritorioAlt: "Simulación de un escritorio de Workbench con el panel de Trasfondo",
    iconos: { ram: "RAM Disk", sistema: "System", work: "Work", cajon: "Trasfondo", prefs: "TrasfondoPrefs" },
    panel: {
      titulo: "Qué enseña",
      texto: "Arriba a la derecha del escritorio, cada segundo:",
      imagen: "Trasfondo en un Workbench 3.2 AGA, con un List de todo el disco en marcha",
      cosas: [
        { que: "CPU", como: "La CPU en uso y su historia del último minuto. Se mide de verdad, tarea a tarea, con los ganchos de cambio de tarea de exec: no es una estimación." },
        { que: "Memoria", como: "La memoria Chip y la Fast que quedan libres." },
        { que: "Tareas", como: "Las que más CPU toman, de una a veinte, con su barra." },
        { que: "Discos", como: "Cada volumen montado: cuánto está lleno y su tamaño. Nunca pide un disco." },
        { que: "Red y WiFi", como: "Lo que entra y sale por segundo y, si el driver la da, la señal de la WiFi en dBm." },
      ],
    },
    cuelgue: {
      titulo: "Sin cuelgues",
      frase: "Ninguna pregunta a un disco o a un driver espera más de un tercio de segundo.",
      texto: "Si un volumen o una tarjeta de red no contestan, el panel pone «sin respuesta» y sigue. Si la red se cae, lo dice al momento, y cuando vuelve, vuelve a dar datos sin reiniciar nada.",
    },
    pantallas: {
      titulo: "En cualquier pantalla",
      texto: "Con tarjeta gráfica y color real, el panel es translúcido y deja ver el fondo. En AGA, ECS o con 256 colores lleva un fondo sólido, para que se lea siempre.",
      rtg: "RTG a 1280x1024: el panel translúcido, y un icono encima",
      aga: "AGA a 640x256: fondo sólido",
    },
    eliges: {
      titulo: "Tú eliges qué se ve",
      texto: "TrasfondoPrefs, en SYS:Prefs, dice qué secciones salen, cuántas tareas, la tecla rápida y si arranca oculto. Usar lo aplica al momento, sin reiniciar Trasfondo; Guardar, para siempre.",
      prefs: "TrasfondoPrefs",
      exchange: "Trasfondo en Exchange",
      commodity: "Es una commodity: desde Exchange se oculta, se muestra, se desactiva o se cierra. Y también responde a los tooltypes de su icono:",
      tooltypes: [
        ["MOSTRAR=CPU,DISCOS", "qué secciones salen y en qué orden"],
        ["TAREAS=3", "cuántas tareas"],
        ["CX_POPKEY=ctrl alt t", "la tecla para ocultarlo y mostrarlo"],
        ["CX_POPUP=NO", "arranca oculto"],
      ],
    },
    video: { titulo: "En vídeo", texto: "Seis minutos: cómo se instala y cómo se usa, en AGA y con tarjeta gráfica.", boton: "Reproducir", titulo_video: "Trasfondo 0.3: instalarlo y usarlo" },
    instalar: {
      titulo: "Instalar",
      pasos: [
        "Descomprime trasfondo-0.3.lha donde quieras.",
        "Doble clic en Instalar. Si dices que sí, se copia a SYS:WBStartup y arranca solo con el Workbench.",
        "Para pararlo, doble clic otra vez en su icono, o Eliminar en Exchange. El fondo queda como estaba.",
      ],
      codigo: "Código fuente",
      notas: "Novedades de la 0.3",
    },
    requisitos: {
      titulo: "Requisitos",
      lista: [
        "AmigaOS 3.0 o posterior, con el Workbench en marcha.",
        "Cualquier 68k: es código de 68000 y no usa FPU.",
        "OCS, ECS, AGA o tarjeta gráfica (CyberGraphX o Picasso96).",
        "Para ver la velocidad de la red en bytes, Roadshow; con otras pilas da paquetes por segundo.",
      ],
      probado: "Probado en AmigaOS 3.2.3 (A1200 emulado, AGA y RTG) y en Coffin R65. La red y la WiFi, aún solo con un driver de pruebas: si lo usas con una tarjeta de verdad, cuéntalo en GitHub.",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Trasfondo son unas 650 líneas de Dash, sin una línea de C a mano. Lo que le faltaba al lenguaje para hacerlo (pintar en el fondo del Workbench, medir la CPU de cada tarea, ser una commodity) ahora lo tiene cualquier programa en Dash.",
      enlace: "Conoce Dash",
    },
    pie: [
      { texto: "Trasfondo en GitHub", url: REPO },
      { texto: "Vídeo en YouTube", url: `https://youtu.be/${VIDEO}` },
    ],
  },
  en: {
    titulo: "Trasfondo: a resource monitor in the Workbench backdrop",
    descripcion:
      "Trasfondo draws the CPU and its last minute, memory, tasks, disks and network on the Amiga's backdrop, behind your icons. For AmigaOS 3.x, free and open source.",
    entradilla: "A resource monitor painted on the Workbench backdrop.",
    subtitulo: "CPU, memory, tasks, disks and network, always in sight and behind your icons. It is not a window: it covers nothing and takes no clicks.",
    descargar: `Download ${VERSION}`,
    peso: "53 KB, for AmigaOS 3.0 or later",
    verVideo: "Watch the video",
    aviso: "Drag an icon over the panel",
    escritorioAlt: "Simulated Workbench desktop with the Trasfondo panel",
    iconos: { ram: "RAM Disk", sistema: "System", work: "Work", cajon: "Trasfondo", prefs: "TrasfondoPrefs" },
    panel: {
      titulo: "What it shows",
      texto: "In the top right corner of the desktop, every second:",
      imagen: "Trasfondo on a Workbench 3.2 AGA screen, while a List of the whole disk runs",
      cosas: [
        { que: "CPU", como: "CPU in use and its history over the last minute. Measured for real, task by task, with exec's task-switch hooks: not an estimate." },
        { que: "Memory", como: "Free Chip and Fast memory." },
        { que: "Tasks", como: "The ones using the most CPU, from one to twenty, each with its bar." },
        { que: "Disks", como: "Every mounted volume: how full it is and its size. It never asks you to insert a disk." },
        { que: "Network and WiFi", como: "What comes in and goes out per second and, if the driver reports it, the WiFi signal in dBm." },
      ],
    },
    cuelgue: {
      titulo: "No hangs",
      frase: "No question to a disk or a driver waits longer than a third of a second.",
      texto: "If a volume or a network card does not answer, the panel says “no answer” and carries on. If the network goes down, it says so at once, and shows data again when it comes back, with no restart.",
    },
    pantallas: {
      titulo: "On any screen",
      texto: "With a graphics card in true colour, the panel is translucent and lets the backdrop show through. On AGA, ECS or 256-colour screens it gets a solid background, so it is always readable.",
      rtg: "RTG at 1280x1024: the translucent panel, with an icon on top",
      aga: "AGA at 640x256: solid background",
    },
    eliges: {
      titulo: "You choose what it shows",
      texto: "TrasfondoPrefs, in SYS:Prefs, sets which sections appear, how many tasks, the hotkey and whether it starts hidden. Use applies it at once, without restarting Trasfondo; Save keeps it.",
      prefs: "TrasfondoPrefs",
      exchange: "Trasfondo in Exchange",
      commodity: "It is a commodity: from Exchange you can hide it, show it, disable it or quit it. It also follows the tooltypes of its icon:",
      tooltypes: [
        ["MOSTRAR=CPU,DISCOS", "which sections appear, and in what order"],
        ["TAREAS=3", "how many tasks"],
        ["CX_POPKEY=ctrl alt t", "the key to hide and show it"],
        ["CX_POPUP=NO", "start hidden"],
      ],
    },
    video: { titulo: "On video", texto: "Six minutes, in Spanish with subtitles: installing it and using it, on AGA and with a graphics card.", boton: "Play", titulo_video: "Trasfondo 0.3: install and use" },
    instalar: {
      titulo: "Install",
      pasos: [
        "Unpack trasfondo-0.3.lha anywhere.",
        "Double-click Instalar. If you say yes, it goes to SYS:WBStartup and starts with the Workbench.",
        "To stop it, double-click its icon again, or Remove it in Exchange. The backdrop is left as it was.",
      ],
      codigo: "Source code",
      notas: "What's new in 0.3",
    },
    requisitos: {
      titulo: "Requirements",
      lista: [
        "AmigaOS 3.0 or later, with the Workbench running.",
        "Any 68k: it is 68000 code and needs no FPU.",
        "OCS, ECS, AGA or a graphics card (CyberGraphX or Picasso96).",
        "For network speed in bytes, Roadshow; with other stacks it shows packets per second.",
      ],
      probado: "Tested on AmigaOS 3.2.3 (emulated A1200, AGA and RTG) and on Coffin R65. Network and WiFi have only been tested with a test driver so far: if you run it with a real card, tell us on GitHub.",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Trasfondo is about 650 lines of Dash, without a single line of hand-written C. What the language lacked to build it (drawing on the Workbench backdrop, measuring each task's CPU, being a commodity) is now there for every Dash program.",
      enlace: "Meet Dash",
    },
    pie: [
      { texto: "Trasfondo on GitHub", url: REPO },
      { texto: "Video on YouTube", url: `https://youtu.be/${VIDEO}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

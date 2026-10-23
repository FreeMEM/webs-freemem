import { tamano, type Idioma } from "retro";

import version from "./version.json";

/** Los textos de la web en sus dos idiomas. Cada promesa, contrastada con el README y las notas de las versiones. */
/** La última release: la pone herramientas/versiones.py antes de construir. */
export const VERSION = version.version;
export const DESCARGA = version.descarga;
export const RELEASE = version.notas;
export const REPO = "https://github.com/FreeMEM/trasfondo";
export const VIDEO = "vMqksMRh4rI";
export const BASE = "https://trasfondo.freemem.space";

export const CONTENIDO = {
  es: {
    titulo: "Trasfondo: tu Amiga te cuenta qué hace, en el fondo del Workbench",
    descripcion:
      "Trasfondo es un monitor de recursos para AmigaOS 3.x que se pinta en el fondo del Workbench, detrás de tus iconos: la CPU con su último minuto, la memoria, las tareas, los discos y la red. Gratis y libre.",
    entradilla: "Tu Amiga te cuenta qué hace, sin tapar nada.",
    subtitulo: "La fecha y la hora, la CPU, la memoria, las tareas, los discos y la red, pintados en el fondo del Workbench, detrás de tus iconos. No es una ventana: no estorba, no se pone delante y no se queda con tus clics.",
    descargar: `Descargar la ${VERSION}`,
    peso: `${tamano(version.bytes, "es")}, para AmigaOS 3.0 o posterior`,
    verVideo: "Verlo en vídeo",
    aviso: "Prueba: arrastra un icono por encima del panel",
    escritorioAlt: "Simulación de un escritorio de Workbench con el panel de Trasfondo",
    iconos: { ram: "RAM Disk", sistema: "System", work: "Work", cajon: "Trasfondo", prefs: "TrasfondoPrefs" },
    panel: {
      titulo: "Todo a la vista, de un vistazo",
      texto: "Arriba a la derecha de tu escritorio, al día cada segundo:",
      imagen: "Trasfondo en un Workbench 3.2 AGA, con un List de todo el disco en marcha",
      cosas: [
        { que: "Fecha y hora", como: "Arriba del todo, en tu idioma: «sábado 24-oct-26» y la hora." },
        { que: "CPU", como: "Cuánto trabaja tu Amiga y cómo ha ido el último minuto. Medido de verdad, tarea a tarea, con los ganchos de cambio de tarea de exec: nada de estimaciones." },
        { que: "Memoria", como: "La Chip y la Fast que te quedan libres." },
        { que: "Tareas", como: "Quién se está comiendo la CPU: de una a veinte, cada una con su barra." },
        { que: "Discos", como: "Lo lleno que está cada volumen montado y su tamaño. Y nunca te pedirá que metas un disco." },
        { que: "Red y WiFi", como: "Lo que entra y sale por segundo y, si el driver lo cuenta, la señal de tu WiFi en dBm." },
      ],
    },
    cuelgue: {
      titulo: "No se cuelga. Nunca espera",
      frase: "Ninguna pregunta a un disco o a un driver espera más de un tercio de segundo.",
      texto: "Si un volumen o una tarjeta de red no contestan, el panel pone «sin respuesta» y sigue a lo suyo. Si se cae la red, lo ves al momento; cuando vuelve, los datos vuelven solos, sin reiniciar nada.",
    },
    pantallas: {
      titulo: "Luce en cualquier pantalla",
      texto: "Con tarjeta gráfica y color real, el panel es translúcido y deja ver tu fondo de pantalla. En AGA, ECS o con 256 colores lleva un fondo sólido, para que se lea siempre bien.",
      rtg: "RTG a 1280x1024: el panel translúcido, y un icono encima",
      aga: "AGA a 640x256: fondo sólido",
    },
    eliges: {
      titulo: "A tu manera",
      texto: "Con TrasfondoPrefs (en SYS:Prefs) decides qué secciones salen, cuántas tareas, la tecla rápida y si arranca oculto. «Usar» lo aplica al instante, sin reiniciar nada; «Guardar», para siempre. Su ventana se ajusta a la fuente de tu pantalla.",
      prefs: "TrasfondoPrefs",
      exchange: "Trasfondo en Exchange",
      commodity: "Y como buena commodity, se maneja desde Exchange: ocultarlo, mostrarlo, desactivarlo o cerrarlo. Además se pone al día solo: cuando sale una versión nueva, un piloto verde lo avisa en el panel y TrasfondoPrefs la instala con un botón. Si eres más de tooltypes, también los entiende:",
      tooltypes: [
        ["MOSTRAR=FECHA,CPU,DISCOS", "qué secciones salen y en qué orden"],
        ["TAREAS=3", "cuántas tareas"],
        ["CX_POPKEY=ctrl alt t", "la tecla para ocultarlo y mostrarlo"],
        ["CX_POPUP=NO", "arranca oculto"],
      ],
    },
    video: { titulo: "Míralo en marcha", texto: "Seis minutos para verlo todo: cómo se instala y cómo se usa, en AGA y con tarjeta gráfica.", boton: "Reproducir", titulo_video: "Trasfondo 0.3: instalarlo y usarlo" },
    instalar: {
      titulo: "Listo en un minuto",
      pasos: [
        `Descomprime ${version.fichero} donde quieras.`,
        "Doble clic en Instalar. Si le dices que sí, se copia a SYS:WBStartup y arrancará solo con el Workbench.",
        "¿Quieres pararlo? Doble clic otra vez en su icono, o Eliminar en Exchange. El fondo queda tal como estaba.",
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
        "Para ver la red en bytes por segundo, Roadshow; con otras pilas te da paquetes por segundo.",
      ],
      probado: "Probado en AmigaOS 3.2.3 (A1200 emulado, AGA y RTG) y en Coffin R65, también con Directory Opus 5 de escritorio. Con Scalos debería ir, pero aún no se ha probado. La red y la WiFi, de momento solo con un driver de pruebas: si lo usas con una tarjeta de verdad, cuéntamelo en GitHub.",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Trasfondo son unas 800 líneas de Dash, con su configurador, y ni una línea de C escrita a mano. Lo que el lenguaje no sabía hacer (pintar en el fondo del Workbench, medir la CPU de cada tarea, ser una commodity) lo aprendió para Trasfondo, y ahora lo tiene cualquier programa en Dash.",
      enlace: "Descubre Dash",
    },
    pie: [
      { texto: "Trasfondo en GitHub", url: REPO },
      { texto: "Vídeo en YouTube", url: `https://youtu.be/${VIDEO}` },
    ],
  },
  en: {
    titulo: "Trasfondo: your Amiga tells you what it's up to, on the Workbench backdrop",
    descripcion:
      "Trasfondo is a resource monitor for AmigaOS 3.x painted on the Workbench backdrop, behind your icons: the CPU with its last minute, memory, tasks, disks and network. Free and open source.",
    entradilla: "Your Amiga tells you what it's up to, without covering anything.",
    subtitulo: "Date and time, CPU, memory, tasks, disks and network, painted on the Workbench backdrop, behind your icons. It isn't a window: it doesn't get in the way, never comes to the front and never steals your clicks.",
    descargar: `Download ${VERSION}`,
    peso: `${tamano(version.bytes, "en")}, for AmigaOS 3.0 or later`,
    verVideo: "Watch it in action",
    aviso: "Try it: drag an icon over the panel",
    escritorioAlt: "Simulated Workbench desktop with the Trasfondo panel",
    iconos: { ram: "RAM Disk", sistema: "System", work: "Work", cajon: "Trasfondo", prefs: "TrasfondoPrefs" },
    panel: {
      titulo: "Everything in view, at a glance",
      texto: "Top right of your desktop, refreshed every second:",
      imagen: "Trasfondo on a Workbench 3.2 AGA, with a List of the whole disk running",
      cosas: [
        { que: "Date and time", como: "Right at the top, in your language: the day, the date and the time." },
        { que: "CPU", como: "How hard your Amiga is working and how the last minute went. Truly measured, task by task, with exec's task-switch hooks: no guesswork." },
        { que: "Memory", como: "The Chip and Fast memory you have left." },
        { que: "Tasks", como: "Who's eating the CPU: one to twenty of them, each with its bar." },
        { que: "Disks", como: "How full each mounted volume is and its size. And it will never ask you to insert a disk." },
        { que: "Network and WiFi", como: "What comes in and goes out per second and, if the driver reports it, your WiFi signal in dBm." },
      ],
    },
    cuelgue: {
      titulo: "It never hangs. It never waits",
      frase: "No question to a disk or a driver waits longer than a third of a second.",
      texto: "If a volume or a network card doesn't answer, the panel says “no answer” and carries on. If the network drops, you see it at once; when it comes back, the figures come back on their own, with nothing to restart.",
    },
    pantallas: {
      titulo: "Looks good on any screen",
      texto: "With a graphics card in true colour, the panel is translucent and lets your wallpaper show through. On AGA, ECS or 256 colours it gets a solid background, so it always reads well.",
      rtg: "RTG at 1280x1024: the translucent panel, with an icon on top",
      aga: "AGA at 640x256: solid background",
    },
    eliges: {
      titulo: "Your way",
      texto: "With TrasfondoPrefs (in SYS:Prefs) you choose which sections appear, how many tasks, the hotkey and whether it starts hidden. Use applies it instantly, with nothing to restart; Save keeps it for good. Its window fits your screen font.",
      prefs: "TrasfondoPrefs",
      exchange: "Trasfondo in Exchange",
      commodity: "And like any good commodity, it answers to Exchange: hide it, show it, disable it or quit it. It also keeps itself up to date: when a new version is out, a green light on the panel tells you and TrasfondoPrefs installs it with one button. If you're more of a tooltypes person, it speaks those too:",
      tooltypes: [
        ["MOSTRAR=FECHA,CPU,DISCOS", "which sections appear, and in what order"],
        ["TAREAS=3", "how many tasks"],
        ["CX_POPKEY=ctrl alt t", "the key to hide and show it"],
        ["CX_POPUP=NO", "start hidden"],
      ],
    },
    video: { titulo: "See it in action", texto: "Six minutes to see it all, in Spanish with subtitles: installing it and using it, on AGA and with a graphics card.", boton: "Play", titulo_video: "Trasfondo 0.3: install and use" },
    instalar: {
      titulo: "Ready in a minute",
      pasos: [
        `Unpack ${version.fichero} anywhere.`,
        "Double-click Instalar. Say yes and it goes to SYS:WBStartup, so it starts with the Workbench.",
        "Want to stop it? Double-click its icon again, or Remove it in Exchange. The backdrop is left just as it was.",
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
        "For network speed in bytes per second, Roadshow; with other stacks you get packets per second.",
      ],
      probado: "Tested on AmigaOS 3.2.3 (emulated A1200, AGA and RTG) and on Coffin R65, also with Directory Opus 5 as the desktop. Scalos should work too, but it hasn't been tested yet. Network and WiFi, so far only with a test driver: if you run it with a real card, tell me on GitHub.",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Trasfondo is about 800 lines of Dash, settings window included, and not one line of hand-written C. What the language couldn't do yet (draw on the Workbench backdrop, measure each task's CPU, be a commodity) it learned for Trasfondo, and now every Dash program can.",
      enlace: "Discover Dash",
    },
    pie: [
      { texto: "Trasfondo on GitHub", url: REPO },
      { texto: "Video on YouTube", url: `https://youtu.be/${VIDEO}` },
    ],
  },
} satisfies Record<Idioma, unknown>;

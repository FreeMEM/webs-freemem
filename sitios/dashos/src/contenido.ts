import type { Idioma } from "retro";

/**
 * Los textos de la web en sus dos idiomas. Cada afirmación, contrastada con el README.md, el PLAN.md y
 * docs/diseño/RESUMEN.md del repositorio de DashOS (10/11/2026). No prometer fechas ni nada que no esté ahí.
 * Los datos de la arquitectura y del avance están en datos.ts.
 */
export const BASE = "https://dashos.freemem.space";
export const REPO = "https://github.com/FreeMEM/dashos";

/** Un porcentaje como se escribe en cada idioma: «91 %» y «91%». */
export const pc = (n: number, idioma: Idioma) => (idioma === "es" ? `${n.toLocaleString("es-ES")} %` : `${n}%`);

export const CONTENIDO = {
  es: {
    titulo: "DashOS: un sistema operativo con la API de AmigaOS para la Raspberry Pi",
    descripcion:
      "DashOS es un sistema operativo propio para la Raspberry Pi, con un micronúcleo en Rust y la API de AmigaOS. Está en desarrollo: aquí se ve cómo está hecho y cuánto lleva cada pieza.",
    entradilla: "Moderno por dentro, Amiga por fuera.",
    intro: [
      "DashOS es un sistema operativo propio para la Raspberry Pi: primero la Pi 4, también la Pi 3, y la Pi 5 después. El kernel es un micronúcleo en Rust que solo reparte la CPU, la memoria, los mensajes y las interrupciones. Todo lo demás son procesos que se hablan por canales y solo pueden hacer lo que les permiten sus llaves.",
      "Implementa la API de AmigaOS 3.1 de forma nativa en ARM. Los programas 68k del Amiga corren en una caja: un proceso con el JIT de Emu68, que traduce su código a ARM mientras se ejecuta, y sus llamadas al sistema van a bibliotecas nativas, sin emular un Amiga entero. Para el resto de programas habrá una caja Linux: Arch Linux ARM en una máquina virtual, con sus ventanas en el escritorio.",
    ],
    estado: {
      titulo: "Estado",
      lineas: [
        "En desarrollo. Todo lo hecho se ha probado en el emulador QEMU; nada todavía en una placa real.",
        "Aún no hay escritorio ni caja Amiga, ni ninguna versión que se pueda descargar o instalar.",
        "Los porcentajes de esta página son del 10 de noviembre de 2026 y salen de las bitácoras del proyecto.",
      ],
    },
    verMarcha: "Ver el sistema en marcha",
    verCodigo: "El código, en GitHub",
    enMarcha: {
      titulo: "El sistema en marcha",
      texto:
        "Elige una situación y mira cómo viaja la información. Todo mensaje entre procesos pasa por el kernel: por eso las rutas azules bajan a \"Llaves y canales\" y vuelven a subir. Las piezas con borde de puntos están diseñadas, pero aún no existen.",
      situaciones: "Situaciones",
      diseno: "diseño",
      ventana: "DashOS: el sistema en marcha",
      svg: "Diagrama de DashOS con sus piezas, de los programas al hardware, y por dónde se hablan",
      desplazar: "Desliza el diagrama a los lados para verlo entero.",
      reproducir: "Reproducir",
      pausa: "Pausa",
      repetir: "Repetir",
      anterior: "Paso anterior",
      siguiente: "Paso siguiente",
      velocidad: "Velocidad",
      lenta: "Lenta",
      normal: "Normal",
      rapida: "Rápida",
      paso: (n: number, de: number) => `Paso ${n} de ${de}`,
      sinHacer: " (diseñado, aún no existe)",
      pasos: "Pasos",
      leyenda: [
        ["canal", "Mensaje por un canal (pasa por el kernel)"],
        ["irq", "Interrupción"],
        ["dma", "DMA: el aparato lee o escribe la memoria, sin la CPU"],
        ["llamada", "Llamada dentro del mismo proceso"],
        ["rechazo", "Rechazado"],
      ],
    },
    capas: {
      titulo: "Las capas y su avance",
      texto: "Cada pieza, en su capa y con el color de lo que lleva hecho. Pulsa una para ver qué es, cuánto lleva y qué le falta.",
      resumen: ["media de todos los componentes", "componentes hechos", "en curso", "diseñados, sin empezar"],
      leyenda: { hecho: "Hecho (80 % o más)", curso: "En curso", plan: "Diseñado, sin empezar", gpl: "Zona GPL (proceso aparte)" },
      pulsa: "Pulsa una pieza",
      pulsaResto: " para ver qué es, cuánto lleva y qué le falta.",
      falta: "Falta",
      porCiento: "por ciento",
    },
    avance: {
      titulo: "Avance por componente",
      texto:
        "El porcentaje es lo hecho y probado frente a lo planeado en su diseño y su bitácora. La columna \"Cómo se cuenta\" dice de dónde sale cada cifra; \"juicio\" marca las que no tienen pasos contados.",
      ventana: "Avance",
      columnas: ["Componente", "Hecho", "Cómo se cuenta", "Qué falta"],
      notas: "Notas",
    },
    dash: {
      titulo: "Dash, también para DashOS",
      texto:
        "Dash, el lenguaje de FreeMEM para el Amiga, ya compila programas nativos para DashOS. La idea es que el mismo programa en Dash sirva para AmigaOS 3.x (68k) y para DashOS (ARM).",
      enlace: "Conoce Dash",
    },
    pie: [{ texto: "Código", url: REPO }],
  },
  en: {
    titulo: "DashOS: an operating system with the AmigaOS API for the Raspberry Pi",
    descripcion:
      "DashOS is a new operating system for the Raspberry Pi, with a microkernel in Rust and the AmigaOS API. It is in development: this page shows how it is built and how far along each part is.",
    entradilla: "Modern inside, Amiga outside.",
    intro: [
      "DashOS is a new operating system for the Raspberry Pi: the Pi 4 first, the Pi 3 too, and the Pi 5 later. The kernel is a microkernel in Rust that only shares out the CPU, memory, messages and interrupts. Everything else is a process that talks to the others through channels and can only do what its keys allow.",
      "It implements the AmigaOS 3.1 API natively on ARM. Amiga 68k programs run in a box: a process with the Emu68 JIT, which translates their code to ARM as it runs, while their system calls go to native libraries, without emulating a whole Amiga. Other programs will have a Linux box: Arch Linux ARM in a virtual machine, with its windows on the desktop.",
    ],
    estado: {
      titulo: "Status",
      lineas: [
        "In development. Everything done so far has been tested in the QEMU emulator; nothing on a real board yet.",
        "There is no desktop or Amiga box yet, and no release you can download or install.",
        "The percentages on this page are from 10 November 2026 and come from the project's work logs.",
      ],
    },
    verMarcha: "See the system at work",
    verCodigo: "The code, on GitHub",
    enMarcha: {
      titulo: "The system at work",
      texto:
        "Pick a situation and watch how the information travels. Every message between processes goes through the kernel: that is why the blue routes go down to \"Keys and channels\" and back up. Parts with a dotted border are designed but do not exist yet.",
      situaciones: "Situations",
      diseno: "design",
      ventana: "DashOS: the system at work",
      svg: "Diagram of DashOS with its parts, from programs down to the hardware, and how they talk to each other",
      desplazar: "Swipe the diagram sideways to see all of it.",
      reproducir: "Play",
      pausa: "Pause",
      repetir: "Replay",
      anterior: "Previous step",
      siguiente: "Next step",
      velocidad: "Speed",
      lenta: "Slow",
      normal: "Normal",
      rapida: "Fast",
      paso: (n: number, de: number) => `Step ${n} of ${de}`,
      sinHacer: " (designed, does not exist yet)",
      pasos: "Steps",
      leyenda: [
        ["canal", "Message on a channel (goes through the kernel)"],
        ["irq", "Interrupt"],
        ["dma", "DMA: the device reads or writes memory, without the CPU"],
        ["llamada", "Call inside the same process"],
        ["rechazo", "Refused"],
      ],
    },
    capas: {
      titulo: "The layers and their progress",
      texto: "Each part, in its layer and coloured by how much of it is done. Click one to see what it is, how far along it is and what it still needs.",
      resumen: ["average across all components", "components done", "in progress", "designed, not started"],
      leyenda: { hecho: "Done (80% or more)", curso: "In progress", plan: "Designed, not started", gpl: "GPL zone (separate process)" },
      pulsa: "Click a part",
      pulsaResto: " to see what it is, how far along it is and what it still needs.",
      falta: "Missing",
      porCiento: "per cent",
    },
    avance: {
      titulo: "Progress by component",
      texto:
        "The percentage is what is done and tested against what is planned in its design and its work log. The \"How it is counted\" column says where each figure comes from; \"judgement\" marks the ones without counted steps.",
      ventana: "Progress",
      columnas: ["Component", "Done", "How it is counted", "What is missing"],
      notas: "Notes",
    },
    dash: {
      titulo: "Dash, for DashOS too",
      texto:
        "Dash, FreeMEM's language for the Amiga, already compiles native programs for DashOS. The idea is that the same Dash program works on AmigaOS 3.x (68k) and on DashOS (ARM).",
      enlace: "Meet Dash",
    },
    pie: [{ texto: "Code", url: REPO }],
  },
} as const;

export type Textos = (typeof CONTENIDO)[Idioma];

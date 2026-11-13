import type { Idioma } from "retro";

/**
 * Los textos de la web en sus dos idiomas. Cada afirmación, contrastada con el README.md, el PLAN.md y
 * docs/diseño/RESUMEN.md del repositorio de DashOS (10/11/2026) y puesta al día el 13/11/2026 con el estado que dio su sesión. No prometer fechas ni nada que no esté ahí.
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
      "Implementa la API de AmigaOS 3.1 de forma nativa en ARM. Los programas 68k del Amiga corren en una caja: un proceso con el JIT de Emu68, que traduce su código a ARM mientras se ejecuta, y sus llamadas al sistema van a bibliotecas nativas, sin emular un Amiga entero. Para el resto de programas hay una caja Linux: Arch Linux ARM en una máquina virtual, con sus ventanas en el escritorio.",
    ],
    estado: {
      titulo: "Estado",
      lineas: [
        "En desarrollo. Todo lo hecho se ha probado en el emulador QEMU; nada todavía en una placa real.",
        "Ya hay escritorio, caja Amiga y caja Linux, pero aún no hay ninguna versión que se pueda descargar o instalar.",
        "Estado al 13 de noviembre de 2026.",
      ],
    },
    verMarcha: "Ver capturas",
    cajas: {
      titulo: "Qué son las cajas",
      parrafos: [
        "DashOS tiene sus propios programas, nativos para ARM. Los de otros sistemas viven en cajas. Una caja es un proceso aislado de DashOS que hace de casa para esos programas: les da lo que esperan encontrar en su sistema y, por debajo, lo traduce a los servicios de DashOS.",
        "La caja Amiga ejecuta programas 68k de AmigaOS 3.x. El JIT de Emu68 traduce su código a ARM mientras corre, y sus llamadas al sistema (exec, dos, intuition, gadtools...) van a bibliotecas nativas de DashOS escritas en Rust. No se emula un Amiga entero: sus ventanas son ventanas del escritorio.",
        "La caja Linux es una máquina virtual con Arch Linux ARM. Sus programas, como Firefox o los de GTK, salen en el escritorio de DashOS como uno más, con portapapeles, y su red pasa por un cortafuegos.",
        "Estar en una caja tiene dos ventajas. Si un programa de otro sistema falla, cae su caja, no DashOS. Y la caja solo puede hacer lo que le dejan sus llaves: ver los ficheros de su usuario, abrir ventanas, usar la red. Cada ventana lleva una marca con su caja, 68K o LINUX, para que se sepa de dónde viene. Más adelante habrá también una caja PowerPC para programas de WarpOS, MorphOS y AmigaOS 4.",
      ],
    },
    nucleos: {
      titulo: "Los programas del Amiga y los núcleos",
      parrafos: [
        "Los programas del Amiga se escribieron para un ordenador con una sola CPU. Comparten la memoria sin cerrojos y dan por hecho que, mientras tienen el turno o han llamado a Forbid(), nadie más toca nada. Si dos corrieran a la vez en dos núcleos, se pisarían los datos.",
        "Por eso, dentro de la caja Amiga, las tareas 68k se turnan como en un Amiga de verdad. Pero la caja es un proceso más de DashOS: corre aislada y a la vez que el escritorio, la caja Linux, el sistema de archivos, el sonido y la red, que van en los otros núcleos. Su Forbid() solo detiene la caja, no el sistema.",
        "El siguiente paso, ya diseñado, es una caja por programa: cada una en su núcleo, de modo que, por ejemplo, LightWave y Tachyon corran de verdad a la vez y, si uno se cuelga, el otro siga. No comparten memoria, pero sí los ficheros: la caja no tiene discos Amiga falsos, su dos.library usa el sistema de archivos de DashOS, con los mismos volúmenes y asignaciones para todos. Un servicio puente les pasará ARexx, el portapapeles y los puertos con nombre.",
        "Hoy hay una sola caja Amiga. Las varias cajas y su puente están diseñados, aún no hechos.",
      ],
    },
    capturas: { titulo: "Capturas", texto: "En el emulador QEMU, el 13 de noviembre de 2026. Pulsa una para verla entera." },
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
        "Los programas de Dash, el lenguaje de FreeMEM para el Amiga, ya corren en la caja Amiga de DashOS, y Dash está aprendiendo a sacar programas nativos para ARM. La idea es que el mismo programa en Dash sirva para AmigaOS 3.x (68k) y para DashOS.",
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
      "It implements the AmigaOS 3.1 API natively on ARM. Amiga 68k programs run in a box: a process with the Emu68 JIT, which translates their code to ARM as it runs, while their system calls go to native libraries, without emulating a whole Amiga. Other programs have a Linux box: Arch Linux ARM in a virtual machine, with its windows on the desktop.",
    ],
    estado: {
      titulo: "Status",
      lineas: [
        "In development. Everything done so far has been tested in the QEMU emulator; nothing on a real board yet.",
        "There is a desktop, an Amiga box and a Linux box, but no release you can download or install yet.",
        "Status as of 13 November 2026.",
      ],
    },
    verMarcha: "See screenshots",
    cajas: {
      titulo: "What the boxes are",
      parrafos: [
        "DashOS has its own programs, native to ARM. Programs from other systems live in boxes. A box is an isolated DashOS process that acts as a home for those programs: it gives them what they expect to find on their own system and, underneath, translates it into DashOS services.",
        "The Amiga box runs AmigaOS 3.x 68k programs. The Emu68 JIT translates their code to ARM as it runs, and their system calls (exec, dos, intuition, gadtools...) go to native DashOS libraries written in Rust. No whole Amiga is emulated: their windows are desktop windows.",
        "The Linux box is a virtual machine with Arch Linux ARM. Its programs, such as Firefox or GTK apps, appear on the DashOS desktop like any other, with clipboard, and its network goes through a firewall.",
        "Living in a box has two advantages. If a program from another system crashes, its box goes down, not DashOS. And the box can only do what its keys allow: see its user's files, open windows, use the network. Every window carries a badge with its box, 68K or LINUX, so you know where it comes from. Later there will also be a PowerPC box for WarpOS, MorphOS and AmigaOS 4 programs.",
      ],
    },
    nucleos: {
      titulo: "Amiga programs and CPU cores",
      parrafos: [
        "Amiga programs were written for a computer with a single CPU. They share memory without locks and assume that, while they have their turn or have called Forbid(), nobody else touches anything. If two ran at once on two cores, they would trample each other's data.",
        "So inside the Amiga box, 68k tasks take turns as on a real Amiga. But the box is just another DashOS process: it runs isolated and at the same time as the desktop, the Linux box, the file system, sound and networking, which run on the other cores. Its Forbid() only stops the box, not the system.",
        "The next step, already designed, is one box per program, each on its own core, so that, for example, LightWave and Tachyon really run at the same time and, if one hangs, the other carries on. They do not share memory, but they do share files: the box has no fake Amiga disks, its dos.library uses the DashOS file system, with the same volumes and assigns for everyone. A bridge service will carry ARexx, the clipboard and named ports between them.",
        "Today there is a single Amiga box. Several boxes and their bridge are designed, not built yet.",
      ],
    },
    capturas: { titulo: "Screenshots", texto: "In the QEMU emulator, on 13 November 2026. Click one to see it full size." },
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
        "Programs written in Dash, FreeMEM's language for the Amiga, already run in the DashOS Amiga box, and Dash is learning to build native ARM programs. The idea is that the same Dash program works on AmigaOS 3.x (68k) and on DashOS.",
      enlace: "Meet Dash",
    },
    pie: [{ texto: "Code", url: REPO }],
  },
} as const;

export type Textos = (typeof CONTENIDO)[Idioma];

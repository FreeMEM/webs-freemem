import type { Idioma } from "retro";

/**
 * Las características clave, en grupos (como la portada de redox-os.org), cada una con su estado. Contrastadas con el
 * README.md de DashOS (rama revision, 13/11/2026): "hecho" es lo que su sección Estado da por hecho (probado en QEMU),
 * "curso" lo que da en curso y "plan" lo que está en "Lo que tendrá" o en los diseños, sin hacer.
 */
export type EstadoClave = "hecho" | "curso" | "plan";
type Grupo = { titulo: string; items: [EstadoClave, string][] };

export const CLAVES: Record<Idioma, { titulo: string; texto: string; estados: Record<EstadoClave, string>; grupos: Grupo[] }> = {
  es: {
    titulo: "Características clave",
    texto:
      "Lo que tiene y lo que tendrá. \"Hecho\" funciona y está probado en el emulador QEMU; \"en curso\" se está haciendo; \"diseñado\" está decidido en su diseño, pero aún no existe.",
    estados: { hecho: "Hecho", curso: "En curso", plan: "Diseñado" },
    grupos: [
      {
        titulo: "Programas Amiga",
        items: [
          ["hecho", "JIT 68k de Emu68 que llama a funciones nativas desde el código 68k"],
          ["hecho", "El JIT también corre en CPU sin big-endian, dando la vuelta a los bytes"],
          ["plan", "Caja Amiga: los programas 68k de AmigaOS 3.x sin emular un Amiga entero; si uno falla, cae la caja, no el sistema"],
          ["plan", "Cualquier tarea 68k se puede matar y Enforcer va siempre activo"],
          ["plan", "Chips propios (Paula, Blitter, Copper, Denise, Agnus, CIA) para juegos y demos"],
          ["curso", "Caja PowerPC para WarpOS y PowerUP: el JIT PowerPC tiene hecha su primera fase"],
        ],
      },
      {
        titulo: "Estabilidad y seguridad",
        items: [
          ["hecho", "Micronúcleo en Rust: solo reparte la CPU, la memoria, los mensajes y las interrupciones"],
          ["hecho", "Capacidades (llaves): un programa nuevo no puede hacer nada salvo lo que le dan"],
          ["hecho", "Controladores fuera del kernel, como procesos aislados"],
          ["hecho", "Cuatro fases de endurecimiento, cada una con una auditoría independiente y pruebas hostiles"],
          ["plan", "Usuarios y permisos sin superusuario, y permisos por aplicación preguntados en el primer uso"],
          ["plan", "Sistema base como imagen firmada, con actualizaciones A/B que vuelven solas atrás si fallan"],
        ],
      },
      {
        titulo: "Rendimiento",
        items: [
          ["hecho", "Todos los núcleos de la CPU, con planificador justo y clase de plazos"],
          ["plan", "Plazos para el escritorio, la entrada y el sonido: que responda siempre"],
          ["plan", "Sin intercambio a disco: memoria comprimida"],
          ["plan", "Metas, aún sin medir: escritorio en menos de 5 s en una Pi 4 y menos de 128 MB en reposo"],
          ["plan", "60 cuadros por segundo moviendo ventanas con los cuatro núcleos al 100 %"],
        ],
      },
      {
        titulo: "Archivos y organización a lo Amiga",
        items: [
          ["curso", "DashFS, a partir de RedoxFS: lee y escribe en NVMe, con pruebas de cortes de luz"],
          ["hecho", "Nombres que no distinguen mayúsculas, comentario y bits de protección del Amiga"],
          ["hecho", "Instantáneas: tomar, borrar y volver a una; herramienta que comprueba y repara el disco"],
          ["plan", "Volúmenes, cajones y asignaciones (C:, S:, LIBS:, ENV:...), Prefs, catálogos e iconos"],
          ["plan", "El cajón de cada usuario, cifrado con su contraseña"],
        ],
      },
      {
        titulo: "Hardware y arranque",
        items: [
          ["hecho", "Arranque por UEFI con árbol de dispositivos o ACPI, GICv2 o GICv3"],
          ["hecho", "Teclado y ratón por xHCI, disco NVMe e interrupciones MSI-X"],
          ["hecho", "Kernel en QEMU raspi4b con tarjeta SD, USB y la pantalla del firmware"],
          ["plan", "Raspberry Pi 4 real primero, la Pi 3 también y la Pi 5 después"],
          ["plan", "Otros ordenadores ARM que arrancan por UEFI: placas, portátiles y, a la larga, Macs"],
        ],
      },
      {
        titulo: "Escritorio",
        items: [
          ["plan", "Compositor oficial de confianza, con escritorios de terceros encima sin privilegios"],
          ["plan", "Ventanas en mosaico y flotantes a la vez, y escritorios que se arrastran como las pantallas del Amiga"],
          ["plan", "Las ventanas de los programas Amiga son ventanas del escritorio"],
          ["plan", "Material 3 con los colores del fondo de pantalla, y un tema Amiga clásico"],
          ["plan", "Programas de Linux en una caja con Arch Linux ARM, con sus ventanas en el escritorio"],
        ],
      },
      {
        titulo: "Programar",
        items: [
          ["hecho", "Dash compila programas nativos para DashOS, con procesos, canales, llaves y memoria"],
          ["plan", "El mismo programa en Dash para AmigaOS 3.x (68k) y para DashOS (ARM)"],
          ["plan", "API nativa de 64 bits con los conceptos del Amiga, y POSIX al lado"],
          ["plan", "Motor de interfaz con el modelo de MUI, y las caras de ReAction y GadTools encima"],
        ],
      },
      {
        titulo: "Abierto",
        items: [
          ["hecho", "Código abierto con licencia MPL-2.0, en GitHub"],
          ["hecho", "El diseño de todo el sistema, publicado con sus decisiones (S0 a S18)"],
          ["hecho", "Las auditorías de seguridad del kernel, publicadas"],
          ["hecho", "Los arreglos del JIT PowerPC se han mandado a Emu68"],
        ],
      },
    ],
  },
  en: {
    titulo: "Key features",
    texto:
      "What it has and what it will have. \"Done\" works and is tested in the QEMU emulator; \"in progress\" is being built; \"designed\" is decided in its design but does not exist yet.",
    estados: { hecho: "Done", curso: "In progress", plan: "Designed" },
    grupos: [
      {
        titulo: "Amiga programs",
        items: [
          ["hecho", "Emu68's 68k JIT, calling native functions from 68k code"],
          ["hecho", "The JIT also runs on CPUs without big-endian, swapping the bytes"],
          ["plan", "Amiga box: AmigaOS 3.x 68k programs without emulating a whole Amiga; if one crashes, the box goes down, not the system"],
          ["plan", "Any 68k task can be killed, and Enforcer is always on"],
          ["plan", "Its own chips (Paula, Blitter, Copper, Denise, Agnus, CIA) for games and demos"],
          ["curso", "PowerPC box for WarpOS and PowerUP: the PowerPC JIT has its first phase done"],
        ],
      },
      {
        titulo: "Stability and security",
        items: [
          ["hecho", "Microkernel in Rust: it only shares out the CPU, memory, messages and interrupts"],
          ["hecho", "Capabilities (keys): a new program can do nothing except what it is given"],
          ["hecho", "Drivers outside the kernel, as isolated processes"],
          ["hecho", "Four hardening phases, each with an independent audit and hostile tests"],
          ["plan", "Users and permissions with no superuser, and per-app permissions asked on first use"],
          ["plan", "Base system as a signed image, with A/B updates that roll back by themselves if they fail"],
        ],
      },
      {
        titulo: "Performance",
        items: [
          ["hecho", "Every CPU core, with a fair scheduler and a deadline class"],
          ["plan", "Deadlines for the desktop, input and sound: always responsive"],
          ["plan", "No swapping to disk: compressed memory"],
          ["plan", "Goals, not yet measured: desktop in under 5 s on a Pi 4 and under 128 MB at idle"],
          ["plan", "60 frames per second moving windows with all four cores at 100%"],
        ],
      },
      {
        titulo: "Files and Amiga-style organisation",
        items: [
          ["curso", "DashFS, based on RedoxFS: reads and writes NVMe, with power-cut tests"],
          ["hecho", "Case-insensitive names, Amiga comment and protection bits"],
          ["hecho", "Snapshots: take, delete and roll back to one; a tool that checks and repairs the disk"],
          ["plan", "Volumes, drawers and assigns (C:, S:, LIBS:, ENV:...), Prefs, catalogs and icons"],
          ["plan", "Each user's drawer, encrypted with their password"],
        ],
      },
      {
        titulo: "Hardware and boot",
        items: [
          ["hecho", "UEFI boot with a device tree or ACPI, GICv2 or GICv3"],
          ["hecho", "Keyboard and mouse over xHCI, NVMe disk and MSI-X interrupts"],
          ["hecho", "Kernel on QEMU raspi4b with SD card, USB and the firmware's screen"],
          ["plan", "A real Raspberry Pi 4 first, the Pi 3 too and the Pi 5 later"],
          ["plan", "Other ARM computers that boot via UEFI: boards, laptops and, in the long run, Macs"],
        ],
      },
      {
        titulo: "Desktop",
        items: [
          ["plan", "A trusted official compositor, with third-party desktops on top and no privileges"],
          ["plan", "Tiling and floating windows at once, and desktops you drag like Amiga screens"],
          ["plan", "Amiga programs' windows are desktop windows"],
          ["plan", "Material 3 with colours from the wallpaper, and a classic Amiga theme"],
          ["plan", "Linux programs in a box with Arch Linux ARM, with their windows on the desktop"],
        ],
      },
      {
        titulo: "Programming",
        items: [
          ["hecho", "Dash compiles native programs for DashOS, with processes, channels, keys and memory"],
          ["plan", "The same Dash program for AmigaOS 3.x (68k) and DashOS (ARM)"],
          ["plan", "A 64-bit native API with Amiga concepts, and POSIX alongside"],
          ["plan", "A UI engine with MUI's model, and ReAction and GadTools faces on top"],
        ],
      },
      {
        titulo: "Open",
        items: [
          ["hecho", "Open source under the MPL-2.0 licence, on GitHub"],
          ["hecho", "The design of the whole system, published with its decisions (S0 to S18)"],
          ["hecho", "The kernel's security audits, published"],
          ["hecho", "The PowerPC JIT fixes have been sent to Emu68"],
        ],
      },
    ],
  },
};

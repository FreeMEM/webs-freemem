import type { Idioma } from "retro";

/**
 * Las características clave, en grupos (como la portada de redox-os.org), cada una con su estado. Al día del
 * 13/11/2026: el estado que dio la sesión de DashOS sobre la rama revision (y lo hecho en ramas aún sin unir), con
 * docs/REVISION_LOOP.md y docs/diseño/RESUMEN.md. Todo lo "hecho" está probado en QEMU, no en una placa real.
 * No publicar: que la Pi 4 o la Pi 5 funcionen en hardware real, cifras que no estén medidas, ni la tienda.
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
        titulo: "Caja Amiga",
        items: [
          ["hecho", "Programas 68k de AmigaOS 3.x con el JIT de Emu68 y bibliotecas nativas en Rust, sin emular un Amiga entero"],
          ["hecho", "exec, dos, utility, timer, intuition, gadtools, layers y keymap nativas; graphics, a medias"],
          ["hecho", "GadTools, BOOPSI y ReAction, con dos aspectos: el clásico de 3.x o como DashOS"],
          ["hecho", "Bibliotecas de disco y el AmigaOS del usuario como capa de solo lectura (DashOS no trae ROM ni Workbench)"],
          ["hecho", "Guardia contra virus: avisa del bloque de arranque, papelera y pregunta por cada fichero"],
          ["curso", "MUI 5 dentro de la caja"],
          ["plan", "Red para los programas del Amiga (bsdsocket.library) y chips imitados para juegos y demos"],
        ],
      },
      {
        titulo: "Caja Linux",
        items: [
          ["hecho", "Arch Linux ARM en una máquina virtual propia, con varios núcleos"],
          ["hecho", "Sus programas Wayland en el escritorio de DashOS: terminal, GTK 4 y Firefox, con portapapeles"],
          ["hecho", "Gráficos 2D por virtio-gpu"],
          ["hecho", "Red con cortafuegos: Internet sí, la red de casa no, y el puerto del correo cerrado"],
          ["plan", "Gráficos 3D y Vulkan"],
        ],
      },
      {
        titulo: "Escritorio",
        items: [
          ["hecho", "Compositor Wayland propio, con varias pantallas"],
          ["hecho", "Barra con espacios, lanzador y avisos en pantalla"],
          ["hecho", "Panel rápido y centro de control: ajustes, permisos, seguridad, discos y apariencia"],
          ["hecho", "Explorador de archivos con barra lateral, pestañas, papelera y arrastrar"],
          ["hecho", "Material 3 con los colores sacados del fondo de pantalla"],
          ["plan", "Monitor de recursos integrado"],
        ],
      },
      {
        titulo: "Estabilidad y seguridad",
        items: [
          ["hecho", "Micronúcleo en Rust: solo reparte la CPU, la memoria, los mensajes y las interrupciones"],
          ["hecho", "Capacidades (llaves): un programa nuevo no puede hacer nada salvo lo que le dan"],
          ["hecho", "Controladores y servicios fuera del kernel, como procesos aislados"],
          ["hecho", "Cuatro fases de endurecimiento, cada una con una auditoría independiente y pruebas hostiles"],
          ["hecho", "Si un programa del Amiga falla, cae su caja, no el sistema"],
        ],
      },
      {
        titulo: "Usuarios",
        items: [
          ["hecho", "Entrada y bloqueo con frase propia, y cambio rápido de usuario"],
          ["hecho", "Un volumen cifrado para cada usuario"],
          ["hecho", "Permisos por programa, preguntados la primera vez, y registro de seguridad"],
          ["hecho", "Administrador sin superusuario, y cupos de memoria"],
        ],
      },
      {
        titulo: "Archivos, red y sonido",
        items: [
          ["hecho", "DashFS, a partir de RedoxFS: nombres sin distinguir mayúsculas, comentario y bits del Amiga"],
          ["hecho", "Instantáneas del disco y una herramienta que lo comprueba y lo repara"],
          ["hecho", "Pila TCP/IP propia: DHCP y conexiones TCP salientes"],
          ["curso", "DNS para los programas, UDP, servidores e IPv6"],
          ["hecho", "Servicio de sonido con mezcla; audio.device nativo para la caja Amiga"],
        ],
      },
      {
        titulo: "Hardware y arranque",
        items: [
          ["hecho", "Arranque por UEFI con árbol de dispositivos o ACPI, en QEMU"],
          ["hecho", "Teclado, ratón y tableta USB, disco NVMe e interrupciones MSI-X"],
          ["curso", "Imágenes para Raspberry Pi 4 y Pi 5, aún sin probar en una placa real"],
          ["plan", "Otros ordenadores ARM que arrancan por UEFI: placas y portátiles"],
        ],
      },
      {
        titulo: "Programar y abierto",
        items: [
          ["hecho", "Los programas de Dash compilados para 68k corren en la caja Amiga"],
          ["curso", "Dash para AArch64: programas nativos de DashOS"],
          ["hecho", "Kit de interfaz propio para programas nativos, con el modelo de MUI y dibujado en Material 3"],
          ["hecho", "Código abierto con licencia MPL-2.0, con su diseño y sus auditorías publicados"],
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
        titulo: "Amiga box",
        items: [
          ["hecho", "AmigaOS 3.x 68k programs with the Emu68 JIT and native libraries in Rust, without emulating a whole Amiga"],
          ["hecho", "Native exec, dos, utility, timer, intuition, gadtools, layers and keymap; graphics, partly"],
          ["hecho", "GadTools, BOOPSI and ReAction, with two looks: classic 3.x or DashOS style"],
          ["hecho", "Disk libraries and the user's own AmigaOS as a read-only layer (DashOS ships no ROM or Workbench)"],
          ["hecho", "Virus guard: boot block warnings, a trash can and a question for each file"],
          ["curso", "MUI 5 inside the box"],
          ["plan", "Networking for Amiga programs (bsdsocket.library) and imitated chips for games and demos"],
        ],
      },
      {
        titulo: "Linux box",
        items: [
          ["hecho", "Arch Linux ARM in its own virtual machine, with several cores"],
          ["hecho", "Its Wayland programs on the DashOS desktop: terminal, GTK 4 and Firefox, with clipboard"],
          ["hecho", "2D graphics through virtio-gpu"],
          ["hecho", "Networking with a firewall: Internet yes, the home network no, and the mail port closed"],
          ["plan", "3D graphics and Vulkan"],
        ],
      },
      {
        titulo: "Desktop",
        items: [
          ["hecho", "Its own Wayland compositor, with several monitors"],
          ["hecho", "Bar with workspaces, launcher and on-screen notices"],
          ["hecho", "Quick panel and control centre: settings, permissions, security, disks and appearance"],
          ["hecho", "File manager with a sidebar, tabs, trash and drag and drop"],
          ["hecho", "Material 3 with colours taken from the wallpaper"],
          ["plan", "Built-in resource monitor"],
        ],
      },
      {
        titulo: "Stability and security",
        items: [
          ["hecho", "Microkernel in Rust: it only shares out the CPU, memory, messages and interrupts"],
          ["hecho", "Capabilities (keys): a new program can do nothing except what it is given"],
          ["hecho", "Drivers and services outside the kernel, as isolated processes"],
          ["hecho", "Four hardening phases, each with an independent audit and hostile tests"],
          ["hecho", "If an Amiga program crashes, its box goes down, not the system"],
        ],
      },
      {
        titulo: "Users",
        items: [
          ["hecho", "Login and lock screen with a passphrase, and fast user switching"],
          ["hecho", "An encrypted volume for each user"],
          ["hecho", "Per-program permissions, asked the first time, and a security log"],
          ["hecho", "Administrator with no superuser, and memory quotas"],
        ],
      },
      {
        titulo: "Files, network and sound",
        items: [
          ["hecho", "DashFS, based on RedoxFS: case-insensitive names, Amiga comment and protection bits"],
          ["hecho", "Disk snapshots and a tool that checks and repairs the disk"],
          ["hecho", "Its own TCP/IP stack: DHCP and outgoing TCP connections"],
          ["curso", "DNS for programs, UDP, servers and IPv6"],
          ["hecho", "Sound service with mixing; native audio.device for the Amiga box"],
        ],
      },
      {
        titulo: "Hardware and boot",
        items: [
          ["hecho", "UEFI boot with a device tree or ACPI, on QEMU"],
          ["hecho", "USB keyboard, mouse and tablet, NVMe disk and MSI-X interrupts"],
          ["curso", "Images for the Raspberry Pi 4 and Pi 5, not yet tested on a real board"],
          ["plan", "Other ARM computers that boot via UEFI: boards and laptops"],
        ],
      },
      {
        titulo: "Programming and open",
        items: [
          ["hecho", "Dash programs compiled for 68k run in the Amiga box"],
          ["curso", "Dash for AArch64: native DashOS programs"],
          ["hecho", "Its own UI kit for native programs, with MUI's model and drawn in Material 3"],
          ["hecho", "Open source under the MPL-2.0 licence, with its design and audits published"],
        ],
      },
    ],
  },
};

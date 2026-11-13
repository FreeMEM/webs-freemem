import type { Idioma } from "retro";

/**
 * Los datos de la arquitectura y del avance de DashOS, en sus dos idiomas. Salen del recuento del 13 de noviembre
 * de 2026, hecho con las bitácoras del repositorio de DashOS (docs/*_LOOP.md y docs/bitacoras/), sus diseños
 * (docs/diseño/) y el PLAN.md. Al poner al día las cifras, cambiar también FECHA.
 */

export type Texto = Record<Idioma, string>;

export const FECHA: Texto = {
  es: "Estado al 13 de noviembre de 2026",
  en: "Status as of 13 November 2026",
};

// ---------- Las capas y el avance de cada componente ----------

export type IdCapa = "prog" | "cajas" | "serv" | "kernel" | "hw";

export interface Capa {
  id: IdCapa;
  nombre: Texto;
  sub: Texto;
  /** Cómo habla esta capa con la de debajo. */
  enlace: Texto | null;
}

export const CAPAS: Capa[] = [
  {
    id: "prog",
    nombre: { es: "Programas", en: "Programs" },
    sub: { es: "Nativos en Rust, C y Dash", en: "Native, in Rust, C and Dash" },
    enlace: {
      es: "canales con llaves marcadas: Wayland, archivos, sonido",
      en: "channels with badged keys: Wayland, files, sound",
    },
  },
  {
    id: "cajas",
    nombre: { es: "Cajas", en: "Boxes" },
    sub: { es: "Programas de otros sistemas", en: "Programs from other systems" },
    enlace: {
      es: "las bibliotecas de cada caja hablan con los servicios",
      en: "the libraries in each box talk to the services",
    },
  },
  {
    id: "serv",
    nombre: { es: "Servicios", en: "Services" },
    sub: { es: "Procesos en EL0, uno por tarea", en: "Processes in EL0, one per job" },
    enlace: {
      es: "48 llamadas al kernel: canales, memoria, procesos, hilos, tiempo",
      en: "48 kernel calls: channels, memory, processes, threads, time",
    },
  },
  {
    id: "kernel",
    nombre: { es: "Kernel", en: "Kernel" },
    sub: { es: "Micronúcleo en Rust (EL1)", en: "Microkernel in Rust (EL1)" },
    enlace: {
      es: "registros, DMA e interrupciones, por llaves de aparato",
      en: "registers, DMA and interrupts, through device keys",
    },
  },
  {
    id: "hw",
    nombre: { es: "Hardware", en: "Hardware" },
    sub: { es: "Pi 3, Pi 4, Pi 5 y QEMU", en: "Pi 3, Pi 4, Pi 5 and QEMU" },
    enlace: null,
  },
];

export interface Ficha {
  nombre: string;
  /** Qué es. */
  que: string;
  /** De dónde sale el porcentaje. */
  regla: string;
  falta: string;
}

export interface Componente {
  capa: IdCapa;
  /** Lo hecho y probado frente a lo planeado, en %. */
  pc: number;
  /** Va en la zona GPL, en un proceso aparte. */
  gpl: boolean;
  es: Ficha;
  en: Ficha;
}

const c = (capa: IdCapa, pc: number, es: Ficha, en: Ficha, gpl = false): Componente => ({ capa, pc, gpl, es, en });
const f = (nombre: string, que: string, regla: string, falta: string): Ficha => ({ nombre, que, regla, falta });

export const COMPONENTES: Componente[] = [
  // Programas
  c("prog", 100,
    f("Kit: motor y Material 3", "El motor de interfaz con el modelo de MUI, dibujado con Material 3, en Rust", "7 de 7 pasos (KIT_LOOP)", "nada del motor; faltan las tres caras de abajo y los cinco temas decididos (hoy, claro y oscuro)"),
    f("Kit: engine and Material 3", "The interface engine with the MUI model, drawn in Material 3, in Rust", "7 of 7 steps (KIT_LOOP)", "nothing in the engine; the three faces below and the five agreed themes are missing (today, light and dark)")),
  c("prog", 0,
    f("Kit: cara MUI", "La API de MUI para programas nativos, la principal: los 110 builtins de MUI de Dash y los .dashui. Se ve en Material 3 como lo demás (S11)", "sin pasos escritos (S11)", "todo"),
    f("Kit: MUI face", "The MUI API for native programs, the main one: Dash's 110 MUI builtins and .dashui files. It looks Material 3 like everything else (S11)", "no steps written (S11)", "everything")),
  c("prog", 0,
    f("Kit: cara ReAction", "La API de ReAction (window.class, layout.gadget...) sobre el mismo motor, para programas nativos. La caja Amiga ya tiene su ReAction para los de 68k (S11)", "sin pasos escritos (S11)", "todo"),
    f("Kit: ReAction face", "The ReAction API (window.class, layout.gadget...) on the same engine, for native programs. The Amiga box already has its own ReAction for 68k ones (S11)", "no steps written (S11)", "everything")),
  c("prog", 0,
    f("Kit: cara GadTools", "La API de GadTools sobre el mismo motor, para programas nativos. La caja Amiga ya tiene su GadTools para los de 68k (S11)", "sin pasos escritos (S11)", "todo"),
    f("Kit: GadTools face", "The GadTools API on the same engine, for native programs. The Amiga box already has its own GadTools for 68k ones (S11)", "no steps written (S11)", "everything")),
  c("prog", 100,
    f("Dash para AArch64", "El compilador de Dash saca programas nativos de DashOS", "8 de 8 fases (AARCH64_LOOP de Dash)", "cobertura en ARM: unos 104 de 315 tests, el resto pide AmigaOS; sin interfaz gráfica hasta la cara MUI del kit"),
    f("Dash for AArch64", "The Dash compiler builds native DashOS programs", "8 of 8 phases (Dash's AARCH64_LOOP)", "coverage on ARM: about 104 of 315 tests, the rest need AmigaOS; no graphical interface until the kit's MUI face")),
  c("prog", 0,
    f("Puentes Dash 68k a nativo", "Bibliotecas de la caja escritas en Dash", "sin trabajo (PLAN.md)", "todo"),
    f("Dash 68k-to-native bridges", "Box libraries written in Dash", "no work yet (PLAN.md)", "everything")),
  c("prog", 62,
    f("Escritorio", "Workbench, barra, lanzador, avisos, espacios de trabajo, mosaico y varios monitores (S10)", "juicio: 7,5 de 12 apartados de S10 (espacios, Workbench, barra, lanzador, avisos, varios monitores, aspecto Material y medio personalizar)", "mosaico y disposición por pantalla, Commodities, ARexx, temas"),
    f("Desktop", "Workbench, bar, launcher, notifications, workspaces, tiling and multiple monitors (S10)", "judgement: 7.5 of 12 sections of S10 (workspaces, Workbench, bar, launcher, notifications, multiple monitors, Material look and half of customisation)", "tiling and per-screen layout, Commodities, ARexx, themes")),
  c("prog", 29,
    f("Escritorio al estilo DMS", "Barra flotante con píldoras, espacios, lanzador en el centro, centro de control y OSD del volumen, con ideas de DMS (S27)", "2 de 7 oleadas (S27)", "avisos con pestañas y calendario, columnas de niri, lanzador completo, bloqueo y dock, animaciones"),
    f("DMS-style desktop", "Floating bar with pills, workspaces, centred launcher, control centre and volume OSD, with ideas from DMS (S27)", "2 of 7 waves (S27)", "tabbed notifications and calendar, niri columns, full launcher, lock screen and dock, animations")),
  c("prog", 50,
    f("Centro de control", "Ajustes con barra lateral, panel rápido con menú de apagado y apariencia con los colores del fondo (S10c)", "3 de 6 fases (C1 a C3 de S10c)", "sonido, pantallas y entrada (C4); red, Bluetooth y energía (C5); complementos (C6)"),
    f("Control centre", "Settings with a sidebar, quick panel with a power menu and appearance with the wallpaper colours (S10c)", "3 of 6 phases (C1 to C3 of S10c)", "sound, displays and input (C4); network, Bluetooth and power (C5); add-ons (C6)")),
  c("prog", 80,
    f("Explorador de archivos", "Como Nautilus: barra lateral, migas, rejilla y lista, pestañas, papelera, copiar, mover y arrastrar", "juicio: hecho y probado en QEMU; lo que falta son extras de su bitácora", "abrir con otro programa, visores, arrastrar a otros programas, los iconos nuevos, la caja Linux en la barra lateral"),
    f("File manager", "Like Nautilus: sidebar, breadcrumbs, grid and list, tabs, bin, copy, move and drag", "judgement: done and tested in QEMU; what is missing are extras listed in its log", "open with another program, viewers, dragging to other programs, the new icons, the Linux box in the sidebar")),
  c("prog", 0,
    f("Monitor del sistema", "El Trasfondo nativo: panel en el fondo, indicadores en la barra y monitor de procesos en el centro de control", "sin código: diseñado, va después de la caja Amiga", "todo"),
    f("System monitor", "The native Trasfondo: panel on the wallpaper, indicators on the bar and a process monitor in the control centre", "no code: designed, it comes after the Amiga box", "everything")),
  c("prog", 30,
    f("Escritorios de terceros", "Barras y paneles como clientes de Wayland con poderes (S10b)", "3 de 10 fases (E1 y E2; media E6 y media E8)", "E3, E3b (mosaico y flotantes), E4, E5, E7, E9 y el resto de E6 y E8"),
    f("Third-party desktops", "Bars and panels as Wayland clients with extra powers (S10b)", "3 of 10 phases (E1 and E2; half of E6 and half of E8)", "E3, E3b (tiling and floating), E4, E5, E7, E9 and the rest of E6 and E8")),

  // Cajas
  c("cajas", 80,
    f("JIT Emu68", "Traduce el código 68k a ARM al vuelo", "juicio: 4 de 5 (llamada nativa, modo little-endian, dentro de un proceso de DashOS y fuera de los 4 GB del 68k)", "el fallo que tumba la caja al cargar MUI 5"),
    f("Emu68 JIT", "Translates 68k code to ARM on the fly", "judgement: 4 of 5 (native call, little-endian mode, inside a DashOS process and outside the 68k's 4 GB)", "the bug that brings the box down when MUI 5 loads")),
  c("cajas", 75,
    f("exec", "Tareas, señales, puertos, memoria con dueño, semáforos y dispositivos del Amiga, nativos", "juicio: corren programas de m68k-amigaos-gcc y de Dash, con la misma salida que en FS-UAE", "varias tareas 68k a la vez, Supervisor() y el Enforcer que avisa y sigue"),
    f("exec", "Amiga tasks, signals, ports, owned memory, semaphores and devices, native", "judgement: programs from m68k-amigaos-gcc and from Dash run, with the same output as in FS-UAE", "several 68k tasks at once, Supervisor() and the Enforcer that warns and carries on")),
  c("cajas", 70,
    f("dos.library", "Ficheros y procesos del Amiga sobre el servicio de archivos", "juicio: lee y escribe, SYS: de solo lectura, asignaciones y LoadSeg (este, en una rama sin unir)", "procesos manejadores, CreateNewProc, Ctrl-C desde una consola"),
    f("dos.library", "Amiga files and processes on top of the files service", "judgement: reads and writes, read-only SYS:, assigns and LoadSeg (this one on a branch not merged yet)", "handler processes, CreateNewProc, Ctrl-C from a console")),
  c("cajas", 80,
    f("intuition y GadTools", "Ventanas del Amiga como ventanas del compositor; los 12 gadgets de GadTools, menús y EasyRequest, con el aspecto original o el de DashOS", "juicio: los programas de prueba y los de Dash abren, pintan y reciben clics; ventanas a 2x y 3x", "asl.library, el gadget de zoom, menús fuera de la ventana, los temas AOS4, MOS y Magic WB"),
    f("intuition and GadTools", "Amiga windows as compositor windows; the 12 GadTools gadgets, menus and EasyRequest, with the original look or the DashOS one", "judgement: the test programs and the Dash ones open, draw and get clicks; windows at 2x and 3x", "asl.library, the zoom gadget, menus outside the window, the AOS4, MOS and Magic WB themes")),
  c("cajas", 40,
    f("graphics y layers", "El dibujo y las capas del Amiga, nativos", "juicio: graphics a medias; de layers, cerrojos y regiones, sin crear ni mover capas (en una rama sin unir)", "recortar con la región de la capa, crear y mover capas, los ganchos que usa MUI"),
    f("graphics and layers", "Amiga drawing and layers, native", "judgement: graphics half done; from layers, locks and regions, without creating or moving layers (on a branch not merged yet)", "clipping to the layer's region, creating and moving layers, the hooks MUI uses")),
  c("cajas", 90,
    f("utility, timer y keymap", "Bibliotecas pequeñas del Amiga, nativas: utilidades, timer.device y el mapa de teclado", "juicio: hechas y probadas (keymap, en una rama sin unir)", "keymap solo trae la distribución de EE. UU.; FindNamedObject y AllocNamedObjectA de utility"),
    f("utility, timer and keymap", "Small Amiga libraries, native: utilities, timer.device and the keymap", "judgement: done and tested (keymap on a branch not merged yet)", "keymap only has the US layout; FindNamedObject and AllocNamedObjectA from utility")),
  c("cajas", 75,
    f("BOOPSI y ReAction", "Las clases de objetos de intuition y las de ReAction de 3.2, nativas, con los dos aspectos", "juicio: su prueba pasa las 43 comprobaciones, igual que en FS-UAE con el 3.2; corren los ejemplos de ReAction de Dash", "menú del chooser, columnas del listbrowser, getfile (sin asl), páginas, el foco con Tab"),
    f("BOOPSI and ReAction", "Intuition's object classes and the ReAction classes of 3.2, native, with both looks", "judgement: its test passes all 43 checks, the same as in FS-UAE with 3.2; Dash's ReAction examples run", "the chooser menu, listbrowser columns, getfile (no asl), pages, Tab focus")),
  c("cajas", 0,
    f("Clases MUI nativas", "Sustituyen a las de 68k en la caja: esos programas también salen en Material 3 (S11)", "sin pasos escritos (S11, \"más adelante\")", "todo"),
    f("Native MUI classes", "They replace the 68k ones in the box, so those programs also come out in Material 3 (S11)", "no steps written (S11, \"later on\")", "everything")),
  c("cajas", 20,
    f("MUI de 68k", "El MUI 5 que tenga el usuario, en el JIT; se ve como en el Amiga, con una configuración de MUI parecida a Material 3 (S11)", "juicio: muimaster se carga, pero su arranque tumba la caja por un fallo del JIT", "arreglar el JIT, los ganchos de layers y más memoria para el 68k (hoy 4 MB)"),
    f("68k MUI", "The user's own MUI 5, in the JIT; it looks as on the Amiga, with an MUI configuration close to Material 3 (S11)", "judgement: muimaster loads, but its start-up brings the box down because of a JIT bug", "fixing the JIT, the layers hooks and more memory for the 68k (4 MB today)")),
  c("cajas", 75,
    f("Bibliotecas de disco y AmigaOS del usuario", "ramlib carga de LIBS: y Classes: lo que no es nativo; el AmigaOS del usuario va como capa, detrás de lo nativo", "3 de 4 pasos (bitácora de la caja Amiga, rama sin unir)", "el paso 4 (Tachyon 68k); montar un HDF (hoy, solo una carpeta); icon, workbench y asl nativas"),
    f("Disk libraries and the user's AmigaOS", "ramlib loads from LIBS: and Classes: whatever is not native; the user's AmigaOS sits as a layer, behind the native code", "3 of 4 steps (Amiga box log, branch not merged yet)", "step 4 (Tachyon 68k); mounting an HDF (only a folder today); native icon, workbench and asl")),
  c("cajas", 50,
    f("audio.device (Paula)", "Los 4 canales de Paula como flujos del sonido", "1 de 2 (P1 hecho, también en virt)", "engancharlo a los programas 68k (P3), ya posible con la caja, y compararlo con FS-UAE"),
    f("audio.device (Paula)", "Paula's 4 channels as streams of the sound service", "1 of 2 (P1 done, also on virt)", "hooking it up to 68k programs (P3), now possible with the box, and comparing it with FS-UAE")),
  c("cajas", 50,
    f("AHI", "La API de sonido de los Amiga modernos, nativa", "1 de 2 (P2, solo en el PC)", "P3; probarlo en virt"),
    f("AHI", "The sound API of modern Amigas, native", "1 of 2 (P2, on the PC only)", "P3; testing it on virt")),
  c("cajas", 0,
    f("Chips del Amiga", "Copper, Blitter, Denise y Paula imitados para juegos y demos (S18)", "0 de 7 fases", "todo"),
    f("Amiga chips", "Copper, Blitter, Denise and Paula imitated for games and demos (S18)", "0 of 7 phases", "everything")),
  c("cajas", 0,
    f("bsdsocket.library", "La red para los programas del Amiga: la interfaz de AmiTCP y Roadshow sobre el servicio de red de DashOS", "sin código: va tras las bibliotecas de disco (lo decidió el usuario)", "todo; antes, DNS, UDP y escuchar en la red de DashOS"),
    f("bsdsocket.library", "Networking for Amiga programs: the AmiTCP and Roadshow interface on top of the DashOS network service", "no code: it comes after the disk libraries (the user's decision)", "everything; DNS, UDP and listening in the DashOS network come first")),
  c("cajas", 14,
    f("Pantallas del Amiga", "Workbench, pantallas públicas, propias y clonadas como pantallas de DashOS (S23)", "1 de 7 fases (P1: las ventanas de Workbench son ventanas del compositor)", "pantallas públicas, propias y clonadas, arrastrarlas y menús en la barra (P2 a P7)"),
    f("Amiga screens", "Workbench, public, custom and cloned screens as DashOS screens (S23)", "1 of 7 phases (P1: Workbench windows are compositor windows)", "public, custom and cloned screens, dragging them and menus on the bar (P2 to P7)")),
  c("cajas", 85,
    f("Guardia contra virus del Amiga", "Capas sin firmas contra el malware del Amiga: SYS: de solo lectura, ficheros vigilados que preguntan, papelera, memoria limpia y la caja fuera del alcance del 68k (S28)", "juicio: 6 de 7 capas de S28; siete virus de laboratorio no consiguen nada", "instantánea y cupo del cajón de la caja, un vigilante siempre, varias tareas"),
    f("Amiga virus guard", "Signature-free layers against Amiga malware: read-only SYS:, guarded files that ask first, a bin, clean memory and the box out of the 68k's reach (S28)", "judgement: 6 of 7 layers in S28; seven lab viruses achieve nothing", "snapshot and quota for the box's drawer, an always-on watchdog, several tasks")),
  c("cajas", 17,
    f("Caja PowerPC", "Programas de AmigaOS 4 y MorphOS (S17)", "1 de 6 fases (por tamaño, un 8 %)", "F2 a F5; de F1, fres, frsqrte y excepciones de la FPU"),
    f("PowerPC box", "AmigaOS 4 and MorphOS programs (S17)", "1 of 6 phases (by size, 8 %)", "F2 to F5; from F1, fres, frsqrte and FPU exceptions")),
  c("cajas", 60,
    f("Caja Linux", "Una máquina virtual propia con Arch Linux ARM y varias vCPU; sus programas de Wayland salen en el escritorio (S7)", "juicio: 9 de 15 puntos de S7 (hipervisor, disco, red, consola, vsock, pantalla 2D, ventanas, portapapeles y Arch); abren foot, GTK 4 y Firefox", "virtio-fs y Home: compartido, XWayland, sus programas en el lanzador, globo de memoria, arrancar como servicio; probarla en la Pi"),
    f("Linux box", "Its own virtual machine with Arch Linux ARM and several vCPUs; its Wayland programs show up on the desktop (S7)", "judgement: 9 of 15 items in S7 (hypervisor, disk, network, console, vsock, 2D display, windows, clipboard and Arch); foot, GTK 4 and Firefox open", "virtio-fs and a shared Home:, XWayland, its programs in the launcher, memory balloon, starting as a service; testing it on the Pi")),
  c("cajas", 50,
    f("GPU de la caja Linux", "virtio-gpu 2D ya; para 3D y Vulkan, la V3D de la Pi 4 mediada por DashOS (S25)", "2 de 4 pasos (S25: virtio-gpu 2D y la tabla sombra, probada en el PC)", "la V3D de verdad en una Pi 4, con 3D y Vulkan; después, el contexto nativo"),
    f("Linux box GPU", "virtio-gpu 2D now; for 3D and Vulkan, the Pi 4's V3D brokered by DashOS (S25)", "2 of 4 steps (S25: virtio-gpu 2D and the shadow table, tested on the PC)", "the real V3D on a Pi 4, with 3D and Vulkan; then, the native context")),
  c("cajas", 17,
    f("Controladores de Linux (LKL)", "Linux como biblioteca para el Wi-Fi y lo raro (S12b)", "1 de 6 fases (L0: los hilos ya están)", "L1 a L5: LKL, red virtio, Wi-Fi de la Pi, Bluetooth y amissl"),
    f("Linux drivers (LKL)", "Linux as a library for Wi-Fi and the odd hardware (S12b)", "1 of 6 phases (L0: threads are done)", "L1 to L5: LKL, virtio network, the Pi's Wi-Fi, Bluetooth and amissl"),
    true),

  // Servicios
  c("serv", 60,
    f("inicio", "Arranca los servicios y les reparte las llaves", "juicio: llaves, grupos y canales; vigila y relanza los servicios (R12); los programas de las personas ya los lanza sesiones", "fichas de verdad (hoy provisionales), avisar a los clientes de que su servicio volvió, servicios declarativos (S14)"),
    f("inicio", "Starts the services and hands out their keys", "judgement: keys, groups and channels; it watches and restarts services (R12); people's programs are now launched by sesiones", "real identity cards (provisional today), telling clients their service is back, declarative services (S14)")),
  c("serv", 100,
    f("Consola", "El registro del sistema por el puerto serie", "1 de 1 tarea", "un shell interactivo no está planeado aún"),
    f("Console", "The system log over the serial port", "1 of 1 task", "an interactive shell is not planned yet")),
  c("serv", 91,
    f("Archivos (DashFS)", "RedoxFS con mayúsculas, bits del Amiga, instantáneas y comprobación", "10 de 11 tareas (ARCHIVOS_LOOP)", "FS11: cuidar la tarjeta SD (TRIM y la tabla de particiones ya están)"),
    f("Files (DashFS)", "RedoxFS with case-insensitive names, Amiga bits, snapshots and checking", "10 of 11 tasks (ARCHIVOS_LOOP)", "FS11: looking after the SD card (TRIM and the partition table are done)")),
  c("serv", 91,
    f("Archivos: rendimiento", "Las mejoras del informe: menos viajes, sin copias, caché prestada, varias órdenes a la vez", "15,5 de 17 puntos (A1 a A16; A14 sin la tarjeta SD)", "A17 (menores) y el controlador de la tarjeta SD de A14"),
    f("Files: performance", "The improvements from the report: fewer round trips, no copies, lent cache, several commands at once", "15.5 of 17 items (A1 to A16; A14 without the SD card)", "A17 (minor items) and the SD card driver from A14")),
  c("serv", 90,
    f("Archivos: permisos", "Dueño, grupo y modo, raíces por programa, ceder ficheros, administrar", "juicio: probados por el cliente hostil en virt; ceder, con el selector", "grupos adicionales"),
    f("Files: permissions", "Owner, group and mode, roots per program, handing over files, administration", "judgement: tested by the hostile client on virt; handing over, with the file picker", "extra groups")),
  c("serv", 100,
    f("Volúmenes cifrados", "Un volumen por usuario, con su contraseña; se abre al entrar", "5 de 5 pasos (ARCHIVOS_LOOP)", "decidir si hay llave de recuperación de serie; medirlo en la Pi"),
    f("Encrypted volumes", "One volume per user, with their password; it opens at login", "5 of 5 steps (ARCHIVOS_LOOP)", "deciding whether there is a recovery key by default; measuring it on the Pi")),
  c("serv", 14,
    f("Imágenes ADF y HDF", "Disquetes y discos del Amiga montados como volúmenes (S20)", "1 de 7 fases (ADF de solo lectura, en su proceso aparte)", "escribir ADF, HDF, RAD:, SFS y PFS3"),
    f("ADF and HDF images", "Amiga floppies and hard disks mounted as volumes (S20)", "1 of 7 phases (read-only ADF, in its own process)", "writing ADF, HDF, RAD:, SFS and PFS3")),
  c("serv", 80,
    f("Disco NVMe", "Controlador NVMe y servicio de disco con anillo", "4 de 5 pasos", "varias colas"),
    f("NVMe disk", "NVMe driver and disk service with a ring", "4 of 5 steps", "multiple queues")),
  c("serv", 20,
    f("Tarjeta SD", "Controlador EMMC2 de la Pi", "juicio: solo lee dos sectores, sin DMA", "escribir, DMA, servicio de disco, placa real"),
    f("SD card", "The Pi's EMMC2 driver", "judgement: only reads two sectors, no DMA", "writing, DMA, disk service, real board")),
  c("serv", 67,
    f("USB DWC2", "El USB de la Pi: teclado y ratón con concentrador", "juicio: 2 de 3", "disco USB; probarlo en la placa"),
    f("USB DWC2", "The Pi's USB: keyboard and mouse through a hub", "judgement: 2 of 3", "USB disk; testing it on the board")),
  c("serv", 78,
    f("USB xHCI", "USB del PCIe: QEMU, portátiles, el VL805 de la Pi 4 y el RP1 de la Pi 5", "7 de 9 pasos", "conectar en marcha, USB 3, isócronas; los dos xHCI de la Pi 5, escritos sin probar en placa"),
    f("USB xHCI", "USB over PCIe: QEMU, laptops, the Pi 4's VL805 and the Pi 5's RP1", "7 of 9 steps", "hot plugging, USB 3, isochronous transfers; the Pi 5's two xHCIs, written but untested on a board")),
  c("serv", 43,
    f("Red: servicio y pila TCP/IP", "smoltcp en su proceso: IPv4, IPv6, DHCP y mDNS (S13)", "juicio: 3 de 7 (IPv4, DHCP y TCP saliente)", "IPv6, mDNS, UDP, escuchar; relanzarlo sin perder la tarjeta; SACK si hace falta al medir (S12b)"),
    f("Network: service and TCP/IP stack", "smoltcp in its own process: IPv4, IPv6, DHCP and mDNS (S13)", "judgement: 3 of 7 (IPv4, DHCP and outgoing TCP)", "IPv6, mDNS, UDP, listening; restarting it without losing the card; SACK if measuring shows it is needed (S12b)")),
  c("serv", 30,
    f("Red: sockets nativos y POSIX", "La API de red de DashOS y los sockets de siempre por relibc (S7, S13)", "juicio: la API nativa ya sirve para TCP saliente", "UDP, escuchar y los sockets POSIX por relibc"),
    f("Network: native and POSIX sockets", "The DashOS network API and the usual sockets through relibc (S7, S13)", "judgement: the native API already works for outgoing TCP", "UDP, listening and POSIX sockets through relibc")),
  c("serv", 0,
    f("Red: TLS", "rustls para todos: ChaCha20 en la Pi 3 y 4, AES en la Pi 5 (S13, S21)", "sin código", "todo"),
    f("Network: TLS", "rustls for everyone: ChaCha20 on the Pi 3 and 4, AES on the Pi 5 (S13, S21)", "no code", "everything")),
  c("serv", 0,
    f("Red: nombres (DNS)", "Servicio de nombres con caché y DNS cifrado opcional (S13)", "sin código (el DHCP ya da el servidor de nombres)", "todo"),
    f("Network: names (DNS)", "Name service with a cache and optional encrypted DNS (S13)", "no code (DHCP already gives the name server)", "everything")),
  c("serv", 35,
    f("Red: cortafuegos y permisos", "Cerrado para lo que entra; salir y escuchar, permisos por aplicación (S6b, S13)", "juicio: el cortafuegos de la caja Linux (Internet sí, red local no, puerto 25 cerrado) y el estado de la red de solo lectura", "permisos por aplicación desde sesiones, red-local y red-escuchar, Prefs/Red"),
    f("Network: firewall and permissions", "Closed to incoming traffic; going out and listening are per-app permissions (S6b, S13)", "judgement: the Linux box firewall (Internet yes, local network no, port 25 closed) and the read-only network status", "per-app permissions from sesiones, red-local and red-escuchar, Prefs/Red")),
  c("serv", 25,
    f("Red: controladores con cable", "virtio-net (QEMU), GENET (Pi 4), la del RP1 (Pi 5) y la USB de la Pi 3 (S12)", "1 de 4 (virtio-net, en QEMU)", "GENET (Pi 4), RP1 (Pi 5) y la USB de la Pi 3"),
    f("Network: wired drivers", "virtio-net (QEMU), GENET (Pi 4), the RP1 one (Pi 5) and the Pi 3's USB one (S12)", "1 of 4 (virtio-net, on QEMU)", "GENET (Pi 4), RP1 (Pi 5) and the Pi 3's USB one")),
  c("serv", 0,
    f("Red: Wi-Fi", "Por LKL, con un servicio que guarda redes y claves (S12b, S13)", "sin código", "todo; antes, LKL (los hilos ya están)"),
    f("Network: Wi-Fi", "Through LKL, with a service that keeps networks and passwords (S12b, S13)", "no code", "everything; LKL comes first (threads are done)")),
  c("serv", 24,
    f("Sonido", "Servicio de mezcla con clase de plazo (S19)", "1,7 de 7 fases", "PWM, HDMI, USB Audio, micrófono"),
    f("Sound", "Mixing service in the deadline class (S19)", "1.7 of 7 phases", "PWM, HDMI, USB Audio, microphone")),
  c("serv", 0,
    f("Sonido de estudio", "Grafo, MIDI, chips como instrumentos, CLAP y una API compatible con JACK (S19b)", "0 de 11 fases", "todo"),
    f("Studio sound", "Graph, MIDI, chips as instruments, CLAP and a JACK-compatible API (S19b)", "0 of 11 phases", "everything")),
  c("serv", 94,
    f("Compositor Wayland", "Junta las ventanas; habla Wayland sobre canales. Lleva las ventanas nativas, las de la caja Amiga y las de la caja Linux", "15 de 16 pasos (W1 a W8 y G0 a G6)", "G7: planos del HVS, en la Pi"),
    f("Wayland compositor", "Puts the windows together; speaks Wayland over channels. It handles native windows, Amiga box windows and Linux box windows", "15 of 16 steps (W1 to W8 and G0 to G6)", "G7: HVS planes, on the Pi")),
  c("serv", 33,
    f("GPU, HVS y HDMI", "Gráficos por hardware (S9, S21)", "1 de 3 fases (la pantalla del firmware)", "HVS y V3D escritos sin probar; falta HDMI y Mesa"),
    f("GPU, HVS and HDMI", "Hardware graphics (S9, S21)", "1 of 3 phases (the firmware framebuffer)", "HVS and V3D written but untested; HDMI and Mesa missing")),
  c("serv", 100,
    f("Buzón y pantalla del firmware", "Habla con la VideoCore; la pantalla de la Pi y la de UEFI", "4 de 4 tareas", "probarlo en la Pi real"),
    f("Mailbox and firmware framebuffer", "Talks to the VideoCore; the Pi's framebuffer and the UEFI one", "4 of 4 tasks", "testing it on a real Pi")),
  c("serv", 93,
    f("Usuarios y permisos", "Cuentas, sesiones, entrada y bloqueo, permisos por aplicación, administrador, registro de seguridad y cambio rápido de usuario (S6b)", "6,5 de 7 fases (U0 a U5; de U6, todo salvo la mitad del cambio rápido)", "pasos 3 y 4 del cambio rápido, permisos declarados en el paquete (S8), Prefs de cuentas"),
    f("Users and permissions", "Accounts, sessions, login and lock screen, per-app permissions, administrator, security log and fast user switching (S6b)", "6.5 of 7 phases (U0 to U5; of U6, everything but half of fast user switching)", "steps 3 and 4 of fast user switching, permissions declared in the package (S8), account Prefs")),
  c("serv", 0,
    f("Paquetes", "Paq, firmas, actualizaciones A/B (S8)", "sin código", "todo"),
    f("Packages", "Paq, signatures, A/B updates (S8)", "no code", "everything")),
  c("serv", 15,
    f("Arranque y servicios declarativos", "Gestor de servicios, vigilancia, apagar y reiniciar, A/B (S14)", "juicio: el registro en memoria, vigilar y relanzar (en inicio) y apagar y reiniciar", "el gestor declarativo, la orden servicio, A/B y tryboot"),
    f("Boot and declarative services", "Service manager, watchdog, power off and restart, A/B (S14)", "judgement: the in-memory log, watching and restarting (in inicio) and power off and restart", "the declarative manager, the servicio command, A/B and tryboot")),
  c("serv", 0,
    f("Suspender e hibernar", "Dormir y despertar sin fallos: los controladores se relanzan al volver (S22)", "0 de 5 fases (Z1 a Z5)", "todo; depende de la vigilancia, K7 y guardian"),
    f("Suspend and hibernate", "Sleeping and waking without failures: drivers are restarted on wake-up (S22)", "0 of 5 phases (Z1 to Z5)", "everything; it depends on the watchdog, K7 and guardian")),

  // Kernel
  c("kernel", 90,
    f("Arranque y MMU", "Arranca en QEMU raspi4b, raspi3b y virt por UEFI", "18 de 20 pasos", "KASLR; USB y NVMe opcionales de U6"),
    f("Boot and MMU", "Boots on QEMU raspi4b, raspi3b and virt through UEFI", "18 of 20 steps", "KASLR; optional USB and NVMe from U6")),
  c("kernel", 73,
    f("Planificador", "Clase justa, clase de plazo, cuatro núcleos", "9,5 de 13 pasos (MULTITAREA_LOOP)", "paso directo, préstamo de tiempo, pesos por foco"),
    f("Scheduler", "Fair class, deadline class, four cores", "9.5 of 13 steps (MULTITAREA_LOOP)", "direct handoff, time lending, focus weights")),
  c("kernel", 64,
    f("Memoria", "Espacios con ASID, W^X, objetos compartidos, DMA", "juicio: 9 de 14 puntos de S3 (con las vistas de memoria ajena, llamada 50)", "copia al escribir, carga por demanda, objetos grandes"),
    f("Memory", "Address spaces with ASIDs, W^X, shared objects, DMA", "judgement: 9 of 14 items in S3 (counting views of another's memory, call 50)", "copy-on-write, demand paging, large objects")),
  c("kernel", 80,
    f("Llaves y canales", "Capacidades con derechos y marca, mensajes con llaves", "4 de 5 tareas (K7, aviso de muerte y plazo al leer, hecha)", "ida y vuelta con paso directo (K6), que espera a medir en la Pi"),
    f("Keys and channels", "Capabilities with rights and badges, messages carrying keys", "4 of 5 tasks (K7, death notice and read timeout, done)", "call and reply with direct handoff (K6), waiting for measurements on the Pi")),
  c("kernel", 95,
    f("Grupos y cupos", "Presupuesto de memoria por grupo de procesos", "juicio: C42, el cupo de la raíz y el coste real de cada proceso (R11)", "cobrar al grupo la coma flotante de cada vCPU de la caja Linux"),
    f("Groups and quotas", "Memory budget per process group", "judgement: C42, the root quota and the real cost of each process (R11)", "charging the group for the floating-point state of each Linux box vCPU")),
  c("kernel", 90,
    f("Interrupciones y temporizadores", "GIC v2 y v3, MSI-X, temporizadores finos", "juicio: casi todo hecho", "sacar el GIC de la ventana de periféricos; probar en placa"),
    f("Interrupts and timers", "GIC v2 and v3, MSI-X, fine-grained timers", "judgement: almost all done", "moving the GIC out of the peripheral window; testing on a board")),
  c("kernel", 67,
    f("Kernel seguro", "Sin pánicos, todo cobrado, auditorías (S16)", "4 de 6 fases", "fuzzing, Kani, Miri, Spectre; RNG200, KASLR"),
    f("Secure kernel", "No panics, everything charged, audits (S16)", "4 of 6 phases", "fuzzing, Kani, Miri, Spectre; RNG200, KASLR")),
  c("kernel", 85,
    f("Hilos de usuario", "Varios hilos por proceso, con espera tipo futex (llamadas 40 a 44)", "juicio: hecho y probado en raspi4b y virt, con su prueba hostil", "prioridad y afinidad por hilo; hilos en la caja Amiga y en Dash; medir en la Pi"),
    f("User threads", "Several threads per process, with futex-style waiting (calls 40 to 44)", "judgement: done and tested on raspi4b and virt, with its hostile test", "per-thread priority and affinity; threads in the Amiga box and in Dash; measuring on the Pi")),
  c("kernel", 95,
    f("Revisión R1 a R19", "Arreglos de velocidad, seguridad y estabilidad del informe", "18 de 19 pasos (17 hechos; R18 y R19, a medias)", "de R18, K1 entero y K5; de R19, el resto del cambio rápido; de R10, el RNG200 y probar en placa"),
    f("Review R1 to R19", "Speed, security and stability fixes from the report", "18 of 19 steps (17 done; R18 and R19 halfway)", "from R18, all of K1 and K5; from R19, the rest of fast user switching; from R10, RNG200 and testing on a board")),

  // Hardware
  c("hw", 0,
    f("Arranque en placa real", "La Pi 4, la Pi 5 o la Pi 3 de verdad", "sin ningún arranque registrado en placa", "todo: la imagen de la Pi 4 y la tarjeta de la Pi 5 se generan, pero sin probar; tryboot, PCIe, red, HVS y HDMI"),
    f("Booting on a real board", "A real Pi 4, Pi 5 or Pi 3", "no boot on a board recorded yet", "everything: the Pi 4 image and the Pi 5 card are built, but untested; tryboot, PCIe, network, HVS and HDMI")),
  c("hw", 20,
    f("Otros ordenadores ARM", "CM5, portátiles con Snapdragon y Mac (S24)", "1 de 5 pasos de S24 (arrancar con ACPI, en QEMU)", "todo en máquinas de verdad; U7, el JIT sin big-endian, va en el banco de pruebas y aún no en la caja"),
    f("Other ARM computers", "CM5, Snapdragon laptops and Macs (S24)", "1 of 5 steps in S24 (booting with ACPI, on QEMU)", "everything on real machines; U7, the JIT without big-endian, works in the test bench but not in the box yet")),
];

/** Hecho (80 % o más), en curso o solo diseñado. */
export const estado = (n: number) => (n >= 80 ? "hecho" : n > 0 ? "curso" : "plan");

export const NOTAS: Record<Idioma, string[]> = {
  es: [
    "Nada se ha probado aún en una placa de verdad. Las imágenes de la Pi 4 y la Pi 5 se generan, pero lo de HVS, V3D, PCIe, EMMC2, el USB de la placa y el apagado es código escrito, no código que funciona.",
    "La hoja de ruta hacia DashOS 0.1 (S15) va por un 65 %, a juicio: H1 a H4 hechos; H5 a un 60 % (falta MUI); H7 a un 70 % (faltan las caras del kit); H6 y H8 a cero. Fuera de la 0.1, la caja Linux (H9) ya abre Firefox.",
    "Las cifras marcadas \"juicio\" no tienen pasos contados en su diseño. La de Dash sale de su bitácora, sin volver a ejecutar sus tests.",
    "Las bibliotecas de disco, el AmigaOS del usuario como capa, layers y keymap de la caja Amiga están hechos en una rama aún sin unir.",
    "Recuento hecho el 13 de noviembre de 2026 con las bitácoras del proyecto (docs/*_LOOP.md y docs/bitacoras/) y sus diseños, sobre la rama revision.",
  ],
  en: [
    "Nothing has been tested on a real board yet. The Pi 4 and Pi 5 images are built, but the HVS, V3D, PCIe, EMMC2, on-board USB and power-off code is written code, not working code.",
    "The roadmap towards DashOS 0.1 (S15) is at about 65 %, by judgement: H1 to H4 done; H5 at 60 % (MUI is missing); H7 at 70 % (the kit faces are missing); H6 and H8 at zero. Outside 0.1, the Linux box (H9) already opens Firefox.",
    "Figures marked \"judgement\" have no counted steps in their design. The Dash figure comes from its work log, without running its tests again.",
    "The disk libraries, the user's AmigaOS as a layer, and layers and keymap for the Amiga box are done on a branch not merged yet.",
    "Count made on 13 November 2026 from the project's work logs (docs/*_LOOP.md and docs/bitacoras/) and its designs, on the revision branch.",
  ],
};

// ---------- El sistema en marcha: el diagrama ----------

/** Lo que existe de cada pieza del diagrama: hecho, en curso, solo diseñado, o hardware. */
export type EstadoNodo = "hecho" | "curso" | "plan" | "hw";

export interface Nodo {
  /** Centro de la caja en el viewBox de 1000x720. */
  x: number;
  y: number;
  estado: EstadoNodo;
  es: [nombre: string, sub: string];
  en: [nombre: string, sub: string];
}

export const NODOS = {
  app: { x: 150, y: 72, estado: "hecho", es: ["Programa nativo", "Rust, C o Dash"], en: ["Native program", "Rust, C or Dash"] },
  hostil: { x: 330, y: 72, estado: "hecho", es: ["Programa hostil", "el de las pruebas"], en: ["Hostile program", "the test one"] },
  p68k: { x: 530, y: 168, estado: "hecho", es: ["Programa 68k", "binario del Amiga"], en: ["68k program", "Amiga binary"] },
  jit: { x: 690, y: 168, estado: "hecho", es: ["JIT Emu68", "68k a ARM al vuelo"], en: ["Emu68 JIT", "68k to ARM on the fly"] },
  amilib: { x: 610, y: 222, estado: "hecho", es: ["Bibliotecas nativas", "exec, dos, intuition, gadtools"], en: ["Native libraries", "exec, dos, intuition, gadtools"] },
  lnx: { x: 885, y: 168, estado: "hecho", es: ["Programa de Linux", "en la máquina virtual"], en: ["Linux program", "in the virtual machine"] },
  puente: { x: 885, y: 222, estado: "hecho", es: ["Puente Wayland", "sus ventanas, en el escritorio"], en: ["Wayland bridge", "its windows, on the desktop"] },
  inicio: { x: 80, y: 322, estado: "curso", es: ["inicio", "reparte las llaves"], en: ["inicio", "hands out the keys"] },
  compositor: { x: 225, y: 322, estado: "hecho", es: ["Compositor", "Wayland"], en: ["Compositor", "Wayland"] },
  archivos: { x: 375, y: 322, estado: "hecho", es: ["Archivos", "DashFS y permisos"], en: ["Files", "DashFS and permissions"] },
  sonido: { x: 525, y: 322, estado: "hecho", es: ["Sonido", "mezcla en plazo"], en: ["Sound", "deadline mixing"] },
  red: { x: 675, y: 322, estado: "curso", es: ["Red", "smoltcp y TLS"], en: ["Network", "smoltcp and TLS"] },
  guardian: { x: 840, y: 322, estado: "hecho", es: ["guardian y sesiones", "cuentas y bloqueo"], en: ["guardian, sessions", "accounts and lock"] },
  xhci: { x: 225, y: 428, estado: "hecho", es: ["USB (xHCI)", "teclado y ratón"], en: ["USB (xHCI)", "keyboard and mouse"] },
  nvme: { x: 375, y: 428, estado: "hecho", es: ["Disco (NVMe)", "con su anillo"], en: ["Disk (NVMe)", "with its ring"] },
  vsonido: { x: 525, y: 428, estado: "hecho", es: ["virtio-sonido", "controlador"], en: ["virtio-sound", "driver"] },
  nic: { x: 675, y: 428, estado: "curso", es: ["Red", "virtio-net, GENET"], en: ["Network", "virtio-net, GENET"] },
  pantalla: { x: 840, y: 428, estado: "hecho", es: ["Pantalla", "UEFI, buzón, HVS"], en: ["Display", "UEFI, mailbox, HVS"] },
  teclado: { x: 225, y: 668, estado: "hw", es: ["Teclado y ratón", "hardware"], en: ["Keyboard, mouse", "hardware"] },
  disco: { x: 375, y: 668, estado: "hw", es: ["Disco o SD", "hardware"], en: ["Disk or SD", "hardware"] },
  altavoz: { x: 525, y: 668, estado: "hw", es: ["Altavoz", "hardware"], en: ["Speaker", "hardware"] },
  tarjeta: { x: 675, y: 668, estado: "hw", es: ["Tarjeta de red", "hardware"], en: ["Network card", "hardware"] },
  monitor: { x: 840, y: 668, estado: "hw", es: ["Monitor", "hardware"], en: ["Monitor", "hardware"] },
} satisfies Record<string, Nodo>;

export type IdNodo = keyof typeof NODOS;

/** La banda del kernel. */
export const KY = 550;

export const KSEC = {
  plan: { x0: 60, x1: 300, nombre: { es: "Planificador", en: "Scheduler" } },
  mem: { x0: 300, x1: 520, nombre: { es: "Memoria", en: "Memory" } },
  can: { x0: 520, x1: 740, nombre: { es: "Llaves y canales", en: "Keys and channels" } },
  irq: { x0: 740, x1: 960, nombre: { es: "Interrupciones y relojes", en: "Interrupts and clocks" } },
} satisfies Record<string, { x0: number; x1: number; nombre: Texto }>;

/** Los puntos del kernel adonde llegan las rutas. */
export const KPUNTO = { kplan: [180, KY], kmem: [410, KY], kcan: [630, KY], kirq: [850, KY] } satisfies Record<string, [number, number]>;

export type IdPunto = IdNodo | keyof typeof KPUNTO;

export const BANDAS: { y: number; nombre: Texto }[] = [
  { y: 30, nombre: { es: "Programas", en: "Programs" } },
  { y: 128, nombre: { es: "Cajas", en: "Boxes" } },
  { y: 282, nombre: { es: "Servicios", en: "Services" } },
  { y: 388, nombre: { es: "Controladores", en: "Drivers" } },
  { y: 508, nombre: { es: "Kernel", en: "Kernel" } },
  { y: 628, nombre: { es: "Hardware", en: "Hardware" } },
];

export const GRUPOS: { x: number; y: number; ancho: number; alto: number; nombre: Texto }[] = [
  { x: 450, y: 120, ancho: 300, alto: 136, nombre: { es: "Caja Amiga · un proceso", en: "Amiga box · one process" } },
  { x: 780, y: 120, ancho: 210, alto: 136, nombre: { es: "Caja Linux · máquina virtual", en: "Linux box · virtual machine" } },
];

/** Por dónde se hablan las piezas (líneas finas de fondo). */
export const ENLACES: [IdNodo, IdNodo][] = [
  ["app", "compositor"], ["app", "archivos"], ["app", "sonido"], ["hostil", "archivos"], ["hostil", "compositor"],
  ["p68k", "jit"], ["jit", "amilib"], ["amilib", "compositor"], ["amilib", "archivos"], ["amilib", "sonido"],
  ["lnx", "puente"], ["puente", "compositor"], ["compositor", "xhci"], ["compositor", "pantalla"], ["archivos", "nvme"],
  ["sonido", "vsonido"], ["red", "nic"], ["guardian", "compositor"], ["xhci", "teclado"], ["nvme", "disco"],
  ["vsonido", "altavoz"], ["nic", "tarjeta"], ["pantalla", "monitor"],
];

/** A quién reparte llaves inicio al arrancar (curvas de puntos). */
export const REPARTO: IdNodo[] = ["compositor", "archivos", "sonido", "xhci", "nvme"];

/**
 * Cómo viaja cada paso: un mensaje por un canal (baja al kernel y sube), una interrupción, DMA, una llamada dentro
 * del mismo proceso, algo rechazado, o trabajo dentro de una pieza ("local").
 */
export type TipoPaso = "canal" | "irq" | "dma" | "llamada" | "rechazo" | "local";

export interface Paso {
  tipo: TipoPaso;
  de: IdPunto;
  a: IdPunto;
  etiqueta: Texto;
  texto: Texto;
}

export interface Escenario {
  id: string;
  nombre: Texto;
  /** Solo diseñado: aún no existe. */
  diseno?: boolean;
  pasos: Paso[];
}

/** Una etiqueta que no se traduce (nombres de mensajes, cifras). */
const igual = (s: string): Texto => ({ es: s, en: s });
const et = (e: string | [string, string]): Texto => (typeof e === "string" ? igual(e) : { es: e[0], en: e[1] });

const E = (de: IdPunto, a: IdPunto, tipo: TipoPaso, etiqueta: string | [string, string], es: string, en: string): Paso => ({
  tipo,
  de,
  a,
  etiqueta: et(etiqueta),
  texto: { es, en },
});
const L = (en_: IdPunto, etiqueta: string | [string, string], es: string, en: string): Paso => ({
  tipo: "local",
  de: en_,
  a: en_,
  etiqueta: et(etiqueta),
  texto: { es, en },
});

export const ESCENARIOS: Escenario[] = [
  {
    id: "tecla",
    nombre: { es: "Pulsas una tecla", en: "You press a key" },
    pasos: [
      E("teclado", "kirq", "irq", "IRQ",
        "La tecla llega como una interrupción del controlador USB.",
        "The key arrives as an interrupt from the USB controller."),
      E("kirq", "xhci", "irq", ["aviso", "notice"],
        "El kernel no la atiende: solo la apunta y avisa al controlador, que es un proceso más, por su canal.",
        "The kernel does not handle it: it only records it and notifies the driver, which is just another process, through its channel."),
      L("xhci", "",
        "El controlador lee el informe del teclado (HID) y saca qué tecla cambió.",
        "The driver reads the keyboard report (HID) and works out which key changed."),
      E("xhci", "compositor", "canal", "8 bytes",
        "Lo manda al compositor por el canal \"ventanas\": 8 bytes. Su llave lleva la marca del controlador, así que el compositor sabe que es entrada de verdad.",
        "It sends it to the compositor on the \"windows\" channel: 8 bytes. Its key carries the driver's badge, so the compositor knows it is real input."),
      L("compositor", "",
        "El compositor sabe qué ventana tiene el foco. Una ventana nueva no se lo quita mientras escribes (S8).",
        "The compositor knows which window has the focus. A new window does not steal it while you type (S8)."),
      E("compositor", "app", "canal", "wl_keyboard.key",
        "Se lo manda al programa como wl_keyboard.key, el mensaje de Wayland de siempre.",
        "It passes it to the program as wl_keyboard.key, the standard Wayland message."),
    ],
  },
  {
    id: "fichero",
    nombre: { es: "Un programa lee un fichero", en: "A program reads a file" },
    pasos: [
      E("app", "archivos", "canal", "BUSCAR",
        "Pide BUSCAR \"LEEME.txt\" por su canal con archivos. No dice quién es: lo dice la marca de su llave, que no puede cambiar.",
        "It sends BUSCAR (look up) \"LEEME.txt\" on its channel to the files service. It does not say who it is: the badge on its key does, and it cannot change it."),
      L("archivos", ["ficha", "identity"],
        "Archivos mira su ficha: usuario, grupo y cajón raíz. Comprueba los permisos de cada cajón del camino. Si estaba leído hace poco, lo tiene en su caché.",
        "The files service looks up its identity card: user, group and root drawer. It checks the permissions of every drawer on the path. If it was read recently, it is in its cache."),
      E("archivos", "nvme", "canal", ["anillo", "ring"],
        "Si no, pide los bloques al disco por un anillo en memoria compartida: sin copiar nada por el canal.",
        "If not, it asks the disk for the blocks through a ring in shared memory: nothing is copied through the channel."),
      E("nvme", "disco", "dma", "DMA",
        "El controlador NVMe solo prepara la orden: el disco escribe los datos en memoria por DMA, sin la CPU.",
        "The NVMe driver only prepares the command: the disk writes the data to memory by DMA, without the CPU."),
      E("disco", "kirq", "irq", "IRQ",
        "Cuando acaba, el disco avisa con una interrupción.",
        "When it is done, the disk signals with an interrupt."),
      E("kirq", "nvme", "irq", ["aviso", "notice"],
        "El kernel pasa el aviso al controlador.",
        "The kernel passes the notice on to the driver."),
      E("nvme", "archivos", "canal", ["listo", "ready"],
        "Bloques listos para archivos.",
        "Blocks ready for the files service."),
      E("archivos", "app", "canal", "32 bytes",
        "La respuesta son 32 bytes; los datos ya están en la ventana compartida del programa, sin otra copia.",
        "The reply is 32 bytes; the data is already in the program's shared window, with no further copy."),
    ],
  },
  {
    id: "ventana",
    nombre: { es: "Una ventana se pinta", en: "A window is drawn" },
    pasos: [
      L("app", ["pinta", "draws"],
        "El programa pinta su ventana en su memoria compartida (hoy con la CPU; con la GPU, en un dmabuf).",
        "The program draws its window in its shared memory (today with the CPU; with the GPU, in a dmabuf)."),
      E("app", "compositor", "canal", "commit",
        "wl_surface.commit: solo dice qué trozo cambió. Los píxeles no viajan.",
        "wl_surface.commit: it only says which part changed. The pixels do not travel."),
      L("compositor", ["junta", "composes"],
        "El compositor junta lo dañado de cada ventana. Hoy con la CPU; en la Pi, cada ventana irá a un plano del HVS (S21).",
        "The compositor puts together the damaged parts of each window. Today with the CPU; on the Pi, each window will go to an HVS plane (S21)."),
      E("compositor", "pantalla", "canal", ["cuadro", "frame"],
        "Lo deja en la memoria de la pantalla, que el monitor lee por DMA.",
        "It leaves it in the display memory, which the monitor reads by DMA."),
      E("pantalla", "monitor", "dma", "60 Hz",
        "La pantalla sale al monitor.",
        "The picture goes out to the monitor."),
      E("compositor", "app", "canal", "frame",
        "wl_callback.done: el programa ya puede pintar el siguiente cuadro.",
        "wl_callback.done: the program can now draw the next frame."),
    ],
  },
  {
    id: "sonido",
    nombre: { es: "Un programa suena", en: "A program plays sound" },
    pasos: [
      E("app", "sonido", "canal", ["anillo", "ring"],
        "El programa escribe sus muestras en su anillo de memoria compartida. Solo mueve un contador.",
        "The program writes its samples into its shared-memory ring. It only moves a counter."),
      E("vsonido", "sonido", "canal", "TIC",
        "El aparato devolvió un búfer: el controlador avisa al servicio (TIC). Solo el controlador puede marcar el ritmo.",
        "The device returned a buffer: the driver notifies the service (TIC). Only the driver can set the pace."),
      L("sonido", ["mezcla", "mix"],
        "El servicio corre en la clase de plazo, con permiso: mezcla en coma flotante los anillos de todos los programas.",
        "The service runs in the deadline class, with permission: it mixes the rings of every program in floating point."),
      E("sonido", "vsonido", "canal", ["bloque", "block"],
        "El bloque mezclado va al controlador por el anillo de salida.",
        "The mixed block goes to the driver through the output ring."),
      E("vsonido", "altavoz", "dma", "DMA",
        "El aparato lo lee por DMA y suena.",
        "The device reads it by DMA and it plays."),
      E("sonido", "app", "canal", ["despierta", "wake up"],
        "Si tu anillo baja de la mitad, 4 bytes para despertarte y que escribas más.",
        "If your ring drops below half, 4 bytes wake you up so you write more."),
    ],
  },
  {
    id: "amiga",
    nombre: { es: "Un programa del Amiga abre su pantalla", en: "An Amiga program opens its screen" },
    diseno: true,
    pasos: [
      E("p68k", "jit", "llamada", "JIT",
        "El JIT traduce el 68k a ARM al vuelo.",
        "The JIT translates the 68k code to ARM on the fly."),
      E("jit", "amilib", "llamada", "OpenScreen",
        "OpenScreen(): la llamada va directa a intuition nativa, en el mismo proceso. Nada de emular el Kickstart.",
        "OpenScreen(): the call goes straight to native intuition, in the same process. No Kickstart emulation."),
      E("amilib", "compositor", "canal", ["pantalla", "screen"],
        "intuition pide al compositor una pantalla de DashOS. Para el compositor, la caja es un cliente más (S23).",
        "intuition asks the compositor for a DashOS screen. To the compositor, the box is just another client (S23)."),
      L("amilib", "planar",
        "El programa pinta en su mapa planar de 32 colores; la caja lo pasa a píxeles.",
        "The program draws into its 32-colour planar bitmap; the box turns it into pixels."),
      L("compositor", ["escala", "scale"],
        "El compositor la escala con la proporción de PAL y traduce su paleta.",
        "The compositor scales it with the PAL aspect ratio and translates its palette."),
      E("compositor", "pantalla", "canal", ["cuadro", "frame"],
        "Y sale a pantalla completa, como en el Amiga. Arrastrando hacia abajo se ve la de detrás.",
        "And it comes out full screen, as on the Amiga. Dragging it down shows the one behind."),
      E("pantalla", "monitor", "dma", "60 Hz",
        "Al monitor.",
        "To the monitor."),
    ],
  },
  {
    id: "hostil",
    nombre: { es: "Un programa intenta saltarse las reglas", en: "A program tries to break the rules" },
    pasos: [
      E("hostil", "archivos", "canal", "BUSCAR",
        "Pide un fichero privado de otro usuario.",
        "It asks for another user's private file."),
      E("archivos", "hostil", "rechazo", "-12",
        "Su ficha no tiene permiso: -12. No hay superusuario ni otro camino: sin la llave, no llega a nada.",
        "Its identity card has no permission: -12. There is no superuser and no other way in: without the key, it reaches nothing."),
      E("hostil", "kcan", "rechazo", "E_DERECHOS",
        "Intenta pasarle a otro programa una llave de aparato que recibió.",
        "It tries to pass a device key it received on to another program."),
      L("hostil", "",
        "El kernel la rechaza: esas llaves llegan con el bit \"una vez\" y no se pueden volver a pasar (S4).",
        "The kernel refuses it: those keys arrive with the \"once\" bit and cannot be passed on again (S4)."),
      E("hostil", "compositor", "rechazo", ["basura", "junk"],
        "Manda al compositor un mensaje vacío y 160 mensajes con llaves de relleno.",
        "It sends the compositor an empty message and 160 messages stuffed with keys."),
      L("compositor", ["sigue", "carries on"],
        "El compositor cierra las llaves que sobran, corta esa conexión y sigue dibujando para los demás.",
        "The compositor closes the extra keys, drops that connection and keeps drawing for everyone else."),
    ],
  },
  {
    id: "arranque",
    nombre: { es: "El arranque", en: "Booting" },
    pasos: [
      L("kplan", ["4 núcleos", "4 cores"],
        "El kernel arranca los 4 núcleos y lanza un solo programa, inicio, con todas las llaves de aparato.",
        "The kernel starts the 4 cores and launches a single program, inicio, holding every device key."),
      E("kplan", "inicio", "canal", ["llaves", "keys"],
        "inicio no es el kernel: es un proceso que reparte.",
        "inicio is not the kernel: it is a process that hands things out."),
      E("inicio", "nvme", "canal", ["aparato", "device"],
        "Cada controlador recibe la llave de su aparato, con el bit \"una vez\": no puede pasarla a nadie.",
        "Each driver receives the key to its device, with the \"once\" bit: it cannot pass it to anyone."),
      E("inicio", "archivos", "canal", ["canales", "channels"],
        "Cada servicio arranca en su grupo, con su cupo de memoria y los extremos de sus canales.",
        "Each service starts in its group, with its memory quota and the ends of its channels."),
      E("inicio", "archivos", "canal", ["fichas", "identities"],
        "A archivos le manda la ficha de cada cliente: quién es y qué cajón ve.",
        "It sends the files service the identity card of each client: who it is and which drawer it sees."),
      E("inicio", "compositor", "canal", ["canales", "channels"],
        "El compositor, el sonido y el resto, igual.",
        "The same for the compositor, sound and the rest."),
      E("inicio", "app", "canal", ["marca", "badge"],
        "Los programas reciben llaves marcadas: su marca es su identidad.",
        "Programs receive badged keys: the badge is their identity."),
    ],
  },
  {
    id: "dormir",
    nombre: { es: "Dormir y despertar", en: "Sleep and wake up" },
    diseno: true,
    pasos: [
      E("inicio", "app", "canal", ["aviso", "notice"],
        "\"Vas a dormir\": cada programa tiene un segundo para guardar.",
        "\"Going to sleep\": each program has one second to save."),
      L("kplan", ["congelar", "freeze"],
        "El kernel congela los grupos de usuario. No pide permiso: un programa colgado no puede impedir dormir.",
        "The kernel freezes the user groups. It does not ask: a hung program cannot stop the machine from sleeping."),
      E("archivos", "nvme", "canal", ["guardar", "flush"],
        "Archivos lleva al disco todo lo pendiente.",
        "The files service writes everything pending to disk."),
      E("nvme", "disco", "dma", "DMA",
        "Por DMA, como siempre.",
        "By DMA, as always."),
      L("kirq", ["reposo", "rest"],
        "Los controladores se paran sin guardar nada. Núcleos apagados salvo uno.",
        "The drivers stop without saving anything. All cores off but one."),
      E("teclado", "kirq", "irq", "IRQ",
        "Una tecla despierta la placa.",
        "A key press wakes the board."),
      E("inicio", "pantalla", "canal", ["relanzar", "restart"],
        "Lo primero: pantalla, entrada y guardian, relanzados de cero, como en un arranque. Eso está probado mil veces.",
        "First: display, input and guardian, restarted from scratch, as at boot. That path has been tested a thousand times."),
      E("guardian", "compositor", "canal", ["bloqueo", "lock"],
        "Lo primero que se ve es el bloqueo.",
        "The first thing you see is the lock screen."),
      E("inicio", "nvme", "canal", ["relanzar", "restart"],
        "Después el resto; los servicios se vuelven a conectar a sus controladores.",
        "Then the rest; the services reconnect to their drivers."),
      E("inicio", "app", "canal", ["aviso", "notice"],
        "\"Despertaste\": pasaron dos horas. La red mira sus conexiones.",
        "\"You woke up\": two hours went by. The network checks its connections."),
    ],
  },
];

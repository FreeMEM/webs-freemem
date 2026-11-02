import { tamano, type Idioma } from "retro";

import version from "./version.json";

/**
 * Los textos de la web de Forja. Salen del README, del PLAN y de docs/PUBLICAR.md del repositorio de Forja, de su
 * catálogo (los menús) y de las notas de Dash 2.0.1, que es donde viene Forja.
 */
/** Forja aún no tiene release propia: va dentro del paquete de Dash para el Amiga (herramientas/versiones.py). */
export const DASH_VERSION = version.version;
export const REPO = "https://github.com/FreeMEM/forja";
export const RELEASE = version.notas;
export const DESCARGA = version.descarga;
export const BASE = "https://forja.freemem.space";

export const CONTENIDO = {
  es: {
    titulo: "Forja: el IDE de Dash que corre en el Amiga (AmigaOS 3.x, MUI)",
    descripcion:
      "Entorno de desarrollo para Dash en el propio Amiga: editor con colores, compilar y ejecutar, depurador paso a paso y editor de ventanas con MUI de verdad. Libre.",
    lema: "Programa en Dash sin salir del Amiga.",
    texto:
      "Forja es un entorno de desarrollo para Dash que corre en el propio Amiga. Escribes con colores, compilas y ejecutas con una tecla, depuras paso a paso y dibujas ventanas con MUI de verdad. Todo en una ventana MUI con fondo negro.",
    descargar: `Bajar Dash ${DASH_VERSION} (trae Forja)`,
    codigo: "El código en GitHub",
    peso: `${version.fichero} · ${tamano(version.bytes, "es")} · Forja va dentro, en el cajón Dash/Forja`,
    sinVersion: "Forja aún no tiene versión propia: viene con Dash para el Amiga.",
    prueba: "Es una versión de prueba: funciona en el emulador, pero aún no se ha probado en un Amiga de verdad.",
    esquema: "Así se reparte la ventana. Es el esquema del plan de Forja, no una captura.",
    golpe: "Pulsa en la fragua.",
    ventana: {
      titulo: "Todo en una ventana",
      texto:
        "Forja abre una sola ventana MUI con fondo negro. Habla en castellano o en inglés, según el idioma de tus Preferencias de Locale.",
      lista: [
        ["El editor", "Colorea el código según la sintaxis de Dash y lleva números de línea y puntos de parada. Tiene pestañas, deshacer y rehacer, buscar y cambiar, y cortar, copiar y pegar con el portapapeles del sistema."],
        ["El proyecto", "A la izquierda, los ficheros del cajón: un clic y se abren. Al depurar, también la pila y las variables."],
        ["La salida", "Abajo salen los errores del compilador. Un clic en uno te lleva a su línea."],
        ["Los botones", "Compilar, Ejecutar y Depurar. Al depurar, en su sitio salen Seguir, Paso, Entrar, Salir y Parar: todos a la vez no caben en una pantalla de 640 píxeles."],
        ["Inferencia", "Un botón manda el fichero, o las líneas elegidas, a Inferencia, la IA para el Amiga. Si no está abierta, la arranca."],
        ["Lo de la última vez", "Sin fichero, Forja abre lo que tenías abierto. Se puede quitar en Preferencias."],
      ],
    },
    teclas: {
      titulo: "Con el teclado",
      texto: "El teclado va al editor cuando el puntero está encima. Las flechas mueven; con Mayúsculas, eligen. Con Alt, al principio y al final de la línea, y página arriba y abajo. Con Ctrl, de palabra en palabra y al principio y al final del texto. Tab y Mayúsculas+Tab sangran.",
      lista: [
        ["Amiga-N", "Nuevo"],
        ["Amiga-O", "Abrir"],
        ["Amiga-S", "Guardar"],
        ["Amiga-W", "Cerrar pestaña"],
        ["Amiga-Z", "Deshacer"],
        ["Amiga-R", "Rehacer"],
        ["Amiga-F", "Buscar y cambiar"],
        ["Amiga-L", "Ir a la línea"],
        ["Amiga-K", "Compilar"],
        ["Amiga-E", "Ejecutar"],
        ["Amiga-G", "Depurar"],
        ["Amiga-I", "Preguntar a Inferencia"],
      ],
      cerrar: "Si cierras un fichero con cambios sin guardar, pregunta antes.",
    },
    depurador: {
      titulo: "Depurador paso a paso",
      texto: "Amiga-G o F5 arranca el programa en el depurador. Pones un punto de parada con F9 o con un clic en el margen. Cuando para, ves a la izquierda la pila de llamadas y las variables.",
      lista: [
        ["F5", "Seguir"],
        ["F10", "Paso"],
        ["F6", "Entrar"],
        ["F7", "Salir"],
        ["F9", "Punto de parada"],
      ],
      como: "Cómo lo hace: el programa se compila con una tabla de sus líneas y sus variables, y un punto de parada es una instrucción TRAP en su línea, sin el bit de traza. Por eso funciona también en Emu68, en una PiStorm. Mientras espera, la ventana de Forja no se queda congelada.",
      limite: "Un límite de ahora: si una tarea lanzada con task_start pasa por una línea con punto de parada, se cae.",
    },
    disenador: {
      titulo: "Ventanas con MUI de verdad",
      texto: "Los ficheros .dashui, las ventanas de Dash, se abren en el editor de ventanas. A un lado, el árbol de objetos; al otro, las propiedades del que elijas. \"+\" añade un objeto, Supr lo quita y Alt con las flechas lo mueve. Amiga-D enseña el fichero como texto.",
      vista: "Amiga-P abre la vista previa, y es la ventana MUI real, montada a partir del fichero mientras lo editas. Lo que ves es exactamente lo que saldrá. La extensión de VS Code, en Linux, tiene que imitar MUI con HTML; aquí no hace falta.",
      formato: "Guarda los ficheros igual que la extensión de VS Code, así que puedes empezar una ventana en el PC y acabarla en el Amiga.",
      enlace: "La extensión de VS Code, en la web de Dash",
    },
    inferencia: {
      titulo: "Con Inferencia al lado",
      texto: "Inferencia es la IA para el Amiga: hablas con un modelo de lenguaje y el modelo puede leer y cambiar tus ficheros, siempre preguntando antes. Con Amiga-I, Forja le manda el fichero o las líneas elegidas. Si Inferencia no está abierta, Forja la arranca.",
      cambios: "Cuando Inferencia cambia un fichero que tienes abierto en Forja, el cambio entra en el editor: queda sin guardar y lo puedes deshacer con Amiga-Z.",
      enlace: "Conoce Inferencia",
    },
    arexx: {
      titulo: "Se maneja por ARexx",
      texto: "Forja abre el puerto FORJA.1, para Inferencia y para quien quiera. Las órdenes:",
      lista: [
        ["ABRIR fichero [línea]", "Abre el fichero, y va a esa línea."],
        ["ABIERTO fichero", "1 si está abierto en una pestaña."],
        ["TEXTO fichero", "Lo que hay en el editor, guardado o no."],
        ["SELECCION", "El fichero, las líneas y el texto elegido."],
        ["CAMBIAR fichero desde hasta texto", "Cambia esas líneas. El cambio se puede deshacer."],
        ["GUARDAR [fichero]", "Guarda."],
        ["COMPILAR y EJECUTAR", "Sin esperar a que acaben."],
        ["ESTADO", "Si sigue compilando o ejecutando."],
        ["ERRORES", "Los errores de la última compilación."],
        ["BUSCAR texto", "Lo elige y dice en qué línea está."],
        ["CAMBIARTODO buscar cambiar", "Cambia todos y dice cuántos."],
        ["IRA línea", "Va a esa línea."],
      ],
    },
    requisitos: {
      titulo: "Lo que necesita tu Amiga",
      lista: [
        "AmigaOS 3.0 o mejor, con un 68020 o mejor.",
        "MUI 5.",
        "El compilador de Dash: la orden dash, que pone el instalador de Dash 2.0.1. Si la tienes en otro sitio, dile dónde en las Preferencias de Forja (se guarda en ENV:Forja/dashc).",
        "El botón Inferencia necesita Inferencia, que viene en el mismo paquete.",
        "Los colores del código se ven mejor con más de 4 colores en la pantalla.",
      ],
      instalar: `Forja aún no tiene versión propia: viene dentro de Dash para el Amiga. Descomprime ${version.fichero} y haz doble clic en Instalar. Deja el cajón Dash donde elijas y añade el Assign DASH: y el Path a S:User-Startup. Forja está en Dash/Forja: doble clic en su icono, o Forja fichero en un Shell.`,
      notas: `Qué trae Dash ${DASH_VERSION}`,
    },
    prueba2: {
      titulo: "Versión de prueba",
      texto: "Forja funciona en el emulador y pasa todas sus pruebas. Antes de su primera versión propia falta:",
      lista: [
        "Probarla en un Amiga de verdad, con un 68020 a 14 MHz y con algo más rápido (68030, 68060 o una PiStorm con Emu68).",
        "Que alguien de habla inglesa repase el catálogo en inglés.",
        "Su propio paquete en Aminet, con capturas.",
      ],
      avisos: "Si algo falla, cuéntamelo en GitHub",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Forja está escrita en Dash 2.0, sin una línea de C: son casi 3.900 líneas de Dash. El editor se dibuja sobre un lienzo de MUI, con sus propios colores. Lo que Forja necesitaba y Dash no tenía (el depurador, las ventanas .dashui en marcha y las órdenes ARexx en un programa MUI) se añadió al propio Dash, así que cualquier programa puede usarlo.",
      enlace: "Descubre Dash",
    },
    pie: [
      { texto: "Forja en GitHub", url: REPO },
      { texto: "Inferencia", url: "https://inferencia.freemem.space/" },
      { texto: `Dash ${DASH_VERSION}`, url: RELEASE },
    ],
  },
  en: {
    titulo: "Forja: the Dash IDE that runs on the Amiga (AmigaOS 3.x, MUI)",
    descripcion:
      "Development environment for Dash on the Amiga itself: colour code editor, build and run, step-by-step debugger and a window editor with real MUI. Free software.",
    lema: "Code in Dash without leaving the Amiga.",
    texto:
      "Forja is a development environment for Dash that runs on the Amiga itself. You write with colours, build and run with one key, debug step by step and draw windows with real MUI. All in one MUI window with a black background.",
    descargar: `Download Dash ${DASH_VERSION} (includes Forja)`,
    codigo: "Source on GitHub",
    peso: `${version.fichero} · ${tamano(version.bytes, "en")} · Forja is inside, in the Dash/Forja drawer`,
    sinVersion: "Forja has no release of its own yet: it comes with Dash for the Amiga.",
    prueba: "This is a test version: it works in the emulator, but it hasn't been tried on a real Amiga yet.",
    esquema: "How the window is laid out. It's the sketch from Forja's plan, not a screenshot.",
    golpe: "Click on the forge.",
    ventana: {
      titulo: "All in one window",
      texto:
        "Forja opens a single MUI window with a black background. It speaks English or Spanish, following your Locale preferences.",
      lista: [
        ["The editor", "It colours the code following Dash's syntax, with line numbers and breakpoints. It has tabs, undo and redo, find and replace, and cut, copy and paste with the system clipboard."],
        ["The project", "On the left, the files in the drawer: one click opens them. While debugging, also the call stack and the variables."],
        ["The output", "Compiler errors show at the bottom. Clicking one takes you to its line."],
        ["The buttons", "Build, Run and Debug. While debugging, Continue, Step, Step into, Step out and Stop take their place: they don't all fit on a 640-pixel screen at once."],
        ["Inferencia", "One button sends the file, or the selected lines, to Inferencia, the AI for the Amiga. If it isn't running, Forja starts it."],
        ["Where you left off", "Without a file, Forja opens what you had open last time. You can turn that off in the preferences."],
      ],
    },
    teclas: {
      titulo: "From the keyboard",
      texto: "The keyboard goes to the editor when the pointer is over it. The arrows move; with Shift, they select. With Alt, to the start and end of the line, and page up and down. With Ctrl, word by word and to the start and end of the text. Tab and Shift+Tab indent.",
      lista: [
        ["Amiga-N", "New"],
        ["Amiga-O", "Open"],
        ["Amiga-S", "Save"],
        ["Amiga-W", "Close tab"],
        ["Amiga-Z", "Undo"],
        ["Amiga-R", "Redo"],
        ["Amiga-F", "Find and replace"],
        ["Amiga-L", "Go to line"],
        ["Amiga-K", "Build"],
        ["Amiga-E", "Run"],
        ["Amiga-G", "Debug"],
        ["Amiga-I", "Ask Inferencia"],
      ],
      cerrar: "If you close a file with unsaved changes, it asks first.",
    },
    depurador: {
      titulo: "Step-by-step debugger",
      texto: "Amiga-G or F5 starts the program in the debugger. Set a breakpoint with F9 or a click in the margin. When it stops, the call stack and the variables show on the left.",
      lista: [
        ["F5", "Continue"],
        ["F10", "Step over"],
        ["F6", "Step into"],
        ["F7", "Step out"],
        ["F9", "Breakpoint"],
      ],
      como: "How it works: the program is built with a table of its lines and variables, and a breakpoint is a TRAP instruction on its line, without the trace bit. That's why it also works on Emu68, on a PiStorm. While it waits, Forja's window doesn't freeze.",
      limite: "A current limit: if a task started with task_start goes through a line with a breakpoint, it crashes.",
    },
    disenador: {
      titulo: "Windows with real MUI",
      texto: "The .dashui files, Dash's windows, open in the window editor. On one side, the object tree; on the other, the properties of the one you pick. \"+\" adds an object, Del removes it and Alt with the arrows moves it. Amiga-D shows the file as text.",
      vista: "Amiga-P opens the preview, and it's the real MUI window, built from the file while you edit it. What you see is exactly what you'll get. The VS Code extension, on Linux, has to imitate MUI with HTML; here there's no need.",
      formato: "It saves files the same way as the VS Code extension, so you can start a window on the PC and finish it on the Amiga.",
      enlace: "The VS Code extension, on the Dash site",
    },
    inferencia: {
      titulo: "With Inferencia beside it",
      texto: "Inferencia is the AI for the Amiga: you talk to a language model and the model can read and change your files, always asking first. With Amiga-I, Forja sends it the file or the selected lines. If Inferencia isn't running, Forja starts it.",
      cambios: "When Inferencia changes a file you have open in Forja, the change goes into the editor: it stays unsaved and you can undo it with Amiga-Z.",
      enlace: "Meet Inferencia",
    },
    arexx: {
      titulo: "Driven by ARexx",
      texto: "Forja opens the FORJA.1 port, for Inferencia and for anyone else. The commands (their names are in Spanish):",
      lista: [
        ["ABRIR file [line]", "Opens the file, and goes to that line."],
        ["ABIERTO file", "1 if it's open in a tab."],
        ["TEXTO file", "What's in the editor, saved or not."],
        ["SELECCION", "The file, the lines and the selected text."],
        ["CAMBIAR file from to text", "Changes those lines. The change can be undone."],
        ["GUARDAR [file]", "Saves."],
        ["COMPILAR and EJECUTAR", "Build and run, without waiting for them to finish."],
        ["ESTADO", "Whether it's still building or running."],
        ["ERRORES", "The errors from the last build."],
        ["BUSCAR text", "Selects it and says which line it's on."],
        ["CAMBIARTODO find replace", "Replaces them all and says how many."],
        ["IRA line", "Goes to that line."],
      ],
    },
    requisitos: {
      titulo: "What your Amiga needs",
      lista: [
        "AmigaOS 3.0 or later, with a 68020 or better.",
        "MUI 5.",
        "The Dash compiler: the dash command, which the Dash 2.0.1 installer sets up. If you keep it somewhere else, tell Forja where in its preferences (it's stored in ENV:Forja/dashc).",
        "The Inferencia button needs Inferencia, which comes in the same package.",
        "Code colours look better with more than 4 colours on the screen.",
      ],
      instalar: `Forja has no release of its own yet: it comes inside Dash for the Amiga. Unpack ${version.fichero} and double-click Instalar (the installer). It puts the Dash drawer wherever you choose and adds the DASH: assign and the Path to S:User-Startup. Forja is in Dash/Forja: double-click its icon, or type Forja file in a Shell.`,
      notas: `What's in Dash ${DASH_VERSION}`,
    },
    prueba2: {
      titulo: "Test version",
      texto: "Forja works in the emulator and passes all its tests. Before its first release of its own, it still needs:",
      lista: [
        "Testing on a real Amiga, with a 14 MHz 68020 and with something faster (68030, 68060 or a PiStorm with Emu68).",
        "A native English speaker to check the English catalog.",
        "Its own package on Aminet, with screenshots.",
      ],
      avisos: "If something goes wrong, tell me on GitHub",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Forja is written in Dash 2.0, without a single line of C: almost 3,900 lines of Dash. The editor is drawn on an MUI canvas, with its own colours. What Forja needed and Dash lacked (the debugger, .dashui windows built at run time and ARexx commands in an MUI program) was added to Dash itself, so any program can use it.",
      enlace: "Discover Dash",
    },
    pie: [
      { texto: "Forja on GitHub", url: REPO },
      { texto: "Inferencia", url: "https://inferencia.freemem.space/en/" },
      { texto: `Dash ${DASH_VERSION}`, url: RELEASE },
    ],
  },
} satisfies Record<Idioma, unknown>;

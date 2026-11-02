import { tamano, type Idioma } from "retro";

import version from "./version.json";

/**
 * Los textos de la web de Inferencia. Salen del README, del PLAN y de docs/PUBLICAR.md del repositorio de
 * Inferencia, de su catálogo (los textos de la ventana) y de las notas de Dash 2.0.1, que es donde viene.
 */
/** Inferencia aún no tiene release propia: va dentro del paquete de Dash para el Amiga (herramientas/versiones.py). */
export const DASH_VERSION = version.version;
export const REPO = "https://github.com/FreeMEM/inferencia";
export const RELEASE = version.notas;
export const DESCARGA = version.descarga;
export const BASE = "https://inferencia.freemem.space";

export const CONTENIDO = {
  es: {
    titulo: "Inferencia: la IA en el Amiga (AmigaOS 3.x, MUI)",
    descripcion:
      "Habla con un modelo de lenguaje desde una ventana MUI del Amiga. Lee y cambia ficheros, ejecuta órdenes y habla ARexx, y siempre pregunta antes. Libre.",
    lema: "La IA, en tu Amiga.",
    texto:
      "Hablas con un modelo de lenguaje desde una ventana MUI, y el modelo puede trabajar en tu sistema: leer y cambiar ficheros, ejecutar órdenes del Shell, mandar órdenes ARexx a otros programas y mirar el sistema. Antes de cambiar algo, pregunta.",
    descargar: `Bajar Dash ${DASH_VERSION} (trae Inferencia)`,
    codigo: "El código en GitHub",
    peso: `${version.fichero} · ${tamano(version.bytes, "es")} · Inferencia va dentro, en el cajón Dash/Inferencia`,
    prueba: "Es una versión de prueba: funciona en el emulador, pero aún no se ha probado en un Amiga de verdad.",
    demo: {
      pie: "Un ejemplo, sacado del plan de Inferencia: no es una captura. Elige qué contestar.",
      otraVez: "Otra vez",
      resultado: {
        Sí: "Sí: hace el cambio y sigue.",
        No: "No: no lo hace.",
        Siempre: "Siempre: lo hace y lo apunta en ENVARC:Inferencia/sin_permiso. Ya no vuelve a preguntar por eso.",
      } as Record<string, string>,
    },
    herramientas: {
      titulo: "Lo que puede hacer el modelo",
      texto: "El modelo trabaja con herramientas. Las que solo miran no preguntan; las que cambian algo, sí.",
      cabecera: ["Herramienta", "Qué hace", "¿Pregunta?"],
      lista: [
        ["leer, listar, buscar", "Lee ficheros, lista cajones y busca un texto en los ficheros de un cajón.", "No"],
        ["escribir, editar", "Crea un fichero o cambia un trozo. Antes te enseña el cambio.", "Sí"],
        ["orden", "Ejecuta una línea del Shell y ve su salida.", "Sí"],
        ["arexx, puertos", "Manda órdenes ARexx a otros programas y lista los puertos abiertos.", "arexx, sí"],
        ["sistema", "Memoria libre, versión del sistema, volúmenes, asignaciones y tareas en marcha.", "No"],
        ["entorno", "Lee y cambia variables de ENV:.", "Para cambiar, sí"],
        ["portapapeles", "Lee y escribe el portapapeles.", "Para escribir, sí"],
      ],
    },
    permiso: {
      titulo: "Antes de cambiar algo, pregunta",
      texto: "La pregunta sale en la propia conversación, con la orden o el cambio completo: las líneas que quita y las que pone, en color. Contestas \"Sí\", \"No\" o \"Siempre\".",
      siempre: "\"Siempre\" lo apunta en ENVARC:Inferencia/sin_permiso y ya no vuelve a preguntar por eso. Es una lista separada por comas, como orden list,arexx FORJA.1,entorno, y la puedes cambiar a mano.",
      vueltas: "Si el modelo encadena 25 peticiones seguidas con herramientas, Inferencia lo para.",
    },
    proveedores: {
      titulo: "Con el modelo que quieras",
      texto: "Inferencia no trae un modelo dentro: habla con uno por la red. En las preferencias (Amiga-P) eliges el proveedor, la dirección, la clave y el modelo.",
      lista: [
        ["OpenRouter", "Con una clave tienes cientos de modelos, Claude incluido, y algunos gratis con un límite diario."],
        ["Anthropic", "La API de Claude, directa."],
        ["OpenAI y compatibles", "El formato de OpenAI, que usan también otros servicios. Sirve para un modelo en un PC de tu casa, con Ollama o LM Studio: va por HTTP, sin TLS y sin clave."],
      ],
      nota: "Los planes de suscripción de Claude (Pro y Max) no sirven: solo funcionan en Claude Code y claude.ai.",
    },
    uso: {
      titulo: "Una conversación normal",
      lista: [
        "Escribes abajo. Return empieza otra línea; Amiga+Return o Enviar mandan la pregunta.",
        "La respuesta va saliendo según llega, y Parar la corta. La ventana no se queda congelada mientras espera.",
        "Lo que contesta el modelo se lee como Markdown: negrita, cursiva, títulos, listas y bloques de código, que van en Topaz.",
        "Arriba ves los tokens y lo que lleva gastado la conversación (el coste lo da OpenRouter).",
        "Las conversaciones se guardan y se abren desde el menú Proyecto.",
        "Cuando la conversación pasa de un tope (60.000 caracteres, si no pones otro), quita los resultados viejos de las herramientas y, si aún no basta, el modelo resume lo anterior.",
        "Habla en castellano o en inglés, según el idioma de tus Preferencias de Locale.",
      ],
    },
    forja: {
      titulo: "Con Forja, el IDE de Dash",
      texto: "Desde Forja, Amiga-I le manda a Inferencia el fichero o las líneas elegidas, y le puedes pedir que explique algo o que arregle un error. Si Forja tiene abierto el fichero que se cambia, el cambio se hace en su editor: queda sin guardar y se puede deshacer.",
      enlace: "Conoce Forja",
    },
    arexx: {
      titulo: "Cualquier programa le puede preguntar",
      texto: "Inferencia abre el puerto ARexx INFERENCIA.1. Las órdenes:",
      lista: [
        ["PREGUNTA texto", "Manda la pregunta, sin esperar la respuesta."],
        ["ESTADO", "Libre, pidiendo, permiso u orden."],
        ["RESPUESTA", "La última respuesta, cuando está libre."],
        ["CONTEXTO fichero [desde hasta]", "Un fichero, o unas líneas, para la siguiente pregunta."],
        ["ADJUNTAR título", "El texto de las líneas siguientes, para la siguiente pregunta."],
        ["NUEVA", "Empieza una conversación nueva."],
        ["MOSTRAR y OCULTAR", "La ventana."],
        ["GUARDAR y CARGAR fichero", "La conversación."],
        ["COSTE y MENSAJES", "Lo gastado y cuántos mensajes hay."],
      ],
    },
    requisitos: {
      titulo: "Lo que necesita tu Amiga",
      lista: [
        "AmigaOS 3.0 o mejor, con un 68020 o mejor.",
        "MUI 5.",
        "Una pila TCP/IP (Roadshow, AmiTCP, Miami...) y AmiSSL 5 para HTTPS.",
        "El reloj en hora: AmiSSL comprueba las fechas de los certificados.",
        "Una clave de OpenRouter o de Anthropic, o un modelo en un PC de tu red (Ollama, LM Studio), que no necesita clave.",
      ],
      instalar: `Inferencia aún no tiene versión propia: viene dentro de Dash para el Amiga. Descomprime ${version.fichero} y haz doble clic en Instalar; Inferencia queda en el cajón Dash/Inferencia (también puedes copiar ese cajón donde quieras). Ábrela y pulsa Amiga-P: elige el proveedor, la dirección (con Ollama, algo como http://192.168.1.10:11434/v1/chat/completions), la clave y el modelo. "Usar" los deja hasta reiniciar; "Guardar", también en ENVARC:Inferencia/.`,
      clave: "La clave no se enseña: el campo es para poner una nueva, y si lo dejas vacío se queda la que había.",
      notas: `Qué trae Dash ${DASH_VERSION}`,
    },
    prueba2: {
      titulo: "Versión de prueba",
      texto: "Inferencia funciona en el emulador y pasa todas sus pruebas. Lo que falta o hay que saber:",
      lista: [
        "No se ha probado en un Amiga de verdad.",
        "Con la CPU del emulador a la velocidad de un 68020, el saludo de TLS de AmiSSL no acabó en un minuto. Con la CPU al máximo, la pregunta entera tardó unos 5 segundos. Con un 68020 sin más, puede que no llegue a OpenRouter ni a Anthropic; un modelo en tu red, por HTTP, no necesita TLS.",
        "Con Anthropic, la respuesta todavía no sale según llega.",
        "Los errores de red salen en inglés también con el Amiga en castellano.",
        "Falta que alguien de habla inglesa repase el catálogo en inglés.",
      ],
      avisos: "Si algo falla, cuéntamelo en GitHub",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Inferencia está escrita en Dash 2.0, sin una línea de C: son casi 2.900 líneas de Dash. Lo que necesitaba y Dash no tenía (JSON, HTTPS, ejecutar órdenes y recoger su salida, ARexx como cliente y como servidor, leer las tareas, las asignaciones y los discos) se añadió al propio Dash, así que cualquier programa puede usarlo.",
      enlace: "Descubre Dash",
    },
    pie: [
      { texto: "Inferencia en GitHub", url: REPO },
      { texto: "Forja", url: "https://forja.freemem.space/" },
      { texto: `Dash ${DASH_VERSION}`, url: RELEASE },
    ],
  },
  en: {
    titulo: "Inferencia: AI on the Amiga (AmigaOS 3.x, MUI)",
    descripcion:
      "Talk to a language model from an MUI window on the Amiga. It reads and changes files, runs commands and speaks ARexx, and always asks first. Free software.",
    lema: "AI, on your Amiga.",
    texto:
      "You talk to a language model from an MUI window, and the model can work on your system: read and change files, run Shell commands, send ARexx commands to other programs and look at the system. It asks before changing anything.",
    descargar: `Download Dash ${DASH_VERSION} (includes Inferencia)`,
    codigo: "Source on GitHub",
    peso: `${version.fichero} · ${tamano(version.bytes, "en")} · Inferencia is inside, in the Dash/Inferencia drawer`,
    prueba: "This is a test version: it works in the emulator, but it hasn't been tried on a real Amiga yet.",
    demo: {
      pie: "An example, taken from Inferencia's plan: not a screenshot. Choose what to answer.",
      otraVez: "Again",
      resultado: {
        Yes: "Yes: it makes the change and carries on.",
        No: "No: it doesn't do it.",
        Always: "Always: it does it and writes it to ENVARC:Inferencia/sin_permiso. It won't ask about that again.",
      } as Record<string, string>,
    },
    herramientas: {
      titulo: "What the model can do",
      texto: "The model works with tools (their names are in Spanish). The ones that only look don't ask; the ones that change something do.",
      cabecera: ["Tool", "What it does", "Asks?"],
      lista: [
        ["leer, listar, buscar", "Reads files, lists drawers and searches for text in a drawer's files.", "No"],
        ["escribir, editar", "Creates a file or changes part of one. It shows you the change first.", "Yes"],
        ["orden", "Runs a Shell line and sees its output.", "Yes"],
        ["arexx, puertos", "Sends ARexx commands to other programs and lists the open ports.", "arexx, yes"],
        ["sistema", "Free memory, system version, volumes, assigns and running tasks.", "No"],
        ["entorno", "Reads and changes ENV: variables.", "To change, yes"],
        ["portapapeles", "Reads and writes the clipboard.", "To write, yes"],
      ],
    },
    permiso: {
      titulo: "It asks before changing anything",
      texto: "The question shows up in the conversation itself, with the whole command or change: the lines it removes and the ones it adds, in colour. You answer \"Yes\", \"No\" or \"Always\".",
      siempre: "\"Always\" writes it to ENVARC:Inferencia/sin_permiso and it won't ask about that again. It's a comma-separated list, like orden list,arexx FORJA.1,entorno, and you can edit it by hand.",
      vueltas: "If the model chains 25 requests in a row with tools, Inferencia stops it.",
    },
    proveedores: {
      titulo: "With the model you want",
      texto: "Inferencia has no model inside: it talks to one over the network. In the preferences (Amiga-P) you choose the provider, the address, the key and the model.",
      lista: [
        ["OpenRouter", "One key gives you hundreds of models, Claude included, and some free ones with a daily limit."],
        ["Anthropic", "Claude's API, directly."],
        ["OpenAI and compatibles", "OpenAI's format, which other services use too. It works with a model on a PC at home, with Ollama or LM Studio: over HTTP, with no TLS and no key."],
      ],
      nota: "Claude subscription plans (Pro and Max) don't work: they're only for Claude Code and claude.ai.",
    },
    uso: {
      titulo: "A normal conversation",
      lista: [
        "You type at the bottom. Return starts a new line; Amiga+Return or Send sends the question.",
        "The answer shows up as it arrives, and Stop cuts it off. The window doesn't freeze while it waits.",
        "The model's answers are read as Markdown: bold, italics, headings, lists and code blocks, which go in Topaz.",
        "At the top you see the tokens and what the conversation has cost so far (OpenRouter gives the cost).",
        "Conversations are saved and opened from the Project menu.",
        "When the conversation goes over a limit (60,000 characters unless you set another), old tool results are dropped and, if that's not enough, the model summarizes what came before.",
        "It speaks English or Spanish, following your Locale preferences.",
      ],
    },
    forja: {
      titulo: "With Forja, the Dash IDE",
      texto: "From Forja, Amiga-I sends Inferencia the file or the selected lines, and you can ask it to explain something or fix an error. If Forja has the file that's being changed open, the change is made in its editor: it stays unsaved and can be undone.",
      enlace: "Meet Forja",
    },
    arexx: {
      titulo: "Any program can ask it",
      texto: "Inferencia opens the ARexx port INFERENCIA.1. The commands (their names are in Spanish):",
      lista: [
        ["PREGUNTA text", "Sends the question, without waiting for the answer."],
        ["ESTADO", "Free, asking, waiting for permission or running a command."],
        ["RESPUESTA", "The last answer, when it's free."],
        ["CONTEXTO file [from to]", "A file, or some lines, for the next question."],
        ["ADJUNTAR title", "The text on the following lines, for the next question."],
        ["NUEVA", "Starts a new conversation."],
        ["MOSTRAR and OCULTAR", "Show and hide the window."],
        ["GUARDAR and CARGAR file", "Save and load the conversation."],
        ["COSTE and MENSAJES", "The cost so far and how many messages there are."],
      ],
    },
    requisitos: {
      titulo: "What your Amiga needs",
      lista: [
        "AmigaOS 3.0 or later, with a 68020 or better.",
        "MUI 5.",
        "A TCP/IP stack (Roadshow, AmiTCP, Miami...) and AmiSSL 5 for HTTPS.",
        "The clock set right: AmiSSL checks the certificate dates.",
        "An OpenRouter or Anthropic key, or a model on a PC in your network (Ollama, LM Studio), which needs no key.",
      ],
      instalar: `Inferencia has no release of its own yet: it comes inside Dash for the Amiga. Unpack ${version.fichero} and double-click Instalar (the installer); Inferencia ends up in the Dash/Inferencia drawer (you can also copy that drawer anywhere you like). Open it and press Amiga-P: choose the provider, the address (with Ollama, something like http://192.168.1.10:11434/v1/chat/completions), the key and the model. "Use" keeps them until you reboot; "Save" also writes them to ENVARC:Inferencia/.`,
      clave: "The key is never shown: the field is for a new one, and if you leave it empty the current one stays.",
      notas: `What's in Dash ${DASH_VERSION}`,
    },
    prueba2: {
      titulo: "Test version",
      texto: "Inferencia works in the emulator and passes all its tests. What's missing, or worth knowing:",
      lista: [
        "It hasn't been tried on a real Amiga.",
        "With the emulator's CPU at 68020 speed, AmiSSL's TLS handshake didn't finish within a minute. With the CPU at full speed, the whole question took about 5 seconds. With a plain 68020 it may not reach OpenRouter or Anthropic; a model on your network, over HTTP, needs no TLS.",
        "With Anthropic, the answer doesn't show up as it arrives yet.",
        "Network errors are in English even when the Amiga is set to Spanish.",
        "A native English speaker still needs to check the English catalog.",
      ],
      avisos: "If something goes wrong, tell me on GitHub",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Inferencia is written in Dash 2.0, without a single line of C: almost 2,900 lines of Dash. What it needed and Dash lacked (JSON, HTTPS, running commands and collecting their output, ARexx as client and server, reading tasks, assigns and disks) was added to Dash itself, so any program can use it.",
      enlace: "Discover Dash",
    },
    pie: [
      { texto: "Inferencia on GitHub", url: REPO },
      { texto: "Forja", url: "https://forja.freemem.space/en/" },
      { texto: `Dash ${DASH_VERSION}`, url: RELEASE },
    ],
  },
} satisfies Record<Idioma, unknown>;

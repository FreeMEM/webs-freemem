import { tamano, type Idioma } from "retro";

import version from "./version.json";

/**
 * Los textos de la web de Forja. Salen del README de Forja 0.1, de sus docs (PLAN, PUBLICAR, MAPAS_DISENO,
 * JUEGOS_DISENO), de su catálogo (los menús), de las notas de Dash 2.2.0, que trae Forja, y del README de Fragua.
 */
/**
 * Forja tiene release propia (prerrelease, forja-0.4.lha; el paquete de Dash 2.5.0 trae la misma 0.4, con dashgit), pero lo normal es bajarla con Dash para el Amiga: su
 * instalador la deja en Dash/Forja y escribe ENV:Forja/dashc. Los botones toman esa release de Dash
 * (herramientas/versiones.py).
 */
export const DASH_VERSION = version.version;
export const REPO = "https://github.com/FreeMEM/forja";
export const RELEASE = version.notas;
export const DESCARGA = version.descarga;
export const BASE = "https://forja.freemem.space";
/** La release propia de Forja: solo Forja, para quien ya tiene Dash. Con una versión nueva, cambiar las dos. */
export const FORJA_VERSION = "0.4";
export const FORJA_RELEASE = "https://github.com/FreeMEM/forja/releases/tag/v0.4";
export const FRAGUA = "https://github.com/FreeMEM/fragua";
/** Capturas del editor de sprites y del de mapas (docs/img de Forja, 1024x768). */
export const CAPTURAS = {
  sprites: { es: "/imagenes/sprites-es.png", en: "/imagenes/sprites-en.png" },
  mapas: { es: "/imagenes/mapas.png", en: "/imagenes/mapas.png" },
} satisfies Record<string, Record<Idioma, string>>;
/** El vídeo de cada idioma: Forja 0.1 con Dash 2.2, grabado en Coffin R65 con tarjeta gráfica. */
export const VIDEO = { es: "AQxEOf0xLU8", en: "XDW4WjthAAA" } satisfies Record<Idioma, string>;

export const CONTENIDO = {
  es: {
    titulo: "Forja: el IDE de Dash que corre en el Amiga (AmigaOS 3.x, MUI)",
    descripcion:
      "Entorno de desarrollo para Dash en el propio Amiga: editor con colores, depurador paso a paso, ventanas MUI, editor de sprites y BOBs y editor de mapas de tiles. Libre.",
    lema: "Programa en Dash sin salir del Amiga.",
    texto:
      "Forja es un entorno de desarrollo para Dash que corre en el propio Amiga. Escribes con colores, compilas y ejecutas con una tecla, depuras paso a paso y dibujas ventanas con MUI de verdad. Para juegos, dibujas y animas sprites y BOBs y montas mapas de tiles con capas, choques y objetos. Todo en una ventana MUI con fondo negro.",
    descargar: `Bajar Dash ${DASH_VERSION} (trae Forja)`,
    codigo: "El código en GitHub",
    peso: `${version.fichero} · ${tamano(version.bytes, "es")} · Forja 0.4 va dentro, en el cajón Dash/Forja, con dashgit`,
    sola: ["¿Ya tienes Dash y solo quieres Forja? Forja 0.4 va también sola en", "su release de GitHub", "(forja-0.4.lha)."],
    prueba: "Es una versión de prueba: funciona en el emulador, y la 0.1 ya se probó en un Amiga de verdad.",
    esquema: "Así se reparte la ventana. Es el esquema del plan de Forja, no una captura.",
    golpe: "Pulsa en la fragua.",
    ventana: {
      titulo: "Todo en una ventana",
      texto:
        "Forja abre una sola ventana MUI con fondo negro. Habla en castellano o en inglés, según el idioma de tus Preferencias de Locale. Si lo pides en sus Preferencias, se abre en su propia pantalla: una copia pública de la del Workbench, llamada FORJA. Mientras Forja está abierto, es la pantalla pública por defecto, así que los programas que ejecuta salen ahí; al salir, vuelve a serlo la de antes.",
      lista: [
        ["El editor", "Colorea el código según la sintaxis de Dash y lleva números de línea y puntos de parada. Tiene pestañas, deshacer y rehacer, buscar y cambiar, y cortar, copiar y pegar con el portapapeles del sistema."],
        ["El proyecto", "A la izquierda, los ficheros del cajón: un clic y se abren. Al depurar, también la pila y las variables."],
        ["La salida", "Abajo salen los errores del compilador. Un clic en uno te lleva a su línea."],
        ["Los botones", "Compilar, Ejecutar y Depurar. Al depurar, en su sitio salen Seguir, Paso, Entrar, Salir y Parar: todos a la vez no caben en una pantalla de 640 píxeles."],
        ["Inferencia", "Un botón manda el fichero, o las líneas elegidas, a Inferencia, la IA para el Amiga. Si no está abierta, la arranca."],
        ["Lo de la última vez", "Sin fichero, Forja abre lo que tenías abierto. Se puede quitar en Preferencias."],
        ["Git (alfa)", "El menú Git usa dashgit, el cliente de git escrito en Dash que viene en el paquete: estado, diferencias, historial, añadir, confirmar los cambios, traer del servidor y subir, por https con AmiSSL. Lo que contesta sale en la salida. dashgit está en alfa: aún hay mucho que probar, así que ten copia de lo importante."],
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
        ["Amiga-B", "Sprite, BOB o mapa nuevo"],
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
    sprites: {
      titulo: "Sprites y BOBs",
      texto: "Las imágenes IFF ILBM, también los pinceles de DPaint, se abren en el editor de sprites. Amiga-B crea un sprite de hardware (16 píxeles de ancho, 3 colores y el transparente) o un BOB, del tamaño y los colores que quieras. Se guardan como IFF, y sprite_load y bob_load de Dash los cargan tal cual.",
      alt: "El editor de sprites de Forja con una nave de 4 fotogramas, en el Amiga",
      pie: "Una nave de 4 fotogramas, de 32 x 32, en el editor de sprites. Captura del emulador.",
      lista: [
        ["Dibujar", "P lápiz, L línea, B caja (rellena si empiezas con Mayúsculas), F relleno, K cuentagotas y A el punto de agarre. Alt + clic borra; Ctrl + clic coge el color."],
        ["La paleta", "Arriba, abajo y las cifras eligen el color; las barras R, G y B lo cambian."],
        ["Fotogramas", "Las flechas van de uno a otro. N nuevo, D duplicar, Supr quitar, H y V espejo, y copiar, cortar y pegar. O enciende la piel de cebolla: el fotograma anterior se ve en puntos debajo del que dibujas."],
        ["La animación", "Espacio la pone en marcha en la vista animada; + y - cambian la velocidad."],
        ["Tamaño y tipo", "Ctrl + flechas o la pestaña Tamaño. T cambia de BOB a sprite de hardware, a sprite acoplado (una pareja de sprites: 15 colores y el transparente) y otra vez a BOB."],
        ["Al juego", "C copia al portapapeles las líneas de Dash que lo cargan, con sus colores y cómo animarlo, para pegarlas en tu programa."],
      ],
    },
    mapas: {
      titulo: "Mapas de tiles",
      texto: "Los ficheros .fmap se abren en el editor de mapas, y Amiga-B también crea un mapa nuevo. El tileset es un BOB del editor de sprites, con un fotograma por tile de 8, 16 o 32 píxeles. tilemap_load y tilemap_draw de Dash cargan el mapa y lo pintan.",
      alt: "El editor de mapas de Forja con un nivel de 40 x 20 tiles, en el Amiga",
      pie: "Un nivel de 40 x 20 tiles de 16 en el editor de mapas. Captura del emulador.",
      lista: [
        ["Herramientas", "P lápiz, B caja, F relleno, K cuentagotas y E borrar. H y V ponen el tile en espejo; la coma y el punto cambian de tile."],
        ["Capas", "Elegir, ver u ocultar, añadir, quitar y pasar atrás o delante. En la página Mapa, el ancho, el alto, el zoom, la rejilla (G) y el tileset."],
        ["La vista", "Las flechas y la rueda la mueven; con Mayúsculas, de pantalla en pantalla. + y - cambian el zoom."],
        ["Choques", "Una capa pasa a ser de choques, y en ella pintas sólido, plataforma, escalera o daño, que se ven encima con una trama de colores. El juego lo lee con tilemap_get."],
        ["Objetos", "Un clic pone un jugador, un enemigo, una moneda, una puerta u otro; se arrastran y Supr los quita. Pueden llevar un sprite. El juego los busca con tilemap_object_find."],
        ["Deshacer y el código", "Amiga-Z y Amiga-R deshacen y rehacen. C copia las líneas de Dash que cargan el mapa y lo pintan."],
      ],
      fichero: "El fichero es un IFF propio, FORM FMAP, con un trozo para cada cosa: MHDR (el tamaño), TSET (el nombre del tileset), LAYR (cada capa) y OBJS (los objetos). Se lee deprisa en un 68000 y admite trozos nuevos sin romper los viejos.",
    },
    fragua: {
      titulo: "Y para el juego, Fragua",
      texto: "Fragua es una biblioteca para hacer juegos en Dash, aparte de Forja y de Dash. Está pensada en dos capas: piezas sueltas, como pygame, y encima un árbol de nodos y escenas, como Godot. Su API está en inglés, como los builtins de Dash. Hoy está hecha la primera capa.",
      hechoTitulo: "Lo que ya hay",
      hecho: [
        "Una pantalla propia con doble búfer. Guarda un fondo, y cada sprite lo repone solo donde se pintó: borrar la pantalla entera costaría más de un fotograma.",
        "Imágenes del editor de sprites de Forja, con sus fotogramas, pintadas con máscara.",
        "Rect, con choques, intersección y unión; un reloj que marca el ritmo del juego y dice cuántos fotogramas se perdieron; teclado y joystick (o flechas y espacio).",
        "Sprite y Group: el grupo mueve, pinta, borra y busca choques.",
        "Un Pong de ejemplo. Gasta 5 ms de cada fotograma de 20 en un A1200 y 15 ms en un A500, medido en el emulador a velocidad real.",
      ],
      planTitulo: "Lo que viene (es el plan, aún no está hecho)",
      plan: [
        "Mapas de tiles del editor de Forja en Fragua, y una cámara con scroll por hardware. Un juego ya puede usar los mapas hoy, con los builtins tilemap_* de Dash.",
        "La jerarquía de objetos: un árbol de nodos como el de Godot (sprites, mapa, cámara, cuerpos que chocan, áreas, temporizadores), con paso fijo de 50 Hz, señales entre nodos y física sencilla en coma fija.",
        "Escenas en fichero, que se instancian dentro de otras, y un editor de escenas en Forja que escribe el .dash de la escena. Los objetos del mapa (jugador, enemigos, monedas) serían nodos.",
        "Luces con la paleta y el copper, y sonido sobre la música.",
      ],
      enlace: "Fragua en GitHub",
      diseno: "El diseño, en las docs de Forja",
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
        ["GIT orden", "Una orden de dashgit en el cajón del proyecto (status, commit -a -m ..., pull, push...), sin esperar."],
        ["SALIDA", "El texto de la salida."],
      ],
    },
    video: {
      titulo: "Míralo en marcha",
      texto: "Ocho minutos y medio en CoffinOS con tarjeta gráfica, en Amiberry, con la voz de FreeMEM. Se ve cómo se instala, el editor, los errores a un clic, el depurador, el editor de ventanas, un BOB animado, un mapa de tiles con capas, choques y objetos, y un pequeño juego en Dash que lo usa todo. La música es Space Debris, de Captain.",
      boton: "Reproducir",
      titulo_video: "Forja 0.1: el entorno de Dash, en el propio Amiga",
    },
    requisitos: {
      titulo: "Lo que necesita tu Amiga",
      lista: [
        "AmigaOS 3.0 o mejor, con un 68020 o mejor.",
        "MUI 3.8 o MUI 5.",
        "El compilador de Dash: la orden dash, que pone el instalador de Dash 2.3.1 o posterior. Si la tienes en otro sitio, dile dónde en las Preferencias de Forja (se guarda en ENV:Forja/dashc).",
        "El botón Inferencia necesita Inferencia, y el menú Git, dashgit: los dos vienen en el mismo paquete. Para traer y subir por https, AmiSSL y una pila TCP/IP.",
        "Los colores del código se ven mejor con más de 4 colores en la pantalla.",
      ],
      instalar: `Lo normal es bajarla con Dash para el Amiga. Descomprime ${version.fichero} y haz doble clic en Instalar. Deja el cajón Dash donde elijas, añade el Assign DASH: y el Path a S:User-Startup, y le dice a Forja dónde está el compilador (ENV:Forja/dashc). Forja está en Dash/Forja: doble clic en su icono, o Forja fichero en un Shell (el instalador pone DASH:Forja en el Path).`,
      notas: `Qué trae Dash ${DASH_VERSION}`,
    },
    prueba2: {
      titulo: "Versión de prueba",
      texto: "Forja 0.4 es una versión de prueba: funciona en el emulador, también en CoffinOS, y pasa sus pruebas. La 0.1 ya se probó en un Amiga de verdad, y la 0.2 arregló lo que salió. La 0.3 trajo el menú Git, con dashgit en alfa, y la 0.4 el autocompletado, ir a la definición y dónde se usa cada cosa. Antes de una versión estable falta:",
      lista: [
        "Probarla en más Amigas, con un 68020 a 14 MHz y con algo más rápido (68030, 68060 o una PiStorm con Emu68).",
        "Probar dashgit en Amigas de verdad y con repositorios grandes.",
        "Que alguien de habla inglesa repase el catálogo en inglés.",
        "Su propio paquete en Aminet, con capturas.",
      ],
      avisos: "Si algo falla, cuéntamelo en GitHub",
    },
    dash: {
      titulo: "Hecho en Dash",
      texto: "Forja está escrita en Dash, sin una línea de C: son más de 8.000 líneas de Dash. El editor se dibuja sobre un lienzo de MUI, con sus propios colores. Lo que Forja necesitaba y Dash no tenía se añadió al propio Dash, así que cualquier programa puede usarlo: el depurador, las ventanas .dashui en marcha y las órdenes ARexx en un programa MUI, y en Dash 2.2 los mapas de tiles, los sprites acoplados y la copia pública de la pantalla del Workbench.",
      enlace: "Descubre Dash",
    },
    pie: [
      { texto: "Forja en GitHub", url: REPO },
      { texto: "Inferencia", url: "https://inferencia.freemem.space/" },
      { texto: "Fragua", url: FRAGUA },
      { texto: `Dash ${DASH_VERSION}`, url: RELEASE },
    ],
  },
  en: {
    titulo: "Forja: the Dash IDE that runs on the Amiga (AmigaOS 3.x, MUI)",
    descripcion:
      "Development environment for Dash on the Amiga itself: colour code editor, step-by-step debugger, MUI windows, a sprite and BOB editor and a tile map editor. Free software.",
    lema: "Code in Dash without leaving the Amiga.",
    texto:
      "Forja is a development environment for Dash that runs on the Amiga itself. You write with colours, build and run with one key, debug step by step and draw windows with real MUI. For games, you draw and animate sprites and BOBs and build tile maps with layers, collisions and objects. All in one MUI window with a black background.",
    descargar: `Download Dash ${DASH_VERSION} (includes Forja)`,
    codigo: "Source on GitHub",
    peso: `${version.fichero} · ${tamano(version.bytes, "en")} · Forja 0.4 is inside, in the Dash/Forja drawer, with dashgit`,
    sola: ["Already have Dash and only want Forja? Forja 0.4 also comes on its own in", "its GitHub release", "(forja-0.4.lha)."],
    prueba: "This is a test version: it works in the emulator, and 0.1 has already been tried on a real Amiga.",
    esquema: "How the window is laid out. It's the sketch from Forja's plan, not a screenshot.",
    golpe: "Click on the forge.",
    ventana: {
      titulo: "All in one window",
      texto:
        "Forja opens a single MUI window with a black background. It speaks English or Spanish, following your Locale preferences. If you ask for it in its preferences, it opens on its own screen: a public copy of the Workbench screen, called FORJA. While Forja is open, it is the default public screen, so the programs it runs show up there; when you quit, the previous one is the default again.",
      lista: [
        ["The editor", "It colours the code following Dash's syntax, with line numbers and breakpoints. It has tabs, undo and redo, find and replace, and cut, copy and paste with the system clipboard."],
        ["The project", "On the left, the files in the drawer: one click opens them. While debugging, also the call stack and the variables."],
        ["The output", "Compiler errors show at the bottom. Clicking one takes you to its line."],
        ["The buttons", "Build, Run and Debug. While debugging, Continue, Step, Step into, Step out and Stop take their place: they don't all fit on a 640-pixel screen at once."],
        ["Inferencia", "One button sends the file, or the selected lines, to Inferencia, the AI for the Amiga. If it isn't running, Forja starts it."],
        ["Where you left off", "Without a file, Forja opens what you had open last time. You can turn that off in the preferences."],
        ["Git (alpha)", "The Git menu uses dashgit, the git client written in Dash that comes in the package: status, differences, history, add, commit the changes, pull and push, over https with AmiSSL. What it says goes to the output. dashgit is in alpha: there is still a lot to test, so keep a copy of what matters."],
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
        ["Amiga-B", "New sprite, BOB or map"],
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
    sprites: {
      titulo: "Sprites and BOBs",
      texto: "IFF ILBM pictures, DPaint brushes too, open in the sprite editor. Amiga-B makes a hardware sprite (16 pixels wide, 3 colours and the transparent one) or a BOB, of any size and colours. They are saved as IFF, and Dash's sprite_load and bob_load load them as they are.",
      alt: "Forja's sprite editor with a 4-frame ship, on the Amiga",
      pie: "A 4-frame, 32 x 32 ship in the sprite editor. Screenshot from the emulator.",
      lista: [
        ["Drawing", "P pencil, L line, B box (filled if you start with Shift), F fill, K eyedropper and A the handle point. Alt + click erases; Ctrl + click picks the colour."],
        ["The palette", "Up, down and the digits choose the colour; the R, G and B bars change it."],
        ["Frames", "The arrows go from one to another. N new, D duplicate, Del remove, H and V mirror, and copy, cut and paste. O turns the onion skin on: the previous frame shows as dots under the one you're drawing."],
        ["Animation", "Space starts it in the animated preview; + and - change the speed."],
        ["Size and type", "Ctrl + arrows or the Size tab. T goes from BOB to hardware sprite, to attached sprite (a pair of sprites: 15 colours and the transparent one) and back to BOB."],
        ["Into the game", "C copies to the clipboard the Dash lines that load it, with its colours and how to animate it, ready to paste into your program."],
      ],
    },
    mapas: {
      titulo: "Tile maps",
      texto: ".fmap files open in the map editor, and Amiga-B also makes a new map. The tileset is a BOB from the sprite editor, with one frame per tile of 8, 16 or 32 pixels. Dash's tilemap_load and tilemap_draw load the map and draw it.",
      alt: "Forja's map editor with a 40 x 20 tile level, on the Amiga",
      pie: "A level of 40 x 20 tiles of 16 in the map editor. Screenshot from the emulator.",
      lista: [
        ["Tools", "P pencil, B box, F fill, K pick and E erase. H and V mirror the tile; comma and full stop change the tile."],
        ["Layers", "Choose, show or hide, add, remove and move back or front. On the Map page, the width, height, zoom, grid (G) and tileset."],
        ["The view", "The arrows and the wheel move it; with Shift, a screen at a time. + and - change the zoom."],
        ["Collisions", "A layer becomes a collision layer, and on it you paint solid, platform, ladder or harm, shown on top as a pattern of colours. The game reads it with tilemap_get."],
        ["Objects", "A click puts a player, an enemy, a coin, a door or another kind; you drag them and Del removes them. They can have a sprite. The game finds them with tilemap_object_find."],
        ["Undo and the code", "Amiga-Z and Amiga-R undo and redo. C copies the Dash lines that load the map and draw it."],
      ],
      fichero: "The file is its own IFF, FORM FMAP, with one chunk for each thing: MHDR (the size), TSET (the tileset's name), LAYR (each layer) and OBJS (the objects). It reads fast on a 68000 and takes new chunks without breaking the old ones.",
    },
    fragua: {
      titulo: "And for the game, Fragua",
      texto: "Fragua is a library for making games in Dash, separate from Forja and Dash. It's planned in two layers: loose pieces, as in pygame, and on top a tree of nodes and scenes, as in Godot. Its API is in English, like Dash's builtins. Today the first layer is done.",
      hechoTitulo: "What's there now",
      hecho: [
        "Its own screen with double buffering. It keeps a background, and each sprite restores it only where it drew: clearing the whole screen would take more than a frame.",
        "Images from Forja's sprite editor, with their frames, drawn with a mask.",
        "Rect, with collisions, intersection and union; a clock that keeps the game's pace and tells how many frames were lost; keyboard and joystick (or arrows and space).",
        "Sprite and Group: the group moves, draws, erases and checks collisions.",
        "A Pong example. It uses 5 ms of each 20 ms frame on an A1200 and 15 ms on an A500, measured in the emulator at real speed.",
      ],
      planTitulo: "What comes next (it's the plan, not done yet)",
      plan: [
        "Tile maps from Forja's editor in Fragua, and a camera with hardware scrolling. A game can already use the maps today, with Dash's tilemap_* builtins.",
        "The object hierarchy: a tree of nodes like Godot's (sprites, map, camera, bodies that collide, areas, timers), with a fixed 50 Hz step, signals between nodes and simple fixed-point physics.",
        "Scenes in files, instanced inside other scenes, and a scene editor in Forja that writes the scene's .dash. The map's objects (player, enemies, coins) would become nodes.",
        "Lights with the palette and the copper, and sound over the music.",
      ],
      enlace: "Fragua on GitHub",
      diseno: "The design, in Forja's docs (in Spanish)",
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
        ["GIT command", "A dashgit command in the project drawer (status, commit -a -m ..., pull, push...), without waiting."],
        ["SALIDA", "The output text."],
      ],
    },
    video: {
      titulo: "See it in action",
      texto: "Eight and a half minutes on CoffinOS with a graphics card, in Amiberry, in FreeMEM's voice. It shows how to install it, the editor, errors one click away, the debugger, the window editor, an animated BOB, a tile map with layers, collisions and objects, and a little game in Dash that uses it all. The music is Space Debris by Captain.",
      boton: "Play",
      titulo_video: "Forja 0.1: the Dash IDE, on the Amiga itself",
    },
    requisitos: {
      titulo: "What your Amiga needs",
      lista: [
        "AmigaOS 3.0 or later, with a 68020 or better.",
        "MUI 3.8 or MUI 5.",
        "The Dash compiler: the dash command, which the Dash 2.3.1 (or later) installer sets up. If you keep it somewhere else, tell Forja where in its preferences (it's stored in ENV:Forja/dashc).",
        "The Inferencia button needs Inferencia, and the Git menu, dashgit: both come in the same package. To pull and push over https, AmiSSL and a TCP/IP stack.",
        "Code colours look better with more than 4 colours on the screen.",
      ],
      instalar: `The usual way is to get it with Dash for the Amiga. Unpack ${version.fichero} and double-click Instalar (the installer). It puts the Dash drawer wherever you choose, adds the DASH: assign and the Path to S:User-Startup, and tells Forja where the compiler is (ENV:Forja/dashc). Forja is in Dash/Forja: double-click its icon, or type Forja file in a Shell (the installer puts DASH:Forja in the Path).`,
      notas: `What's in Dash ${DASH_VERSION}`,
    },
    prueba2: {
      titulo: "Test version",
      texto: "Forja 0.4 is a test version: it works in the emulator, CoffinOS included, and passes its tests. 0.1 has already been tried on a real Amiga, and 0.2 fixed what came up. 0.3 brought the Git menu, with dashgit in alpha, and 0.4 completion, go to definition and where each thing is used. Before a stable release, it still needs:",
      lista: [
        "Testing on more Amigas, with a 14 MHz 68020 and with something faster (68030, 68060 or a PiStorm with Emu68).",
        "Testing dashgit on real Amigas and with big repositories.",
        "A native English speaker to check the English catalog.",
        "Its own package on Aminet, with screenshots.",
      ],
      avisos: "If something goes wrong, tell me on GitHub",
    },
    dash: {
      titulo: "Made in Dash",
      texto: "Forja is written in Dash, without a single line of C: more than 8,000 lines of Dash. The editor is drawn on an MUI canvas, with its own colours. What Forja needed and Dash lacked was added to Dash itself, so any program can use it: the debugger, .dashui windows built at run time and ARexx commands in an MUI program, and in Dash 2.2 tile maps, attached sprites and a public copy of the Workbench screen.",
      enlace: "Discover Dash",
    },
    pie: [
      { texto: "Forja on GitHub", url: REPO },
      { texto: "Inferencia", url: "https://inferencia.freemem.space/en/" },
      { texto: "Fragua", url: FRAGUA },
      { texto: `Dash ${DASH_VERSION}`, url: RELEASE },
    ],
  },
} satisfies Record<Idioma, unknown>;

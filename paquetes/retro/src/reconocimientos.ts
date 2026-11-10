/**
 * Quién pidió, propuso o contó cada cosa que ya está publicada. Sale en la sección "Gracias" de cada web.
 *
 * Regla del usuario (08/11/2026): cada arreglo o novedad que venga de una persona lleva su nombre en el commit, en
 * las notas de la versión y aquí. Solo lo que ya está en una release publicada; con el nombre con el que se
 * presenta en el grupo, nunca datos de contacto. Al publicar una versión con nombres, se añade aquí.
 */
export type Aporte = { readonly version: string; readonly es: string; readonly en: string };
export type Reconocido = { readonly persona: string; readonly aportes: readonly Aporte[] };
export type ProgramaReconocido = "dash" | "forja" | "trasfondo" | "tachyon" | "inferencia";

export const RECONOCIMIENTOS: Readonly<Record<ProgramaReconocido, readonly Reconocido[]>> = {
  trasfondo: [
    {
      persona: "Ferrán García",
      aportes: [
        { version: "2.8.1", es: "La temperatura de la Pi en la línea de arriba del fondo, junto a la CPU.", en: "The Pi temperature on the top line of the backdrop, next to the CPU." },
        { version: "2.8.1", es: "Arreglo: \"Ver los segundos\" se montaba encima de otra casilla en TrasfondoPrefs.", en: "Fix: \"Show the seconds\" sat on top of another checkbox in TrasfondoPrefs." },
        { version: "2.8", es: "Editor del dock en TrasfondoPrefs.", en: "Dock editor in TrasfondoPrefs." },
        { version: "2.8", es: "Los segundos en la hora del fondo y de la barra.", en: "Seconds on the backdrop and bar clock." },
        { version: "2.8", es: "Elegir qué enseña la barra.", en: "Choosing what the bar shows." },
        { version: "2.8", es: "La barra y el dock en Exchange.", en: "The bar and the dock in Exchange." },
        { version: "2.7", es: "Arreglo: la raya que aparecía junto al botón de profundidad.", en: "Fix: the line that showed up next to the depth gadget." },
        { version: "2.6", es: "Arreglo: la barra cargaba la red sin la pila TCP/IP en marcha, y con MiamiDx estorbaba al conectar.", en: "Fix: the bar loaded the network without the TCP/IP stack running, which got in MiamiDx's way when connecting." },
        { version: "2.6", es: "La barra, pegada al botón de profundidad en todas las pantallas.", en: "The bar, flush against the depth gadget on every screen." },
        { version: "2.5", es: "El LEEME del paquete a 80 columnas.", en: "The package readme at 80 columns." },
        { version: "2.5", es: "TrasfondoPrefs se cierra y se abre sola tras actualizar, ya con las opciones nuevas.", en: "TrasfondoPrefs closes and reopens by itself after an update, with the new options." },
        { version: "2.5", es: "Arreglo: la barra nacía a la izquierda y se movía a su sitio.", en: "Fix: the bar was born on the left and then moved into place." },
        { version: "2.4", es: "La barra dentro de la barra de título de la pantalla.", en: "The bar inside the screen title bar." },
        { version: "2.2", es: "Pulsar la hora o la barra con su panel abierto lo cierra.", en: "Clicking the clock or the bar with its panel open closes it." },
        { version: "2.2", es: "El botón de reiniciar avisa de que hay que pulsarlo otra vez.", en: "The reboot button says it needs a second click." },
        { version: "2.2", es: "En TrasfondoPrefs, Arranque enciende y apaga cada pieza en el momento.", en: "In TrasfondoPrefs, Startup turns each piece on and off right away." },
        { version: "2.2", es: "Arreglo: la red de los ajustes rápidos ponía \"no Roadshow\" con MiamiDx.", en: "Fix: the quick settings' network said \"no Roadshow\" with MiamiDx." },
      ],
    },
    {
      persona: "Oskis R.P",
      aportes: [
        { version: "2.8", es: "Avisó de que el fondo perdía memoria poco a poco.", en: "Reported that the backdrop slowly lost memory." },
      ],
    },
    {
      persona: "David Martínez",
      aportes: [
        { version: "2.5", es: "Arreglo: lo que se abría desde el dock no tenía el path del Workbench.", en: "Fix: what opened from the dock lacked the Workbench path." },
      ],
    },
    {
      persona: "JaviTecH",
      aportes: [
        { version: "2.8.6", es: "Avisó de que el dock parpadeaba al pasar el ratón.", en: "Reported that the dock flickered when the mouse moved over it." },
        { version: "2.8.7", es: "Pidió las capturas de pantalla: con una tecla, desde los ajustes rápidos o por ARexx.", en: "Asked for screenshots: with a key, from the quick settings or through ARexx." },
      ],
    },
  ],
  forja: [
    {
      persona: "David Martínez",
      aportes: [
        { version: "0.5.2", es: "Las teclas del editor, como F5 y F10, llegan con el puntero en cualquier sitio de la ventana.", en: "The editor keys, such as F5 and F10, arrive with the pointer anywhere in the window." },
        { version: "0.4", es: "Arreglo: al depurar, F5 y F10 dejaban de responder.", en: "Fix: F5 and F10 stopped working while debugging." },
        { version: "0.5.1", es: "Arreglo: al depurar, el código saltaba y se repintaba entero en cada paso.", en: "Fix: while debugging, the code jumped and repainted as a whole on every step." },
      ],
    },
    {
      persona: "Tolkien",
      aportes: [
        { version: "0.5.2", es: "Help o F1 para ver la ayuda del nombre que hay en el cursor.", en: "Help or F1 to see the help for the name under the cursor." },
        { version: "0.4", es: "Encontrar dash aunque no esté la asignación DASH:.", en: "Finding dash even without the DASH: assign." },
        { version: "0.4", es: "Pidió autocompletado en el editor.", en: "Asked for code completion in the editor." },
      ],
    },
    {
      persona: "Ferrán García",
      aportes: [
        { version: "0.5", es: "Elegir la carpeta donde se dejan los ejecutables, por ejemplo RAM:.", en: "Choosing the folder for the executables, RAM: for example." },
        { version: "0.2", es: "Preferencias más anchas, con botón Elegir... y DASH:dash por defecto.", en: "Wider preferences, with a Choose... button and DASH:dash by default." },
        { version: "0.2", es: "Elegir, copiar y guardar las líneas de la salida, con barras para moverse.", en: "Selecting, copying and saving output lines, with scroll bars." },
        { version: "0.2", es: "$VER: para C:Version.", en: "$VER: for C:Version." },
      ],
    },
  ],
  dash: [
    {
      persona: "Ferrán García",
      aportes: [
        { version: "2.6.2", es: "Elegir dónde van los ejecutables, en Forja 0.5 y en la extensión de VS Code (dash.outputFolder).", en: "Choosing where the executables go, in Forja 0.5 and in the VS Code extension (dash.outputFolder)." },
        { version: "2.6.0", es: "Soltar iconos del Workbench sobre las ventanas MUI.", en: "Dropping Workbench icons on MUI windows." },
        { version: "2.4.0", es: "La referencia rápida en castellano.", en: "The quick reference in Spanish." },
        { version: "2.4.0", es: "El LEEME y el README del paquete a 80 columnas.", en: "The package LEEME and README at 80 columns." },
        { version: "2.4.0", es: "Arreglo: el texto de MUI salía oscuro en pantallas de 32 bits.", en: "Fix: MUI text came out dark on 32-bit screens." },
        { version: "2.3.0", es: "Arreglos del instalador, y forja e inferencia desde cualquier Shell.", en: "Installer fixes, and forja and inferencia from any Shell." },
        { version: "2.3.0", es: "Arreglo: \"version dash\" no decía la versión.", en: "Fix: \"version dash\" did not show the version." },
      ],
    },
    {
      persona: "David Martínez",
      aportes: [
        { version: "2.10.0", es: "Los grupos de las expresiones regulares: regex_group y regex_groups.", en: "Regular expression groups: regex_group and regex_groups." },
        { version: "2.9.0", es: "x in (1..10), x in lista, not in y 1 <= a <= 10 como en Python.", en: "x in (1..10), x in list, not in and 1 <= a <= 10 as in Python." },
        { version: "2.7.0", es: "mui_canvas_take_keys: una zona de dibujo de MUI recibe las teclas sin el puntero encima (F5 y F10 en Forja 0.5.2).", en: "mui_canvas_take_keys: a MUI drawing area gets the keys without the pointer over it (F5 and F10 in Forja 0.5.2)." },
        { version: "2.6.3", es: "Arreglo en Forja 0.5.1: al depurar, el código saltaba y se repintaba entero en cada paso.", en: "Fix in Forja 0.5.1: while debugging, the code jumped and repainted as a whole on every step." },
      ],
    },
    {
      persona: "JaviTecH",
      aportes: [
        { version: "2.7.0", es: "bitmap_create con profundidad 0: un bitmap como la pantalla, para dibujar sin parpadeo (el dock de Trasfondo).", en: "bitmap_create with depth 0: a bitmap like the screen, to draw without flicker (Trasfondo's dock)." },
        { version: "2.8.0", es: "screen_save_png: la pantalla a un PNG, para las capturas de Trasfondo.", en: "screen_save_png: the screen to a PNG, for Trasfondo's screenshots." },
      ],
    },
    {
      persona: "Oskis R.P",
      aportes: [
        { version: "2.5.0", es: "Avisó de la fuga de memoria que tenía el fondo de Trasfondo.", en: "Reported the memory leak in Trasfondo's backdrop." },
      ],
    },
    {
      persona: "Tolkien",
      aportes: [
        { version: "2.7.0", es: "En Forja 0.5.2, Help o F1 para ver la ayuda del nombre que hay en el cursor.", en: "In Forja 0.5.2, Help or F1 to see the help for the name under the cursor." },
        { version: "2.3.0", es: "Probó los ejecutables de Dash en MorphOS.", en: "Tried Dash's executables on MorphOS." },
      ],
    },
  ],
  tachyon: [
    {
      persona: "Ferrán García",
      aportes: [
        { version: "0.9.3", es: "Abrir ficheros del disco desde el menú (Amiga-O) y soltando su icono en la ventana.", en: "Opening files from disk from the menu (Amiga-O) and by dropping their icon on the window." },
        { version: "0.9.1", es: "Guardar un enlace o la página como fichero, para bajarse también los .readme de Aminet.", en: "Saving a link or the page as a file, to download Aminet's .readme files too." },
        { version: "0.9.1", es: "Pegar, copiar y cortar en los campos de las páginas.", en: "Pasting, copying and cutting in the page's fields." },
      ],
    },
    {
      persona: "Israel Ortuño Gogeta",
      aportes: [
        { version: "0.7.5", es: "Avisó de que el .lha daba error al descomprimirlo. Desde entonces el paquete va comprimido, en un tercio de lo que ocupaba.", en: "Reported that the .lha failed to unpack. Since then the package is compressed, a third of its old size." },
      ],
    },
  ],
  inferencia: [],
};

/**
 * El trabajo de otros sobre el que se construye cada programa: código incluido, firmware y herramientas sin las
 * que no existiría. Contrastado con third_party/, runtime/ y los README de cada proyecto (08/11/2026).
 */
export type Tercero = {
  readonly proyecto: string;
  readonly autores: string;
  /** Los autores en inglés, si cambian. */
  readonly autoresEn?: string;
  readonly es: string;
  readonly en: string;
};

const EMU68: Tercero = { proyecto: "Emu68", autores: "Michal Schulz", es: "El emulador de 68k en la Raspberry Pi con el que Dash corre en una PiStorm.", en: "The 68k emulator on the Raspberry Pi that runs Dash on a PiStorm." };
const MUI: Tercero = { proyecto: "MUI", autores: "Stefan Stuntz y el equipo de MUI", autoresEn: "Stefan Stuntz and the MUI team", es: "Las ventanas.", en: "The windows." };
const AMISSL: Tercero = { proyecto: "AmiSSL", autores: "el equipo de AmiSSL", autoresEn: "the AmiSSL team", es: "HTTPS en el Amiga.", en: "HTTPS on the Amiga." };
const FSUAE: Tercero = { proyecto: "FS-UAE", autores: "Frode Solheim", es: "El emulador donde pasan todas las pruebas.", en: "The emulator every test runs in." };
const ZLIB: Tercero = { proyecto: "zlib", autores: "Jean-loup Gailly y Mark Adler", autoresEn: "Jean-loup Gailly and Mark Adler", es: "Comprimir y descomprimir.", en: "Compression." };
const STB: Tercero = { proyecto: "stb", autores: "Sean Barrett", es: "Imágenes y fuentes TrueType.", en: "Images and TrueType fonts." };
const NANOSVG: Tercero = { proyecto: "NanoSVG", autores: "Mikko Mononen", es: "Dibujos SVG.", en: "SVG drawings." };
const TJPGD: Tercero = { proyecto: "TJpgDec", autores: "ChaN", es: "Fotos JPEG.", en: "JPEG photos." };
const LIBWEBP: Tercero = { proyecto: "libwebp", autores: "Google", es: "Imágenes WebP.", en: "WebP images." };
const BROTLI: Tercero = { proyecto: "Brotli", autores: "los autores de Brotli (Google)", autoresEn: "the Brotli authors (Google)", es: "Fuentes WOFF2 y páginas comprimidas.", en: "WOFF2 fonts and compressed pages." };
const FDLIBM: Tercero = { proyecto: "fdlibm", autores: "Sun Microsystems", es: "Las funciones matemáticas.", en: "The maths functions." };
const RYU: Tercero = { proyecto: "Ryu", autores: "Ulf Adams", es: "Escribir números decimales exactos.", en: "Printing exact decimal numbers." };

export const TERCEROS: Readonly<Record<ProgramaReconocido, readonly Tercero[]>> = {
  dash: [
    { proyecto: "amiga-gcc", autores: "Stefan \"bebbo\" Franke", es: "El gcc de Amiga del camino por C (--gcc).", en: "The Amiga gcc behind the C path (--gcc)." },
    { proyecto: "Lark", autores: "Erez Shinan", es: "El analizador del camino por C.", en: "The parser of the C path." },
    EMU68, MUI, AMISSL, ZLIB, STB, NANOSVG, TJPGD, LIBWEBP, BROTLI, FDLIBM, RYU, FSUAE,
  ],
  forja: [MUI, AMISSL, FSUAE],
  trasfondo: [
    { ...EMU68, es: "Da la temperatura de la Raspberry Pi de una PiStorm.", en: "Gives the temperature of a PiStorm's Raspberry Pi." },
    { proyecto: "PiStorm", autores: "Claude Schwarz", es: "La placa que pone una Raspberry Pi como CPU del Amiga.", en: "The board that turns a Raspberry Pi into the Amiga's CPU." },
    FSUAE,
    { proyecto: "Amiberry", autores: "Dimitris Panokostas", es: "El emulador de las pruebas con Coffin.", en: "The emulator for the Coffin tests." },
  ],
  tachyon: [
    { proyecto: "QuickJS", autores: "Fabrice Bellard y Charlie Gordon", autoresEn: "Fabrice Bellard and Charlie Gordon", es: "El JavaScript.", en: "The JavaScript." },
    { proyecto: "Hubbub", autores: "el proyecto NetSurf", autoresEn: "the NetSurf project", es: "El analizador de HTML5.", en: "The HTML5 parser." },
    { proyecto: "MintVID", autores: "Darren \"boingball\" Banfi", es: "El vídeo, con libavc de Android.", en: "Video, with Android's libavc." },
    STB, NANOSVG, TJPGD, LIBWEBP, BROTLI, FDLIBM, RYU,
    { proyecto: "Lucide", autores: "los autores de Lucide y Feather (Cole Bemis)", autoresEn: "the Lucide and Feather authors (Cole Bemis)", es: "Los iconos de la barra.", en: "The toolbar icons." },
    MUI, AMISSL, FSUAE,
  ],
  inferencia: [],
};

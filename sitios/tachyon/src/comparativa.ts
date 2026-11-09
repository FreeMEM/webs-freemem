import type { Idioma } from "retro";

/**
 * Tachyon frente a los otros dos navegadores nuevos del Amiga clásico. Contrastado el 09/11/2026 con lo que publica
 * cada autor: el readme de Amelinium 1.6.4 (juen.in) y el de AmiFire 0.9.198 (Aminet). Lo que un autor afirma sin
 * más prueba va con "según su autor". Al cambiar de versión cualquiera de los tres, se repasa entera.
 */
export type Navegador = { readonly nombre: string; readonly autor: string; readonly web: string; readonly aminet?: string };

export const NAVEGADORES: readonly Navegador[] = [
  { nombre: "Tachyon", autor: "FreeMEM", web: "https://github.com/FreeMEM/tachyon" },
  { nombre: "Amelinium", autor: "Paweł \"Juen\" Nowak", web: "http://juen.in/", aminet: "https://aminet.net/package/comm/www/Amelinium" },
  { nombre: "AmiFire", autor: "Rafał \"Terror\" Fajfrowski", web: "http://eterror.pl/amifire", aminet: "https://aminet.net/package/comm/www/AmiFire" },
];

/** Una fila: qué se compara y lo de cada navegador, en el orden de NAVEGADORES. */
export type Fila = readonly [string, string, string, string];

export const COMPARATIVA = {
  es: {
    titulo: "Tres navegadores, un Amiga",
    texto:
      "Tachyon no está solo, y es una alegría. Este año han nacido otros dos navegadores para el Amiga clásico, y los dos son un trabajo enorme. Amelinium, de Paweł \"Juen\" Nowak, funciona desde un 68000 hasta un PowerPC o un AROS en una Raspberry Pi, y además trae correo, visor de PDF y radio por internet. AmiFire, de Rafał \"Terror\" Fajfrowski, lleva la comodidad de Firefox al Workbench, con sus temas, sus pestañas privadas y su gestor de contraseñas. Probadlos los tres: cada uno brilla en algo.",
    gracias:
      "Gracias a los dos. Poner Tachyon al lado de Amelinium nos enseñó qué iconos de Wikipedia y Xataka se quedaban sin dibujar. Y \"Guardar enlace como...\" llegó porque Ferrán García quería bajarse los .readme de Aminet, como hace AmiFire.",
    aspecto: "",
    web: "Web",
    nota:
      "Comparados el 9 de noviembre de 2026 con Tachyon 0.9.3 alfa, Amelinium 1.6.4 y AmiFire 0.9.198 beta, según lo que publica cada autor. Los tres avanzan cada semana, así que esta tabla envejece rápido. Si ves algo mal, avísame.",
    filas: [
      ["Versión", "0.9.3 alfa", "1.6.4", "0.9.198 beta"],
      [
        "Máquinas",
        "68020 con FPU o mejor y AmigaOS 3.x. También AmigaOS 4, con su emulación de 68k.",
        "Desde un 68000, con una versión mínima para Kickstart 1.3. Versiones para AmigaOS 4, MorphOS, WarpOS, PowerUP y AROS (también en Raspberry Pi).",
        "68020 o mejor y AmigaOS 3.1 o posterior; recomienda PiStorm. AmigaOS 4 y AROS, anunciados.",
      ],
      ["Interfaz", "MUI 3.8 o 5.", "Propia, con su barra de herramientas y sus menús.", "Propia, al estilo de Firefox, y acepta sus temas."],
      [
        "HTML y CSS",
        "HTML5 con Hubbub, el analizador de NetSurf. Flexbox, Grid, :has(), @layer, transformaciones y animaciones.",
        "Motor propio, el mismo que usa su cliente de correo. Flexbox, Grid, :has(), @container y sticky.",
        "Flexbox, Grid básico, variables CSS, @media, float y tablas.",
      ],
      ["Acid2", "10 de sus 11 comprobaciones.", "\"Casi entera bien\", según su autor.", "\"La pasa\", según su autor."],
      [
        "JavaScript",
        "QuickJS (ES2023), encendido en todas las webs.",
        "Intérprete propio, en las versiones _JS. Se enciende web a web.",
        "QuickJS, como complemento. Viene apagado.",
      ],
      [
        "HTTPS",
        "AmiSSL 5, y comprueba el certificado del servidor.",
        "AmiSSL o TLS propio. Cifra, pero no comprueba el certificado: su autor lo avisa.",
        "AmiSSL 5.",
      ],
      [
        "Imágenes",
        "JPEG, PNG, GIF, BMP, WebP y SVG, decodificadas en el propio Amiga.",
        "JPEG, PNG, GIF, BMP e ICO. WebP, SVG, AVIF y JPEG XL con un complemento.",
        "PNG, GIF animado, WebP, SVG e ICO. JPEG con el datatype del sistema.",
      ],
      ["Fuentes de las webs", "TTF, OTF, WOFF y WOFF2.", "TTF y WOFF. WOFF2, OTF y emoji en color con un complemento.", "No lo indica."],
      [
        "Vídeo y sonido",
        "Vídeo y YouTube con MintVID, también a pantalla completa.",
        "MP4 y YouTube a 144p o 240p en un 68040 o mejor, y radio por internet.",
        "YouTube sin JavaScript, según su web.",
      ],
      [
        "Pestañas e historial",
        "Pestañas, hasta cuatro ventanas, historial por días y marcadores.",
        "Pestañas, historial con búsqueda y marcadores.",
        "Pestañas, también privadas, historial y marcadores.",
      ],
      [
        "Además",
        "Se actualiza con un clic, descargas en paralelo, 10 idiomas e informe de depuración.",
        "Correo (Emalinium), visor de PDF, ARexx, modo lectura, traductor, contraseñas, impresión, bloqueador de anuncios y 12 idiomas.",
        "Gestor de contraseñas, bloqueador de anuncios, se actualiza con un clic y 3 idiomas.",
      ],
      ["Código", "Libre (MIT), en GitHub. Escrito en Dash.", "Gratis en Aminet. El código no está publicado.", "Gratis (freeware). El código no está publicado."],
    ] satisfies readonly Fila[],
  },
  en: {
    titulo: "Three browsers, one Amiga",
    texto:
      "Tachyon is not alone, and that's great news. Two other browsers for the classic Amiga were born this year, and both are a huge piece of work. Amelinium, by Paweł \"Juen\" Nowak, runs on anything from a 68000 to a PowerPC or AROS on a Raspberry Pi, and also brings email, a PDF viewer and internet radio. AmiFire, by Rafał \"Terror\" Fajfrowski, brings the comfort of Firefox to the Workbench, with its themes, private tabs and password manager. Try all three: each one shines at something.",
    gracias:
      "Thanks to both. Putting Tachyon next to Amelinium showed us which icons on Wikipedia and Xataka were left undrawn. And \"Save link as...\" came about because Ferrán García wanted to download the Aminet .readme files, as AmiFire does.",
    aspecto: "",
    web: "Website",
    nota:
      "Compared on 9 November 2026 with Tachyon 0.9.3 alpha, Amelinium 1.6.4 and AmiFire 0.9.198 beta, going by what each author publishes. All three move forward every week, so this table ages fast. If you spot a mistake, let me know.",
    filas: [
      ["Version", "0.9.3 alpha", "1.6.4", "0.9.198 beta"],
      [
        "Machines",
        "68020 with FPU or better and AmigaOS 3.x. Also AmigaOS 4, through its 68k emulation.",
        "From a 68000, with a minimal build for Kickstart 1.3. Builds for AmigaOS 4, MorphOS, WarpOS, PowerUP and AROS (Raspberry Pi too).",
        "68020 or better and AmigaOS 3.1 or later; PiStorm recommended. AmigaOS 4 and AROS announced.",
      ],
      ["Interface", "MUI 3.8 or 5.", "Its own, with its toolbar and menus.", "Its own, Firefox style, and it takes Firefox themes."],
      [
        "HTML and CSS",
        "HTML5 with Hubbub, NetSurf's parser. Flexbox, Grid, :has(), @layer, transforms and animations.",
        "Its own engine, shared with its email client. Flexbox, Grid, :has(), @container and sticky.",
        "Flexbox, basic Grid, CSS variables, @media, float and tables.",
      ],
      ["Acid2", "10 of its 11 checks.", "\"Almost entirely right\", says its author.", "\"Passes\", says its author."],
      [
        "JavaScript",
        "QuickJS (ES2023), on for every site.",
        "Its own interpreter, in the _JS builds. Turned on site by site.",
        "QuickJS, as an add-on. Off by default.",
      ],
      [
        "HTTPS",
        "AmiSSL 5, and it checks the server's certificate.",
        "AmiSSL or built-in TLS. Encrypted, but the certificate is not checked: its author says so.",
        "AmiSSL 5.",
      ],
      [
        "Images",
        "JPEG, PNG, GIF, BMP, WebP and SVG, decoded on the Amiga itself.",
        "JPEG, PNG, GIF, BMP and ICO. WebP, SVG, AVIF and JPEG XL with an add-on.",
        "PNG, animated GIF, WebP, SVG and ICO. JPEG through the system datatype.",
      ],
      ["Web fonts", "TTF, OTF, WOFF and WOFF2.", "TTF and WOFF. WOFF2, OTF and colour emoji with an add-on.", "Not stated."],
      [
        "Video and sound",
        "Video and YouTube with MintVID, full screen too.",
        "MP4 and YouTube at 144p or 240p on a 68040 or better, and internet radio.",
        "YouTube without JavaScript, says its website.",
      ],
      [
        "Tabs and history",
        "Tabs, up to four windows, history by day and bookmarks.",
        "Tabs, searchable history and bookmarks.",
        "Tabs, private ones too, history and bookmarks.",
      ],
      [
        "Also",
        "One-click updates, parallel downloads, 10 languages and a debug report.",
        "Email (Emalinium), PDF viewer, ARexx, reader mode, translator, passwords, printing, ad blocker and 12 languages.",
        "Password manager, ad blocker, one-click updates and 3 languages.",
      ],
      ["Code", "Free software (MIT), on GitHub. Written in Dash.", "Free on Aminet. Source not published.", "Freeware. Source not published."],
    ] satisfies readonly Fila[],
  },
} satisfies Record<Idioma, unknown>;

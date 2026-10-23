/** Los programas de FreeMEM para Amiga: cada web enlaza a las demás. Añadir aquí las que vengan. */
export type Idioma = "es" | "en";

export const SITIOS = [
  {
    id: "dash",
    nombre: "Dash",
    url: "https://dash.freemem.space",
    icono: "/familia/dash.svg",
    lema: { es: "El lenguaje", en: "The language" },
  },
  {
    id: "tachyon",
    nombre: "Tachyon",
    url: "https://tachyon.freemem.space",
    icono: "/familia/tachyon.svg",
    lema: { es: "El navegador", en: "The browser" },
  },
  {
    id: "trasfondo",
    nombre: "Trasfondo",
    url: "https://trasfondo.freemem.space",
    icono: "/familia/trasfondo.png",
    lema: { es: "El monitor", en: "The monitor" },
  },
] as const;

export type IdSitio = (typeof SITIOS)[number]["id"];

const TEXTOS = {
  es: {
    familia: "Programas para Amiga de FreeMEM",
    otroIdioma: "English",
    hechoPor: "Hecho por Francisco Antonio Tapias Bravo (FreeMEM). Software libre, con licencia MIT.",
    blog: "Blog",
  },
  en: {
    familia: "Amiga software by FreeMEM",
    otroIdioma: "Español",
    hechoPor: "Made by Francisco Antonio Tapias Bravo (FreeMEM). Free software, MIT licence.",
    blog: "Blog",
  },
};

/** La barra de arriba: el programa en el que estás, los otros dos y el cambio de idioma. */
export function Cabecera({ actual, idioma, rutaOtroIdioma }: { actual: IdSitio; idioma: Idioma; rutaOtroIdioma: string }) {
  const t = TEXTOS[idioma];
  return (
    <header className="familia">
      <nav aria-label={t.familia}>
        <ul>
          {SITIOS.map((s) => (
            <li key={s.id}>
              <a href={s.id === actual ? (idioma === "en" ? "/en/" : "/") : `${s.url}${idioma === "en" ? "/en/" : "/"}`} aria-current={s.id === actual ? "page" : undefined}>
                <img src={s.icono} alt="" width={20} height={20} />
                <span>{s.nombre}</span>
                <small>{s.lema[idioma]}</small>
              </a>
            </li>
          ))}
        </ul>
        <a className="familia-idioma" href={rutaOtroIdioma} hrefLang={idioma === "es" ? "en" : "es"} lang={idioma === "es" ? "en" : "es"}>
          {t.otroIdioma}
        </a>
      </nav>
    </header>
  );
}

export function Pie({ idioma, enlaces }: { idioma: Idioma; enlaces: { texto: string; url: string }[] }) {
  const t = TEXTOS[idioma];
  return (
    <footer className="pie">
      <ul>
        {enlaces.map((e) => (
          <li key={e.url}>
            <a href={e.url}>{e.texto}</a>
          </li>
        ))}
        <li>
          <a href="https://github.com/FreeMEM">GitHub</a>
        </li>
        <li>
          <a href="https://freemem.space">{t.blog}</a>
        </li>
      </ul>
      <p>{t.hechoPor}</p>
    </footer>
  );
}

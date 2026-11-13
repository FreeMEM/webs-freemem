import { Cabecera, Pie, type Idioma } from "retro";

import { Capas } from "./Capas";
import { Capturas } from "./Capturas";
import { Claves } from "./Claves";
import { CLAVES } from "./caracteristicas";
import { BASE, CONTENIDO, REPO } from "./contenido";
import { FECHA, NOTAS } from "./datos";
import { EnMarcha } from "./EnMarcha";
import { Marco } from "./Marco";
import { Tabla } from "./Tabla";

export function Inicio({ idioma }: { idioma: Idioma }) {
  const t = CONTENIDO[idioma];
  const raiz = idioma === "es" ? "/" : "/en/";
  // Aún no hay versión que bajar: el código fuente, con su licencia.
  const datos = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "DashOS",
    description: t.descripcion,
    url: `${BASE}${raiz}`,
    codeRepository: REPO,
    programmingLanguage: "Rust",
    license: "https://www.mozilla.org/MPL/2.0/",
    inLanguage: idioma,
    author: { "@type": "Person", name: "Francisco Antonio Tapias Bravo", alternateName: "FreeMEM", url: "https://freemem.space" },
  };

  return (
    <>
      <Cabecera actual="dashos" idioma={idioma} rutaOtroIdioma={idioma === "es" ? "/en/" : "/"} />
      <main>
        <section className="portada">
          <div className="portada-texto">
            <div className="franja" aria-hidden="true" />
            <h1>DashOS</h1>
            <p className="entradilla">{t.entradilla}</p>
            {t.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="acciones">
              <a className="boton" href="#capturas">
                {t.verMarcha}
              </a>
              <a className="boton boton-suave" href={REPO}>
                {t.verCodigo}
              </a>
            </div>
          </div>
          <Marco titulo={t.estado.titulo} className="estado">
            <ul>
              {t.estado.lineas.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Marco>
        </section>

        <section className="seccion" aria-labelledby="claves">
          <h2 id="claves">{CLAVES[idioma].titulo}</h2>
          <p className="medida suave">{CLAVES[idioma].texto}</p>
          <Claves idioma={idioma} />
        </section>

        <section className="seccion" aria-labelledby="nucleos">
          <h2 id="nucleos">{t.nucleos.titulo}</h2>
          {t.nucleos.parrafos.map((p) => (
            <p key={p} className="medida">
              {p}
            </p>
          ))}
        </section>

        <section className="seccion" aria-labelledby="capturas">
          <h2 id="capturas">{t.capturas.titulo}</h2>
          <p className="medida suave">{t.capturas.texto}</p>
          <Capturas idioma={idioma} />
        </section>

        <section className="seccion" aria-labelledby="en-marcha">
          <h2 id="en-marcha">{t.enMarcha.titulo}</h2>
          <p className="medida suave">{t.enMarcha.texto}</p>
          <EnMarcha idioma={idioma} />
        </section>

        <section className="seccion" aria-labelledby="capas">
          <h2 id="capas">{t.capas.titulo}</h2>
          <p className="medida suave">
            {FECHA[idioma]}. {t.capas.texto}
          </p>
          <Capas idioma={idioma} />
        </section>

        <section className="seccion" aria-labelledby="avance">
          <h2 id="avance">{t.avance.titulo}</h2>
          <p className="medida suave">{t.avance.texto}</p>
          <Tabla idioma={idioma} />
          <h3 className="notas-titulo">{t.avance.notas}</h3>
          <ul className="notas">
            {NOTAS[idioma].map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>

        <section className="seccion seccion-dash" aria-labelledby="dash">
          <h2 id="dash">{t.dash.titulo}</h2>
          <p className="medida">{t.dash.texto}</p>
          <a href={`https://dash.freemem.space${raiz}`}>{t.dash.enlace}</a>
        </section>
      </main>
      <Pie idioma={idioma} enlaces={[...t.pie]} licencia="MPL-2.0" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }} />
    </>
  );
}

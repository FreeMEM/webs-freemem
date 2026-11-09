import type { Idioma } from "./familia";
import { RECONOCIMIENTOS, TERCEROS, type ProgramaReconocido } from "./reconocimientos";

const TEXTOS = {
  es: {
    titulo: "Gracias",
    texto: "Esto no lo he hecho solo. Cada cosa de esta lista la pidió, la propuso o la encontró rota alguien que usa el programa.",
    terceros: "Sobre hombros de gigantes",
    tercerosTexto: "Y el trabajo de otros sin el que esto no existiría. Se lo debemos.",
  },
  en: {
    titulo: "Thanks",
    texto: "I didn't do this alone. Everything on this list was asked for, suggested or found broken by someone who uses the program.",
    terceros: "On the shoulders of giants",
    tercerosTexto: "And the work of others without which this would not exist. We owe it to them.",
  },
} as const;

/** La sección "Gracias": quién pidió, propuso o contó cada cosa publicada. Sin nadie, no sale. */
export function Gracias({ programa, idioma }: { programa: ProgramaReconocido; idioma: Idioma }) {
  const lista = RECONOCIMIENTOS[programa];
  const terceros = TERCEROS[programa];
  if (!lista.length && !terceros.length) return null;
  const t = TEXTOS[idioma];
  return (
    <section className="seccion seccion-gracias" aria-labelledby="gracias">
      <h2 id="gracias">{t.titulo}</h2>
      {lista.length > 0 && <p className="medida">{t.texto}</p>}
      <ul className="novedades">
        {lista.map((r) => (
          <li key={r.persona} className="wb-ventana novedad">
            <div className="wb-ventana-barra">
              <span className="wb-cierre" aria-hidden="true" />
              <span className="wb-ventana-titulo">{r.persona}</span>
              <span className="wb-profundidad" aria-hidden="true" />
            </div>
            <div className="novedad-cuerpo">
              <ul className="gracias-aportes">
                {r.aportes.map((a) => (
                  <li key={a.version + a.es}>
                    <span className="gracias-version">{a.version}</span> {a[idioma]}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      {terceros.length > 0 && (
        <>
          <h3 className="gracias-subtitulo">{t.terceros}</h3>
          <p className="medida">{t.tercerosTexto}</p>
          <dl className="gracias-terceros">
            {terceros.map((x) => (
              <div key={x.proyecto}>
                <dt>
                  {x.proyecto} <span>{idioma === "en" && x.autoresEn ? x.autoresEn : x.autores}</span>
                </dt>
                <dd>{x[idioma]}</dd>
              </div>
            ))}
          </dl>
        </>
      )}
    </section>
  );
}

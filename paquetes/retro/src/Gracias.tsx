import type { Idioma } from "./familia";
import { RECONOCIMIENTOS, type ProgramaReconocido } from "./reconocimientos";

const TEXTOS = {
  es: {
    titulo: "Gracias",
    texto: "Lo que sigue salió de quien lo pidió, lo propuso o avisó de un fallo. Gracias por vuestro interés.",
  },
  en: {
    titulo: "Thanks",
    texto: "The following came from the people who asked for it, suggested it or reported a bug. Thanks for your interest.",
  },
} as const;

/** La sección "Gracias": quién pidió, propuso o contó cada cosa publicada. Sin nadie, no sale. */
export function Gracias({ programa, idioma }: { programa: ProgramaReconocido; idioma: Idioma }) {
  const lista = RECONOCIMIENTOS[programa];
  if (!lista.length) return null;
  const t = TEXTOS[idioma];
  return (
    <section className="seccion seccion-gracias" aria-labelledby="gracias">
      <h2 id="gracias">{t.titulo}</h2>
      <p className="medida">{t.texto}</p>
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
    </section>
  );
}

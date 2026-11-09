import type { Idioma } from "retro";

import { COMPARATIVA, NAVEGADORES } from "./comparativa";

/** Tachyon, Amelinium y AmiFire lado a lado. En el móvil, cada fila es una tarjeta con los tres. */
export function Comparativa({ idioma }: { idioma: Idioma }) {
  const t = COMPARATIVA[idioma];
  return (
    <section className="seccion seccion-comparativa" aria-labelledby="comparativa">
      <h2 id="comparativa">{t.titulo}</h2>
      <p className="medida">{t.texto}</p>
      <p className="medida comparativa-gracias">{t.gracias}</p>
      <div className="comparativa-marco">
        <table className="comparativa">
          <thead>
            <tr>
              <td />
              {NAVEGADORES.map((n, i) => (
                <th key={n.nombre} scope="col" className={`nav-${i}`}>
                  <span className="comparativa-nombre">{n.nombre}</span>
                  <span className="comparativa-autor">{n.autor}</span>
                  <span className="comparativa-enlaces">
                    <a href={n.web}>{t.web}</a>
                    {n.aminet && <a href={n.aminet}>Aminet</a>}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.filas.map(([aspecto, ...celdas]) => (
              <tr key={aspecto}>
                <th scope="row">{aspecto}</th>
                {celdas.map((c, i) => (
                  <td key={NAVEGADORES[i].nombre} className={`nav-${i}`} data-nav={NAVEGADORES[i].nombre}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="medida comparativa-nota">{t.nota}</p>
    </section>
  );
}

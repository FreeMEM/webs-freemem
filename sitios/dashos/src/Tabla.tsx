import type { Idioma } from "retro";

import { CONTENIDO, pc } from "./contenido";
import { CAPAS, COMPONENTES, estado } from "./datos";
import { Marco } from "./Marco";

/** Todos los componentes por capa: cuánto llevan, de dónde sale la cifra y qué les falta. */
export function Tabla({ idioma }: { idioma: Idioma }) {
  const t = CONTENIDO[idioma].avance;
  return (
    <Marco titulo={t.ventana}>
      <div className="tabla-env" tabIndex={0} aria-label={t.titulo}>
        <table>
          <thead>
            <tr>
              {t.columnas.map((c) => (
                <th key={c} scope="col">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CAPAS.flatMap((c) => {
              const filas = COMPONENTES.filter((d) => d.capa === c.id);
              if (!filas.length) return [];
              return [
                <tr key={c.id} className="grupo">
                  <th colSpan={4} scope="colgroup">
                    {c.nombre[idioma]}
                  </th>
                </tr>,
                ...filas.map((d) => {
                  const f = d[idioma];
                  return (
                    <tr key={d.es.nombre}>
                      <td>
                        <b>{f.nombre}</b>
                        <br />
                        <span className="suave">{f.que}</span>
                      </td>
                      <td className="pc">
                        {pc(d.pc, idioma)}
                        <span className="mini" aria-hidden="true">
                          <i className={estado(d.pc)} style={{ width: `${d.pc}%` }} />
                        </span>
                      </td>
                      <td className="regla">{f.regla}</td>
                      <td>{f.falta}</td>
                    </tr>
                  );
                }),
              ];
            })}
          </tbody>
        </table>
      </div>
    </Marco>
  );
}

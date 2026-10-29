/** Una novedad: en qué punto está (la barra de su ventana), qué es y qué trae. */
export type Novedad = { readonly estado: string; readonly titulo: string; readonly texto: string };

/** Las novedades de un programa, cada una en una ventana del Workbench 3 (la barra dice en qué punto está). */
export function Novedades({ lista }: { lista: readonly Novedad[] }) {
  return (
    <ul className="novedades">
      {lista.map((n) => (
        <li key={n.titulo} className="wb-ventana novedad">
          <div className="wb-ventana-barra">
            <span className="wb-cierre" aria-hidden="true" />
            <span className="wb-ventana-titulo">{n.estado}</span>
            <span className="wb-profundidad" aria-hidden="true" />
          </div>
          <div className="novedad-cuerpo">
            <h3>{n.titulo}</h3>
            <p>{n.texto}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

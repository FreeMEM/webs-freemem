import type { Idioma } from "retro";

import { CLAVES } from "./caracteristicas";

/** Las características clave en tarjetas, una por grupo, cada línea con su estado. */
export function Claves({ idioma }: { idioma: Idioma }) {
  const t = CLAVES[idioma];
  return (
    <div className="claves">
      {t.grupos.map((g) => (
        <div className="clave" key={g.titulo}>
          <h3>{g.titulo}</h3>
          <ul>
            {g.items.map(([estado, texto]) => (
              <li key={texto}>
                <span className={`clave-estado clave-${estado}`}>{t.estados[estado]}</span>
                <span>{texto}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import type { Idioma } from "retro";

import { CONTENIDO, pc } from "./contenido";
import { CAPAS, COMPONENTES, estado, type Componente } from "./datos";

/** Las piezas de cada capa, coloreadas por su avance; al pulsar una, su detalle debajo. */
export function Capas({ idioma }: { idioma: Idioma }) {
  const t = CONTENIDO[idioma].capas;
  const [elegido, setElegido] = useState<Componente | null>(null);

  const total = COMPONENTES.length;
  const hechos = COMPONENTES.filter((d) => d.pc >= 80).length;
  const curso = COMPONENTES.filter((d) => d.pc > 0 && d.pc < 80).length;
  const media = Math.round(COMPONENTES.reduce((a, d) => a + d.pc, 0) / total);
  const cifras: [string, string][] = [
    [pc(media, idioma), t.resumen[0]],
    [String(hechos), t.resumen[1]],
    [String(curso), t.resumen[2]],
    [String(total - hechos - curso), t.resumen[3]],
  ];
  const ficha = elegido?.[idioma];

  return (
    <>
      <div className="resumen">
        {cifras.map(([v, texto]) => (
          <div key={texto} className="cifra">
            <b>{v}</b>
            <span>{texto}</span>
          </div>
        ))}
      </div>
      <ul className="leyenda">
        <li>
          <i className="cuadro hecho" />
          {t.leyenda.hecho}
        </li>
        <li>
          <i className="cuadro curso" />
          {t.leyenda.curso}
        </li>
        <li>
          <i className="cuadro plan" />
          {t.leyenda.plan}
        </li>
        <li>
          <i className="cuadro gpl" />
          {t.leyenda.gpl}
        </li>
      </ul>
      <div className="diagrama">
        {CAPAS.map((c) => (
          <div key={c.id} className="capa-grupo">
            <div className="capa">
              <h3>
                {c.nombre[idioma]}
                <small>{c.sub[idioma]}</small>
              </h3>
              <div className="cajas">
                {COMPONENTES.filter((d) => d.capa === c.id).map((d) => (
                  <button
                    key={d.es.nombre}
                    type="button"
                    className={`caja ${estado(d.pc)}${d.gpl ? " gpl" : ""}`}
                    aria-label={`${d[idioma].nombre}, ${d.pc} ${t.porCiento}`}
                    aria-pressed={elegido === d}
                    onClick={() => setElegido(d)}
                  >
                    <span className="n">{d[idioma].nombre}</span>
                    <span className="pc">{pc(d.pc, idioma)}</span>
                    <span className="barra" style={{ width: `${d.pc}%` }} />
                  </button>
                ))}
              </div>
            </div>
            {c.enlace ? <p className="canal-capas">{c.enlace[idioma]}</p> : null}
          </div>
        ))}
      </div>
      <div className="detalle" aria-live="polite">
        {elegido && ficha ? (
          <>
            <b>
              {ficha.nombre}: {pc(elegido.pc, idioma)}
            </b>
            . {ficha.que}
            <br />
            <span className="suave">
              {t.falta}: {ficha.falta} ({ficha.regla})
            </span>
          </>
        ) : (
          <>
            <b>{t.pulsa}</b>
            {t.pulsaResto}
          </>
        )}
      </div>
    </>
  );
}

"use client";

import { useRef, useState, type ReactNode } from "react";

/**
 * Pestañas accesibles (flechas, Inicio y Fin). Los paneles llegan ya pintados desde el servidor y están todos en
 * el HTML: los buscadores leen los tres ejemplos aunque solo se vea uno.
 */
export function Pestanas({ etiqueta, paneles }: { etiqueta: string; paneles: { id: string; nombre: string; contenido: ReactNode }[] }) {
  const [activa, setActiva] = useState(0);
  const botones = useRef<(HTMLButtonElement | null)[]>([]);

  function tecla(e: React.KeyboardEvent) {
    const n = paneles.length;
    const destino =
      e.key === "ArrowRight" ? (activa + 1) % n : e.key === "ArrowLeft" ? (activa + n - 1) % n : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : -1;
    if (destino < 0) return;
    e.preventDefault();
    setActiva(destino);
    botones.current[destino]?.focus();
  }

  return (
    <div className="pestanas">
      <div role="tablist" aria-label={etiqueta} className="pestanas-lista" onKeyDown={tecla}>
        {paneles.map((p, i) => (
          <button
            key={p.id}
            ref={(b) => {
              botones.current[i] = b;
            }}
            role="tab"
            id={`pestana-${p.id}`}
            aria-controls={`panel-${p.id}`}
            aria-selected={i === activa}
            tabIndex={i === activa ? 0 : -1}
            onClick={() => setActiva(i)}
          >
            {p.nombre}
          </button>
        ))}
      </div>
      {paneles.map((p, i) => (
        <div key={p.id} role="tabpanel" id={`panel-${p.id}`} aria-labelledby={`pestana-${p.id}`} hidden={i !== activa} className="pestanas-panel">
          {p.contenido}
        </div>
      ))}
    </div>
  );
}

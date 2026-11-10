import type { ReactNode } from "react";

/**
 * Una ventana del Workbench 3 (las piezas de `retro`: barra azul, cierre y profundidad) con un cuerpo que sigue el
 * tema claro u oscuro de la página, para el diagrama y la tabla.
 */
export function Marco({ titulo, children, className = "" }: { titulo: string; children: ReactNode; className?: string }) {
  return (
    <div className={`wb-ventana marco ${className}`}>
      <div className="wb-ventana-barra">
        <span className="wb-cierre" aria-hidden="true" />
        <span className="wb-ventana-titulo">{titulo}</span>
        <span className="wb-profundidad" aria-hidden="true" />
      </div>
      <div className="marco-cuerpo">{children}</div>
    </div>
  );
}

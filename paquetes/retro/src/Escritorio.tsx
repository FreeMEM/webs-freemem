"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type IconoEscritorio = { id: string; nombre: string; imagen: string; x: number; y: number; ancho: number; alto: number };

/** Una ventana de cajón abierta en el escritorio, con sus iconos dentro; se arrastra por la barra. */
export type VentanaCajon = {
  titulo: string;
  x: number;
  y: number;
  ancho: number;
  alto: number;
  iconos: { nombre: string; imagen: string; ancho: number; alto: number }[];
};

/** Ancho y alto lógicos del escritorio: se escala entero al hueco que tenga, como una pantalla de verdad. */
const ANCHO = 960;
const ALTO = 600;

/**
 * Un escritorio de Workbench 3 en HTML: barra de la pantalla, fondo de pantalla, iconos que se arrastran y, por
 * debajo de ellos, lo que se pinte en el fondo (`fondo`, una función que recibe cuántas veces se ha movido algo).
 * Los iconos quedan siempre por encima: es lo que hace Trasfondo en el Amiga.
 */
export function Escritorio({
  imagen,
  iconos,
  fondo,
  titulo = "Workbench Screen",
  aviso,
  ventana,
}: {
  imagen: string;
  iconos: IconoEscritorio[];
  ventana?: VentanaCajon;
  fondo?: (actividad: number) => ReactNode;
  titulo?: string;
  aviso?: string;
}) {
  const marco = useRef<HTMLDivElement>(null);
  const [escala, setEscala] = useState(1);
  const [sitios, setSitios] = useState<Record<string, { x: number; y: number }>>(() => ({
    ...Object.fromEntries(iconos.map((i) => [i.id, { x: i.x, y: i.y }])),
    ...(ventana ? { "@ventana": { x: ventana.x, y: ventana.y } } : {}),
  }));
  const [elegido, setElegido] = useState<string | null>(null);
  const [actividad, setActividad] = useState(0);
  const arrastre = useRef<{ id: string; dx: number; dy: number } | null>(null);

  useEffect(() => {
    const el = marco.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setEscala(e.contentRect.width / ANCHO));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const empezar = useCallback(
    (id: string) => (ev: React.PointerEvent) => {
      ev.preventDefault();
      (ev.currentTarget as HTMLElement).setPointerCapture(ev.pointerId);
      const s = sitios[id];
      arrastre.current = { id, dx: ev.clientX / escala - s.x, dy: ev.clientY / escala - s.y };
      setElegido(id);
    },
    [sitios, escala],
  );

  const mover = useCallback(
    (ev: React.PointerEvent) => {
      const a = arrastre.current;
      if (!a) return;
      const x = Math.max(0, Math.min(ANCHO - 60, ev.clientX / escala - a.dx));
      const y = Math.max(22, Math.min(ALTO - 50, ev.clientY / escala - a.dy));
      setSitios((s) => ({ ...s, [a.id]: { x, y } }));
      setActividad((n) => n + 1);
    },
    [escala],
  );

  const soltar = useCallback(() => {
    arrastre.current = null;
  }, []);

  // con el teclado: el icono elegido se mueve con las flechas
  const tecla = (id: string) => (ev: React.KeyboardEvent) => {
    const paso = ev.shiftKey ? 40 : 10;
    const d = { ArrowLeft: [-paso, 0], ArrowRight: [paso, 0], ArrowUp: [0, -paso], ArrowDown: [0, paso] }[ev.key];
    if (!d) return;
    ev.preventDefault();
    setSitios((s) => ({ ...s, [id]: { x: Math.max(0, Math.min(ANCHO - 60, s[id].x + d[0])), y: Math.max(22, Math.min(ALTO - 50, s[id].y + d[1])) } }));
    setActividad((n) => n + 1);
  };

  return (
    <div className="escritorio-marco" ref={marco} style={{ height: ALTO * escala }}>
      <div
        className="escritorio"
        style={{ width: ANCHO, height: ALTO, transform: `scale(${escala})`, backgroundImage: `url(${imagen})` }}
        onPointerMove={mover}
        onPointerUp={soltar}
        onPointerDown={() => setElegido(null)}
      >
        <div className="wb-barra-pantalla">
          <span>{titulo}</span>
          <span className="wb-profundidad" aria-hidden="true" />
        </div>
        <div className="escritorio-fondo">{fondo?.(actividad)}</div>
        {ventana && (
          <div
            className="wb-ventana escritorio-ventana"
            style={{ left: sitios["@ventana"].x, top: sitios["@ventana"].y, width: ventana.ancho, height: ventana.alto }}
          >
            <div
              className="wb-ventana-barra"
              onPointerDown={(ev) => {
                ev.stopPropagation();
                empezar("@ventana")(ev);
              }}
            >
              <span className="wb-cierre" aria-hidden="true" />
              <span className="wb-ventana-titulo">{ventana.titulo}</span>
              <span className="wb-profundidad" aria-hidden="true" />
            </div>
            <div className="escritorio-cajon">
              {ventana.iconos.map((i) => (
                <span className="wb-icono-quieto" key={i.nombre}>
                  <img src={i.imagen} width={i.ancho} height={i.alto} alt="" draggable={false} />
                  <span>{i.nombre}</span>
                </span>
              ))}
            </div>
          </div>
        )}
        {iconos.map((i) => (
          <button
            key={i.id}
            type="button"
            className={`wb-icono${elegido === i.id ? " elegido" : ""}`}
            style={{ left: sitios[i.id].x, top: sitios[i.id].y }}
            onPointerDown={(ev) => {
              ev.stopPropagation();
              empezar(i.id)(ev);
            }}
            onKeyDown={tecla(i.id)}
            onFocus={() => setElegido(i.id)}
            aria-label={`${i.nombre}: icono que puedes mover`}
          >
            <img src={i.imagen} width={i.ancho} height={i.alto} alt="" draggable={false} />
            <span>{i.nombre}</span>
          </button>
        ))}
      </div>
      {aviso && <p className="escritorio-aviso">{aviso}</p>}
    </div>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent as EventoPuntero, type ReactNode } from "react";

/** Un marco de ventana del Workbench 3 (barra con su título y botones) alrededor de una imagen o de lo que sea. */
export function VentanaWB({ titulo, children, className = "" }: { titulo: string; children: ReactNode; className?: string }) {
  return (
    <figure className={`wb-ventana ${className}`}>
      <div className="wb-ventana-barra">
        <span className="wb-cierre" aria-hidden="true" />
        <span className="wb-ventana-titulo">{titulo}</span>
        <span className="wb-profundidad" aria-hidden="true" />
      </div>
      <div className="wb-ventana-cuerpo">{children}</div>
    </figure>
  );
}

/**
 * Una ventana del Workbench 3 con su barra de desplazamiento en el borde derecho: el deslizador, las flechas de
 * arriba y abajo y el gadget de tamaño. El contenido se desplaza de forma nativa (rueda, dedo, teclado) y la barra
 * del navegador se oculta; la del Workbench la sigue y también la mueve.
 */
export function VentanaDesplazable({ titulo, children, className = "" }: { titulo: string; children: ReactNode; className?: string }) {
  const contenido = useRef<HTMLDivElement>(null);
  const pista = useRef<HTMLDivElement>(null);
  const [mando, setMando] = useState({ arriba: 0, alto: 1 });
  const arrastre = useRef<{ y: number; desde: number } | null>(null);
  const repetir = useRef<ReturnType<typeof setInterval> | null>(null);

  const medir = useCallback(() => {
    const c = contenido.current;
    if (!c || !c.scrollHeight) return;
    setMando({ arriba: c.scrollTop / c.scrollHeight, alto: Math.min(1, c.clientHeight / c.scrollHeight) });
  }, []);

  useEffect(() => {
    const c = contenido.current;
    if (!c) return;
    medir();
    const observador = new ResizeObserver(medir);
    observador.observe(c);
    if (c.firstElementChild) observador.observe(c.firstElementChild);
    return () => observador.disconnect();
  }, [medir]);

  useEffect(() => () => parar(), []);

  function parar() {
    if (repetir.current) clearInterval(repetir.current);
    repetir.current = null;
  }

  /** Las flechas: un paso al pulsar y, si se mantienen, sigue desplazando. */
  function flecha(sentido: number) {
    const paso = () => contenido.current?.scrollBy({ top: sentido * 40 });
    paso();
    parar();
    repetir.current = setInterval(paso, 90);
  }

  /** Un clic en la pista, encima o debajo del mando, pasa una página. */
  function pulsarPista(e: EventoPuntero<HTMLDivElement>) {
    const c = contenido.current;
    const p = pista.current;
    if (!c || !p || e.target !== p) return;
    const y = (e.clientY - p.getBoundingClientRect().top) / p.clientHeight;
    c.scrollBy({ top: (y < mando.arriba ? -1 : 1) * c.clientHeight * 0.9 });
  }

  function cogerMando(e: EventoPuntero<HTMLSpanElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    arrastre.current = { y: e.clientY, desde: contenido.current?.scrollTop ?? 0 };
  }

  function moverMando(e: EventoPuntero<HTMLSpanElement>) {
    const c = contenido.current;
    const p = pista.current;
    if (!arrastre.current || !c || !p) return;
    c.scrollTop = arrastre.current.desde + ((e.clientY - arrastre.current.y) / p.clientHeight) * c.scrollHeight;
  }

  return (
    <figure className={`wb-ventana wb-desplazable ${className}`}>
      <div className="wb-ventana-barra">
        <span className="wb-cierre" aria-hidden="true" />
        <span className="wb-ventana-titulo">{titulo}</span>
        <span className="wb-profundidad" aria-hidden="true" />
      </div>
      <div className="wb-desplazable-marco">
        <div className="wb-desplazable-contenido" ref={contenido} onScroll={medir} tabIndex={0} aria-label={titulo}>
          {children}
        </div>
        <div className="wb-borde-derecho" aria-hidden="true">
          <div className="wb-pista" ref={pista} onPointerDown={pulsarPista}>
            <span
              className="wb-mando"
              style={{ top: `${mando.arriba * 100}%`, height: `${mando.alto * 100}%` }}
              onPointerDown={cogerMando}
              onPointerMove={moverMando}
              onPointerUp={() => (arrastre.current = null)}
              onPointerCancel={() => (arrastre.current = null)}
            />
          </div>
          <span className="wb-flecha wb-flecha-arriba" onPointerDown={() => flecha(-1)} onPointerUp={parar} onPointerLeave={parar} />
          <span className="wb-flecha wb-flecha-abajo" onPointerDown={() => flecha(1)} onPointerUp={parar} onPointerLeave={parar} />
          <span className="wb-tamano" />
        </div>
      </div>
    </figure>
  );
}

/**
 * Un vídeo de YouTube que no carga nada de YouTube hasta que se pulsa (ni cookies ni rastreo antes de querer
 * verlo): la portada y un botón; al pulsar, el reproductor de youtube-nocookie.com.
 */
export function VideoYouTube({ id, titulo, portada, textoBoton }: { id: string; titulo: string; portada: string; textoBoton: string }) {
  const [activo, setActivo] = useState(false);
  if (activo) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button type="button" className="video video-portada" onClick={() => setActivo(true)} aria-label={`${textoBoton}: ${titulo}`}>
      <img src={portada} alt="" loading="lazy" />
      <span className="video-boton">{textoBoton}</span>
    </button>
  );
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Estrellas que salen del centro como en un salto a la velocidad de la luz: al cargar la página van muy deprisa
 * y frenan hasta un paseo tranquilo. El ratón mueve un poco el punto de fuga. Canvas 2D; se para cuando no se ve
 * y queda quieto si el sistema pide menos movimiento.
 */
export function Estrellas() {
  const lienzo = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = lienzo.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ancho = 0;
    let alto = 0;
    const ajustar = () => {
      const r = c.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ancho = r.width;
      alto = r.height;
      c.width = Math.round(r.width * dpr);
      c.height = Math.round(r.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    ajustar();
    const ro = new ResizeObserver(ajustar);
    ro.observe(c);

    // cada estrella: posición en el espacio (x, y en -1..1) y profundidad z (1 lejos, 0 aquí)
    const N = 700;
    const estrellas = Array.from({ length: N }, () => ({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random(), pz: 0 }));
    estrellas.forEach((e) => (e.pz = e.z));

    let fx = 0.5;
    let fy = 0.42;
    let objx = fx;
    let objy = fy;
    const raton = (ev: PointerEvent) => {
      const r = c.getBoundingClientRect();
      objx = 0.5 + ((ev.clientX - r.left) / r.width - 0.5) * 0.18;
      objy = 0.42 + ((ev.clientY - r.top) / r.height - 0.5) * 0.18;
    };
    window.addEventListener("pointermove", raton, { passive: true });

    const inicio = performance.now();
    let visible = true;
    let marco = 0;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !quieto) marco = requestAnimationFrame(paso);
    });
    io.observe(c);

    function velocidad(t: number) {
      // del salto (0,045) al paseo (0,0016) en unos 2,4 s
      const k = Math.min(1, t / 2400);
      const suave = 1 - Math.pow(1 - k, 3);
      return 0.045 + (0.0016 - 0.045) * suave;
    }

    function dibujar(v: number) {
      // con el salto, el rastro dura más
      ctx!.fillStyle = `rgba(11, 23, 54, ${v > 0.01 ? 0.3 : 0.6})`;
      ctx!.fillRect(0, 0, ancho, alto);
      const cx = fx * ancho;
      const cy = fy * alto;
      const escala = Math.max(ancho, alto) * 0.6;
      for (const e of estrellas) {
        const x = cx + (e.x / e.z) * escala;
        const y = cy + (e.y / e.z) * escala;
        const px = cx + (e.x / e.pz) * escala;
        const py = cy + (e.y / e.pz) * escala;
        const brillo = Math.min(1, 0.3 + (1 - e.z) * 1.1);
        ctx!.strokeStyle = e.z < 0.25 ? `rgba(232, 236, 248, ${brillo})` : `rgba(120, 150, 255, ${brillo})`;
        ctx!.lineWidth = Math.max(0.9, (1 - e.z) * 2.6);
        ctx!.beginPath();
        ctx!.moveTo(px, py);
        ctx!.lineTo(x + (v < 0.003 ? 1 : 0), y);
        ctx!.stroke();
      }
    }

    function avanzar(v: number) {
      for (const e of estrellas) {
        e.pz = e.z;
        e.z -= v;
        if (e.z <= 0.02) {
          e.x = Math.random() * 2 - 1;
          e.y = Math.random() * 2 - 1;
          e.z = 1;
          e.pz = 1;
        }
      }
    }

    function paso(ahora: number) {
      if (!visible) return;
      fx += (objx - fx) * 0.04;
      fy += (objy - fy) * 0.04;
      const v = velocidad(ahora - inicio);
      avanzar(v);
      dibujar(v);
      marco = requestAnimationFrame(paso);
    }

    if (quieto) {
      ctx.fillStyle = "#0b1736";
      ctx.fillRect(0, 0, ancho, alto);
      dibujar(0.0016);
    } else {
      marco = requestAnimationFrame(paso);
    }
    return () => {
      cancelAnimationFrame(marco);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", raton);
    };
  }, []);

  return <canvas ref={lienzo} className="estrellas" aria-hidden="true" />;
}

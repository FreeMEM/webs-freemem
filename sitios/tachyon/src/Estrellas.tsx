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

    // Cuatro brillos según lo cerca que estén, cada uno con su color y su grosor ya hechos: un trazo por brillo y
    // fotograma (no uno por estrella), y ningún texto de color nuevo. Así va bien también en un navegador lento
    // (Tachyon, en un 68k).
    const COLOR = ["rgba(120,150,255,0.45)", "rgba(120,150,255,0.7)", "rgba(120,150,255,1)", "rgba(232,236,248,1)"];
    const GROSOR = [0.9, 1.3, 1.9, 2.4];
    const VELO_SALTO = "rgba(11,23,54,0.3)";
    const VELO_PASEO = "rgba(11,23,54,0.6)";
    let activas = N;                   // las que se mueven: menos si el navegador no llega
    let media = 0;                     // lo que tarda un fotograma (ms), suavizado

    function nivel(z: number) {
      return z < 0.25 ? 3 : z < 0.5 ? 2 : z < 0.75 ? 1 : 0;
    }

    function dibujar(v: number) {
      ctx!.fillStyle = v > 0.01 ? VELO_SALTO : VELO_PASEO;   // con el salto, el rastro dura más
      ctx!.fillRect(0, 0, ancho, alto);
      const cx = fx * ancho;
      const cy = fy * alto;
      const escala = Math.max(ancho, alto) * 0.6;
      const punto = v < 0.003 ? 1 : 0;
      for (let n = 0; n < 4; n++) {
        ctx!.strokeStyle = COLOR[n];
        ctx!.lineWidth = GROSOR[n];
        ctx!.beginPath();
        for (let i = 0; i < activas; i++) {
          const e = estrellas[i];
          if (nivel(e.z) !== n) continue;
          ctx!.moveTo(cx + (e.x / e.pz) * escala, cy + (e.y / e.pz) * escala);
          ctx!.lineTo(cx + (e.x / e.z) * escala + punto, cy + (e.y / e.z) * escala);
        }
        ctx!.stroke();
      }
    }

    function avanzar(v: number) {
      for (let i = 0; i < activas; i++) {
        const e = estrellas[i];
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
      const t0 = performance.now();
      fx += (objx - fx) * 0.04;
      fy += (objy - fy) * 0.04;
      const v = velocidad(ahora - inicio);
      avanzar(v);
      dibujar(v);
      // si un fotograma pasa de 40 ms, menos estrellas (nunca menos de 300: con menos el cielo se ve vacío);
      // si sobra tiempo, vuelven. A 10-12 fotogramas por segundo, en un Amiga, se ve bien
      media = media * 0.8 + (performance.now() - t0) * 0.2;
      if (media > 40 && activas > 300) activas = Math.max(300, Math.floor(activas * 0.85));
      else if (media < 6 && activas < N) activas = Math.min(N, activas + 20);
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

"use client";

import { useEffect, useRef } from "react";

/**
 * La bola Boing (la demo del Amiga de 1984): esfera de cuadros rojos y blancos, inclinada, que gira y bota
 * entre la pared y el suelo de una rejilla violeta, con su sombra. Canvas 2D, sin librerías. Se para cuando
 * no se ve y queda quieta si el sistema pide menos movimiento.
 */
export function BolaBoing({ etiqueta }: { etiqueta: string }) {
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

    const LAT = 8;
    const LON = 16;
    const inclinacion = (-16 * Math.PI) / 180;
    let fase = 0;
    let x = 0.3;
    let vx = 0.0042;
    let y = 0.2;
    let vy = 0;
    let visible = true;
    let marco = 0;

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !quieto) marco = requestAnimationFrame(paso);
    });
    io.observe(c);

    function rejilla(suelo: number) {
      ctx!.strokeStyle = "#a020a8";
      ctx!.lineWidth = 1.5;
      const paso = ancho / 14;
      for (let gx = paso / 2; gx < ancho; gx += paso) {
        ctx!.beginPath();
        ctx!.moveTo(gx, alto * 0.06);
        ctx!.lineTo(gx, suelo);
        ctx!.stroke();
      }
      for (let gy = alto * 0.06; gy <= suelo + 0.5; gy += paso) {
        ctx!.beginPath();
        ctx!.moveTo(paso / 2, gy);
        ctx!.lineTo(ancho - paso / 2, gy);
        ctx!.stroke();
      }
      // el suelo, en perspectiva
      const fondo = alto * 0.98;
      for (let i = 0; i <= 13; i++) {
        const gx = paso / 2 + i * paso;
        ctx!.beginPath();
        ctx!.moveTo(gx, suelo);
        ctx!.lineTo(ancho / 2 + (gx - ancho / 2) * 1.35, fondo);
        ctx!.stroke();
      }
      for (let k = 1; k <= 3; k++) {
        const t = k / 3;
        const yy = suelo + (fondo - suelo) * t;
        const ex = (ancho / 2 - paso / 2) * (1 + 0.35 * t);
        ctx!.beginPath();
        ctx!.moveTo(ancho / 2 - ex, yy);
        ctx!.lineTo(ancho / 2 + ex, yy);
        ctx!.stroke();
      }
    }

    function punto(lat: number, lon: number, r: number, cx: number, cy: number) {
      const th = (lat / LAT) * Math.PI - Math.PI / 2;
      const ph = (lon / LON) * Math.PI * 2 + fase;
      let px = Math.cos(th) * Math.sin(ph);
      let py = Math.sin(th);
      const pz = Math.cos(th) * Math.cos(ph);
      const rx = px * Math.cos(inclinacion) - py * Math.sin(inclinacion);
      const ry = px * Math.sin(inclinacion) + py * Math.cos(inclinacion);
      px = rx;
      py = ry;
      return [cx + px * r, cy + py * r, pz] as const;
    }

    function dibujar() {
      ctx!.fillStyle = "#aaaaaa";
      ctx!.fillRect(0, 0, ancho, alto);
      const suelo = alto * 0.8;
      rejilla(suelo);
      const r = Math.min(ancho, alto) * 0.17;
      const cx = r + x * (ancho - 2 * r);
      const cy = r + alto * 0.06 + y * (suelo - 2 * r - alto * 0.06);
      // la sombra, a la derecha y abajo, en la pared
      ctx!.fillStyle = "rgba(60, 60, 60, 0.55)";
      ctx!.beginPath();
      ctx!.arc(cx + r * 0.42, cy + r * 0.18, r, 0, Math.PI * 2);
      ctx!.fill();
      for (let i = 0; i < LAT; i++) {
        for (let j = 0; j < LON; j++) {
          const a = punto(i, j, r, cx, cy);
          const b = punto(i + 1, j, r, cx, cy);
          const cc = punto(i + 1, j + 1, r, cx, cy);
          const d = punto(i, j + 1, r, cx, cy);
          if (a[2] + b[2] + cc[2] + d[2] < 0) continue;
          ctx!.fillStyle = (i + j) % 2 ? "#e01e1e" : "#f4f4f4";
          ctx!.beginPath();
          ctx!.moveTo(a[0], a[1]);
          ctx!.lineTo(b[0], b[1]);
          ctx!.lineTo(cc[0], cc[1]);
          ctx!.lineTo(d[0], d[1]);
          ctx!.closePath();
          ctx!.fill();
          ctx!.strokeStyle = ctx!.fillStyle;
          ctx!.lineWidth = 0.6;
          ctx!.stroke();
        }
      }
    }

    function paso() {
      if (!visible) return;
      fase += vx > 0 ? -0.045 : 0.045;
      x += vx;
      if (x < 0 || x > 1) {
        vx = -vx;
        x = Math.max(0, Math.min(1, x));
      }
      vy += 0.0016;
      y += vy;
      if (y > 1) {
        y = 1;
        vy = -0.047;
      }
      dibujar();
      marco = requestAnimationFrame(paso);
    }

    dibujar();
    if (!quieto) marco = requestAnimationFrame(paso);
    return () => {
      cancelAnimationFrame(marco);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={lienzo} className="bola-boing" role="img" aria-label={etiqueta} />;
}

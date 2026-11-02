"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Chispa = { x: number; y: number; vx: number; vy: number; vida: number; dura: number };

/**
 * La portada de Forja: brasas que suben despacio y, al pulsar (en el yunque o en cualquier hueco de la portada),
 * un golpe de chispas que saltan y caen. Canvas 2D; se para cuando no se ve y no se mueve nada si el sistema pide
 * menos movimiento.
 */
export function Fragua({ children, etiqueta }: { children: ReactNode; etiqueta: string }) {
  const zona = useRef<HTMLElement>(null);
  const lienzo = useRef<HTMLCanvasElement>(null);
  const golpe = useRef<(x: number, y: number) => void>(() => {});

  useEffect(() => {
    const c = lienzo.current;
    const z = zona.current;
    if (!c || !z) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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

    const chispas: Chispa[] = [];
    const MAX = 500;

    golpe.current = (x, y) => {
      for (let i = 0; i < 70 && chispas.length < MAX; i++) {
        const angulo = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.1;
        const fuerza = 2 + Math.random() * 7;
        const dura = 30 + Math.random() * 50;
        chispas.push({ x, y, vx: Math.cos(angulo) * fuerza, vy: Math.sin(angulo) * fuerza, vida: dura, dura });
      }
    };

    // las brasas: suben desde abajo, despacio y oscilando
    function brasa() {
      if (chispas.length >= MAX) return;
      const dura = 160 + Math.random() * 160;
      chispas.push({ x: Math.random() * ancho, y: alto + 4, vx: (Math.random() - 0.5) * 0.4, vy: -0.4 - Math.random() * 0.8, vida: dura, dura });
    }

    // del blanco amarillo al rojo apagado según se enfría; un color por tramo, no uno por chispa
    const COLORES = ["#fff3c4", "#ffc850", "#ff8a1f", "#d4421a", "#6e1d0c"];

    let visible = true;
    let marco = 0;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) marco = requestAnimationFrame(paso);
    });
    io.observe(c);

    function paso() {
      if (!visible) return;
      if (Math.random() < 0.25) brasa();
      ctx!.clearRect(0, 0, ancho, alto);
      const tramos: Chispa[][] = COLORES.map(() => []);
      for (let i = chispas.length - 1; i >= 0; i--) {
        const s = chispas[i];
        const golpeada = s.dura < 100;
        s.x += s.vx;
        s.y += s.vy;
        if (golpeada) {
          s.vy += 0.22;
          s.vx *= 0.985;
        } else {
          s.vx += (Math.random() - 0.5) * 0.06;
        }
        s.vida -= 1;
        if (s.vida <= 0 || s.y > alto + 10 || s.x < -10 || s.x > ancho + 10) {
          chispas.splice(i, 1);
          continue;
        }
        const t = 1 - s.vida / s.dura;
        tramos[Math.min(COLORES.length - 1, Math.floor(t * COLORES.length))].push(s);
      }
      tramos.forEach((lista, n) => {
        if (!lista.length) return;
        ctx!.strokeStyle = COLORES[n];
        ctx!.lineWidth = n < 2 ? 2 : 1.5;
        ctx!.beginPath();
        for (const s of lista) {
          ctx!.moveTo(s.x, s.y);
          ctx!.lineTo(s.x - s.vx * 1.6, s.y - s.vy * 1.6);
        }
        ctx!.stroke();
      });
      marco = requestAnimationFrame(paso);
    }
    marco = requestAnimationFrame(paso);

    // un primer golpe en el yunque al llegar
    const primero = setTimeout(() => {
      const y = z.querySelector(".yunque")?.getBoundingClientRect();
      const r = c.getBoundingClientRect();
      if (y) golpe.current(y.left + y.width / 2 - r.left, y.top + y.height * 0.35 - r.top);
    }, 700);

    return () => {
      clearTimeout(primero);
      cancelAnimationFrame(marco);
      ro.disconnect();
      io.disconnect();
      golpe.current = () => {};
    };
  }, []);

  function pulsar(e: React.PointerEvent<HTMLElement>) {
    const destino = e.target as HTMLElement;
    if (destino.closest("a, .ventana-forja")) return;
    const r = lienzo.current?.getBoundingClientRect();
    if (!r) return;
    golpe.current(e.clientX - r.left, e.clientY - r.top);
  }

  return (
    <section className="portada" ref={zona} onPointerDown={pulsar} aria-label={etiqueta}>
      <canvas ref={lienzo} className="chispas" aria-hidden="true" />
      <div className="portada-rejilla">{children}</div>
    </section>
  );
}

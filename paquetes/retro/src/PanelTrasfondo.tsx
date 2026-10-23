"use client";

import { useEffect, useRef, useState } from "react";

/** Lo que enseña el panel, como el tooltype MOSTRAR de Trasfondo. */
export type Seccion = "cpu" | "memoria" | "tareas" | "discos" | "red";

type Tarea = { nombre: string; carga: number };

const HISTORIA = 60;
const TAREAS_BASE = ["Workbench", "input.device", "trasfondo", "ramlib", "IPrefs", "BarClock", "trackdisk.device"];
const DISCOS = [
  { nombre: "System", usado: 0.92, tam: "276 MB" },
  { nombre: "Work", usado: 0.51, tam: "4,7 GB" },
  { nombre: "Juegos", usado: 0.78, tam: "2,0 GB" },
];

function porCiento(milesimas: number) {
  return `${Math.floor(milesimas / 10)},${Math.floor(milesimas % 10)} %`;
}

function velocidad(bytes: number) {
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1).replace(".", ",")} KB/s`;
  return `${Math.round(bytes)} B/s`;
}

/**
 * El panel de Trasfondo, simulado: los mismos datos que pinta el de verdad (CPU con su último minuto, memoria,
 * tareas, discos y red), con los mismos colores. `actividad` sube cada vez que alguien mueve algo en el escritorio:
 * como en el Amiga, arrastrar iconos le cuesta CPU al Workbench.
 */
export function PanelTrasfondo({
  secciones = ["cpu", "memoria", "tareas", "discos", "red"],
  tareas = 6,
  actividad = 0,
  quieto = false,
}: {
  secciones?: Seccion[];
  tareas?: number;
  actividad?: number;
  quieto?: boolean;
}) {
  // un minuto de historia inventada pero creíble: casi nada, y hace poco un trabajo que se comió la CPU
  const [historia, setHistoria] = useState<number[]>(() =>
    Array.from({ length: 48 }, (_, i) => (i > 30 && i < 42 ? 820 + ((i * 53) % 120) : 20 + ((i * 37) % 40))),
  );
  const [lista, setLista] = useState<Tarea[]>(() => TAREAS_BASE.map((nombre, i) => ({ nombre, carga: 9 - i })));
  const [memoria, setMemoria] = useState({ chip: 1946, fast: 245 });
  const [red, setRed] = useState({ entra: 1200, sale: 300, senal: -54 });
  const trabajo = useRef<{ nombre: string; hasta: number; carga: number } | null>(null);
  const empuje = useRef(0);
  const proximo = useRef(Date.now() + 3500);       // cuándo empieza el próximo trabajo
  const ultimaActividad = useRef(actividad);

  useEffect(() => {
    if (actividad !== ultimaActividad.current) {
      ultimaActividad.current = actividad;
      empuje.current = Math.min(280, empuje.current + 60);   // arrastrar le cuesta al Workbench, pero no tanto
    }
  }, [actividad]);

  useEffect(() => {
    if (quieto) return;
    const t = window.setInterval(() => {
      const ahora = Date.now();
      // de vez en cuando, un trabajo de verdad (un List de todo el disco, como en el vídeo) que se come la CPU
      if (!trabajo.current && ahora > proximo.current) {
        const nombre = ["C:List", "C:Copy", "LhA", "MultiView"][Math.floor(Math.random() * 4)];
        trabajo.current = { nombre, hasta: ahora + 6000 + Math.random() * 6000, carga: 600 + Math.random() * 250 };
      }
      if (trabajo.current && ahora > trabajo.current.hasta) {
        trabajo.current = null;
        proximo.current = ahora + 8000 + Math.random() * 14000;
      }
      const workbench = 2 + Math.random() * 6 + empuje.current;
      empuje.current *= 0.55;
      const nuevas: Tarea[] = TAREAS_BASE.map((nombre) => ({
        nombre,
        carga: nombre === "Workbench" ? workbench : Math.random() * (nombre === "trasfondo" ? 9 : 4),
      }));
      if (trabajo.current) nuevas.push({ nombre: trabajo.current.nombre, carga: trabajo.current.carga * (0.9 + Math.random() * 0.2) });
      nuevas.sort((a, b) => b.carga - a.carga);
      const total = Math.min(1000, nuevas.reduce((s, x) => s + x.carga, 0));
      setLista(nuevas);
      setHistoria((h) => [...h.slice(-(HISTORIA - 1)), total]);
      setMemoria((m) => ({
        chip: trabajo.current ? 1870 + Math.round(Math.random() * 40) : 1946 - Math.round(Math.random() * 6),
        fast: m.fast,
      }));
      setRed({
        entra: trabajo.current ? 900 + Math.random() * 400 : 40 + Math.random() * 1800,
        sale: 20 + Math.random() * 400,
        senal: -52 - Math.round(Math.random() * 5),
      });
    }, 1000);
    return () => window.clearInterval(t);
  }, [quieto]);

  const total = historia[historia.length - 1] ?? 0;
  const ver = (s: Seccion) => secciones.includes(s);

  return (
    <div className="panel-trasfondo" aria-label="Panel de Trasfondo (simulación)">
      <div className="pt-cabecera">
        <strong>Trasfondo</strong>
        <strong>CPU {porCiento(total)}</strong>
      </div>
      {ver("cpu") && (
        <div className="pt-grafica" aria-hidden="true">
          {historia.map((v, i) => (
            <span key={i} style={{ height: `${Math.max(0, v / 10)}%`, left: `${(100 * (HISTORIA - historia.length + i)) / HISTORIA}%` }} />
          ))}
        </div>
      )}
      {ver("memoria") && (
        <div className="pt-bloque">
          <div className="pt-fila"><span>Chip libre</span><span>{memoria.chip} KB</span></div>
          <div className="pt-fila"><span>Fast libre</span><span>{memoria.fast} MB</span></div>
        </div>
      )}
      {ver("tareas") && (
        <div className="pt-bloque">
          {lista.slice(0, tareas).map((t) => (
            <div className="pt-fila pt-barra" key={t.nombre}>
              <i className="pt-cpu" style={{ width: `${Math.min(100, t.carga / 10)}%` }} />
              <span>{t.nombre}</span>
              <span>{porCiento(t.carga)}</span>
            </div>
          ))}
        </div>
      )}
      {ver("discos") && (
        <div className="pt-bloque">
          {DISCOS.map((d) => (
            <div className="pt-fila pt-barra" key={d.nombre}>
              <i className="pt-disco" style={{ width: `${d.usado * 100}%` }} />
              <span>{d.nombre}</span>
              <span>{Math.round(d.usado * 100)} % de {d.tam}</span>
            </div>
          ))}
        </div>
      )}
      {ver("red") && (
        <div className="pt-bloque">
          <div className="pt-fila pt-cabeza-red"><span>Red</span><span><em>entra</em><em>sale</em></span></div>
          <div className="pt-fila"><span>wifipi</span><span><em>{velocidad(red.entra)}</em><em>{velocidad(red.sale)}</em></span></div>
          <div className="pt-fila pt-barra">
            <i className="pt-cpu" style={{ width: `${((red.senal + 90) * 100) / 60}%` }} />
            <span>&nbsp;&nbsp;WiFi</span>
            <span>{red.senal} dBm, buena</span>
          </div>
        </div>
      )}
    </div>
  );
}

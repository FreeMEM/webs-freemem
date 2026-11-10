"use client";

import { useEffect, useRef, useState } from "react";
import type { Idioma } from "retro";

import { CONTENIDO } from "./contenido";
import {
  BANDAS,
  ENLACES,
  ESCENARIOS,
  GRUPOS,
  KPUNTO,
  KSEC,
  KY,
  NODOS,
  REPARTO,
  type IdNodo,
  type IdPunto,
  type Paso,
} from "./datos";
import { Marco } from "./Marco";

const pos = (id: IdPunto): [number, number] => (id in NODOS ? [NODOS[id as IdNodo].x, NODOS[id as IdNodo].y] : KPUNTO[id as keyof typeof KPUNTO]);
const enKernel = (p: Paso) => p.de in KPUNTO || p.a in KPUNTO;

/** El camino de un paso: un mensaje por un canal baja al kernel ("Llaves y canales") y vuelve a subir. */
function rutaEntre(p: Paso) {
  const [x1, y1] = pos(p.de);
  const [x2, y2] = pos(p.a);
  if (p.tipo === "canal" && !enKernel(p)) {
    const kx = KPUNTO.kcan[0];
    return `M${x1},${y1} C${x1},${KY} ${kx},${KY} ${kx},${KY} S${x2},${KY} ${x2},${y2}`;
  }
  if (p.tipo === "llamada") return `M${x1},${y1} L${x2},${y2}`;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - (Math.abs(x2 - x1) > 40 ? 30 : 0);
  return `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;
}

/** Las partes del kernel que se encienden en un paso. */
function kernelActivo(p: Paso) {
  const toca = (k: IdPunto) => p.de === k || p.a === k;
  const irq = toca("kirq");
  const otra = p.tipo === "irq" ? null : p.tipo === "canal" || toca("kcan") ? "can" : toca("kplan") ? "plan" : null;
  return { irq, otra };
}

const VELOCIDADES = [1.6, 1, 0.55] as const;

/**
 * El diagrama de DashOS con sus situaciones animadas: cada paso dibuja su ruta y un punto que la recorre (o un
 * pulso, si el trabajo es dentro de una pieza). Con "movimiento reducido", el punto aparece ya en su sitio.
 */
export function EnMarcha({ idioma }: { idioma: Idioma }) {
  const t = CONTENIDO[idioma].enMarcha;
  const [esc, setEsc] = useState(0);
  const [paso, setPaso] = useState(0);
  const [vuelta, setVuelta] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [vel, setVel] = useState<number>(1);

  const sigue = useRef(false);
  const velActual = useRef(1);
  const ruta = useRef<SVGPathElement>(null);
  const punto = useRef<SVGCircleElement>(null);
  const anillo = useRef<SVGCircleElement>(null);
  const etiqueta = useRef<SVGTextElement>(null);
  const cruz = useRef<SVGGElement>(null);

  const escenario = ESCENARIOS[esc];
  const p = escenario.pasos[paso];
  const ultimo = escenario.pasos.length - 1;

  // Anima el paso actual; al acabar, si se está reproduciendo, espera y pasa al siguiente.
  useEffect(() => {
    const pasoAhora = ESCENARIOS[esc].pasos[paso];
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const v = velActual.current;
    let vivo = true;
    let cuadro = 0;
    let espera: ReturnType<typeof setTimeout> | undefined;

    const terminar = () => {
      if (!vivo || !sigue.current) return;
      espera = setTimeout(() => {
        if (!vivo || !sigue.current) return;
        if (paso < ESCENARIOS[esc].pasos.length - 1) setPaso(paso + 1);
        else {
          sigue.current = false;
          setReproduciendo(false);
        }
      }, 650 * velActual.current);
    };

    if (pasoAhora.tipo === "local") {
      const a = anillo.current;
      if (!a || reducir) {
        terminar();
      } else {
        const ini = performance.now();
        const dur = 900 * v;
        const f = (ahora: number) => {
          if (!vivo) return;
          const k = Math.min(1, (ahora - ini) / dur);
          a.setAttribute("r", String(30 + 26 * k));
          a.setAttribute("opacity", String(1 - k));
          if (k < 1) cuadro = requestAnimationFrame(f);
          else terminar();
        };
        cuadro = requestAnimationFrame(f);
      }
    } else {
      const r = ruta.current;
      const pt = punto.current;
      if (r && pt) {
        const largo = r.getTotalLength();
        const e = etiqueta.current;
        if (e) {
          const m = r.getPointAtLength(largo * (pasoAhora.tipo === "canal" && !enKernel(pasoAhora) ? 0.18 : 0.5));
          e.setAttribute("x", String(m.x + 10));
          e.setAttribute("y", String(m.y - 8));
          e.setAttribute("opacity", "1");
        }
        const ida = pasoAhora.tipo === "rechazo" ? 0.62 : 1;
        const ponerEn = (l: number) => {
          const q = r.getPointAtLength(Math.max(0, l));
          pt.setAttribute("cx", String(q.x));
          pt.setAttribute("cy", String(q.y));
        };
        const final = () => {
          if (pasoAhora.tipo === "rechazo" && cruz.current) {
            const q = r.getPointAtLength(largo * ida);
            cruz.current.setAttribute("transform", `translate(${q.x} ${q.y})`);
            cruz.current.setAttribute("opacity", "1");
          }
          terminar();
        };
        const trazo = pasoAhora.tipo !== "dma" && pasoAhora.tipo !== "rechazo";
        if (reducir) {
          ponerEn(largo * ida);
          final();
        } else {
          if (trazo) {
            r.style.strokeDasharray = `${largo}`;
            r.style.strokeDashoffset = `${largo}`;
          }
          const ini = performance.now();
          const dur = Math.max(700, largo * 2.2) * v;
          const f = (ahora: number) => {
            if (!vivo) return;
            const k = Math.min(1, (ahora - ini) / dur);
            const s = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
            let l = largo * ida * s;
            if (pasoAhora.tipo === "rechazo" && k > 0.75) l = largo * ida * (1 - (k - 0.75) * 2.4);
            ponerEn(l);
            if (trazo) r.style.strokeDashoffset = `${largo * (1 - s)}`;
            if (k < 1) cuadro = requestAnimationFrame(f);
            else final();
          };
          cuadro = requestAnimationFrame(f);
        }
      }
    }
    return () => {
      vivo = false;
      cancelAnimationFrame(cuadro);
      if (espera) clearTimeout(espera);
    };
  }, [esc, paso, vuelta]);

  function elegir(i: number) {
    sigue.current = false;
    setReproduciendo(false);
    setEsc(i);
    setPaso(0);
    setVuelta((n) => n + 1);
  }

  function irA(i: number) {
    sigue.current = false;
    setReproduciendo(false);
    setPaso(Math.max(0, Math.min(ultimo, i)));
    setVuelta((n) => n + 1);
  }

  function reproducirOParar() {
    if (reproduciendo) {
      sigue.current = false;
      setReproduciendo(false);
      return;
    }
    sigue.current = true;
    setReproduciendo(true);
    if (paso >= ultimo) setPaso(0);
    setVuelta((n) => n + 1);
  }

  function cambiarVelocidad(v: number) {
    velActual.current = v;
    setVel(v);
  }

  const k = kernelActivo(p);
  const activos = new Set<IdPunto>([p.de, p.a]);
  const [lx, ly] = pos(p.de);

  return (
    <div className="marcha">
      <div className="chips" role="group" aria-label={t.situaciones}>
        {ESCENARIOS.map((e, i) => (
          <button key={e.id} type="button" className="chip" aria-pressed={i === esc} onClick={() => elegir(i)}>
            {e.nombre[idioma]}
            {e.diseno ? <small>{t.diseno}</small> : null}
          </button>
        ))}
      </div>

      <div className="escena">
        <Marco titulo={t.ventana} className="lienzo-marco">
          <div className="lienzo" tabIndex={0} aria-label={t.desplazar}>
            <svg viewBox="0 0 1000 720" role="img" aria-label={t.svg}>
              {BANDAS.map((b) => (
                <text key={b.y} x={14} y={b.y + 4} className="banda-txt">
                  {b.nombre[idioma]}
                </text>
              ))}
              {GRUPOS.map((g) => (
                <g key={g.x}>
                  <rect x={g.x} y={g.y} width={g.ancho} height={g.alto} rx={10} className="grupo-caja" />
                  <text x={g.x + 12} y={g.y + 18} className="grupo-txt">
                    {g.nombre[idioma]}
                  </text>
                </g>
              ))}
              <rect x={40} y={KY - 32} width={930} height={64} rx={10} className="kernel" />
              {Object.entries(KSEC).map(([id, s]) => {
                const encendida = id === "irq" ? k.irq : k.otra === id;
                return (
                  <g key={id}>
                    <rect
                      x={s.x0}
                      y={KY - 30}
                      width={s.x1 - s.x0}
                      height={60}
                      rx={8}
                      className={`ksec${encendida ? " activo" : ""}${encendida && id === "irq" ? " irq" : ""}`}
                    />
                    <text x={(s.x0 + s.x1) / 2} y={KY + 4} className="ksec-txt">
                      {s.nombre[idioma]}
                    </text>
                  </g>
                );
              })}
              <g>
                {ENLACES.map(([a, b]) => {
                  const [x1, y1] = pos(a);
                  const [x2, y2] = pos(b);
                  return <line key={`${a}-${b}`} x1={x1} y1={y1} x2={x2} y2={y2} className="enlace" />;
                })}
                {REPARTO.map((b) => {
                  const [x1, y1] = pos("inicio");
                  const [x2, y2] = pos(b);
                  return <path key={b} d={`M${x1},${y1} Q${(x1 + x2) / 2},${Math.max(y1, y2) + 60} ${x2},${y2}`} className="enlace reparto" />;
                })}
              </g>
              {(Object.keys(NODOS) as IdNodo[]).map((id) => {
                const n = NODOS[id];
                const [nombre, sub] = n[idioma];
                const clase = `nodo ${n.estado}${activos.has(id) ? " activo" : ""}${p.tipo === "local" && p.de === id ? " pulso" : ""}`;
                return (
                  <g key={id} className={clase}>
                    <rect x={n.x - 66} y={n.y - 22} width={132} height={44} rx={7} />
                    <text x={n.x} y={n.y - 6}>
                      {nombre}
                    </text>
                    <text x={n.x} y={n.y + 10} className="sub">
                      {sub}
                    </text>
                  </g>
                );
              })}

              {/* La capa del paso: se monta de nuevo en cada paso para empezar limpia. */}
              <g key={`${esc}-${paso}-${vuelta}`} aria-hidden="true">
                {p.tipo === "local" ? (
                  <>
                    <circle ref={anillo} cx={lx} cy={ly} r={30} fill="none" className="anillo" />
                    {p.etiqueta[idioma] ? (
                      <text x={lx + 72} y={ly - 26} className="etiq">
                        {p.etiqueta[idioma]}
                      </text>
                    ) : null}
                  </>
                ) : (
                  <>
                    <path ref={ruta} d={rutaEntre(p)} className={`ruta ${p.tipo}`} />
                    <circle ref={punto} cx={lx} cy={ly} r={7} className={`punto ${p.tipo}`} />
                    {p.etiqueta[idioma] ? (
                      <text ref={etiqueta} x={lx} y={ly} opacity={0} className="etiq">
                        {p.etiqueta[idioma]}
                      </text>
                    ) : null}
                    {p.tipo === "rechazo" ? (
                      <g ref={cruz} opacity={0}>
                        <line x1={-9} y1={-9} x2={9} y2={9} className="cruz" />
                        <line x1={9} y1={-9} x2={-9} y2={9} className="cruz" />
                      </g>
                    ) : null}
                  </>
                )}
              </g>
            </svg>
          </div>
        </Marco>

        <div className="lateral">
          <div className="ctls">
            <button type="button" className="ctl principal" onClick={reproducirOParar}>
              {reproduciendo ? t.pausa : paso >= ultimo ? t.repetir : t.reproducir}
            </button>
            <button type="button" className="ctl" aria-label={t.anterior} onClick={() => irA(paso - 1)} disabled={paso === 0}>
              ◀
            </button>
            <button type="button" className="ctl" aria-label={t.siguiente} onClick={() => irA(paso + 1)} disabled={paso === ultimo}>
              ▶
            </button>
            <label className="ctl-etiqueta">
              {t.velocidad}
              <select className="ctl" value={vel} onChange={(e) => cambiarVelocidad(Number(e.target.value))}>
                {VELOCIDADES.map((v, i) => (
                  <option key={v} value={v}>
                    {[t.lenta, t.normal, t.rapida][i]}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="texto-paso" aria-live="polite">
            <b>
              {t.paso(paso + 1, escenario.pasos.length)}
              {escenario.diseno ? t.sinHacer : ""}
            </b>
            {p.texto[idioma]}
          </div>
          <ol className="pasos" aria-label={t.pasos}>
            {escenario.pasos.map((q, i) => (
              <li key={i}>
                <button type="button" aria-current={i === paso ? "step" : undefined} onClick={() => irA(i)}>
                  <span className="num">{i + 1}</span>
                  <span>{q.texto[idioma]}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <ul className="leyenda">
        {t.leyenda.map(([tipo, texto]) => (
          <li key={tipo}>
            <i className={`linea ${tipo}`} />
            {texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

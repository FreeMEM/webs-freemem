"use client";

import { useEffect, useState } from "react";

import type { Idioma } from "retro";

/**
 * La ventana de Inferencia dibujada en HTML con el ejemplo de PLAN.md (no es una captura): la pregunta, las
 * herramientas que usa el modelo, su respuesta llegando letra a letra y el permiso con Sí, No y Siempre, que se
 * pueden pulsar. Los textos de la ventana son los de su catálogo; los colores, los de src/vista.dash.
 */
type Bloque =
  | { tipo: "usuario" | "herramienta" | "aviso"; texto: string }
  | { tipo: "modelo"; texto: string }
  | { tipo: "cambio"; quita: string; pone: string };

const GUION: Record<Idioma, { bloques: Bloque[]; botones: string[]; modelo: string; coste: string; escribe: string; enviar: string; parar: string }> = {
  es: {
    bloques: [
      { tipo: "usuario", texto: "¿Por qué no arranca la red al encender?" },
      { tipo: "herramienta", texto: "Leer S:User-Startup" },
      { tipo: "herramienta", texto: "Orden: ShowNetStatus" },
      { tipo: "modelo", texto: "User-Startup arranca Roadshow antes de montar la tarjeta. Muevo AddNetInterface detrás de la línea del driver:" },
      { tipo: "herramienta", texto: "Editar S:User-Startup" },
      { tipo: "cambio", quita: "AddNetInterface DEVS:NetInterfaces/wifi", pone: "(dos líneas más abajo)" },
      { tipo: "aviso", texto: "¿Lo permites?" },
    ],
    botones: ["Sí", "No", "Siempre"],
    modelo: "Modelo:",
    coste: "12.400 tk · 0,03 $",
    escribe: "escribe aquí...",
    enviar: "Enviar",
    parar: "Parar",
  },
  en: {
    bloques: [
      { tipo: "usuario", texto: "Why doesn't the network start at boot?" },
      { tipo: "herramienta", texto: "Read S:User-Startup" },
      { tipo: "herramienta", texto: "Command: ShowNetStatus" },
      { tipo: "modelo", texto: "User-Startup starts Roadshow before the card is mounted. I'll move AddNetInterface after the driver's line:" },
      { tipo: "herramienta", texto: "Edit S:User-Startup" },
      { tipo: "cambio", quita: "AddNetInterface DEVS:NetInterfaces/wifi", pone: "(two lines further down)" },
      { tipo: "aviso", texto: "Allow it?" },
    ],
    botones: ["Yes", "No", "Always"],
    modelo: "Model:",
    coste: "12,400 tk · 0.03 $",
    escribe: "type here...",
    enviar: "Send",
    parar: "Stop",
  },
};

/** Cuántos pasos lleva el guion: un bloque entero por paso, salvo la respuesta del modelo, que va letra a letra. */
function longitud(b: Bloque) {
  return b.tipo === "modelo" ? b.texto.length : 1;
}

export function Conversacion({ idioma, pie, otraVez, resultado }: { idioma: Idioma; pie: string; otraVez: string; resultado: Record<string, string> }) {
  const g = GUION[idioma];
  const total = g.bloques.reduce((n, b) => n + longitud(b), 0);
  // al servir la página se ve entera (sin JavaScript o con movimiento reducido, se queda así)
  const [paso, setPaso] = useState(total);
  const [respuesta, setRespuesta] = useState<string | null>(null);
  const [vuelta, setVuelta] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let n = 0;
    let reloj: ReturnType<typeof setTimeout>;
    const siguiente = () => {
      // qué bloque toca: las herramientas se hacen esperar; las letras, no
      let quedan = n;
      let bloque = g.bloques[0];
      for (const b of g.bloques) {
        if (quedan < longitud(b)) {
          bloque = b;
          break;
        }
        quedan -= longitud(b);
      }
      n += 1;
      setPaso(n);
      if (n < total) reloj = setTimeout(siguiente, bloque.tipo === "modelo" ? 22 : 650);
    };
    reloj = setTimeout(siguiente, vuelta === 0 ? 500 : 200);
    setPaso(0);
    return () => clearTimeout(reloj);
  }, [g, total, vuelta]);

  // lo que se ve con los pasos que lleva
  let quedan = paso;
  const visibles: Bloque[] = [];
  for (const b of g.bloques) {
    if (quedan <= 0) break;
    if (b.tipo === "modelo") {
      visibles.push({ tipo: "modelo", texto: b.texto.slice(0, quedan) });
    } else {
      visibles.push(b);
    }
    quedan -= longitud(b);
  }
  const listo = paso >= total;
  const escribiendo = !listo && visibles.at(-1)?.tipo === "modelo";

  return (
    <figure className="conversacion">
      <div className="cv-ventana">
        <div className="cv-barra" aria-hidden="true">
          <span className="cv-cierre" />
          <span className="cv-titulo">Inferencia</span>
          <span className="cv-profundidad" />
        </div>
        <div className="cv-estado" aria-hidden="true">
          <span>{g.modelo}</span>
          <span className="cv-campo">anthropic/claude-sonnet-5.5</span>
          <span className="cv-coste">{g.coste}</span>
        </div>
        <div className="cv-hilo" aria-live="polite">
          {visibles.map((b, i) => {
            if (b.tipo === "cambio") {
              return (
                <div key={i} className="cv-cambio">
                  <span className="cv-quita">- {b.quita}</span>
                  <span className="cv-pone">+ {b.pone}</span>
                </div>
              );
            }
            return (
              <p key={i} className={`cv-${b.tipo}`}>
                {b.tipo === "herramienta" ? "● " : null}
                {b.texto}
                {escribiendo && i === visibles.length - 1 ? <span className="cv-cursor" aria-hidden="true" /> : null}
              </p>
            );
          })}
          {listo && !respuesta ? (
            <div className="cv-botones">
              {g.botones.map((b) => (
                <button key={b} type="button" onClick={() => setRespuesta(b)}>
                  {b}
                </button>
              ))}
            </div>
          ) : null}
          {respuesta ? <p className="cv-respondido">{respuesta}</p> : null}
        </div>
        <div className="cv-entrada" aria-hidden="true">
          <span className="cv-escribe">{g.escribe}</span>
          <span className="cv-boton">{g.enviar}</span>
          <span className="cv-boton cv-apagado">{g.parar}</span>
        </div>
      </div>
      <figcaption>
        {respuesta ? (
          <>
            <span>{resultado[respuesta]}</span>{" "}
            <button
              type="button"
              className="cv-otra"
              onClick={() => {
                setRespuesta(null);
                setVuelta((v) => v + 1);
              }}
            >
              {otraVez}
            </button>
          </>
        ) : (
          pie
        )}
      </figcaption>
    </figure>
  );
}

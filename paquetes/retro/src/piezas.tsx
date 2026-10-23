"use client";

import { useState, type ReactNode } from "react";

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

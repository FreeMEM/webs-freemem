"use client";

import { Escritorio, PanelTrasfondo } from "retro";

/** El escritorio de la portada: Workbench con el panel de Trasfondo en el fondo y los iconos por encima. */
export function EscritorioVivo({ nombres, aviso }: { nombres: { ram: string; sistema: string; work: string; cajon: string; prefs: string }; aviso: string }) {
  return (
    <Escritorio
      imagen="/imagenes/escritorio.png"
      aviso={aviso}
      iconos={[
        { id: "ram", nombre: nombres.ram, imagen: "/iconos/ram.png", x: 16, y: 34, ancho: 68, alto: 40 },
        { id: "sistema", nombre: nombres.sistema, imagen: "/iconos/sistema.png", x: 16, y: 104, ancho: 68, alto: 40 },
        { id: "work", nombre: nombres.work, imagen: "/iconos/disco.png", x: 16, y: 174, ancho: 68, alto: 40 },
        { id: "cajon", nombre: nombres.cajon, imagen: "/iconos/cajon.png", x: 110, y: 34, ancho: 80, alto: 40 },
        { id: "prefs", nombre: nombres.prefs, imagen: "/iconos/trasfondoprefs.png", x: 110, y: 104, ancho: 80, alto: 52 },
      ]}
      ventana={{
        titulo: nombres.cajon,
        x: 36,
        y: 360,
        ancho: 470,
        alto: 150,
        iconos: [
          { nombre: "Instalar", imagen: "/iconos/instalar.png", ancho: 68, alto: 44 },
          { nombre: "trasfondo", imagen: "/iconos/trasfondo.png", ancho: 80, alto: 52 },
          { nombre: nombres.prefs, imagen: "/iconos/trasfondoprefs.png", ancho: 80, alto: 52 },
          { nombre: "LEEME", imagen: "/iconos/leeme.png", ancho: 60, alto: 44 },
        ],
      }}
      fondo={(actividad) => <PanelTrasfondo actividad={actividad} />}
    />
  );
}

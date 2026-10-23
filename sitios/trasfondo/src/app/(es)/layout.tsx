import type { Metadata } from "next";
import { topaz, texto } from "retro/src/fuentes";
import { metadatos } from "retro";

import { BASE, CONTENIDO } from "@/contenido";
import "../globals.css";

export const metadata: Metadata = metadatos({
  base: BASE,
  idioma: "es",
  titulo: CONTENIDO.es.titulo,
  descripcion: CONTENIDO.es.descripcion,
  imagen: "/og.png",
  nombreSitio: "Trasfondo",
});

export default function Raiz({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${topaz.variable} ${texto.variable}`}>
      <body>{children}</body>
    </html>
  );
}

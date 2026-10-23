import type { Metadata } from "next";
import { topaz, texto } from "retro/src/fuentes";
import { metadatos } from "retro";

import { BASE, CONTENIDO } from "@/contenido";
import "../../globals.css";

export const metadata: Metadata = metadatos({
  base: BASE,
  idioma: "en",
  titulo: CONTENIDO.en.titulo,
  descripcion: CONTENIDO.en.descripcion,
  imagen: "/og.png",
  nombreSitio: "Trasfondo",
});

export default function Raiz({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${topaz.variable} ${texto.variable}`}>
      <body>{children}</body>
    </html>
  );
}

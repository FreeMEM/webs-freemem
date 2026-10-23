import type { Idioma } from "./familia";

/** El tamaño de una descarga para leerlo: «53 KB», «6,6 MB» (con coma en castellano). */
export function tamano(bytes: number, idioma: Idioma) {
  const [n, unidad] = bytes < 1024 * 1024 ? [Math.round(bytes / 1024), "KB"] : [Math.round((bytes / 1024 / 1024) * 10) / 10, "MB"];
  return `${n.toLocaleString(idioma === "es" ? "es-ES" : "en-GB")} ${unidad}`;
}

import localFont from "next/font/local";
import { Atkinson_Hyperlegible_Next } from "next/font/google";

/** Topaz, la letra del sistema del Amiga: títulos y todo lo que imita la máquina. */
export const topaz = localFont({
  src: "../fuentes/TopazPlus_a1200_v1.0.ttf",
  variable: "--fuente-topaz",
  display: "swap",
});

/** El texto corrido: muy legible, y sin el aire genérico de las de siempre. */
export const texto = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--fuente-texto",
  display: "swap",
});

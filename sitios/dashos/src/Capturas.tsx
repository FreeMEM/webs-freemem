import type { Idioma } from "retro";

/**
 * Capturas de DashOS en QEMU (13/11/2026), sacadas de las pruebas del repositorio (capturas-agente/ y docs/capturas/)
 * y pasadas a WebP en public/capturas/. Cada una abre la imagen entera.
 */
const CAPTURAS: { fichero: string; ancho: number; alto: number; es: string; en: string }[] = [
  {
    fichero: "cajas",
    ancho: 800,
    alto: 600,
    es: "Las dos cajas a la vez: es2gears en la caja Linux y una ventana GadTools de un programa 68k en la caja Amiga.",
    en: "Both boxes at once: es2gears in the Linux box and a GadTools window from a 68k program in the Amiga box.",
  },
  {
    fichero: "firefox",
    ancho: 800,
    alto: 600,
    es: "Firefox de la caja Linux como una ventana más del escritorio.",
    en: "Firefox from the Linux box as just another desktop window.",
  },
  {
    fichero: "explorador",
    ancho: 1600,
    alto: 900,
    es: "El explorador de archivos, con barra lateral, migas y la caja Amiga como volumen.",
    en: "The file manager, with a sidebar, breadcrumbs and the Amiga box as a volume.",
  },
  {
    fichero: "centro",
    ancho: 800,
    alto: 600,
    es: "El centro de control: apariencia, permisos, seguridad y discos.",
    en: "The control centre: appearance, permissions, security and disks.",
  },
  {
    fichero: "gadtools",
    ancho: 1600,
    alto: 525,
    es: "El mismo programa GadTools de 68k con sus dos aspectos: el original de 3.x y como DashOS.",
    en: "The same 68k GadTools program in its two looks: the original 3.x one and DashOS style.",
  },
  {
    fichero: "reaction",
    ancho: 1264,
    alto: 436,
    es: "ReAction sobre el BOOPSI nativo de DashOS, en los dos aspectos.",
    en: "ReAction on DashOS's native BOOPSI, in both looks.",
  },
];

export function Capturas({ idioma }: { idioma: Idioma }) {
  return (
    <div className="capturas">
      {CAPTURAS.map((c) => (
        <figure key={c.fichero} className={c.ancho / c.alto > 2 ? "captura captura-ancha" : "captura"}>
          <a href={`/capturas/${c.fichero}.webp`}>
            <img src={`/capturas/${c.fichero}.webp`} width={c.ancho} height={c.alto} alt={c[idioma]} loading="lazy" />
          </a>
          <figcaption>{c[idioma]}</figcaption>
        </figure>
      ))}
    </div>
  );
}

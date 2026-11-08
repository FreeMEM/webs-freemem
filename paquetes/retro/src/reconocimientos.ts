/**
 * Quién pidió, propuso o contó cada cosa que ya está publicada. Sale en la sección "Gracias" de cada web.
 *
 * Regla del usuario (08/11/2026): cada arreglo o novedad que venga de una persona lleva su nombre en el commit, en
 * las notas de la versión y aquí. Solo lo que ya está en una release publicada; con el nombre con el que se
 * presenta en el grupo, nunca datos de contacto. Al publicar una versión con nombres, se añade aquí.
 */
export type Aporte = { readonly version: string; readonly es: string; readonly en: string };
export type Reconocido = { readonly persona: string; readonly aportes: readonly Aporte[] };
export type ProgramaReconocido = "dash" | "forja" | "trasfondo" | "tachyon" | "inferencia";

export const RECONOCIMIENTOS: Readonly<Record<ProgramaReconocido, readonly Reconocido[]>> = {
  trasfondo: [
    {
      persona: "Ferrán García",
      aportes: [
        { version: "2.8.1", es: "La temperatura de la Pi en la línea de arriba del fondo, junto a la CPU.", en: "The Pi temperature on the top line of the backdrop, next to the CPU." },
        { version: "2.8.1", es: "Arreglo: \"Ver los segundos\" se montaba encima de otra casilla en TrasfondoPrefs.", en: "Fix: \"Show the seconds\" sat on top of another checkbox in TrasfondoPrefs." },
        { version: "2.8", es: "Editor del dock en TrasfondoPrefs.", en: "Dock editor in TrasfondoPrefs." },
        { version: "2.8", es: "Los segundos en la hora del fondo y de la barra.", en: "Seconds on the backdrop and bar clock." },
        { version: "2.8", es: "Elegir qué enseña la barra.", en: "Choosing what the bar shows." },
        { version: "2.8", es: "La barra y el dock en Exchange.", en: "The bar and the dock in Exchange." },
        { version: "2.7", es: "Arreglo: la raya que aparecía junto al botón de profundidad.", en: "Fix: the line that showed up next to the depth gadget." },
        { version: "2.5", es: "El LEEME del paquete a 80 columnas.", en: "The package readme at 80 columns." },
        { version: "2.4", es: "La barra dentro de la barra de título de la pantalla.", en: "The bar inside the screen title bar." },
      ],
    },
    {
      persona: "Oskis R.P",
      aportes: [
        { version: "2.8", es: "Avisó de que el fondo perdía memoria poco a poco.", en: "Reported that the backdrop slowly lost memory." },
      ],
    },
  ],
  forja: [
    {
      persona: "David Martínez",
      aportes: [
        { version: "0.4", es: "Arreglo: al depurar, F5 y F10 dejaban de responder.", en: "Fix: F5 and F10 stopped working while debugging." },
      ],
    },
    {
      persona: "Tolkien",
      aportes: [
        { version: "0.4", es: "Encontrar dash aunque no esté la asignación DASH:.", en: "Finding dash even without the DASH: assign." },
      ],
    },
    {
      persona: "Ferrán García",
      aportes: [
        { version: "0.2", es: "Preferencias más anchas, con botón Elegir... y DASH:dash por defecto.", en: "Wider preferences, with a Choose... button and DASH:dash by default." },
        { version: "0.2", es: "Elegir, copiar y guardar las líneas de la salida, con barras para moverse.", en: "Selecting, copying and saving output lines, with scroll bars." },
        { version: "0.2", es: "$VER: para C:Version.", en: "$VER: for C:Version." },
      ],
    },
  ],
  dash: [
    {
      persona: "Ferrán García",
      aportes: [
        { version: "2.6.0", es: "Soltar iconos del Workbench sobre las ventanas MUI.", en: "Dropping Workbench icons on MUI windows." },
        { version: "2.4.0", es: "La referencia rápida en castellano.", en: "The quick reference in Spanish." },
        { version: "2.4.0", es: "El LEEME y el README del paquete a 80 columnas.", en: "The package LEEME and README at 80 columns." },
        { version: "2.4.0", es: "Arreglo: el texto de MUI salía oscuro en pantallas de 32 bits.", en: "Fix: MUI text came out dark on 32-bit screens." },
        { version: "2.3.0", es: "Arreglos del instalador, y forja e inferencia desde cualquier Shell.", en: "Installer fixes, and forja and inferencia from any Shell." },
        { version: "2.3.0", es: "Arreglo: \"version dash\" no decía la versión.", en: "Fix: \"version dash\" did not show the version." },
      ],
    },
    {
      persona: "Oskis R.P",
      aportes: [
        { version: "2.5.0", es: "Avisó de la fuga de memoria que tenía el fondo de Trasfondo.", en: "Reported the memory leak in Trasfondo's backdrop." },
      ],
    },
  ],
  tachyon: [],
  inferencia: [],
};

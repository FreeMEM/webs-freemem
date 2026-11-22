import type { IdFuncion } from "./contenido";

/**
 * Los iconos de la franja de funciones, dibujados a píxeles en una rejilla de 16x16, como los del Workbench.
 * "#" es el color del texto (currentColor), "c" el cian del panel, "v" el verde de sus discos; "." queda vacío.
 */
const DIBUJOS: Record<IdFuncion, readonly string[]> = {
  // la gráfica de la CPU del panel
  monitor: [
    "################",
    "#..............#",
    "#..............#",
    "#.........c....#",
    "#.........c....#",
    "#.....c...c..c.#",
    "#.....c..cc..c.#",
    "#..c..c..cc.cc.#",
    "#..c.cc.ccc.cc.#",
    "#.cc.cc.ccccccc#",
    "#.cccccccccccc.#",
    "################",
    "#..............#",
    "#.vvvvvvvvv....#",
    "#..............#",
    "################",
  ],
  // una pantalla con una ventana encajada en la mitad izquierda y el marco de la otra
  encajar: [
    "################",
    "#######........#",
    "#cccccc#.......#",
    "#cccccc#.c.c.c.#",
    "#cccccc#.......#",
    "#cccccc#.c...c.#",
    "#cccccc#.......#",
    "#cccccc#.c...c.#",
    "#cccccc#.......#",
    "#cccccc#.c...c.#",
    "#cccccc#.......#",
    "#cccccc#.c.c.c.#",
    "#cccccc#.......#",
    "#cccccc#.......#",
    "#######........#",
    "################",
  ],
  // tres ventanas apiladas, la de delante elegida
  alttab: [
    "................",
    "....##########..",
    "....#........#..",
    "..##########.#..",
    "..#........#.#..",
    "############.#..",
    "#cccccccccc#.#..",
    "#..........#.#..",
    "#..........###..",
    "#..........#....",
    "#..........#....",
    "#..........#....",
    "############....",
    "................",
    "..##.##.##.##...",
    "................",
  ],
  // cuatro escritorios, uno encendido
  espacios: [
    "................",
    ".######..######.",
    ".#cccc#..#....#.",
    ".#cccc#..#....#.",
    ".#cccc#..#....#.",
    ".#cccc#..#....#.",
    ".######..######.",
    "................",
    "................",
    ".######..######.",
    ".#....#..#....#.",
    ".#....#..#....#.",
    ".#....#..#....#.",
    ".#....#..#....#.",
    ".######..######.",
    "................",
  ],
  // un cajón con dos paneles
  archivos: [
    "................",
    ".#####..........",
    "#.....#.........",
    "################",
    "#......#.......#",
    "#.cccc.#.vvvv..#",
    "#......#.......#",
    "#.cccc.#.vvvv..#",
    "#......#.......#",
    "#.cccc.#.vvvv..#",
    "#......#.......#",
    "#.cccc.#.vvvv..#",
    "#......#.......#",
    "################",
    "................",
    "................",
  ],
  // la campana de los avisos
  barra: [
    ".......##.......",
    "......####......",
    ".....######.....",
    "....########....",
    "....########....",
    "....########....",
    "....########....",
    "...##########...",
    "...##########...",
    "..############..",
    ".##############.",
    ".##############.",
    "................",
    "......####......",
    ".......##.......",
    "................",
  ],
  // el dock, con una casilla encendida
  dock: [
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "################",
    "#..............#",
    "#.##.cc.##.##..#",
    "#.##.cc.##.##..#",
    "#..............#",
    "################",
    ".....c..........",
    "................",
  ],
  // una paleta de colores
  colores: [
    "................",
    ".....######.....",
    "...##......##...",
    "..#..cc..vv..#..",
    ".#...cc..vv...#.",
    ".#............#.",
    "#..##......##..#",
    "#..##......##..#",
    "#..............#",
    "#.......###....#",
    ".#.....#...#...#",
    ".#.....#...#..#.",
    "..#.....###..#..",
    "...##......##...",
    ".....######.....",
    "................",
  ],
};

const COLOR: Record<string, string> = { "#": "currentColor", c: "var(--cian)", v: "var(--verde)" };

export function IconoFuncion({ id }: { id: IdFuncion }) {
  const filas = DIBUJOS[id];
  const pixeles: { x: number; y: number; color: string }[] = [];
  filas.forEach((fila, y) =>
    [...fila.slice(0, 16)].forEach((c, x) => {
      if (COLOR[c]) pixeles.push({ x, y, color: COLOR[c] });
    }),
  );
  return (
    <svg className="icono-funcion" viewBox="0 0 16 16" width="48" height="48" shapeRendering="crispEdges" aria-hidden="true">
      {pixeles.map((p) => (
        <rect key={`${p.x}-${p.y}`} x={p.x} y={p.y} width="1" height="1" fill={p.color} />
      ))}
    </svg>
  );
}

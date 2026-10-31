/**
 * El logo de Dash: una D de cuadros y el cursor del Shell, que parpadea (quieto si se pide menos movimiento).
 * Dibujado sobre una rejilla de 16x16: a tamaños múltiplos de 16 cada cuadro cae en un píxel entero.
 * El original está en el repositorio de Dash, docs/logo/dash.svg.
 */
export function LogoDash({ tamano }: { tamano: number }) {
  return (
    <svg className="logo-dash" viewBox="0 0 16 16" width={tamano} height={tamano} aria-hidden="true" shapeRendering="crispEdges">
      <rect width="16" height="16" rx="2.5" fill="#0055AA" shapeRendering="auto" />
      <g fill="#FF8800">
        <rect x="3" y="4" width="5" height="1" />
        <rect x="3" y="5" width="2" height="6" />
        <rect x="7" y="5" width="2" height="6" />
        <rect x="3" y="11" width="5" height="1" />
      </g>
      <rect className="logo-dash-cursor" x="10" y="11" width="3" height="1" fill="#FFFFFF" />
    </svg>
  );
}

import type { Idioma } from "retro";

/**
 * La ventana de Forja dibujada en HTML, tal como la reparte el esquema de PLAN.md (no es una captura): botones,
 * proyecto y variables, pestañas, el código con un punto de parada y la línea donde está parado, y la salida.
 * Los colores son los de src/tema.dash de Forja.
 */
const TEXTOS = {
  es: {
    botones: ["Compilar", "Ejecutar", "Depurar"],
    proyecto: "Proyecto",
    variables: "Variables",
    salida: "Salida: compilado en 1,2 segundos, 0 avisos",
  },
  en: {
    botones: ["Build", "Run", "Debug"],
    proyecto: "Project",
    variables: "Variables",
    salida: "Output: built in 1.2 seconds, 0 warnings",
  },
};

// cada línea: número, marca (● parada, > aquí) y trozos [clase, texto]
const CODIGO: [number, string, [string, string][]][] = [
  [45, "", [["", "total = lista."], ["ll", "count"]]],
  [46, "", [["", "j = "], ["n", "0"]]],
  [47, "●", [["k", "while"], ["", " j < total"]]],
  [48, ">", [["", "    "], ["ll", "procesar"], ["", "(lista[j])"]]],
  [49, "", [["", "    j = j + "], ["n", "1"]]],
  [50, "", [["k", "end"]]],
];

export function VentanaForja({ idioma, pie }: { idioma: Idioma; pie: string }) {
  const t = TEXTOS[idioma];
  return (
    <figure className="ventana-forja">
      <div className="vf-marco" aria-hidden="true">
        <div className="vf-barra">
          <span className="vf-cierre" />
          <span className="vf-titulo">Forja: Work:juego</span>
          <span className="vf-profundidad" />
        </div>
        <div className="vf-botones">
          {t.botones.map((b) => (
            <span key={b} className="vf-boton">
              {b}
            </span>
          ))}
          <span className="vf-boton vf-inferencia">Inferencia</span>
        </div>
        <div className="vf-cuerpo">
          <div className="vf-panel">
            <p className="vf-panel-titulo">{t.proyecto}</p>
            <p className="vf-activo">main.dash</p>
            <p>red.dash</p>
            <p>ventana.dashui</p>
            <p className="vf-panel-titulo">{t.variables}</p>
            <p className="vf-var">
              <span>j</span>
              <span>3</span>
            </p>
            <p className="vf-var">
              <span>total</span>
              <span>10</span>
            </p>
          </div>
          <div className="vf-editor">
            <div className="vf-pestanas">
              <span className="vf-activa">main.dash</span>
              <span>ventana.dashui</span>
              <span>red.dash</span>
            </div>
            <pre className="vf-codigo">
              {CODIGO.map(([n, marca, trozos]) => (
                <span key={n} className={`vf-linea${marca === ">" ? " vf-aqui" : ""}`}>
                  <span className="vf-num">{n}</span>
                  <span className={marca === "●" ? "vf-parada" : "vf-marca"}>{marca === "●" ? "●" : marca === ">" ? ">" : " "}</span>
                  {trozos.map(([c, txt], i) => (
                    <span key={i} className={c ? `vf-${c}` : undefined}>
                      {txt}
                    </span>
                  ))}
                  {"\n"}
                </span>
              ))}
            </pre>
          </div>
        </div>
        <p className="vf-salida">{t.salida}</p>
      </div>
      <figcaption>{pie}</figcaption>
    </figure>
  );
}

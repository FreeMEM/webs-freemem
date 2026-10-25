import { BolaBoing, Cabecera, Codigo, Pie, VentanaWB, VideoYouTube, datosPrograma, type Idioma } from "retro";

import { AREAS, BASE, BUILTINS, COMPARATIVA, CONTENIDO, DIVISION_CERO, EXTENSION, LENGUAJES, REPO, VIDEO } from "./contenido";
import ejemplos from "./ejemplos.json";
import { Pestanas } from "./Pestanas";

/** Las capturas de cada ejemplo en el Amiga (sacadas de Coffin con el ejecutable que mide ejemplos.json). */
const CAPTURAS = {
  hola: { src: "/imagenes/ej-hola.webp", ancho: 804, alto: 604 },
  mui_hola: { src: "/imagenes/ej-mui_hola.webp", ancho: 332, alto: 276 },
  gravedad: { src: "/imagenes/ej-gravedad.webp", ancho: 644, alto: 412 },
} as const;

type IdEjemplo = keyof typeof CAPTURAS;

/** Un documento del repositorio de Dash en GitHub, en el idioma de la página (el inglés es NOMBRE.en.md). */
function doc(nombre: string, idioma: Idioma) {
  return `${REPO}/blob/main/docs/${nombre}${idioma === "en" ? ".en" : ""}.md`;
}

function kb(bytes: number) {
  return `${(bytes / 1024).toFixed(1).replace(".0", "")} KB`;
}

export function Inicio({ idioma }: { idioma: Idioma }) {
  const t = CONTENIDO[idioma];
  const raiz = idioma === "es" ? "/" : "/en/";
  const datos = datosPrograma({
    nombre: "Dash",
    descripcion: t.descripcion,
    url: `${BASE}${raiz}`,
    requisitos: "Linux, macOS o WSL2; Python 3.10+; m68k-amigaos-gcc. Ejecutables para AmigaOS 3.0+",
    imagen: `${BASE}/og.png`,
    idioma,
    codigo: REPO,
    categoria: "DeveloperApplication",
  });
  const maximo = AREAS[0][2];

  const paneles = (Object.keys(CAPTURAS) as IdEjemplo[]).map((id) => {
    const ej = ejemplos[id];
    const cap = CAPTURAS[id];
    return {
      id,
      nombre: t.tuberia.pestanas[id],
      contenido: (
        <div className="tuberia">
          <figure className="tuberia-paso">
            <figcaption>
              <span className="tuberia-marca">{id}.dash</span> {t.tuberia.dash}
            </figcaption>
            <Codigo codigo={ej.dash} lenguaje="dash" />
          </figure>
          <figure className="tuberia-paso tuberia-c">
            <figcaption>
              <span className="tuberia-marca">{id}.c</span> {t.tuberia.c}
            </figcaption>
            <Codigo codigo={ej.c} lenguaje="c" />
          </figure>
          <figure className="tuberia-paso tuberia-amiga">
            <figcaption>
              <span className="tuberia-marca">{id}</span> {t.tuberia.amiga}
            </figcaption>
            <img src={cap.src} width={cap.ancho} height={cap.alto} alt={t.tuberia.notas[id]} loading="lazy" />
            <p className="tuberia-nota">{t.tuberia.notas[id]}</p>
            <p className="tuberia-bytes">
              <strong>{kb(ej.bytes)}</strong> {t.tuberia.bytes}
            </p>
          </figure>
        </div>
      ),
    };
  });

  return (
    <>
      <Cabecera actual="dash" idioma={idioma} rutaOtroIdioma={idioma === "es" ? "/en/" : "/"} />
      <main>
        <section className="portada">
          <div className="portada-texto">
            <h1>Dash</h1>
            <p className="lema">{t.lema}</p>
            <p>{t.texto}</p>
            <div className="acciones">
              <a className="boton" href={REPO}>
                {t.empezar}
              </a>
              <a className="boton boton-suave" href={EXTENSION}>
                {t.vscode}
              </a>
            </div>
          </div>
          <div className="portada-bola">
            <BolaBoing etiqueta={t.bola} />
          </div>
        </section>

        <section className="seccion seccion-tuberia" aria-labelledby="tuberia">
          <h2 id="tuberia">{t.tuberia.titulo}</h2>
          <p className="medida">{t.tuberia.texto}</p>
          <ol className="tuberia-cadena">
            {t.tuberia.pasos.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
          <Pestanas etiqueta={t.tuberia.titulo} paneles={paneles} />
        </section>

        <section className="seccion seccion-todo" aria-labelledby="todo">
          <div>
            <h2 id="todo">{t.todo.titulo}</h2>
            <p>{t.todo.texto}</p>
            <dl className="lista-todo">
              {t.todo.lista.map(([que, como]) => (
                <div key={que}>
                  <dt>{que}</dt>
                  <dd>{como}</dd>
                </div>
              ))}
            </dl>
          </div>
          <VentanaWB titulo={`${BUILTINS} builtins`} className="ventana-areas">
            <ul className="areas">
              {AREAS.map(([es, en, n]) => (
                <li key={es}>
                  <span className="area-nombre">{idioma === "es" ? es : en}</span>
                  <span className="area-barra" style={{ inlineSize: `${(n / maximo) * 100}%` }} />
                  <span className="area-n">{n}</span>
                </li>
              ))}
            </ul>
          </VentanaWB>
        </section>

        <section className="seccion" aria-labelledby="tecnica">
          <h2 id="tecnica">{t.tecnica.titulo}</h2>
          <p className="medida">{t.tecnica.texto}</p>
          <dl className="lista-todo lista-tecnica">
            {t.tecnica.lista.map(([que, como]) => (
              <div key={que}>
                <dt>{que}</dt>
                <dd>{como}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="seccion" aria-labelledby="comparativa">
          <h2 id="comparativa">{t.comparativa.titulo}</h2>
          <p className="medida">{t.comparativa.texto}</p>
          <div className="comparativa-caja">
            <table className="comparativa">
              <thead>
                <tr>
                  <th scope="col">{t.comparativa.prueba}</th>
                  {LENGUAJES.map((l) => (
                    <th scope="col" key={l}>
                      {l}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARATIVA.map(([es, en, valores]) => {
                  const mejor = Math.min(...valores);
                  return (
                    <tr key={es}>
                      <th scope="row">{idioma === "es" ? es : en}</th>
                      {valores.map((v, i) => (
                        <td key={LENGUAJES[i]} className={v === mejor ? "mejor" : undefined}>
                          {v.toLocaleString(idioma === "es" ? "de-DE" : "en-US")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
                <tr>
                  <th scope="row">{t.comparativa.division}</th>
                  {DIVISION_CERO.map(([es, en, bien], i) => (
                    <td key={LENGUAJES[i]} className={bien ? "texto bien" : "texto mal"}>
                      {idioma === "es" ? es : en}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="nota">{t.comparativa.menos}</p>
          <p>
            <a href={doc("COMPARATIVA", idioma)}>{t.comparativa.enlace}</a>
          </p>
        </section>

        <section className="seccion seccion-editor" aria-labelledby="editor">
          <div className="editor-texto">
            <h2 id="editor">{t.editor.titulo}</h2>
            <p>{t.editor.texto}</p>
            <p className="nota">{t.editor.instalar}</p>
            <div className="acciones">
              <a className="boton" href={EXTENSION}>
                {t.editor.boton}
              </a>
            </div>
          </div>
          <div className="editor-video">
            <VideoYouTube id={VIDEO} titulo={t.editor.tituloVideo} portada="/imagenes/video.jpg" textoBoton={t.editor.verVideo} />
          </div>
          <figure className="editor-mui">
            <img src="/imagenes/editor-mui.webp" width={1000} height={560} alt={t.editor.editorMui} loading="lazy" />
            <figcaption>{t.editor.editorMui}</figcaption>
          </figure>
        </section>

        <section className="seccion" aria-labelledby="hecho">
          <h2 id="hecho">{t.hecho.titulo}</h2>
          <p className="medida">{t.hecho.texto}</p>
          <div className="hechos">
            <a className="hecho" href={`https://tachyon.freemem.space${raiz}`}>
              <img src="/imagenes/tachyon.webp" width={1400} height={1022} alt={t.hecho.tachyonAlt} loading="lazy" />
              <strong>{t.hecho.tachyon[0]}</strong>
              <span>{t.hecho.tachyon[1]}</span>
            </a>
            <a className="hecho" href={`https://trasfondo.freemem.space${raiz}`}>
              <img src="/imagenes/trasfondo.webp" width={1400} height={1123} alt={t.hecho.trasfondoAlt} loading="lazy" />
              <strong>{t.hecho.trasfondo[0]}</strong>
              <span>{t.hecho.trasfondo[1]}</span>
            </a>
          </div>
        </section>

        <section className="seccion" aria-labelledby="documentacion">
          <h2 id="documentacion">{t.documentacion.titulo}</h2>
          <p className="medida">{t.documentacion.texto}</p>
          <dl className="lista-todo">
            {t.documentacion.lista.map(([fichero, nombre, que]) => (
              <div key={fichero}>
                <dt>
                  <a href={doc(fichero, idioma)}>{nombre}</a>
                </dt>
                <dd>{que}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="seccion seccion-requisitos" aria-labelledby="requisitos">
          <h2 id="requisitos">{t.requisitos.titulo}</h2>
          <dl className="lista-todo">
            {[t.requisitos.amiga, t.requisitos.pc].map(([que, como]) => (
              <div key={que}>
                <dt>{que}</dt>
                <dd>{como}</dd>
              </div>
            ))}
          </dl>
          <div className="acciones">
            <a className="boton" href={doc("INSTALACION", idioma)}>
              {t.requisitos.guia}
            </a>
          </div>
        </section>
      </main>
      <Pie idioma={idioma} enlaces={t.pie} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }} />
    </>
  );
}

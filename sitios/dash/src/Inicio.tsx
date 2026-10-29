import type React from "react";
import { BolaBoing, Cabecera, Codigo, Novedades, Pie, VentanaDesplazable, VentanaWB, VideoYouTube, datosPrograma, type Idioma } from "retro";

import { AREAS, BASE, BUILTINS, COMPARATIVA, CONTENIDO, DIVISION_CERO, EXTENSION, HISTORIA, LENGUAJES, PRUEBAS, REPO, VELOCIDAD, VIDEO } from "./contenido";
import codigos from "./comparativa_codigo.json";
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

function numero(n: number, idioma: Idioma) {
  return n.toLocaleString(idioma === "es" ? "de-DE" : "en-US");
}

/** Las secciones, en orden: su id es el ancla (#comparativa) que se puede enlazar, igual en los dos idiomas */
const SECCIONES = ["novedades", "tuberia", "todo", "tecnica", "comparativa", "historia", "editor", "hecho", "documentacion", "requisitos"] as const;

/** Título de sección con su ancla: el # lleva a la sección y deja su enlace en la barra del navegador */
function Titulo({ id, etiqueta, children }: { id: string; etiqueta: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="titulo-ancla">
      {children}{" "}
      <a className="ancla" href={`#${id}`} aria-label={etiqueta}>
        #
      </a>
    </h2>
  );
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

        <nav className="seccion indice" aria-label={t.indice.titulo}>
          <ul>
            {SECCIONES.map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{t.indice[id]}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="seccion seccion-novedades" aria-labelledby="novedades">
          <Titulo id="novedades" etiqueta={t.indice.enlace}>{t.novedades.titulo}</Titulo>
          <p className="medida">{t.novedades.texto}</p>
          <Novedades lista={t.novedades.lista} />
        </section>

        <section className="seccion seccion-tuberia" aria-labelledby="tuberia">
          <Titulo id="tuberia" etiqueta={t.indice.enlace}>{t.tuberia.titulo}</Titulo>
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
            <Titulo id="todo" etiqueta={t.indice.enlace}>{t.todo.titulo}</Titulo>
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
          <Titulo id="tecnica" etiqueta={t.indice.enlace}>{t.tecnica.titulo}</Titulo>
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
          <Titulo id="comparativa" etiqueta={t.indice.enlace}>{t.comparativa.titulo}</Titulo>
          <p className="medida">{t.comparativa.texto}</p>
          <p className="nota">{t.comparativa.velocidad}</p>
          {(["a1200", "a500"] as const).map((maquina) => (
            <div key={maquina} className="velocidad">
              <h3>
                {maquina === "a1200" ? "A1200" : "A500"} <small>{maquina === "a1200" ? "68020, 14 MHz" : "68000, 7 MHz"}</small>
              </h3>
              <div className="velocidad-pruebas">
                {PRUEBAS.map(([id, es, en]) => {
                  const valores = VELOCIDAD[maquina][id];
                  const peor = Math.max(...valores);
                  const mejor = Math.min(...valores);
                  return (
                    <figure key={id} className="prueba">
                      <figcaption>{idioma === "es" ? es : en}</figcaption>
                      {valores.map((v, i) => (
                        <div key={LENGUAJES[i]} className={`barra${i === 0 ? " barra-dash" : ""}${v === mejor ? " barra-mejor" : ""}`}>
                          <span className="barra-nombre">{LENGUAJES[i]}</span>
                          <span className="barra-pista">
                            <span style={{ inlineSize: `${Math.max(1.5, (v / peor) * 100)}%` }} />
                          </span>
                          <span className="barra-valor">{numero(v, idioma)}</span>
                        </div>
                      ))}
                      <details className="prueba-codigo">
                        <summary>{t.comparativa.verCodigo}</summary>
                        <Pestanas
                          etiqueta={`${t.comparativa.verCodigo}: ${idioma === "es" ? es : en}`}
                          paneles={(
                            [
                              ["dash", "Dash", "dash"],
                              ["blitz", "AmiBlitz3", "basic"],
                              ["amos", "AMOS Pro", "basic"],
                              ["c", t.comparativa.codigoC, "c"],
                            ] as const
                          ).map(([lenguaje, nombre, color]) => ({
                            id: `${maquina}-${id}-${lenguaje}`,
                            nombre,
                            contenido: <Codigo codigo={codigos[id][lenguaje]} lenguaje={color} />,
                          }))}
                        />
                      </details>
                    </figure>
                  );
                })}
              </div>
            </div>
          ))}
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
                          {numero(v, idioma)}
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
          <h3 className="comparativa-porque">{t.comparativa.porqueTitulo}</h3>
          <dl className="lista-todo lista-tecnica">
            {t.comparativa.porque.map(([quien, por]) => (
              <div key={quien}>
                <dt>{quien}</dt>
                <dd>{por}</dd>
              </div>
            ))}
          </dl>
          <p>
            <a href={doc("COMPARATIVA", idioma)}>{t.comparativa.enlace}</a>
          </p>
        </section>

        <section className="seccion" aria-labelledby="historia">
          <Titulo id="historia" etiqueta={t.indice.enlace}>{t.historia.titulo}</Titulo>
          <p className="medida">{t.historia.texto}</p>
          <ul className="historia">
            {HISTORIA.map(([es, en, antes, ahora]) => (
              <li key={es}>
                <span className="historia-que">{idioma === "es" ? es : en}</span>
                <span className="historia-pista">
                  <span className="historia-antes" />
                  <span className="historia-ahora" style={{ inlineSize: `${(ahora / antes) * 100}%` }} />
                </span>
                <span className="historia-cifras">
                  {numero(antes, idioma)} → <strong>{numero(ahora, idioma)}</strong> {t.historia.unidad}
                </span>
                <span className="historia-veces">
                  ×{(antes / ahora).toFixed(1).replace(".", idioma === "es" ? "," : ".")}
                </span>
              </li>
            ))}
          </ul>
          <VentanaDesplazable titulo={t.historia.hitosTitulo} className="ventana-hitos">
            <dl className="hitos">
              {t.historia.hitos.map(([cuando, que]) => (
                <div key={que}>
                  <dt>{cuando}</dt>
                  <dd>{que}</dd>
                </div>
              ))}
            </dl>
          </VentanaDesplazable>
        </section>

        <section className="seccion seccion-editor" aria-labelledby="editor">
          <div className="editor-texto">
            <Titulo id="editor" etiqueta={t.indice.enlace}>{t.editor.titulo}</Titulo>
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
          <Titulo id="hecho" etiqueta={t.indice.enlace}>{t.hecho.titulo}</Titulo>
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
          <Titulo id="documentacion" etiqueta={t.indice.enlace}>{t.documentacion.titulo}</Titulo>
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
          <Titulo id="requisitos" etiqueta={t.indice.enlace}>{t.requisitos.titulo}</Titulo>
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

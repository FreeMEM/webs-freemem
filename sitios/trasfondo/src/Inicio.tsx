import { Gracias, Cabecera, Novedades, Pie, VentanaWB, VideoYouTube, datosPrograma, type Idioma } from "retro";

import { ANCHO_PREFS, CONTENIDO, DESCARGA, IMAGENES, RELEASE, REPO, VERSIONES, VIDEO, VERSION, BASE, type Funcion } from "./contenido";
import { EscritorioVivo } from "./EscritorioVivo";
import { IconoFuncion } from "./IconoFuncion";

/** Una función: el texto a un lado y sus capturas al otro (en las pares, al revés). */
function SeccionFuncion({ f, idioma, teclas, invertida }: { f: Funcion; idioma: Idioma; teclas: string; invertida: boolean }) {
  const imagenes = IMAGENES[f.id];
  return (
    <section className={`seccion funcion${invertida ? " funcion-invertida" : ""}`} id={f.id} aria-labelledby={`t-${f.id}`}>
      <div className="funcion-texto">
        <p className="funcion-marca">
          <IconoFuncion id={f.id} />
        </p>
        <h2 id={`t-${f.id}`}>{f.titulo}</h2>
        <p className="funcion-entradilla">{f.entradilla}</p>
        {f.texto.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {f.lista && (
          <dl className="lista-panel">
            {f.lista.map((c) => (
              <div key={c.que}>
                <dt>{c.que}</dt>
                <dd>{c.como}</dd>
              </div>
            ))}
          </dl>
        )}
        {f.teclas && (
          <dl className="teclas" aria-label={teclas}>
            {f.teclas.map(([tecla, que]) => (
              <div key={tecla}>
                <dt>
                  <kbd>{tecla}</kbd>
                </dt>
                <dd>{que}</dd>
              </div>
            ))}
          </dl>
        )}
        {f.nota && <p className="nota">{f.nota}</p>}
      </div>
      <div className={`funcion-imagenes funcion-imagenes-${imagenes.length}`}>
        {imagenes.map((im, i) => {
          const src = im.src.replace("{idioma}", idioma);
          const pie = f.pies[i];
          const ancho = typeof im.ancho === "number" ? im.ancho : im.ancho[idioma];
          return im.marco ? (
            <VentanaWB key={src} titulo={im.marco}>
              <img src={src} width={ancho} height={im.alto} alt={pie} loading="lazy" />
            </VentanaWB>
          ) : (
            <figure key={src} className="captura">
              <img src={src} width={ancho} height={im.alto} alt={pie} loading="lazy" />
              <figcaption>{pie}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export function Inicio({ idioma }: { idioma: Idioma }) {
  const t = CONTENIDO[idioma];
  const raiz = idioma === "es" ? "/" : "/en/";
  const datos = datosPrograma({
    nombre: "Trasfondo",
    descripcion: t.descripcion,
    url: `${BASE}${raiz}`,
    descarga: DESCARGA,
    version: VERSION,
    requisitos: "AmigaOS 3.0+, Workbench",
    imagen: `${BASE}/og.png`,
    idioma,
    codigo: REPO,
  });

  return (
    <>
      <Cabecera actual="trasfondo" idioma={idioma} rutaOtroIdioma={idioma === "es" ? "/en/" : "/"} />
      <main>
        <section className="portada">
          <div className="portada-texto">
            <h1>Trasfondo</h1>
            <p className="entradilla">{t.entradilla}</p>
            <p>{t.subtitulo}</p>
            <div className="acciones">
              <a className="boton" href={DESCARGA}>
                {t.descargar}
              </a>
              <a className="boton boton-suave" href="#funciones">
                {t.verFunciones}
              </a>
              <a className="boton boton-suave" href="#video">
                {t.verVideo}
              </a>
            </div>
            <p className="peso">{t.peso}</p>
          </div>
          <div className="portada-escritorio" role="img" aria-label={t.escritorioAlt}>
            <EscritorioVivo nombres={t.iconos} aviso={t.aviso} />
          </div>
        </section>

        <nav className="franja" id="funciones" aria-label={t.franja.titulo}>
          <ul>
            {t.funciones.map((f) => (
              <li key={f.id}>
                <a href={`#${f.id}`}>
                  <IconoFuncion id={f.id} />
                  <strong>{f.corto}</strong>
                  <span>{f.frase}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {t.funciones.map((f, i) => (
          <SeccionFuncion key={f.id} f={f} idioma={idioma} teclas={t.teclas} invertida={i % 2 === 1} />
        ))}

        <section className="seccion seccion-cuelgue" aria-labelledby="cuelgues">
          <h2 id="cuelgues">{t.cuelgue.titulo}</h2>
          <p className="frase">{t.cuelgue.frase}</p>
          <p>{t.cuelgue.texto}</p>
          <p>{t.cuelgue.ligero}</p>
        </section>

        <section className="seccion" aria-labelledby="pantallas">
          <h2 id="pantallas">{t.pantallas.titulo}</h2>
          <p className="medida">{t.pantallas.texto}</p>
          <div className="pareja">
            <figure>
              <img src="/imagenes/rtg-iconos-detalle.webp" width={800} height={600} alt={t.pantallas.rtg} loading="lazy" />
              <figcaption>{t.pantallas.rtg}</figcaption>
            </figure>
            <figure>
              <img src="/imagenes/aga-panel.webp" width={1280} height={1024} alt={t.pantallas.aga} loading="lazy" className="recorte-aga" />
              <figcaption>{t.pantallas.aga}</figcaption>
            </figure>
          </div>
        </section>

        <section className="seccion seccion-eliges" aria-labelledby="eliges">
          <div>
            <h2 id="eliges">{t.eliges.titulo}</h2>
            <p>{t.eliges.texto}</p>
            <p>{t.eliges.commodity}</p>
            <dl className="tooltypes">
              {t.eliges.tooltypes.map(([codigo, que]) => (
                <div key={codigo}>
                  <dt>
                    <code>{codigo}</code>
                  </dt>
                  <dd>{que}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="ventanas">
            <figure className="captura captura-prefs">
              <img src={`/imagenes/prefs-fondo-${idioma}.webp`} width={ANCHO_PREFS[idioma]} height={421} alt={t.eliges.prefsAlt} loading="lazy" />
              <figcaption>{t.eliges.prefsAlt}</figcaption>
            </figure>
            <VentanaWB titulo="Exchange">
              <img src={`/imagenes/exchange-${idioma}.webp`} width={914} height={568} alt={t.eliges.exchange} loading="lazy" />
            </VentanaWB>
          </div>
        </section>

        <section className="seccion" id="video" aria-labelledby="titulo-video">
          <h2 id="titulo-video">{t.video.titulo}</h2>
          <p className="medida">{t.video.texto}</p>
          <VideoYouTube id={VIDEO[idioma]} titulo={t.video.titulo_video} portada={`/imagenes/video-${idioma}.jpg`} textoBoton={t.video.boton} />
        </section>

        <section className="seccion seccion-novedades" aria-labelledby="novedades">
          <h2 id="novedades">{t.novedades.titulo}</h2>
          <p className="medida">{t.novedades.texto}</p>
          <Novedades lista={t.novedades.lista} />
          <p className="todas">
            <a href={VERSIONES}>{t.novedades.todas}</a>
          </p>
        </section>

        <section className="seccion seccion-instalar" aria-labelledby="instalar">
          <div>
            <h2 id="instalar">{t.instalar.titulo}</h2>
            <ol>
              {t.instalar.pasos.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
            <div className="acciones">
              <a className="boton" href={DESCARGA}>
                {t.descargar}
              </a>
              <a className="boton boton-suave" href={RELEASE}>
                {t.instalar.notas}
              </a>
              <a className="boton boton-suave" href={REPO}>
                {t.instalar.codigo}
              </a>
            </div>
          </div>
          <div>
            <h2>{t.requisitos.titulo}</h2>
            <ul>
              {t.requisitos.lista.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="nota">{t.requisitos.probado}</p>
          </div>
        </section>

        <Gracias programa="trasfondo" idioma={idioma} />

        <section className="seccion seccion-dash" aria-labelledby="dash">
          <h2 id="dash">{t.dash.titulo}</h2>
          <p className="medida">{t.dash.texto}</p>
          <a href={`https://dash.freemem.space${raiz}`}>{t.dash.enlace}</a>
        </section>
      </main>
      <Pie idioma={idioma} enlaces={t.pie} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }} />
    </>
  );
}

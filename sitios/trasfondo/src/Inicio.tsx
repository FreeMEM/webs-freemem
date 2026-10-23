import { Cabecera, Pie, VentanaWB, VideoYouTube, datosPrograma, type Idioma } from "retro";

import { CONTENIDO, DESCARGA, RELEASE, REPO, VIDEO, VERSION, BASE } from "./contenido";
import { EscritorioVivo } from "./EscritorioVivo";

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

        <section className="seccion seccion-panel" aria-labelledby="que-ensena">
          <div>
            <h2 id="que-ensena">{t.panel.titulo}</h2>
            <p>{t.panel.texto}</p>
            <dl className="lista-panel">
              {t.panel.cosas.map((c) => (
                <div key={c.que}>
                  <dt>{c.que}</dt>
                  <dd>{c.como}</dd>
                </div>
              ))}
            </dl>
          </div>
          <VentanaWB titulo="Workbench Screen">
            <img src="/imagenes/aga-panel.webp" width={1280} height={1024} alt={t.panel.imagen} loading="lazy" />
          </VentanaWB>
        </section>

        <section className="seccion seccion-cuelgue" aria-labelledby="cuelgues">
          <h2 id="cuelgues">{t.cuelgue.titulo}</h2>
          <p className="frase">{t.cuelgue.frase}</p>
          <p>{t.cuelgue.texto}</p>
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
            <VentanaWB titulo={t.eliges.prefs}>
              <img src="/imagenes/aga-prefs-ventana.webp" width={664} height={808} alt={t.eliges.prefs} loading="lazy" />
            </VentanaWB>
            <VentanaWB titulo="Exchange">
              <img src="/imagenes/aga-exchange-ventana.webp" width={922} height={940} alt={t.eliges.exchange} loading="lazy" />
            </VentanaWB>
          </div>
        </section>

        <section className="seccion" id="video" aria-labelledby="titulo-video">
          <h2 id="titulo-video">{t.video.titulo}</h2>
          <p className="medida">{t.video.texto}</p>
          <VideoYouTube id={VIDEO} titulo={t.video.titulo_video} portada="/imagenes/video.jpg" textoBoton={t.video.boton} />
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

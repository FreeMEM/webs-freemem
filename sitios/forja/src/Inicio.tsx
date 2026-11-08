import { Gracias, Cabecera, Pie, VideoYouTube, datosPrograma, type Idioma } from "retro";

import { BASE, CAPTURAS, CONTENIDO, DESCARGA, FORJA_RELEASE, FORJA_VERSION, FRAGUA, RELEASE, REPO, VIDEO } from "./contenido";
import { Fragua } from "./Fragua";
import { VentanaForja } from "./VentanaForja";

export function Inicio({ idioma }: { idioma: Idioma }) {
  const t = CONTENIDO[idioma];
  const raiz = idioma === "es" ? "/" : "/en/";
  // la versión de Forja; la descarga, el paquete de Dash que la trae
  const datos = datosPrograma({
    nombre: "Forja",
    descripcion: t.descripcion,
    url: `${BASE}${raiz}`,
    version: FORJA_VERSION,
    descarga: DESCARGA,
    requisitos: "AmigaOS 3.0+, 68020+, MUI 3.8 o 5, Dash 2.2+",
    imagen: `${BASE}/og.png`,
    idioma,
    codigo: REPO,
    categoria: "DeveloperApplication",
  });

  return (
    <>
      <Cabecera actual="forja" idioma={idioma} rutaOtroIdioma={idioma === "es" ? "/en/" : "/"} />
      <main>
        <Fragua etiqueta="Forja">
          <div className="portada-texto">
            <h1>
              <button type="button" className="yunque" title={t.golpe} aria-label={t.golpe}>
                <img src="/icono.png" width={160} height={104} alt="" />
              </button>
              <span>Forja</span>
            </h1>
            <p className="lema">{t.lema}</p>
            <p className="portada-entrada">{t.texto}</p>
            <div className="acciones">
              <a className="boton" href={DESCARGA}>
                {t.descargar}
              </a>
              <a className="boton boton-suave" href={REPO}>
                {t.codigo}
              </a>
            </div>
            <p className="peso">{t.peso}</p>
            <p className="peso">
              {t.sola[0]} <a href={FORJA_RELEASE}>{t.sola[1]}</a> {t.sola[2]}
            </p>
            <p className="aviso">{t.prueba}</p>
          </div>
          <VentanaForja idioma={idioma} pie={t.esquema} />
        </Fragua>

        <section className="seccion" id="video" aria-labelledby="titulo-video">
          <h2 id="titulo-video">{t.video.titulo}</h2>
          <p className="medida">{t.video.texto}</p>
          <VideoYouTube id={VIDEO[idioma]} titulo={t.video.titulo_video} portada={`/imagenes/video-${idioma}.jpg`} textoBoton={t.video.boton} />
        </section>

        <section className="seccion" aria-labelledby="ventana">
          <h2 id="ventana">{t.ventana.titulo}</h2>
          <p className="medida">{t.ventana.texto}</p>
          <dl className="rejilla">
            {t.ventana.lista.map(([que, como]) => (
              <div key={que}>
                <dt>{que}</dt>
                <dd>{como}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="seccion seccion-teclas" aria-labelledby="teclas">
          <h2 id="teclas">{t.teclas.titulo}</h2>
          <p className="medida">{t.teclas.texto}</p>
          <ul className="teclas">
            {t.teclas.lista.map(([tecla, que]) => (
              <li key={tecla}>
                <kbd>{tecla}</kbd>
                <span>{que}</span>
              </li>
            ))}
          </ul>
          <p className="medida">{t.teclas.cerrar}</p>
        </section>

        <section className="seccion seccion-doble" aria-labelledby="depurador">
          <div>
            <h2 id="depurador">{t.depurador.titulo}</h2>
            <p>{t.depurador.texto}</p>
            <ul className="teclas teclas-depurador">
              {t.depurador.lista.map(([tecla, que]) => (
                <li key={tecla}>
                  <kbd>{tecla}</kbd>
                  <span>{que}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="nota-tecnica">
            <p>{t.depurador.como}</p>
            <p>{t.depurador.limite}</p>
          </div>
        </section>

        <section className="seccion" aria-labelledby="disenador">
          <h2 id="disenador">{t.disenador.titulo}</h2>
          <div className="columnas">
            <p>{t.disenador.texto}</p>
            <p>{t.disenador.vista}</p>
            <p>
              {t.disenador.formato} <a href={`https://dash.freemem.space${raiz}`}>{t.disenador.enlace}</a>
            </p>
          </div>
        </section>

        <section className="seccion" aria-labelledby="sprites">
          <h2 id="sprites">{t.sprites.titulo}</h2>
          <p className="medida">{t.sprites.texto}</p>
          <figure className="captura">
            <img src={CAPTURAS.sprites[idioma]} width={1024} height={768} alt={t.sprites.alt} loading="lazy" />
            <figcaption>{t.sprites.pie}</figcaption>
          </figure>
          <dl className="rejilla">
            {t.sprites.lista.map(([que, como]) => (
              <div key={que}>
                <dt>{que}</dt>
                <dd>{como}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="seccion" aria-labelledby="mapas">
          <h2 id="mapas">{t.mapas.titulo}</h2>
          <p className="medida">{t.mapas.texto}</p>
          <figure className="captura">
            <img src={CAPTURAS.mapas[idioma]} width={1024} height={768} alt={t.mapas.alt} loading="lazy" />
            <figcaption>{t.mapas.pie}</figcaption>
          </figure>
          <dl className="rejilla">
            {t.mapas.lista.map(([que, como]) => (
              <div key={que}>
                <dt>{que}</dt>
                <dd>{como}</dd>
              </div>
            ))}
          </dl>
          <p className="medida nota-fichero">{t.mapas.fichero}</p>
        </section>

        <section className="seccion" aria-labelledby="fragua">
          <h2 id="fragua">{t.fragua.titulo}</h2>
          <p className="medida">{t.fragua.texto}</p>
          <div className="seccion-doble fragua-estado">
            <div>
              <h3>{t.fragua.hechoTitulo}</h3>
              <ul className="lista">
                {t.fragua.hecho.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
            <div className="nota-tecnica">
              <h3>{t.fragua.planTitulo}</h3>
              <ul className="lista">
                {t.fragua.plan.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="enlaces-fragua">
            <a className="enlace-topaz" href={FRAGUA}>
              {t.fragua.enlace}
            </a>
            <a href={`${REPO}/blob/main/docs/JUEGOS_DISENO.md`}>{t.fragua.diseno}</a>
          </p>
        </section>

        <section className="seccion seccion-inferencia" aria-labelledby="inferencia">
          <img src="/familia/inferencia.png" width={80} height={52} alt="" />
          <div>
            <h2 id="inferencia">{t.inferencia.titulo}</h2>
            <p className="medida">{t.inferencia.texto}</p>
            <p className="medida">{t.inferencia.cambios}</p>
            <a className="enlace-topaz" href={`https://inferencia.freemem.space${raiz}`}>
              {t.inferencia.enlace}
            </a>
          </div>
        </section>

        <section className="seccion" aria-labelledby="arexx">
          <h2 id="arexx">{t.arexx.titulo}</h2>
          <p className="medida">{t.arexx.texto}</p>
          <dl className="ordenes">
            {t.arexx.lista.map(([orden, que]) => (
              <div key={orden}>
                <dt>
                  <code>{orden}</code>
                </dt>
                <dd>{que}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="seccion seccion-doble" aria-labelledby="requisitos">
          <div>
            <h2 id="requisitos">{t.requisitos.titulo}</h2>
            <ul className="lista">
              {t.requisitos.lista.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p>{t.requisitos.instalar}</p>
            <div className="acciones">
              <a className="boton" href={DESCARGA}>
                {t.descargar}
              </a>
              <a className="boton boton-suave" href={RELEASE}>
                {t.requisitos.notas}
              </a>
            </div>
          </div>
          <div>
            <h2 id="prueba">{t.prueba2.titulo}</h2>
            <p>{t.prueba2.texto}</p>
            <ul className="lista">
              {t.prueba2.lista.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <a href={`${REPO}/issues`}>{t.prueba2.avisos}</a>
          </div>
        </section>

        <Gracias programa="forja" idioma={idioma} />

        <section className="seccion seccion-dash" aria-labelledby="dash">
          <h2 id="dash">{t.dash.titulo}</h2>
          <p className="medida">{t.dash.texto}</p>
          <a className="enlace-topaz" href={`https://dash.freemem.space${raiz}`}>
            {t.dash.enlace}
          </a>
        </section>
      </main>
      <Pie idioma={idioma} enlaces={t.pie} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }} />
    </>
  );
}

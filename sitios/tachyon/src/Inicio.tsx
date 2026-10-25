import { Cabecera, Pie, VideoYouTube, datosPrograma, type Idioma } from "retro";

import { BASE, CONTENIDO, DESCARGA, RELEASE, REPO, VERSION, VIDEO } from "./contenido";
import { Estrellas } from "./Estrellas";

export function Inicio({ idioma }: { idioma: Idioma }) {
  const t = CONTENIDO[idioma];
  const raiz = idioma === "es" ? "/" : "/en/";
  const datos = datosPrograma({
    nombre: "Tachyon",
    descripcion: t.descripcion,
    url: `${BASE}${raiz}`,
    descarga: DESCARGA,
    version: VERSION,
    requisitos: "AmigaOS 3.2 (3.5/3.9), 68020+FPU, MUI 3.8/5, TCP/IP, AmiSSL 5.1+",
    imagen: `${BASE}/og.png`,
    idioma,
    codigo: REPO,
    categoria: "BrowserApplication",
  });

  return (
    <>
      <Cabecera actual="tachyon" idioma={idioma} rutaOtroIdioma={idioma === "es" ? "/en/" : "/"} />
      <main>
        <section className="portada">
          <Estrellas />
          <div className="portada-texto">
            <h1>
              <img src="/logo.svg" width={580} height={128} alt="Tachyon" />
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
              <a className="boton boton-suave" href="#video">
                {t.verVideo}
              </a>
            </div>
            <p className="peso">{t.peso}</p>
            <p className="aviso-alfa">{t.alfa}</p>
          </div>
          <figure className="portada-captura">
            <img src="/imagenes/tachyon-05.webp" width={1024} height={768} alt={t.portadaAlt} fetchPriority="high" />
          </figure>
        </section>

        <section className="seccion" id="video" aria-labelledby="titulo-video">
          <h2 id="titulo-video">{t.video.titulo}</h2>
          <p className="medida">{t.video.texto}</p>
          <VideoYouTube id={VIDEO[idioma]} titulo={t.video.titulo_video} portada={`/imagenes/video-${idioma}.jpg`} textoBoton={t.video.boton} />
        </section>

        <section className="seccion seccion-motor" aria-labelledby="motor">
          <h2 id="motor">{t.motor.titulo}</h2>
          <p className="medida">{t.motor.texto}</p>
          <dl className="motor">
            {t.motor.lista.map(([que, como]) => (
              <div key={que}>
                <dt>{que}</dt>
                <dd>{como}</dd>
              </div>
            ))}
          </dl>
          <p className="acid">{t.motor.acid}</p>
        </section>

        <section className="seccion" aria-labelledby="navegador">
          <h2 id="navegador">{t.navegador.titulo}</h2>
          <p className="medida">{t.navegador.texto}</p>
          <p className="medida">{t.navegador.actualiza}</p>
          <div className="pareja">
            <figure>
              <img src="/imagenes/amigaworld.webp" width={1400} height={992} alt={t.navegador.amigaworld} loading="lazy" />
              <figcaption>{t.navegador.amigaworld}</figcaption>
            </figure>
            <figure>
              <img src="/imagenes/coffin-freemem.webp" width={1600} height={1207} alt={t.coffinAlt} loading="lazy" />
              <figcaption>{t.coffinAlt}</figcaption>
            </figure>
          </div>
        </section>

        <section className="seccion seccion-doble" aria-labelledby="alfa">
          <div>
            <h2 id="alfa">{t.alfaSeccion.titulo}</h2>
            <p>{t.alfaSeccion.texto}</p>
            <ul className="lista">
              {t.alfaSeccion.lista.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p>{t.alfaSeccion.informe}</p>
            <a href={`${REPO}/issues`}>{t.alfaSeccion.avisos}</a>
          </div>
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

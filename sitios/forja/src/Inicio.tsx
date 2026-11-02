import { Cabecera, Pie, datosPrograma, type Idioma } from "retro";

import { BASE, CONTENIDO, DESCARGA, RELEASE, REPO } from "./contenido";
import { Fragua } from "./Fragua";
import { VentanaForja } from "./VentanaForja";

export function Inicio({ idioma }: { idioma: Idioma }) {
  const t = CONTENIDO[idioma];
  const raiz = idioma === "es" ? "/" : "/en/";
  // sin versión propia todavía: ni versión ni descarga en los datos estructurados
  const datos = datosPrograma({
    nombre: "Forja",
    descripcion: t.descripcion,
    url: `${BASE}${raiz}`,
    requisitos: "AmigaOS 3.0+, 68020+, MUI 5, Dash 2.0.1",
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
            <p className="aviso">{t.prueba}</p>
          </div>
          <VentanaForja idioma={idioma} pie={t.esquema} />
        </Fragua>

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

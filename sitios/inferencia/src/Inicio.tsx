import { Cabecera, Pie, datosPrograma, type Idioma } from "retro";

import { BASE, CONTENIDO, DESCARGA, RELEASE, REPO } from "./contenido";
import { Conversacion } from "./Conversacion";

export function Inicio({ idioma }: { idioma: Idioma }) {
  const t = CONTENIDO[idioma];
  const raiz = idioma === "es" ? "/" : "/en/";
  // sin versión propia todavía: ni versión ni descarga en los datos estructurados
  const datos = datosPrograma({
    nombre: "Inferencia",
    descripcion: t.descripcion,
    url: `${BASE}${raiz}`,
    requisitos: "AmigaOS 3.0+, 68020+, MUI 5, TCP/IP, AmiSSL 5",
    imagen: `${BASE}/og.png`,
    idioma,
    codigo: REPO,
  });

  return (
    <>
      <Cabecera actual="inferencia" idioma={idioma} rutaOtroIdioma={idioma === "es" ? "/en/" : "/"} />
      <main>
        <section className="portada">
          <div className="portada-texto">
            <h1>
              <img src="/icono.png" width={120} height={78} alt="" />
              <span>Inferencia</span>
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
            <p className="peso">{t.prueba}</p>
          </div>
          <Conversacion idioma={idioma} pie={t.demo.pie} otraVez={t.demo.otraVez} resultado={t.demo.resultado} />
        </section>

        <section className="seccion" aria-labelledby="herramientas">
          <h2 id="herramientas">{t.herramientas.titulo}</h2>
          <p className="medida">{t.herramientas.texto}</p>
          <div className="tabla-marco">
            <table className="tabla">
              <thead>
                <tr>
                  {t.herramientas.cabecera.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.herramientas.lista.map(([nombre, que, pregunta]) => (
                  <tr key={nombre}>
                    <th scope="row">
                      <code>{nombre}</code>
                    </th>
                    <td>{que}</td>
                    <td className={pregunta === "No" ? "no-pregunta" : "pregunta"} data-titulo={t.herramientas.cabecera[2]}>
                      {pregunta}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="seccion seccion-doble" aria-labelledby="permiso">
          <div>
            <h2 id="permiso">{t.permiso.titulo}</h2>
            <p>{t.permiso.texto}</p>
          </div>
          <div className="caja">
            <p>{t.permiso.siempre}</p>
            <p>{t.permiso.vueltas}</p>
          </div>
        </section>

        <section className="seccion" aria-labelledby="proveedores">
          <h2 id="proveedores">{t.proveedores.titulo}</h2>
          <p className="medida">{t.proveedores.texto}</p>
          <dl className="rejilla">
            {t.proveedores.lista.map(([que, como]) => (
              <div key={que} className="caja">
                <dt>{que}</dt>
                <dd>{como}</dd>
              </div>
            ))}
          </dl>
          <p className="medida nota">{t.proveedores.nota}</p>
        </section>

        <section className="seccion" aria-labelledby="uso">
          <h2 id="uso">{t.uso.titulo}</h2>
          <ul className="lista lista-ancha">
            {t.uso.lista.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>

        <section className="seccion seccion-forja" aria-labelledby="forja">
          <img src="/familia/forja.png" width={80} height={52} alt="" />
          <div>
            <h2 id="forja">{t.forja.titulo}</h2>
            <p className="medida">{t.forja.texto}</p>
            <a className="enlace-topaz" href={`https://forja.freemem.space${raiz}`}>
              {t.forja.enlace}
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
            <p>{t.requisitos.clave}</p>
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

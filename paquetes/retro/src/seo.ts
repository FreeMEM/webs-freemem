import type { Metadata } from "next";

import type { Idioma } from "./familia";

/**
 * Los metadatos de una página en sus dos idiomas: título, descripción, la URL canónica, las alternativas por
 * idioma (hreflang), Open Graph y la tarjeta de X/Twitter.
 */
export function metadatos({
  base,
  ruta = "/",
  idioma,
  titulo,
  descripcion,
  imagen,
  nombreSitio,
}: {
  base: string;
  ruta?: string;
  idioma: Idioma;
  titulo: string;
  descripcion: string;
  imagen: string;
  nombreSitio: string;
}): Metadata {
  const es = new URL(ruta, base).toString();
  const en = new URL(`/en${ruta === "/" ? "/" : ruta}`, base).toString();
  const url = idioma === "es" ? es : en;
  return {
    metadataBase: new URL(base),
    title: titulo,
    description: descripcion,
    alternates: { canonical: url, languages: { es, en, "x-default": es } },
    openGraph: {
      type: "website",
      url,
      siteName: nombreSitio,
      title: titulo,
      description: descripcion,
      locale: idioma === "es" ? "es_ES" : "en_GB",
      alternateLocale: idioma === "es" ? "en_GB" : "es_ES",
      images: [{ url: imagen, width: 1200, height: 630, alt: titulo }],
    },
    twitter: { card: "summary_large_image", title: titulo, description: descripcion, images: [imagen] },
    robots: { index: true, follow: true },
  };
}

/** Datos estructurados (schema.org) de un programa: para que los buscadores sepan qué es y dónde se baja. */
export function datosPrograma({
  nombre,
  descripcion,
  url,
  descarga,
  version,
  requisitos,
  imagen,
  idioma,
  codigo,
  categoria = "UtilitiesApplication",
}: {
  nombre: string;
  descripcion: string;
  url: string;
  descarga?: string;
  version?: string;
  requisitos: string;
  imagen: string;
  idioma: Idioma;
  codigo: string;
  categoria?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: nombre,
    description: descripcion,
    url,
    image: imagen,
    applicationCategory: categoria,
    operatingSystem: "AmigaOS 3.x",
    softwareRequirements: requisitos,
    ...(version ? { softwareVersion: version } : {}),
    ...(descarga ? { downloadUrl: descarga } : {}),
    inLanguage: idioma,
    license: "https://opensource.org/licenses/MIT",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    author: { "@type": "Person", name: "Francisco Antonio Tapias Bravo", alternateName: "FreeMEM", url: "https://freemem.space" },
    codeRepository: codigo,
  };
}

import type { MetadataRoute } from "next";

import { BASE } from "@/contenido";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const idiomas = { languages: { es: `${BASE}/`, en: `${BASE}/en/` } };
  return [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: idiomas },
    { url: `${BASE}/en/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9, alternates: idiomas },
  ];
}

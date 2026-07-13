import type { MetadataRoute } from "next";

/*
 * Sitemap de Barbara Ocasión.
 * Next.js genera automáticamente /sitemap.xml en producción.
 *
 * ⚠️ IMPORTANTE: Cuando se obtenga el dominio personalizado,
 * actualiza BASE_URL con la URL definitiva, ej:
 *   const BASE_URL = "https://barbaraocasion.com";
 */
const BASE_URL = "https://barbara-ocasi-n.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/eventos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/inversion`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

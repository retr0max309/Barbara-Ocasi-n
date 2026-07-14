import type { MetadataRoute } from "next";

/*
 * robots.ts — le dice a los buscadores (Googlebot, Bingbot, etc.)
 * qué partes del sitio pueden rastrear.
 *
 * ⚠️ IMPORTANTE: Actualiza ambas URLs cuando se obtenga el dominio personalizado.
 */
const BASE_URL = "https://www.barbaraocasion.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Next.js maneja /_next/ internamente, no necesitan ser rastreadas
      disallow: "/_next/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

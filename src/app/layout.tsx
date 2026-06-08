import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barbara Ocasión — Salón de Eventos en Sucre",
  description:
    "Salón de eventos de lujo en Sucre, Bolivia. Bodas, 15 años, eventos corporativos y más. Capacidad para 200 personas. Salón · Jardín · Lounge.",
  openGraph: {
    title: "Barbara Ocasión — Salón de Eventos en Sucre",
    description:
      "Experiencias exclusivas para tus momentos más importantes. Bodas, 15 años, corporativos y más. Sucre, Bolivia.",
    type: "website",
    locale: "es_BO",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Barbara Ocasión",
  description:
    "Salón de eventos de lujo en Sucre, Bolivia. Capacidad para 200 personas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Padre Sanauja Nº2",
    addressLocality: "Sucre",
    addressCountry: "BO",
  },
  telephone: "+59163026011",
  maximumAttendeeCapacity: 200,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jost.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

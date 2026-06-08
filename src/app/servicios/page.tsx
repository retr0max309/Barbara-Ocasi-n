import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiciosSection from "@/components/sections/ServiciosSection";
import { TextReveal } from "@/components/motion/TextReveal";

export const metadata: Metadata = {
  title: "Servicios — Barbara Ocasión | Salón de Eventos en Sucre, Bolivia",
  description:
    "Floristería, coctelería artesanal y coordinación integral de eventos. Descubre los servicios premium que hacen de Barbara Ocasión el escenario perfecto para tu celebración.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero de página ─────────────────────────────────── */}
        <section
          style={{
            minHeight: "62vh",
            backgroundColor: "var(--color-ink)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "clamp(7rem, 12vw, 10rem)",
            paddingBottom: "clamp(4rem, 8vw, 7rem)",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Línea decorativa superior */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(to right, transparent, var(--color-gold), transparent)",
              opacity: 0.25,
            }}
          />

          <div className="container flex flex-col items-center justify-center text-center">
            {/* Eyebrow dorado */}
            <p
              className="font-body uppercase tracking-[0.32em]"
              style={{
                fontSize: "0.68rem",
                color: "var(--color-gold)",
                marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
                paddingLeft: "0.32em",
              }}
            >
              Nuestros Servicios
            </p>

            {/* Titular principal */}
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 8rem)",
                lineHeight: 0.95,
                color: "var(--color-cream)",
                marginBottom: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              <TextReveal
                lines={["Todo lo que", "necesitas,", "en un solo lugar."]}
                stagger={0.14}
              />
            </h1>

            {/* Descriptor con líneas doradas */}
            <div className="flex items-center justify-center gap-5">
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "32px",
                  height: "1px",
                  backgroundColor: "var(--color-gold)",
                  opacity: 0.5,
                  flexShrink: 0,
                }}
              />
              <p
                className="font-body uppercase tracking-[0.28em]"
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(240,236,226,0.5)",
                  paddingLeft: "0.28em",
                }}
              >
                Floristería · Coctelería · Organización
              </p>
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "32px",
                  height: "1px",
                  backgroundColor: "var(--color-gold)",
                  opacity: 0.5,
                  flexShrink: 0,
                }}
              />
            </div>
          </div>
        </section>

        {/* ── Contenido de servicios ──────────────────────────── */}
        <ServiciosSection />

      </main>
      <Footer />
    </>
  );
}

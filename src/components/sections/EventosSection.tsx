"use client";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { FadeUp } from "@/components/motion/FadeUp";
import { TextReveal } from "@/components/motion/TextReveal";

const basePath =
  process.env.NODE_ENV === "production" ? "/Barbara-Ocasi-n" : "";

/* ── Fotos del salón — todas las imágenes disponibles ── */
const FOTOS = [
  { src: `${basePath}/eventosImagesVideo/IMG_6230-opt.webp`,       alt: "Salón en Barbara Ocasión"            },
  { src: `${basePath}/eventosImagesVideo/IMG_7801.webp`,           alt: "Decoración en Barbara Ocasión"       },
  { src: `${basePath}/eventosImagesVideo/imagen-3-bo-opt.webp`,    alt: "Mesa decorada Barbara Ocasión"       },
  { src: `${basePath}/eventosImagesVideo/imagen-4-bo-opt.webp`,    alt: "Detalle de evento"                   },
] as const;

export default function EventosSection() {
  return (
    <section id="eventos" style={{ backgroundColor: "#ffffff" }}>

      {/* ── Encabezado ──────────────────────────────────────── */}
      <div
        className="container flex flex-col items-center"
        style={{
          paddingTop: "clamp(6rem, 12vw, 10rem)",
          paddingBottom: "clamp(3.5rem, 7vw, 6rem)",
          textAlign: "center",
        }}
      >
        <FadeUp>
          <div
            className="flex items-center justify-center gap-4"
            style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            <span
              style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--color-gold)", opacity: 0.55 }}
              aria-hidden="true"
            />
            <span
              className="font-body uppercase tracking-[0.36em]"
              style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-gold)", paddingLeft: "0.36em" }}
            >
              Nuestros Eventos
            </span>
            <span
              style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--color-gold)", opacity: 0.55 }}
              aria-hidden="true"
            />
          </div>
        </FadeUp>

        <h2
          className="font-display"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            lineHeight: 1.04,
            color: "var(--color-ink)",
            marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
          }}
        >
          <TextReveal
            lines={["El escenario perfecto", "para cada historia."]}
            stagger={0.12}
          />
        </h2>

        <FadeUp delay={0.2}>
          <p
            className="font-body mx-auto text-center"
            style={{
              fontSize: "clamp(0.9rem, 1vw, 1.05rem)",
              lineHeight: 1.8,
              color: "var(--color-faint)",
              maxWidth: "54ch",
            }}
          >
            Desde bodas íntimas hasta grandes celebraciones, adaptamos cada
            espacio y detalle para que tu evento sea exactamente como lo imaginas.
          </p>
        </FadeUp>
      </div>

      {/* ── Galería de fotos editorial con Video ───────────────────────── */}
      <div
        className="container"
        style={{ paddingBottom: "clamp(6rem, 12vw, 10rem)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 md:gap-8">
          
          {/* Columna Izquierda: Video nuevo */}
          <FadeUp>
            <div className="w-full h-full relative overflow-hidden" style={{ minHeight: "500px", borderRadius: "8px" }}>
              <video
                src={`${basePath}/eventosImagesVideo/IMG_6649.mp4`}
                autoPlay
                muted
                playsInline
                preload="auto"
                loop
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </FadeUp>

          {/* Columna Derecha: Galería de Imágenes */}
          <div className="flex flex-col gap-4">
            {/* Fila 1: imagen grande izquierda + 2 apiladas derecha */}
            <div
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr]"
              style={{ gap: "clamp(0.5rem, 1vw, 1rem)" }}
            >
              {/* Grande — proporción portrait */}
              <ImageReveal
                src={FOTOS[0].src}
                alt={FOTOS[0].alt}
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ aspectRatio: "3/4" }}
                priority={true}
              />

              {/* Columna derecha: 1 imagen que iguala el alto de la izquierda */}
              <ImageReveal
                src={FOTOS[1].src}
                alt={FOTOS[1].alt}
                delay={0.07}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="w-full aspect-[4/5] md:aspect-auto md:h-full"
              />
            </div>

            {/* Fila 2: 2 columnas iguales */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{ gap: "clamp(0.5rem, 1vw, 1rem)" }}
            >
              {FOTOS.slice(2).map((foto, i) => (
                <ImageReveal
                  key={foto.src}
                  src={foto.src}
                  alt={foto.alt}
                  delay={i * 0.08}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{ aspectRatio: "4/5" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

"use client";
import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { TextReveal } from "@/components/motion/TextReveal";
import { TextArrowButton } from "@/components/motion/TextArrowButton";
import { SITE } from "@/data/content";

const basePath =
  process.env.NODE_ENV === "production" ? "/Barbara-Ocasi-n" : "";

/* ── Fotos del salón — todas las imágenes disponibles ── */
const FOTOS = [
  { src: `${basePath}/eventosImages/eventosBoda.jpg`,        alt: "Boda en Barbara Ocasión",             size: "tall"   },
  { src: `${basePath}/eventosImages/eventos15años.jpg`,      alt: "15 Años en Barbara Ocasión",          size: "tall"   },
  { src: `${basePath}/eventosImages/eventosAdultos.jpg`,     alt: "Cumpleaños adultos en el salón",      size: "normal" },
  { src: `${basePath}/eventosImages/eventosInfantil.jpg`,    alt: "Fiesta infantil Barbara Ocasión",     size: "normal" },
  { src: `${basePath}/eventosImages/eventosAniversarios.jpg`,alt: "Aniversario en Barbara Ocasión",      size: "normal" },
  { src: `${basePath}/eventosImages/imgEventos.jpg`,         alt: "Evento especial en Barbara Ocasión",  size: "wide"   },
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
              style={{
                display: "block",
                width: "40px",
                height: "1px",
                backgroundColor: "var(--color-gold)",
                opacity: 0.55,
              }}
              aria-hidden="true"
            />
            <span
              className="font-body uppercase tracking-[0.36em]"
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--color-gold)",
                paddingLeft: "0.36em",
              }}
            >
              Nuestros Eventos
            </span>
            <span
              style={{
                display: "block",
                width: "40px",
                height: "1px",
                backgroundColor: "var(--color-gold)",
                opacity: 0.55,
              }}
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

      {/* ── Galería de fotos editorial ───────────────────────── */}
      <div
        className="container"
        style={{ paddingBottom: "clamp(6rem, 12vw, 10rem)" }}
      >
        {/* Fila 1: imagen grande a la izquierda + 2 pequeñas a la derecha */}
        <div
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr]"
          style={{ gap: "clamp(0.5rem, 1vw, 1rem)", marginBottom: "clamp(0.5rem, 1vw, 1rem)" }}
        >
          {/* Grande */}
          <FadeUp>
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <Image
                src={FOTOS[0].src}
                alt={FOTOS[0].alt}
                fill
                className="object-cover hover-scale"
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}
              />
            </div>
          </FadeUp>
          {/* Columna derecha: 2 imágenes apiladas */}
          <div
            className="grid grid-cols-1"
            style={{ gap: "clamp(0.5rem, 1vw, 1rem)" }}
          >
            <FadeUp delay={0.07}>
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image
                  src={FOTOS[1].src}
                  alt={FOTOS[1].alt}
                  fill
                  className="object-cover hover-scale"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.14}>
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image
                  src={FOTOS[2].src}
                  alt={FOTOS[2].alt}
                  fill
                  className="object-cover hover-scale"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}
                />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Fila 2: 3 columnas iguales */}
        <FadeUp delay={0.1}>
          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ gap: "clamp(0.5rem, 1vw, 1rem)" }}
          >
            {FOTOS.slice(3).map((foto, i) => (
              <div
                key={foto.src}
                style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  className="object-cover hover-scale"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  style={{ transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}
                />
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

    </section>
  );
}

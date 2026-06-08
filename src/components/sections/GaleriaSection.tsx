"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EASE_GUCCI } from "@/lib/motion";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextArrowButton } from "@/components/motion/TextArrowButton";
import { FadeUp } from "@/components/motion/FadeUp";
import { GALERIA, GALERIA_FILTROS, SITE } from "@/data/content";

/* ─── Aspect ratios según el "size" de cada pieza ─── */
const ASPECT: Record<"tall" | "wide" | "normal", string> = {
  tall:   "3 / 4",
  wide:   "16 / 9",
  normal: "4 / 3",
};

/* ─── Columnas que ocupa cada tamaño en el grid ─── */
const COL_SPAN: Record<"tall" | "wide" | "normal", string> = {
  tall:   "span 1",
  wide:   "span 2",
  normal: "span 1",
};

export default function GaleriaSection() {
  const [activo, setActivo] = useState("todos");

  const filtradas =
    activo === "todos"
      ? GALERIA
      : GALERIA.filter((img) => img.categoria === activo);

  return (
    <section id="galeria" style={{ backgroundColor: "#ffffff" }}>

      {/* ── Barra de filtros ─────────────────────────────────── */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(5rem, 10vw, 8rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        {/* Contador */}
        <FadeUp>
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            <p
              className="font-body uppercase tracking-[0.28em]"
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                color: "var(--color-gold)",
                paddingLeft: "0.28em",
              }}
            >
              {filtradas.length} {filtradas.length === 1 ? "imagen" : "imágenes"}
            </p>

            <div
              aria-hidden="true"
              style={{
                height: "1px",
                flex: 1,
                marginInline: "clamp(1.5rem, 3vw, 2.5rem)",
                backgroundColor: "rgba(14,13,31,0.08)",
              }}
            />

            <p
              className="font-body uppercase tracking-[0.28em]"
              style={{
                fontSize: "0.65rem",
                color: "var(--color-faint)",
                paddingLeft: "0.28em",
              }}
            >
              Barbara Ocasión
            </p>
          </div>
        </FadeUp>

        {/* Filtros */}
        <FadeUp delay={0.1}>
          <div
            role="tablist"
            aria-label="Filtrar por categoría"
            className="flex flex-wrap items-center gap-2"
            style={{ justifyContent: "flex-start" }}
          >
            {GALERIA_FILTROS.map((f) => {
              const isActive = f.id === activo;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={isActive}
                  id={`filter-${f.id}`}
                  onClick={() => setActivo(f.id)}
                  className="font-body uppercase relative"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.28em",
                    paddingLeft: "0.28em",
                    padding: "0.6rem 1.4rem",
                    border: `1px solid ${isActive ? "var(--color-gold)" : "rgba(14,13,31,0.15)"}`,
                    backgroundColor: isActive ? "var(--color-ink)" : "transparent",
                    color: isActive ? "var(--color-gold)" : "var(--color-faint)",
                    cursor: "pointer",
                    transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </FadeUp>
      </div>

      {/* ── Grid de imágenes ─────────────────────────────────── */}
      <div
        className="container"
        style={{
          paddingBottom: "clamp(6rem, 12vw, 10rem)",
        }}
      >
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtradas.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.04,
                  ease: EASE_GUCCI,
                }}
                style={{
                  gridColumn: COL_SPAN[img.size],
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Imagen con Ken Burns */}
                <ImageReveal
                  src={img.src}
                  alt={img.alt}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ aspectRatio: ASPECT[img.size], width: "100%" }}
                  delay={i * 0.03}
                />

                {/* Overlay hover con categoría */}
                <div
                  aria-hidden="true"
                  className="galeria-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(14,13,31,0.72) 0%, transparent 55%)",
                    opacity: 0,
                    transition: "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1.25rem",
                    pointerEvents: "none",
                  }}
                >
                  <span
                    className="font-body uppercase tracking-[0.28em]"
                    style={{
                      fontSize: "0.6rem",
                      color: "var(--color-gold)",
                      paddingLeft: "0.28em",
                    }}
                  >
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mensaje vacío si no hay resultados */}
        {filtradas.length === 0 && (
          <div
            className="flex flex-col items-center text-center"
            style={{ paddingBlock: "clamp(4rem, 8vw, 7rem)" }}
          >
            <p
              className="font-body uppercase tracking-[0.28em]"
              style={{
                fontSize: "0.72rem",
                color: "var(--color-faint)",
                paddingLeft: "0.28em",
              }}
            >
              Sin imágenes en esta categoría aún
            </p>
          </div>
        )}
      </div>

      {/* ── CTA final — fondo oscuro ─────────────────────────── */}
      <div
        style={{
          backgroundColor: "var(--color-ink)",
          textAlign: "center",
          padding: "clamp(5rem, 10vw, 8rem) 1.5rem",
        }}
      >
        <FadeUp>
          <p
            className="font-body uppercase tracking-[0.32em]"
            style={{
              fontSize: "0.7rem",
              color: "var(--color-gold)",
              paddingLeft: "0.32em",
              marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
              marginInline: "auto",
            }}
          >
            Agenda tu Visita
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1,
              color: "var(--color-cream)",
              marginBottom: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Tu celebración también<br />merece estar aquí.
          </h2>
          <TextArrowButton
            href="/inversion"
            variant="gold"
          >
            Cotiza tu evento
          </TextArrowButton>
        </FadeUp>
      </div>

    </section>
  );
}

"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { EASE_GUCCI } from "@/lib/motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextArrowButton } from "@/components/motion/TextArrowButton";
import { SERVICIOS_PRINCIPALES, INCLUIDOS, SITE } from "@/data/content";

/* ─── Animación de entrada para elementos de texto ─── */
import { FadeUp } from "@/components/motion/FadeUp";

export default function ServiciosSection() {
  return (
    <section id="servicios" style={{ backgroundColor: "#ffffff" }}>

      {/* ── Intro centrada ───────────────────────────────────── */}
      <div
        className="container flex flex-col items-center text-center"
        style={{
          paddingTop: "clamp(6rem, 12vw, 10rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        {/* Eyebrow */}
        <FadeUp>
          <div
            className="flex items-center gap-4"
            style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: "40px",
                height: "1px",
                backgroundColor: "var(--color-gold)",
                opacity: 0.55,
              }}
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
              Lo Que Ofrecemos
            </span>
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: "40px",
                height: "1px",
                backgroundColor: "var(--color-gold)",
                opacity: 0.55,
              }}
            />
          </div>
        </FadeUp>

        {/* Título */}
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
            lines={["Cada detalle,", "impecablemente cuidado."]}
            stagger={0.12}
          />
        </h2>

        {/* Descriptor */}
        <FadeUp delay={0.3}>
          <p
            className="font-body mx-auto text-center"
            style={{
              fontSize: "clamp(0.9rem, 1vw, 1.05rem)",
              lineHeight: 1.8,
              color: "var(--color-faint)",
              maxWidth: "54ch",
              textWrap: "balance",
            }}
          >
            Desde la primera flor hasta el último cóctel, nuestro equipo gestiona cada aspecto de tu celebración para que solo te preocupes de disfrutar.
          </p>
        </FadeUp>
      </div>

      {/* ── Servicios principales — alternando imagen/texto ── */}
      <div
        className="container"
        style={{ paddingBottom: "clamp(5rem, 10vw, 8rem)" }}
      >
        {SERVICIOS_PRINCIPALES.map((servicio, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={servicio.id}
              style={{
                marginBottom:
                  i < SERVICIOS_PRINCIPALES.length - 1
                    ? "clamp(5rem, 10vw, 9rem)"
                    : 0,
              }}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 items-center"
                style={{ gap: "clamp(3rem, 6vw, 7rem)" }}
              >
                {/* Imagen — izquierda en par, derecha en impar */}
                <div
                  style={{ order: isEven ? 0 : 1 }}
                  className="w-full"
                >
                  <ImageReveal
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ aspectRatio: "4 / 3", width: "100%" }}
                    delay={0.1}
                  />
                </div>

                {/* Texto */}
                <div
                  style={{ order: isEven ? 1 : 0 }}
                >
                  <FadeUp delay={0.15}>
                    {/* Número del servicio */}
                    <span
                      className="font-body block"
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        letterSpacing: "0.32em",
                        color: "var(--color-gold)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      0{i + 1}
                    </span>

                    {/* Título del servicio */}
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                        lineHeight: 0.95,
                        color: "var(--color-ink)",
                        marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
                      }}
                    >
                      {servicio.titulo}
                    </h3>

                    {/* Línea divisora */}
                    <div
                      aria-hidden="true"
                      style={{
                        width: "48px",
                        height: "1px",
                        backgroundColor: "var(--color-gold)",
                        opacity: 0.45,
                        marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
                      }}
                    />

                    {/* Descripción */}
                    <p
                      className="font-body"
                      style={{
                        fontSize: "clamp(0.9rem, 1vw, 1rem)",
                        lineHeight: 1.85,
                        color: "var(--color-faint)",
                        maxWidth: "44ch",
                        marginBottom: "clamp(2rem, 4vw, 3rem)",
                      }}
                    >
                      {servicio.descripcion}
                    </p>

                    {/* CTA */}
                    <TextArrowButton
                      href={SITE.whatsappMsg}
                      external
                      variant="dark"
                    >
                      Consultar servicio
                    </TextArrowButton>
                  </FadeUp>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Divisor ──────────────────────────────────────────── */}
      <div className="container">
        <div
          aria-hidden="true"
          style={{
            height: "1px",
            backgroundColor: "rgba(14,13,31,0.08)",
            marginBottom: "clamp(5rem, 10vw, 8rem)",
          }}
        />
      </div>

      {/* ── Incluido en todos los eventos — grid de íconos ─── */}
      <div
        className="container"
        style={{ paddingBottom: "clamp(6rem, 12vw, 10rem)" }}
      >
        {/* Encabezado de la sección */}
        <div
          className="flex flex-col items-center text-center"
          style={{ marginBottom: "clamp(3.5rem, 7vw, 6rem)" }}
        >
          <FadeUp>
            <p
              className="font-body uppercase tracking-[0.32em]"
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--color-gold)",
                paddingLeft: "0.32em",
                marginBottom: "1rem",
              }}
            >
              Incluido en Todos
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.05,
                color: "var(--color-ink)",
              }}
            >
              Todo lo que necesitas,<br />desde el primer momento.
            </h2>
          </FadeUp>
        </div>

        {/* Grid de ítems */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          {INCLUIDOS.map((item, i) => (
            <FadeUp key={item.titulo} delay={i * 0.08}>
              <div
                style={{
                  borderTop: "1px solid rgba(14,13,31,0.1)",
                  paddingTop: "clamp(1.25rem, 2.5vw, 2rem)",
                }}
              >
                {/* Número */}
                <span
                  className="font-body block"
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    color: "var(--color-gold)",
                    marginBottom: "1rem",
                  }}
                >
                  0{i + 1}
                </span>

                {/* Título */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                    lineHeight: 1.1,
                    color: "var(--color-ink)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.titulo}
                </h3>

                {/* Descripción */}
                <p
                  className="font-body"
                  style={{
                    fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)",
                    lineHeight: 1.7,
                    color: "var(--color-faint)",
                  }}
                >
                  {item.descripcion}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
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
            className="font-body uppercase tracking-[0.32em] text-center"
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
            Hagamos tu celebración<br />una realidad.
          </h2>
          <TextArrowButton
            href={SITE.whatsappMsg}
            external
            variant="gold"
          >
            Cotiza tu evento
          </TextArrowButton>
        </FadeUp>
      </div>

    </section>
  );
}

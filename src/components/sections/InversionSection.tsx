"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { EASE_GUCCI } from "@/lib/motion";
import { TextArrowButton } from "@/components/motion/TextArrowButton";
import { TextReveal } from "@/components/motion/TextReveal";
import { PAQUETES, SITE } from "@/data/content";

/* ─── Animación de entrada ─── */
import { FadeUp } from "@/components/motion/FadeUp";

/* ─── Icono de check dorado ─── */
function Check() {
  return (
    <svg
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: "3px" }}
    >
      <path
        d="M1 4.5L4.5 8.5L12 1"
        stroke="var(--color-gold)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function InversionSection() {
  return (
    <section id="inversion" style={{ backgroundColor: "#ffffff" }}>

      {/* ── Intro centrada ───────────────────────────────────── */}
      <div
        className="container flex flex-col items-center text-center"
        style={{
          paddingTop: "clamp(6rem, 12vw, 10rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
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
              Nuestras Colecciones
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
            lines={["Cada celebración", "tiene su colección."]}
            stagger={0.12}
          />
        </h2>

        <FadeUp delay={0.3}>
          <p
            className="font-body text-center"
            style={{
              fontSize: "clamp(0.9rem, 1vw, 1.05rem)",
              lineHeight: 1.8,
              color: "var(--color-faint)",
              maxWidth: "54ch",
              marginInline: "auto",
              textWrap: "balance",
            }}
          >
            Seleccionamos tres colecciones diseñadas para adaptarse a cada tipo
            de celebración, desde lo esencial hasta lo completamente exclusivo.
            Contáctanos y te asesoramos sin compromiso.
          </p>
        </FadeUp>
      </div>

      {/* ── Cards de paquetes ─────────────────────────────────── */}
      <div
        className="container"
        style={{ paddingBottom: "clamp(6rem, 12vw, 10rem)" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "clamp(1.25rem, 2.5vw, 2rem)", alignItems: "stretch" }}
        >
          {PAQUETES.map((pkg, i) => (
            <FadeUp key={pkg.id} delay={i * 0.12}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: pkg.destacado ? "var(--color-ink)" : "#ffffff",
                  border: pkg.destacado
                    ? "1px solid var(--color-gold)"
                    : "1px solid rgba(14,13,31,0.1)",
                  padding: "clamp(2rem, 4vw, 3.5rem)",
                  position: "relative",
                }}
              >
                {/* Badge "Más popular" en el destacado */}
                {pkg.destacado && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "var(--color-gold)",
                      padding: "0.35rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="font-body uppercase tracking-[0.28em]"
                      style={{
                        fontSize: "0.58rem",
                        color: "var(--color-ink)",
                        fontWeight: 700,
                        paddingLeft: "0.28em",
                      }}
                    >
                      Más Popular
                    </span>
                  </div>
                )}

                {/* Número de colección */}
                <span
                  className="font-body block"
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.32em",
                    color: "var(--color-gold)",
                    marginBottom: "1.25rem",
                    paddingLeft: "0.32em",
                  }}
                >
                  {pkg.coleccion}
                </span>

                {/* Nombre del paquete */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                    lineHeight: 0.95,
                    color: pkg.destacado ? "var(--color-cream)" : "var(--color-ink)",
                    marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                  }}
                >
                  {pkg.nombre}
                </h3>

                {/* Línea decorativa */}
                <div
                  aria-hidden="true"
                  style={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: "var(--color-gold)",
                    opacity: 0.5,
                    marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
                  }}
                />

                {/* Descripción */}
                <p
                  className="font-body"
                  style={{
                    fontSize: "clamp(0.85rem, 0.95vw, 0.95rem)",
                    lineHeight: 1.8,
                    color: pkg.destacado
                      ? "rgba(240,236,226,0.65)"
                      : "var(--color-faint)",
                    marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
                  }}
                >
                  {pkg.descripcion}
                </p>

                {/* Lista de características */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                    marginBottom: "clamp(2rem, 4vw, 3rem)",
                    flex: 1,
                  }}
                >
                  {pkg.caracteristicas.map((c) => (
                    <li
                      key={c}
                      className="font-body"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.9rem",
                        fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)",
                        lineHeight: 1.6,
                        color: pkg.destacado
                          ? "rgba(240,236,226,0.8)"
                          : "var(--color-faint)",
                      }}
                    >
                      <Check />
                      {c}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <TextArrowButton
                  href={pkg.whatsapp}
                  external
                  variant={pkg.destacado ? "gold" : "dark"}
                >
                  Consultar paquete
                </TextArrowButton>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Nota legal */}
        <FadeUp delay={0.4}>
          <p
            className="font-body text-center"
            style={{
              fontSize: "0.72rem",
              color: "var(--color-faint)",
              marginTop: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.7,
              maxWidth: "60ch",
              marginInline: "auto",
              opacity: 0.75,
            }}
          >
            Todos los paquetes incluyen salón principal hasta 180 personas,
            estacionamiento y seguridad. Los precios varían según la fecha,
            temporada y requerimientos específicos. Contáctanos para recibir
            una cotización personalizada sin costo.
          </p>
        </FadeUp>
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

      {/* ── Diferenciadores — por qué Barbara Ocasión ────────── */}
      <div
        className="container"
        style={{ paddingBottom: "clamp(6rem, 12vw, 10rem)" }}
      >
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
              Por Qué Elegirnos
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.05,
                color: "var(--color-ink)",
              }}
            >
              Más que un salón,<br />una experiencia completa.
            </h2>
          </FadeUp>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          {[
            {
              num: "01",
              titulo: "Coordinador Dedicado",
              texto:
                "Cada evento incluye un coordinador que gestiona cada detalle del inicio al final, para que tú solo disfrutes.",
            },
            {
              num: "02",
              titulo: "Sin Proveedores Exclusivos",
              texto:
                "Libertad total para elegir tu catering y decoración. Nosotros ponemos el espacio y el equipo profesional.",
            },
            {
              num: "03",
              titulo: "Capacidad para 180",
              texto:
                "Salón principal con iluminación profesional, jardín exterior y área lounge para una experiencia sin límites.",
            },
            {
              num: "04",
              titulo: "Paquete Personalizado",
              texto:
                "¿No encuentras lo que necesitas? La Colección III es completamente a medida, diseñada solo para ti.",
            },
            {
              num: "05",
              titulo: "Respuesta en 24 h",
              texto:
                "Te respondemos en menos de 24 horas para coordinar visita al salón y entregarte una propuesta sin costo.",
            },
            {
              num: "06",
              titulo: "Ubicación en Sucre",
              texto:
                "Padre Sanauja Nº2, con estacionamiento privado e instalaciones completamente equipadas y mantenidas.",
            },
          ].map((item, i) => (
            <FadeUp key={item.num} delay={i * 0.07}>
              <div
                style={{
                  borderTop: "1px solid rgba(14,13,31,0.1)",
                  paddingTop: "clamp(1.25rem, 2.5vw, 2rem)",
                }}
              >
                <span
                  className="font-body block"
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    color: "var(--color-gold)",
                    marginBottom: "0.9rem",
                  }}
                >
                  {item.num}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.3rem, 1.8vw, 1.7rem)",
                    lineHeight: 1.1,
                    color: "var(--color-ink)",
                    marginBottom: "0.7rem",
                  }}
                >
                  {item.titulo}
                </h3>
                <p
                  className="font-body"
                  style={{
                    fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)",
                    lineHeight: 1.7,
                    color: "var(--color-faint)",
                  }}
                >
                  {item.texto}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

    </section>
  );
}

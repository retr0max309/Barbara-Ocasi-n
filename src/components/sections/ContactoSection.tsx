"use client";
import { FadeUp } from "@/components/motion/FadeUp";
import { TextReveal } from "@/components/motion/TextReveal";
import { SITE } from "@/data/content";

/* ── Íconos inline ────────────────────────────────────────── */
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

/* ── Columna de info ─────────────────────────────────────────── */
function InfoCol({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>{icon}</span>
        <p
          className="font-body uppercase tracking-[0.22em]"
          style={{ fontSize: "0.62rem", color: "var(--color-gold)", fontWeight: 600 }}
        >
          {label}
        </p>
      </div>
      {children}
    </div>
  );
}

export default function ContactoSection() {
  return (
    <section id="contacto" style={{ backgroundColor: "#ffffff" }}>

      {/* ── Bloque superior: eyebrow + título a todo ancho ── */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(5rem, 10vw, 8rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          borderBottom: "1px solid rgba(14,13,31,0.08)",
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
              style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--color-gold)", opacity: 0.6 }}
            />
            <span
              className="font-body uppercase tracking-[0.36em]"
              style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--color-gold)", paddingLeft: "0.36em" }}
            >
              Contáctanos
            </span>
          </div>
        </FadeUp>

        {/* Título + descripción en dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(2rem, 4vw, 4rem)", alignItems: "flex-end" }}>
          {/* Título grande */}
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 1.0,
              color: "var(--color-ink)",
            }}
          >
            <TextReveal
              lines={["Comienza a planear", "tu gran día."]}
              stagger={0.12}
            />
          </h2>

          {/* Descripción + CTA alineados a la derecha-abajo */}
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              <p
                className="font-body"
                style={{
                  fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
                  lineHeight: 1.85,
                  color: "var(--color-faint)",
                  maxWidth: "48ch",
                }}
              >
                Estamos listos para hacer realidad tu celebración. Visítanos,
                agenda una cita o déjanos tus datos para diseñar una propuesta
                a tu medida.
              </p>
              <a
                href={SITE.whatsappContacto}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body uppercase inline-block"
                style={{
                  backgroundColor: "var(--color-ink)",
                  color: "#ffffff",
                  padding: "1.1rem 2.75rem",
                  fontSize: "0.72rem",
                  letterSpacing: "0.28em",
                  fontWeight: 600,
                  transition: "background-color 0.4s ease",
                  alignSelf: "flex-start",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-bg)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-ink)"; }}
              >
                Agendar una cita
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Cuadrícula de canales de atención ─────────────────── */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          borderBottom: "1px solid rgba(14,13,31,0.08)",
        }}
      >
        <FadeUp delay={0.1}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "clamp(2rem, 4vw, 3rem)" }}
          >
            {/* Teléfono */}
            <InfoCol icon={<IconPhone />} label="Teléfono principal">
              <a
                href="tel:+59163026011"
                className="font-display"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--color-ink)", letterSpacing: "-0.01em", display: "block" }}
              >
                63026011
              </a>
            </InfoCol>

            {/* WhatsApp */}
            <InfoCol icon={<IconWhatsApp />} label="WhatsApp">
              <a
                href={SITE.whatsappContacto}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body uppercase tracking-[0.22em] inline-flex items-center gap-2"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  borderBottom: "1px solid var(--color-gold)",
                  paddingBottom: "3px",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Enviar mensaje
              </a>
            </InfoCol>

            {/* Horario */}
            <InfoCol icon={<IconClock />} label="Horario de atención">
              <p className="font-body" style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)", color: "var(--color-ink)", lineHeight: 1.6 }}>
                Lunes a Sábado<br />
                <span style={{ color: "var(--color-faint)" }}>9:00 – 20:00</span>
              </p>
            </InfoCol>

            {/* Ubicación */}
            <InfoCol icon={<IconPin />} label="Ubicación">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body"
                style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)", color: "var(--color-ink)", lineHeight: 1.6, textDecoration: "none", transition: "opacity 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Padre Sanauja Nº2<br />
                <span style={{ color: "var(--color-faint)" }}>Sucre, Bolivia</span>
              </a>
            </InfoCol>
          </div>
        </FadeUp>
      </div>

      {/* ── Mapa de Google Maps ───────────────────────────────── */}
      <FadeUp>
        <div style={{ width: "100%" }}>
          {/* Encabezado del mapa */}
          <div
            className="container flex items-center gap-4"
            style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "1.5rem" }}
          >
            <span
              aria-hidden="true"
              style={{ display: "block", width: "32px", height: "1px", backgroundColor: "var(--color-gold)", opacity: 0.6, flexShrink: 0 }}
            />
            <p
              className="font-body uppercase tracking-[0.32em]"
              style={{ fontSize: "0.7rem", color: "var(--color-gold)", fontWeight: 600 }}
            >
              Cómo llegar
            </p>
          </div>

          {/* iFrame del mapa */}
          <div style={{ width: "100%", height: "clamp(320px, 45vw, 520px)", position: "relative" }}>
            <iframe
              title="Ubicación Barbara Ocasión — Sucre, Bolivia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6454729527704!2d-65.26127472500413!3d-19.04774508213126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e8a2d5e4c3b7%3A0xf3a2b8d1e9c07482!2sPadre%20Sanauja%2C%20Sucre%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1719453600000!5m2!1ses!2sbo"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Enlace externo al mapa */}
          <div
            className="container"
            style={{ paddingTop: "1.25rem", paddingBottom: "clamp(4rem, 8vw, 7rem)", textAlign: "center" }}
          >
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body uppercase tracking-[0.26em]"
              style={{ fontSize: "0.7rem", color: "var(--color-faint)", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-faint)")}
            >
              Abrir en Google Maps →
            </a>
          </div>
        </div>
      </FadeUp>

    </section>
  );
}

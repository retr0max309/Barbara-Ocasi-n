"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { SITE, FAQS } from "@/data/content";
import Link from "next/link";
import { EASE_GUCCI, DUR_BASE } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────────────────
   TIPOS
───────────────────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body uppercase tracking-[0.28em]"
      style={{
        fontSize: "0.65rem",
        color: "rgba(255,255,255,0.4)",
        marginBottom: "1.75rem",
      }}
    >
      {children}
    </p>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...ext}
      className="font-body block transition-opacity duration-300 hover:opacity-50"
      style={{
        fontSize: "0.88rem",
        color: "rgba(255,255,255,0.75)",
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        textDecorationColor: "rgba(255,255,255,0.2)",
        paddingBlock: "0.45rem",
      }}
    >
      {children}
    </a>
  );
}

/* ── FAQ accordion pequeño ─── */
/* Usa CSS grid-template-rows (0fr ↔ 1fr) en lugar de animar height con JS.
   Es 100% compuesto (composited) en navegadores modernos: sin reflow,
   sin «Evita animaciones no compuestas» en PageSpeed. */
function FaqItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBlock: "0.1rem" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-3 text-left transition-opacity duration-300 hover:opacity-60"
        style={{ background: "none", border: "none", cursor: "pointer" }}
        aria-expanded={open}
      >
        <span
          className="font-body"
          style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}
        >
          {pregunta}
        </span>
        {/* La rotación del «+» sigue usando motion: rotate es transform, siempre compuesto */}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE_GUCCI }}
          style={{ flexShrink: 0, color: "rgba(255,255,255,0.35)", fontSize: "1.1rem", lineHeight: 1 }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      {/*
       * Técnica CSS Grid accordion:
       *   – El wrapper externo cambia grid-template-rows entre «0fr» y «1fr».
       *   – El div interno tiene overflow:hidden para que el corte sea limpio.
       *   – transition en CSS puro = sin JS en cada frame = 0 reflows.
       */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p
            className="font-body"
            style={{
              fontSize: "0.8rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.4)",
              paddingBottom: "1rem",
              maxWidth: "55ch",
            }}
          >
            {respuesta}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   FOOTER PRINCIPAL
───────────────────────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer
      id="contacto"
      style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}
    >

      {/* ── 1. BLOQUE HERO SUPERIOR ─────────────────────────────────── */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(4rem, 8vw, 7rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center",
        }}
      >
        <p
          className="font-body uppercase tracking-[0.3em]"
          style={{
            fontSize: "0.68rem",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "0.75rem",
            marginInline: "auto",
          }}
        >
          Agenda tu visita
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.8rem)",
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: "18ch",
            margin: "0 auto 2rem",
          }}
        >
          Hagamos tu evento realidad.
        </h2>
        <a
          href={SITE.whatsappMsg}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body uppercase"
          style={{
            display: "inline-block",
            backgroundColor: "#ffffff",
            color: "#0E0D1F",
            padding: "1rem 2.5rem",
            fontSize: "0.72rem",
            letterSpacing: "0.28em",
            fontWeight: 600,
            transition: "background-color 0.4s ease, color 0.4s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-cream)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#ffffff"; }}
        >
          Cotizar mi evento
        </a>
      </div>

      {/* ── 2. GRID DE 3 COLUMNAS (desktop) / columna única (mobile) ── */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(3rem, 5vw, 5rem)",
          paddingBottom: "clamp(3rem, 5vw, 5rem)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "clamp(2.5rem, 5vw, 5rem)",
          alignItems: "start",
        }}
      >

        {/* ── Columna 1: CONTACTO ──────────────────────────────────── */}
        <div>
          <SectionLabel>Contacto</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
            <FooterLink href={`tel:63026011`}>
              63026011
            </FooterLink>
            <FooterLink href={SITE.instagram} external>
              Instagram
            </FooterLink>
            <FooterLink href={SITE.facebook} external>
              Facebook
            </FooterLink>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={SITE.whatsappMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 font-body uppercase tracking-[0.22em] transition-opacity duration-300 hover:opacity-60"
            style={{
              fontSize: "0.68rem",
              color: "var(--color-gold)",
              marginTop: "2rem",
            }}
          >
            WhatsApp
            <span
              className="transition-transform duration-500 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

        {/* ── Columna 2: UBICACIÓN ─────────────────────────────────── */}
        <div>
          <SectionLabel>Ubicación</SectionLabel>
          <p
            className="font-body"
            style={{
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              textDecorationColor: "rgba(255,255,255,0.2)",
            }}
          >
            {SITE.direccion}
          </p>
          <p
            className="font-body"
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.35)",
              marginTop: "1.25rem",
              lineHeight: 1.7,
            }}
          >
            Lunes a Sábado<br />
            9:00 – 20:00
          </p>
        </div>

        {/* ── Columna 3: PREGUNTAS FRECUENTES ─────────────────────── */}
        <div>
          <SectionLabel>Preguntas Frecuentes</SectionLabel>
          <div>
            {FAQS.map((faq, i) => (
              <FaqItem key={i} pregunta={faq.pregunta} respuesta={faq.respuesta} />
            ))}
          </div>
        </div>

      </div>

      {/* ── 3. BARRA INFERIOR: wordmark + copyright ─────────────────── */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(1.5rem, 3vw, 2.5rem)",
          paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <a
          href="#inicio"
          className="font-display uppercase tracking-[0.28em] transition-opacity duration-300 hover:opacity-60"
          style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)", color: "rgba(255,255,255,0.5)" }}
        >
          Barbara Ocasión
        </a>
        <p
          className="font-body uppercase tracking-[0.14em]"
          style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.25)" }}
        >
          © {new Date().getFullYear()} · Sucre, Bolivia · Todos los derechos reservados
        </p>
      </div>

    </footer>
  );
}

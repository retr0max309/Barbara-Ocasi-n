"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { NAV_LINKS } from "@/data/content";
import { EASE_GUCCI, EASE_INOUT, DUR_BASE, DUR_SLOW } from "@/lib/motion";

const basePath = '';

/* ── Variantes del panel ─────────────────────────────────────────── */
const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
};

const listItem = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: DUR_SLOW, ease: EASE_GUCCI },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastY = useRef(0);

  /* Reduced-motion solo en cliente (evita hydration mismatch) */
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
    setNavVisible(y < 60 ? true : y < lastY.current);
    lastY.current = y;
  });

  /* Bloquear scroll del body con el menú abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Cerrar con Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* Transición base */
  const tx = (delay = 0) =>
    reduce ? { duration: 0 } : { duration: DUR_BASE, delay, ease: EASE_GUCCI };

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          BARRA PRINCIPAL
          Layout: [Logo izquierda]  [☰ Menú derecha]
          ───────────────────────────────────────────────────────────── */}
      <motion.header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 flex items-center h-[64px] md:h-[72px]"
        style={{
          paddingInline: "clamp(2.5rem, 7vw, 7rem)",
          backgroundColor: scrolled ? "rgba(14, 13, 31, 0.88)" : "transparent",
          backdropFilter:       scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          transition: "background-color 600ms cubic-bezier(0.16,1,0.3,1), backdrop-filter 600ms",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: navVisible ? 0 : -80, opacity: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 0.55, ease: EASE_GUCCI }}
      >
        {/* ── Izquierda: Logo imagen ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={tx(1)}
        >
          <Link
            href="/"
            className="block transition-opacity duration-300 hover:opacity-60"
            aria-label="Barbara Ocasión — Inicio"
          >
            <Image
              src={`${basePath}/heroContent/logoEsquina.png`}
              alt="Barbara Ocasión"
              width={200}
              height={60}
              priority
              style={{ height: "clamp(56px, 5.5vw, 80px)", width: "auto", display: "block" }}
            />
          </Link>
        </motion.div>

        {/* ── Derecha: ☰ Menú ── */}
        <motion.div
          style={{ marginLeft: "auto" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={tx(2)}
        >
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2.5 uppercase tracking-[0.24em] transition-opacity duration-300 hover:opacity-60"
            style={{ color: "var(--color-cream)", fontSize: "0.72rem" }}
            aria-label="Abrir menú de navegación"
            aria-expanded={menuOpen}
            aria-controls="menu-panel"
          >
            {/* Hamburguesa fina */}
            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" aria-hidden="true">
              <line x1="0" y1="0.5"  x2="18" y2="0.5"  stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="5.5"  x2="18" y2="5.5"  stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="10.5" x2="18" y2="10.5" stroke="currentColor" strokeWidth="1" />
            </svg>
            Menú
          </button>
        </motion.div>
      </motion.header>

      {/* ─────────────────────────────────────────────────────────────
          PANEL LATERAL DERECHO (estilo Gucci)
          ───────────────────────────────────────────────────────────── */}

      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[55]"
        style={{
          backgroundColor: "rgba(8, 7, 20, 0.6)",
          backdropFilter: "blur(2px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Panel deslizante */}
      <motion.div
        id="menu-panel"
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Menú de navegación"
        className="fixed top-0 right-0 bottom-0 z-[60] flex flex-col overflow-y-auto"
        style={{
          width: "min(480px, 100vw)",
          backgroundColor: "#ffffff",
          boxShadow: "-30px 0 80px rgba(8, 7, 20, 0.4)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        initial={false}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.6, ease: EASE_INOUT }}
      >
        {/* ── Cabecera: logo centrado + cerrar (arriba a la derecha) ── */}
        <div
          className="relative shrink-0 flex items-center justify-center px-8 md:px-11"
          style={{ height: "84px" }}
        >
          <span
            className="font-display uppercase tracking-[0.28em]"
            style={{ color: "var(--color-ink)", fontSize: "0.95rem" }}
          >
            Barbara Ocasión
          </span>

          <button
            onClick={() => setMenuOpen(false)}
            className="group absolute right-8 md:right-11 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-opacity duration-300 hover:opacity-70"
            style={{ width: "42px", height: "42px", backgroundColor: "var(--color-ink)" }}
            aria-label="Cerrar menú"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:rotate-90"
              style={{ color: "var(--color-cream)" }}
            >
              <line x1="0.7" y1="0.7" x2="10.3" y2="10.3" stroke="currentColor" strokeWidth="1.2" />
              <line x1="10.3" y1="0.7" x2="0.7" y2="10.3" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>

        <motion.nav
          aria-label="Menú principal"
          className="flex-1 flex flex-col px-8 md:px-11 pt-4 pb-12 text-center"
          variants={listContainer}
          initial="hidden"
          animate={menuOpen ? "visible" : "hidden"}
        >
          <span
            className="font-body block mb-8 uppercase tracking-[0.34em]"
            style={{ color: "var(--color-ink)", fontSize: "0.72rem" }}
          >
            Navegación
          </span>

          <ul className="flex flex-col flex-1 justify-evenly">
            {NAV_LINKS.map((link) => (
              <motion.li
                key={link.href}
                variants={listItem}
                style={{ borderTop: "1px solid rgba(14, 13, 31, 0.1)" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-center py-7 transition-opacity duration-300 hover:opacity-60"
                >
                  <span
                    className="font-display block leading-[1.04]"
                    style={{ color: "var(--color-ink)", fontSize: "clamp(1.9rem, 5.5vw, 2.8rem)" }}
                  >
                    {link.label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

      </motion.div>
    </>
  );
}

import Image from "next/image";
import { TextReveal } from "@/components/motion/TextReveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

const basePath = process.env.NODE_ENV === 'production' ? '/Barbara-Ocasi-n' : '';
import { FadeUp } from "@/components/motion/FadeUp";

/*
 * Sección editorial estilo Bvlgari:
 * texto izquierda + logo derecha, luego dos imágenes full-bleed con ImageReveal.
 * Fondo blanco — texto oscuro.
 */
export default function EditorialSection() {
  return (
    <section id="editorial" style={{ backgroundColor: "#ffffff" }}>

      {/* ── Bloque texto + logo: grid 2 columnas ──────────────────── */}
      <div
        className="container grid grid-cols-1 md:grid-cols-2 items-center"
        style={{
          paddingTop: "clamp(4rem, 8vw, 7rem)",
          paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
          gap: "clamp(2rem, 5vw, 5rem)",
        }}
      >
        {/* Columna izquierda: título + subtítulo */}
        <div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
              color: "var(--color-ink)",
              maxWidth: "14ch",
              marginBottom: "clamp(1.2rem, 2.5vw, 2rem)",
            }}
          >
            <TextReveal
              lines={["El escenario", "que tu momento", "merece."]}
              stagger={0.12}
            />
          </h2>

          <FadeUp delay={0.2}>
            <p
              className="font-body"
              style={{
                fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                lineHeight: 1.7,
                color: "var(--color-faint)",
                maxWidth: "48ch",
              }}
            >
              Cada celebración tiene su propia historia. En Barbara Ocasión
              convertimos cada detalle en un recuerdo que permanece para siempre.
            </p>
          </FadeUp>
        </div>

        {/* Columna derecha: logoBarbara — oculto en móvil */}
        <div
          className="hidden md:flex"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FadeUp delay={0.3} className="w-full h-full relative">
            <Image
              src={`${basePath}/logoBarbara.png`}
              alt="Logo Barbara Ocasión"
              fill
              className="object-contain"
              sizes="50vw"
            />
          </FadeUp>
        </div>
      </div>

      {/* ── Dos imágenes con la misma proporción ──────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "2px" }}>
        {/* Imagen 1 */}
        <ImageReveal
          src={`${basePath}/contenido1.jpg`}
          alt="Salón Barbara Ocasión preparado para una celebración"
          delay={0.2}
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
          style={{ aspectRatio: "4 / 5" }}
        />

        {/* Imagen 2 — misma proporción exacta */}
        <ImageReveal
          src={`${basePath}/contenido2.jpg`}
          alt="Decoración floral y ambiente del salón"
          delay={0.2}
          sizes="(max-width: 640px) 100vw, 50vw"
          style={{ aspectRatio: "4 / 5" }}
        />
      </div>

      {/* ── Video full-width — se reproduce una sola vez ───────────── */}
      <FadeUp delay={0.2}>
        <video
          src={`${basePath}/videoContenido3.mp4`}
          autoPlay
          muted
          playsInline
          loop={false}
          style={{
            display: "block",    /* elimina el espacio inferior del inline */
            width: "100%",
            objectFit: "cover",
          }}
        />
      </FadeUp>
    </section>
  );
}

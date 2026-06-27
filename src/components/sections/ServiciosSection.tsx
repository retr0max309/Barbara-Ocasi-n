import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { FadeUp } from "@/components/motion/FadeUp";

const basePath =
  process.env.NODE_ENV === "production" ? "/Barbara-Ocasi-n" : "";

export default function ServiciosSection() {
  return (
    <section id="servicios" style={{ backgroundColor: "#ffffff" }}>

      {/* ── Hero editorial: imagen full-bleed + texto superpuesto ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Imagen con Ken Burns — ocupa todo el fondo */}
        <ImageReveal
          src={`${basePath}/serviciosImages/imgServicios.jpg`}
          alt="Salón Barbara Ocasión — Servicios premium"
          priority
          sizes="100vw"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />

        {/* Overlay oscuro degradado */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(14,13,31,0.82) 40%, rgba(14,13,31,0.3) 100%)",
          }}
        />

        {/* Contenido de texto */}
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, padding: "clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)" }}
        >
          <div style={{ maxWidth: "600px" }}>
            {/* Eyebrow dorado */}
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
                    opacity: 0.75,
                  }}
                />
                <span
                  className="font-body uppercase tracking-[0.36em]"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-gold)",
                    paddingLeft: "0.36em",
                  }}
                >
                  Nuestros Servicios
                </span>
              </div>
            </FadeUp>

            {/* Titular principal */}
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                lineHeight: 1.02,
                color: "var(--color-cream)",
                marginBottom: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              <TextReveal
                lines={["Experiencias completas,", "detalles que inspiran."]}
                stagger={0.12}
              />
            </h2>

            {/* Línea decorativa */}
            <FadeUp delay={0.25}>
              <div
                aria-hidden="true"
                style={{
                  width: "56px",
                  height: "1px",
                  backgroundColor: "var(--color-gold)",
                  opacity: 0.6,
                  marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
                }}
              />
            </FadeUp>

            {/* Texto secundario */}
            <FadeUp delay={0.35}>
              <p
                className="font-body"
                style={{
                  fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                  lineHeight: 1.85,
                  color: "rgba(240,236,226,0.75)",
                  maxWidth: "44ch",
                }}
              >
                Creamos eventos sin preocupaciones. Cada uno de nuestros
                paquetes integra de forma armónica catering de alta cocina,
                barras de bebidas premium, servicio de sala profesional,
                floristería de diseño y ambientación personalizada. Nos
                encargamos de cada elemento para que tú solo disfrutes de
                tu gran día.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>

    </section>
  );
}

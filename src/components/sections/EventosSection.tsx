import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { FadeUp } from "@/components/motion/FadeUp";
import { EVENTOS, SITE } from "@/data/content";

/* Mapa evento.id → imagen local */
const IMAGE_MAP: Record<string, string> = {
  bodas: "/Barbara-Ocasi-n/eventosImages/eventosBoda.jpg",
  quince: "/Barbara-Ocasi-n/eventosImages/eventos15años.jpg",
  infantil: "/Barbara-Ocasi-n/eventosImages/eventosInfantil.jpg",
  adultos: "/Barbara-Ocasi-n/eventosImages/eventosAdultos.jpg",
  aniversarios: "/Barbara-Ocasi-n/eventosImages/eventosAniversarios.jpg",
};

export default function EventosSection() {
  const featured = EVENTOS.find((e) => e.destacado) ?? EVENTOS[0];
  const rest = EVENTOS.filter((e) => e.id !== featured.id);

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
          {/* Etiqueta con líneas doradas */}
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
                fontSize: "0.8rem",         /* más grande y legible */
                fontWeight: 600,            /* más grueso */
                color: "var(--color-gold)",
                paddingLeft: "0.36em",      /* balancea el tracking extra de la derecha */
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

        {/* Titular */}
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

        {/* Descriptor — centrado */}
        <FadeUp delay={0.2}>
          <p
            className="font-body mx-auto text-center"
            style={{
              fontSize: "clamp(0.9rem, 1vw, 1.05rem)",
              lineHeight: 1.8,
              color: "var(--color-faint)",
              maxWidth: "54ch",
              textWrap: "balance", /* Evita problemas de justificación asimétrica */
            }}
          >
            Desde bodas íntimas hasta grandes celebraciones, adaptamos cada espacio y detalle para que tu evento sea exactamente como lo imaginas.
          </p>
        </FadeUp>
      </div>

      {/* ── Evento destacado — Bodas ─────────────────────────── */}
      <div
        className="container"
        style={{ paddingBottom: "clamp(5rem, 10vw, 8rem)" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center"
          style={{ gap: "clamp(3rem, 6vw, 7rem)" }}
        >
          {/* Imagen real */}
          <ImageReveal
            src={IMAGE_MAP[featured.id] ?? featured.imagen}
            alt={`Evento ${featured.nombre} — Barbara Ocasión`}
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{ aspectRatio: "3 / 4", width: "100%" }}
          />

          {/* Texto */}
          <FadeUp delay={0.1}>
            <div>
              <span
                className="font-body block"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  letterSpacing: "0.32em",
                  color: "var(--color-gold)",
                  marginBottom: "1.5rem",
                }}
              >
                01
              </span>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  lineHeight: 0.94,
                  color: "var(--color-ink)",
                  marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
                }}
              >
                <TextReveal lines={[featured.nombre]} />
              </h3>

              <p
                className="font-body"
                style={{
                  fontSize: "clamp(1.05rem, 1.8vw, 1.15rem)",
                  lineHeight: 1.85,
                  color: "var(--color-faint)",
                  maxWidth: "40ch",
                  marginBottom: "clamp(2rem, 4vw, 3.5rem)",
                }}
              >
                {featured.descripcion}. Cada detalle cuidado, desde la decoración
                floral hasta la iluminación, para que ese día sea exactamente
                como siempre lo imaginaste.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Divisor ──────────────────────────────────────────── */}
      <div className="container">
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(14,13,31,0.08)",
            marginBottom: "clamp(4.5rem, 9vw, 8rem)",
          }}
        />
      </div>

      {/* ── Resto de eventos — grid 2 × 2 ───────────────────── */}
      <div
        className="container"
        style={{ paddingBottom: "clamp(6rem, 12vw, 10rem)" }}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{
            columnGap: "clamp(1.5rem, 3vw, 3rem)",
            rowGap: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {rest.map((evento, i) => (
            <FadeUp key={evento.id} delay={i * 0.08}>
              <article>
                {/* Imagen real con Ken Burns */}
                <ImageReveal
                  src={IMAGE_MAP[evento.id] ?? evento.imagen}
                  alt={`Evento ${evento.nombre} — Barbara Ocasión`}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{
                    aspectRatio: "4 / 5",
                    width: "100%",
                    marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                  }}
                  delay={i * 0.08}
                />

                {/* Índice + línea */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    marginBottom: "0.55rem",
                  }}
                >
                  <span
                    className="font-body"
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      letterSpacing: "0.3em",
                      color: "var(--color-gold)",
                      flexShrink: 0,
                    }}
                  >
                    0{i + 2}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      height: "1px",
                      backgroundColor: "rgba(14,13,31,0.1)",
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Nombre del evento */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    lineHeight: 1,
                    color: "var(--color-ink)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {evento.nombre}
                </h3>

                {/* Descripción */}
                <p
                  className="font-body"
                  style={{
                    fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                    lineHeight: 1.8,
                    color: "var(--color-faint)",
                  }}
                >
                  {evento.descripcion}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

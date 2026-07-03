import { HeroImageClient } from "./HeroImageClient";
import { FillButton } from "@/components/motion/FillButton";
import { SITE } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ height: "100dvh", minHeight: "560px" }}
    >
      {/* Video del salón — reveal con clipPath + scale, se reproduce una sola vez */}
      <HeroImageClient />

      {/* Overlay oscuro — gradiente de arriba a abajo para legibilidad del navbar y del CTA */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,13,31,0.55) 0%, rgba(14,13,31,0.1) 40%, rgba(14,13,31,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Contenido inferior — estilo editorial Gucci */}
      <div className="absolute bottom-10 md:bottom-14 left-0 right-0 flex flex-col items-center gap-6">

        {/* Etiqueta con líneas decorativas a los lados */}
        <div className="flex items-center gap-4">
          <span
            className="block"
            style={{ width: "32px", height: "1px", backgroundColor: "rgba(240,236,226,0.45)" }}
            aria-hidden="true"
          />
          <p
            className="text-[0.6rem] uppercase tracking-[0.3em]"
            style={{ color: "rgba(240, 236, 226, 0.65)" }}
          >
            Salón · Jardín · Lounge
          </p>
          <span
            className="block"
            style={{ width: "32px", height: "1px", backgroundColor: "rgba(240,236,226,0.45)" }}
            aria-hidden="true"
          />
        </div>

        {/* Botón rectangular sólido — estilo Gucci (ancho, cuadrado, llamativo) */}
        <FillButton
          href={SITE.whatsappMsg}
          variant="light"
          solid
          className="min-w-[120px] md:min-w-[160px] py-[18px] tracking-[0.3em] text-[0.7rem]"
        >
          Contáctanos
        </FillButton>
      </div>
    </section>
  );
}

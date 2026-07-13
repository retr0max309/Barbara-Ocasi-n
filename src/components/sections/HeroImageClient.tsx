"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const basePath = '';
import { EASE_GUCCI } from "@/lib/motion";

export function HeroImageClient() {
  /*
   * useState(false) → servidor y primer render del cliente siempre son false.
   * useReducedMotion() devuelve null en SSR → true en cliente → mismatch.
   * Con useState(false) + useEffect ambas pasadas coinciden y no hay error.
   */
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  // amount:0 → dispara inmediatamente al cargar, el Hero ya ocupa 100dvh
  const inView = useInView(ref, { once: true, amount: 0 });

  const { scrollY } = useScroll();
  const yScroll = useTransform(scrollY, [0, 800], ["0%", "8%"]);

  // Ken Burns zoom-out — scale es siempre compuesto (transform GPU)
  const scale = {
    hidden: { scale: 1.08 },
    visible: { scale: 1 },
  };

  /*
   * Cortina de revelado — REEMPLAZA clip-path.
   * clip-path: inset() no está garantizadamente compuesto en Chrome mobile
   * (PageSpeed lo detectó como "propiedad no admitida" → reflow).
   *
   * Técnica: un div sólido #0e0d1f con y: "0%" → y: "100%".
   * El div se desliza HACIA ABAJO saliendo del contenedor (overflow:hidden
   * en el padre lo recorta), revelando el video de ARRIBA A ABAJO —
   * misma dirección visual que clip-path: inset(0 0 100%) → inset(0 0 0%).
   * Solo usa transform: translateY → 100% compuesto en GPU, cero reflow.
   */
  const curtain = {
    hidden: { y: "0%" },
    visible: { y: "100%" },
  };

  const curtainTransition = reduce
    ? { duration: 0 }
    : { duration: 2.2, ease: EASE_GUCCI };
  const scaleTransition = reduce
    ? { duration: 0 }
    : { duration: 2.8, ease: EASE_GUCCI };

  return (
    // overflow-hidden es clave: recorta la cortina cuando sale por abajo
    <motion.div
      className="absolute inset-0 overflow-hidden"
      style={reduce ? { height: "100%" } : { y: yScroll, height: "100%" }}
    >
      <div ref={ref} className="absolute inset-0">
        {/* Capa 1: video con Ken Burns zoom-out */}
        <motion.div
          className="absolute inset-0 bg-[#0e0d1f]"
          variants={scale}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={scaleTransition}
        >
          {/* Un solo video: cover en desktop, contain en mobile */}
          <video
            src={`${basePath}/heroContent/videoReveal.mp4`}
            autoPlay
            muted
            playsInline
            preload="metadata"
            loop={false}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </motion.div>

        {/* Capa 2: cortina que se desliza hacia abajo — 100% compuesto */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: "#0e0d1f", zIndex: 1 }}
          variants={curtain}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={curtainTransition}
        />
      </div>
    </motion.div>
  );
}


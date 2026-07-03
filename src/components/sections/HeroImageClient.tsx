"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const basePath = process.env.NODE_ENV === 'production' ? '/Barbara-Ocasi-n' : '';
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

  const clip = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: { clipPath: "inset(0 0 0% 0)" },
  };
  const scale = {
    hidden: { scale: 1.08 },
    visible: { scale: 1 },
  };
  const clipTransition = reduce
    ? { duration: 0 }
    : { duration: 2.2, ease: EASE_GUCCI };
  const scaleTransition = reduce
    ? { duration: 0 }
    : { duration: 2.8, ease: EASE_GUCCI };

  return (
    // El motion.div externo aplica el parallax de scroll
    <motion.div
      className="absolute inset-0 overflow-hidden"
      style={reduce ? { height: "100%" } : { y: yScroll, height: "100%" }}
    >
      {/* ref aquí para useInView */}
      <div ref={ref} className="absolute inset-0">
        {/* Capa 1: cortina clipPath que sube */}
        <motion.div
          className="absolute inset-0"
          variants={clip}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={clipTransition}
        >
          {/* Capa 2: zoom-out suave mientras la cortina sube */}
          <motion.div
            className="absolute inset-0 bg-[#0e0d1f]"
            variants={scale}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={scaleTransition}
          >
          {/* Un solo video: cover en desktop, contain en mobile */}
          <video
            src={`${basePath}/videoReveal.mp4`}
            autoPlay
            muted
            playsInline
            preload="auto"
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
        </motion.div>
      </div>
    </motion.div>
  );
}

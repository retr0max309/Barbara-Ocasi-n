"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { EASE_GUCCI } from "@/lib/motion";

interface VideoRevealProps {
  src: string;
  className?: string;
  delay?: number;
  /** Poster (imagen estática) mientras el video carga */
  poster?: string;
}

export function VideoReveal({
  src,
  className = "",
  delay = 0,
  poster,
}: VideoRevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  /*
   * initial SIEMPRE es "hidden" — valor constante, igual en servidor y cliente.
   * Para reduced-motion usamos duration:0 en vez de cambiar initial,
   * que causaba hydration mismatch (servidor devuelve false, cliente true).
   */
  const clip = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: { clipPath: "inset(0 0 0% 0)" },
  };
  const scale = {
    hidden: { scale: 1.15 },
    visible: { scale: 1 },
  };
  const clipTransition = reduce
    ? { duration: 0 }
    : { duration: 1.2, delay, ease: EASE_GUCCI };
  const scaleTransition = reduce
    ? { duration: 0 }
    : { duration: 1.6, delay, ease: EASE_GUCCI };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        variants={clip}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={clipTransition}
      >
        <motion.div
          className="absolute inset-0"
          variants={scale}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={scaleTransition}
        >
          <video
            src={src}
            poster={poster}
            className="absolute inset-0 w-full h-full object-cover"
            /*
             * autoPlay   → arranca solo (sin interacción del usuario)
             * muted      → requerido por los navegadores para autoplay sin gesto
             * playsInline → evita pantalla completa en iOS
             * loop={false} → se reproduce UNA sola vez y queda en el último frame
             */
            autoPlay
            muted
            playsInline
            loop={false}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

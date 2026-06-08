"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { EASE_GUCCI } from "@/lib/motion";

/*
 * PlaceholderReveal — Ken Burns Effect sin imagen.
 * Estructura idéntica a ImageReveal; cuando el usuario tenga la imagen
 * real, reemplaza este componente por <ImageReveal src="..." />.
 */

interface PlaceholderRevealProps {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  sizes?: string;
}

export function PlaceholderReveal({
  label,
  className = "",
  style,
  delay = 0,
}: PlaceholderRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={inView ? { scale: 1 } : { scale: 1.15 }}
        transition={{ duration: 2, delay: 0.6 + delay, ease: EASE_GUCCI }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #1e1d3a 0%, #0E0D1F 100%)",
          }}
        >
          {label && (
            <span
              className="font-body uppercase tracking-[0.3em]"
              style={{ fontSize: "0.58rem", color: "rgba(201,168,76,0.3)" }}
              aria-hidden="true"
            >
              {label}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}

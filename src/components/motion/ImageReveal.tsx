"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { EASE_GUCCI } from "@/lib/motion";

/*
 * ImageReveal — Ken Burns Effect (zoom-out al entrar al viewport).
 * La imagen empieza ligeramente ampliada (scale 1.12) y se asienta
 * suavemente a su tamaño natural (scale 1.0) en ~1.8 s.
 */

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  delay?: number;
  sizes?: string;
}

export function ImageReveal({
  src,
  alt,
  className = "",
  style,
  priority = false,
  delay = 0,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // once:true → la animación se dispara una sola vez al entrar al viewport
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    /* Contenedor externo: overflow:hidden contiene el zoom sin desbordarse */
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* La imagen empieza ampliada y hace zoom-out cuando entra en pantalla */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={inView ? { scale: 1 } : { scale: 1.12 }}
        transition={{
          duration: 2.6,
          delay,
          ease: EASE_GUCCI,
        }}
        style={{ willChange: "transform" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority={priority}
          sizes={sizes}
        />
      </motion.div>
    </div>
  );
}

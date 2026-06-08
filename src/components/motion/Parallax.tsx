"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: React.ReactNode;
  /**
   * Qué fracción del height del elemento se desplaza verticalmente.
   * 0.1 = muy sutil (hero), 0.25 = notorio (imágenes editoriales).
   * Valor positivo = el contenido sube más despacio que el scroll (profundidad).
   */
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.12, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: -(speed * 100),
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [reduce, speed]);

  return (
    <div
      ref={ref}
      className={className}
      /* will-change solo en elementos que animan continuamente durante scroll */
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}

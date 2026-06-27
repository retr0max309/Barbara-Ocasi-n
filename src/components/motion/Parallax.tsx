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
   * 0.08 = muy sutil (hero), 0.18 = notorio (imágenes editoriales).
   */
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.08, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;

    const el = ref.current;

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          // willChange solo cuando el trigger está activo (ahorra GPU)
          el.style.willChange = self.isActive ? "transform" : "auto";
        },
        animation: gsap.to(el, {
          yPercent: -(speed * 100),
          ease: "none",
        }),
      });

      return () => st.kill();
    }, ref);

    return () => ctx.revert();
  }, [reduce, speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

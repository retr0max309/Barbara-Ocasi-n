"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { EASE_GUCCI, DUR_BASE } from "@/lib/motion";

interface TextRevealProps {
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
}

export function TextReveal({
  lines,
  className = "",
  delay = 0,
  stagger = 0.1,
}: TextRevealProps) {
  /* useState(false) → servidor y primer render del cliente siempre coinciden */
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <span ref={ref} className={`block ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              visible: { y: "0%" },
            }}
            /* initial SIEMPRE "hidden" — valor constante en servidor y cliente */
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: DUR_BASE,
                    delay: delay + i * stagger,
                    ease: EASE_GUCCI,
                  }
            }
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

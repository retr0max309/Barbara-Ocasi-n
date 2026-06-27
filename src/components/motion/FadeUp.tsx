"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { EASE_GUCCI } from "@/lib/motion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  className = "",
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.75, delay, ease: EASE_GUCCI }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

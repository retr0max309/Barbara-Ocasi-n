/* Constantes de animación compartidas — "sabor GUCCI": lento y pesado */

export const EASE_GUCCI = [0.16, 1, 0.3, 1] as const;
export const EASE_INOUT  = [0.65, 0, 0.35, 1] as const;

export const DUR_FAST   = 0.5;
export const DUR_BASE   = 0.9;
export const DUR_SLOW   = 1.2;
export const DUR_CINEMATIC = 1.5;

/* Variante base para scroll-reveal */
export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DUR_BASE, delay: i * 0.07, ease: EASE_GUCCI },
  }),
};

/* Variante para el menú overlay (stagger en children) */
export const menuContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  exit:    { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

export const menuItem = {
  hidden:  { y: 48, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: DUR_SLOW, ease: EASE_GUCCI } },
  exit:    { y: -24, opacity: 0, transition: { duration: DUR_FAST, ease: EASE_INOUT } },
};

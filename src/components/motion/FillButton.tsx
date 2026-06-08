/*
 * FillButton — CTA editorial de lujo. Dos modos:
 *   • outline (default): borde 1px; en hover, un relleno sube desde abajo.
 *   • solid:  relleno permanente (siempre visible), con hover sutil.
 * Server Component — CSS puro, sin JS ni hooks.
 */
import Link from "next/link";

interface FillButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  /** Color base del botón */
  variant?: "light" | "dark" | "gold";
  /** Relleno permanente (siempre visible) en vez de aparecer en hover */
  solid?: boolean;
  /** Muestra una flecha que se desliza a la derecha en hover */
  withArrow?: boolean;
}

/* Modo outline: borde + texto + texto-hover, y color del relleno que sube */
const OUTLINE = {
  light: {
    line: "border-[var(--color-cream)]/70 text-[var(--color-cream)] hover:text-[var(--color-ink)]",
    fill: "bg-[var(--color-cream)]",
  },
  dark: {
    line: "border-[var(--color-ink)] text-[var(--color-ink)] hover:text-[var(--color-cream)]",
    fill: "bg-[var(--color-ink)]",
  },
  gold: {
    line: "border-[var(--color-gold)] text-[var(--color-gold)] hover:text-[var(--color-ink)]",
    fill: "bg-[var(--color-gold)]",
  },
} as const;

/* Modo solid: el FONDO va por clase, pero el COLOR del texto va inline.
   Motivo: la regla base `a { color: inherit }` (sin @layer) le gana a las
   utilidades `text-[...]` de Tailwind (que sí están en @layer utilities),
   así que en un <a> el color por clase se ignora. El inline siempre gana. */
const SOLID_BG = {
  light: "bg-white hover:bg-[var(--color-cream)]",
  dark: "bg-[var(--color-ink)] hover:bg-[var(--color-surface)]",
  gold: "bg-[var(--color-gold)] hover:bg-[var(--color-gold-soft)]",
} as const;
const SOLID_TEXT = {
  light: "var(--color-ink)",
  dark: "var(--color-cream)",
  gold: "var(--color-ink)",
} as const;

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const BASE =
  "group relative inline-flex items-center justify-center overflow-hidden px-11 py-4 text-[0.66rem] uppercase tracking-[0.24em]";

export function FillButton({
  href,
  children,
  className = "",
  external = false,
  variant = "light",
  solid = false,
  withArrow = false,
}: FillButtonProps) {
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const Element = external ? "a" : Link;

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2.5 whitespace-nowrap">
      {children}
      {withArrow && (
        <span
          className="transition-transform duration-500 group-hover:translate-x-1"
          style={{ transitionTimingFunction: EASE }}
          aria-hidden="true"
        >
          →
        </span>
      )}
    </span>
  );

  /* ── Sólido: relleno permanente ── */
  if (solid) {
    return (
      <Element
        href={href}
        {...ext}
        className={[BASE, "transition-colors duration-500", SOLID_BG[variant], className]
          .filter(Boolean)
          .join(" ")}
        style={{ color: SOLID_TEXT[variant], transitionTimingFunction: EASE }}
      >
        {content}
      </Element>
    );
  }

  /* ── Outline: el relleno sube en hover ── */
  const v = OUTLINE[variant];
  return (
    <Element
      href={href}
      {...ext}
      className={[BASE, "border transition-colors duration-700", v.line, className]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionTimingFunction: EASE }}
    >
      <span
        className={[
          "pointer-events-none absolute inset-0 translate-y-full transition-transform duration-700 group-hover:translate-y-0",
          v.fill,
        ].join(" ")}
        style={{ transitionTimingFunction: EASE }}
        aria-hidden="true"
      />
      {content}
    </Element>
  );
}

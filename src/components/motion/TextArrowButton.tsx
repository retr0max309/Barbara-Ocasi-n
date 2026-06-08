/**
 * TextArrowButton — botón editorial con subrayado animado + flecha deslizante.
 *
 * Inspirado en el estilo "Shop Now" de lujo:
 *   - Texto uppercase con letter-spacing
 *   - Subrayado que crece de derecha a izquierda en hover (scaleX)
 *   - Flecha SVG que se desliza hacia la derecha en hover
 *
 * Variantes de color:
 *   "dark" → texto/flecha/línea en var(--color-ink)  → fondos claros
 *   "gold" → texto/flecha/línea en var(--color-gold) → fondos oscuros
 */
import Link from "next/link";

interface TextArrowButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "dark" | "gold";
  className?: string;
}

const COLOR: Record<"dark" | "gold", string> = {
  dark: "var(--color-ink)",
  gold: "var(--color-gold)",
};

export function TextArrowButton({
  href,
  children,
  external = false,
  variant = "dark",
  className = "",
}: TextArrowButtonProps) {
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const Element = external ? "a" : Link;

  return (
    <Element
      href={href}
      {...ext}
      className={`tab-btn ${className}`}
      style={{ color: COLOR[variant] }}
    >
      <span className="tab-text font-body">
        {children}
      </span>

      {/* Flecha de luxe — igual al SVG del componente original */}
      <svg
        className="tab-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={9}
        viewBox="0 0 46 16"
        aria-hidden="true"
        fill="currentColor"
      >
        <path
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          transform="translate(30)"
        />
      </svg>
    </Element>
  );
}

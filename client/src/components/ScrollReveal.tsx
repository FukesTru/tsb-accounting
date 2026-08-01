/**
 * TSB Accounting Solutions — Scroll-triggered fade-up reveal
 *
 * Design contract:
 * - Content is ALWAYS visible. JS adds the animation; it never hides content.
 * - Base state = visible (opacity:1, transform:none).
 * - When JS loads, we temporarily set opacity:0 / translateY and then reveal on
 *   intersection. If the observer never fires within 1 s, we force-reveal everything.
 * - Respects prefers-reduced-motion: skips animation entirely.
 * - Uses a plain IntersectionObserver (no Framer Motion viewport) to avoid the
 *   React-19 / framer-motion useContext null crash that was previously observed.
 */
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

// Detect reduced-motion preference once at module level.
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the user prefers reduced motion, skip the animation entirely.
    if (prefersReducedMotion) return;

    // If IntersectionObserver is not supported, bail out immediately (content stays visible).
    if (typeof IntersectionObserver === "undefined") return;

    // Set the hidden state via inline style (not a CSS class) so it is applied
    // only when JS is running and can also be removed by JS.
    const translateInit =
      direction === "left" ? "translateX(-32px)"
      : direction === "right" ? "translateX(32px)"
      : "translateY(28px)";

    el.style.opacity = "0";
    el.style.transform = translateInit;
    el.style.transition = `opacity 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}s`;

    const reveal = () => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    // Safety fallback: force-reveal after 1 s regardless of observer.
    const timer = setTimeout(reveal, 1000 + delay * 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            clearTimeout(timer);
            observer.unobserve(el); // never revert once revealed
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

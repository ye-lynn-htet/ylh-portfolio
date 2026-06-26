"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function ScrollReveal({ children, className = "", stagger = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal${stagger ? " scroll-reveal-stagger" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

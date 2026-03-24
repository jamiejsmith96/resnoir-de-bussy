"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const circlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!circlesRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      const circles = circlesRef.current.children;
      if (circles[0]) {
        (circles[0] as HTMLElement).style.transform =
          `translate(calc(-50% + ${x * 15}px), calc(-50% + ${y * 15}px))`;
      }
      if (circles[1]) {
        (circles[1] as HTMLElement).style.transform =
          `translate(calc(-50% + ${x * -10}px), calc(-50% + ${y * -10}px)) rotate(45deg)`;
      }
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative min-h-dvh flex items-center justify-center text-center overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(138,154,123,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(184,150,90,0.1) 0%, transparent 50%),
            radial-gradient(ellipse 100% 80% at 50% 50%, rgba(232,224,212,0.4) 0%, transparent 70%),
            linear-gradient(175deg, #FAF7F2 0%, #F0EAE0 40%, #E8DFD2 70%, #DED5C6 100%)
          `,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 70%, rgba(184,150,90,0.08) 0%, transparent 40%),
              radial-gradient(circle at 70% 30%, rgba(138,154,123,0.06) 0%, transparent 35%)
            `,
          }}
        />
      </div>

      {/* Decorative circles — parallax on mouse */}
      <div ref={circlesRef} className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 w-[min(500px,70vw)] h-[min(500px,70vw)] border border-gold/12 rounded-full"
          style={{
            animation: "hero-circle-breathe 8s ease-in-out infinite",
            transform: "translate(-50%,-50%)",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[min(360px,50vw)] h-[min(360px,50vw)] border border-gold/8 rounded-full"
          style={{
            animation: "hero-circle-breathe 8s ease-in-out infinite 1s",
            transform: "translate(-50%,-50%) rotate(45deg)",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-2 px-6 max-w-[800px]">
        <div
          className="flex items-center justify-center gap-4 mb-8 text-[0.7rem] font-medium tracking-[0.25em] uppercase text-gold opacity-0"
          style={{ animation: "hero-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards" }}
        >
          Shamanic Practitioner
        </div>

        <h1
          className="font-heading text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[1.2] tracking-[-0.02em] text-charcoal mb-7 opacity-0 text-balance"
          style={{ animation: "hero-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.5s forwards" }}
        >
          Ancient Healing.
          <br />
          <em className="text-gold-dark">Modern Connection.</em>
        </h1>

        <p
          className="text-[clamp(1rem,1.3vw,1.15rem)] text-text-light mx-auto mb-12 max-w-[520px] leading-[1.8] opacity-0"
          style={{ animation: "hero-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.7s forwards" }}
        >
          Remote shamanic healing that transcends distance. Deep, transformative
          energy work — wherever you are in the world.
        </p>

        <div
          className="flex items-center justify-center gap-6 flex-wrap opacity-0 max-sm:flex-col max-sm:w-full max-sm:px-5"
          style={{ animation: "hero-fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.9s forwards" }}
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-3 px-10 py-[18px] bg-charcoal text-white text-[0.72rem] font-medium tracking-[0.18em] uppercase hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(184,150,90,0.25)] transition-all max-sm:w-full max-sm:justify-center"
          >
            Begin Your Healing Journey
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 px-8 py-[18px] border border-sand text-text-main text-[0.72rem] font-medium tracking-[0.18em] uppercase hover:border-gold hover:text-gold-dark transition-all max-sm:w-full max-sm:justify-center"
          >
            How It Works
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-2 flex flex-col items-center gap-2 opacity-0"
        style={{ animation: "hero-fade-up 1s cubic-bezier(0.16,1,0.3,1) 1.3s forwards" }}
      >
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light">
          Discover
        </span>
        <div
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
          style={{ animation: "scroll-pulse 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}

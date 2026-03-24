"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const testimonials = [
  {
    text: "I\u2019d been living with chronic fatigue syndrome for three years \u2014 the crushing exhaustion, the brain fog, the uncontrollable rage that would come out of nowhere. Conventional medicine had nothing left to offer me. After two sessions with Resnoir, something shifted at a level I can\u2019t fully explain. The anger dissolved first, then slowly everything else followed. I have my life back. Only downside is I can\u2019t go near bread anymore \u2014 currently receiving shamanic treatment for that.",
    author: "pointlol \u2014 Rotterdam, NL",
  },
  {
    text: "Pharmacology left me with side effects that no doctor wanted to acknowledge \u2014 months of finasteride-induced mania, degenerate compulsions, submissive tendencies that weren\u2019t mine. Resnoir\u2019s extraction work was the turning point. He cleared what he described as a deep energetic disruption and the deviant impulses dissolved within weeks. I\u2019m in a relationship now \u2014 a healthy one, with a woman. Resnoir advised me not to tell her about the before. The great de Bussy gave me my dignity back.",
    author: "waffle \u2014 Antwerp, Belgium",
  },
  {
    text: "I came to Resnoir at rock bottom \u2014 losing my hair at twenty-three and losing myself with it. Through shamanically guided sessions, he didn\u2019t just help me cope \u2014 he taught me to bonesmash my way back to confidence. I went from hiding under hats to mogging everyone in the room. Guided by the great de Bussy, I found a power I never knew I had. The baldness stays, but so does the energy.",
    author: "cz \u2014 Berlin, Germany",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    // Reset auto-advance timer on manual navigation
    setPaused(true);
    setTimeout(() => setPaused(false), 12000);
  }, []);

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 10000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      className="py-[clamp(80px,12vw,160px)] bg-dark-section relative overflow-hidden"
      id="testimonials"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 50% 50% at 20% 50%, rgba(184,150,90,0.04) 0%, transparent 60%),
          radial-gradient(ellipse 40% 60% at 80% 30%, rgba(138,154,123,0.03) 0%, transparent 50%)
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="text-center mb-[clamp(48px,6vw,80px)]">
          <ScrollReveal>
            <SectionLabel center>
              <span className="text-gold-light">Testimonials</span>
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] tracking-[-0.01em] text-sand-light text-balance">
              Words from Those Who Have Walked This Path
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="relative">
            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-gold/40 hover:text-gold transition-colors max-md:hidden"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-gold/40 hover:text-gold transition-colors max-md:hidden"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            {/* Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                  transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="min-w-full px-[clamp(40px,10vw,140px)]"
                  >
                    <div className="text-center max-w-[700px] mx-auto">
                      <div
                        className="font-heading text-[5rem] text-gold/30 leading-[0.5] mb-6"
                        aria-hidden="true"
                      >
                        &ldquo;
                      </div>
                      <p className="font-heading text-[clamp(1.1rem,1.8vw,1.45rem)] italic text-sand-light leading-[1.8] mb-8 font-light">
                        {t.text}
                      </p>
                      <span className="text-[0.75rem] tracking-[0.15em] uppercase text-gold-light">
                        {t.author}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots + counter */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <span className="text-[0.65rem] tracking-[0.1em] text-gold/40 tabular-nums">
                {String(current + 1).padStart(2, "0")}
              </span>
              <div className="flex gap-3" role="tablist">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-[2px] rounded-full transition-all duration-500 ${
                      i === current
                        ? "w-8 bg-gold"
                        : "w-4 bg-gold/30 hover:bg-gold/50"
                    }`}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <span className="text-[0.65rem] tracking-[0.1em] text-gold/40 tabular-nums">
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

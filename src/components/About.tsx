import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section className="py-[clamp(80px,12vw,160px)] bg-bg" id="about">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[clamp(40px,8vw,100px)] items-center">
          {/* Portrait */}
          <ScrollReveal className="max-md:max-w-[320px] max-md:mx-auto max-md:overflow-hidden">
            <div className="relative">
              <div className="relative aspect-[3/4] bg-sand-light overflow-hidden">
                <div className="absolute inset-3 border border-gold/40 z-[1] pointer-events-none" />
                <Image
                  src="/resnoir-portrait.jpg"
                  alt="An artist's rendition of Resnoir de Bussy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 450px"
                  priority
                />
              </div>
              <p className="mt-3 text-[0.65rem] tracking-[0.08em] text-text-light italic text-center">
                An artist&apos;s rendition of Resnoir de Bussy, circa 2021
              </p>
              <div className="absolute -bottom-5 -right-5 w-[120px] h-[120px] bg-gold opacity-[0.08] -z-1 max-md:hidden" aria-hidden="true" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal>
              <SectionLabel>About</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] tracking-[-0.01em] text-charcoal mb-1 text-balance">
                Resnoir de Bussy
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="font-heading text-[1.1rem] italic text-gold mb-8">
                Shamanic Practitioner
              </p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-text-light max-w-[65ch] mb-5">
                Born in Italy and carrying the name of an old French aristocratic
                lineage, I have always felt drawn to what lies beneath the surface
                of things. For over a decade, I have walked between worlds —
                journeying into the unseen realms to bring healing, clarity, and
                wholeness to those who seek it.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={4}>
              <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-text-light max-w-[65ch] mb-5">
                My path into shamanic practice began through my own transformative
                healing experience in the hills of Tuscany — one that
                fundamentally changed how I understand the nature of suffering and
                recovery. Trained in core shamanic practices and rooted in deep
                respect for earth-centred healing traditions, I work with
                compassionate spirit allies to facilitate profound energetic
                shifts. Distance is no barrier — energy transcends space and time.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={5}>
              <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-text-light max-w-[65ch] mb-9">
                My approach is grounded, pragmatic, and heart-centred. I hold
                space for your healing without judgement, meeting you exactly
                where you are.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="pt-6 border-t border-sand flex gap-10 max-md:gap-5 max-md:flex-wrap">
                {[
                  { num: "10+", label: "Years of Practice" },
                  { num: "500+", label: "Clients Served" },
                  { num: "30+", label: "Countries Reached" },
                ].map((s) => (
                  <div key={s.label} className="flex-1 max-md:flex-[0_0_calc(33%-14px)] max-md:text-center">
                    <h4 className="font-heading text-[2rem] text-gold mb-1">
                      {s.num}
                    </h4>
                    <span className="text-[0.7rem] tracking-[0.15em] uppercase text-text-light">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

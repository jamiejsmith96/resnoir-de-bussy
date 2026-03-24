import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    num: "1",
    title: "Discovery Call",
    desc: "A free 20-minute conversation to understand your needs, answer questions, and see if we\u2019re a good fit to work together.",
    tag: "Free \u00b7 20 min",
  },
  {
    num: "2",
    title: "Intention Setting",
    desc: "Together we clarify your healing intention and I share preparation guidance to help you get the most from your session.",
    tag: "Preparation",
  },
  {
    num: "3",
    title: "Healing Session",
    desc: "I journey into non-ordinary reality on your behalf, working with compassionate spirit allies to facilitate deep healing.",
    tag: "60\u201390 min",
  },
  {
    num: "4",
    title: "Integration",
    desc: "A follow-up call to share what I received, discuss insights, and provide aftercare practices to support your ongoing healing.",
    tag: "Aftercare",
  },
];

export default function Process() {
  return (
    <section className="py-[clamp(80px,12vw,160px)] bg-bg" id="process">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="text-center mb-[clamp(48px,6vw,80px)]">
          <ScrollReveal>
            <SectionLabel center>The Journey</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] tracking-[-0.01em] text-charcoal mb-4 text-balance">
              How It Works
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-text-light max-w-[65ch] mx-auto">
              A clear, supportive process from first contact to integration — so
              you feel held every step of the way.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-sand"
            aria-hidden="true"
          />

          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i} className="text-center px-5 relative">
              <div className="w-16 h-16 rounded-full border border-sand flex items-center justify-center mx-auto mb-6 bg-bg relative z-[1] transition-all duration-400 hover:border-gold hover:bg-gold/[0.06]">
                <span className="font-heading text-2xl text-gold font-medium">
                  {s.num}
                </span>
              </div>
              <h3 className="font-heading text-[1.2rem] text-charcoal mb-2">
                {s.title}
              </h3>
              <p className="text-[0.82rem] text-text-light mx-auto max-w-[220px]">
                {s.desc}
              </p>
              <span className="inline-block mt-3.5 text-[0.65rem] font-medium tracking-[0.15em] uppercase text-sage px-3 py-1 border border-sage-light rounded-full">
                {s.tag}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

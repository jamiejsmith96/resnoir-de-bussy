"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const faqs = [
  {
    q: "How does remote healing work?",
    a: "In shamanic practice, energy is not limited by physical distance. When I journey on your behalf, I enter an altered state of consciousness and work in the spirit realm \u2014 a dimension that exists beyond the constraints of space and time. Whether you\u2019re in the next room or on the other side of the world, the healing connection is equally potent. During your session, you\u2019ll simply rest in a comfortable, quiet space while I do the work. Many clients report feeling sensations, seeing visions, or experiencing emotional release during remote sessions \u2014 just as they would in person.",
  },
  {
    q: "Do I need to believe in shamanism for it to work?",
    a: "No. The healing does not depend on belief. What helps most is a genuine openness and willingness to receive \u2014 a simple readiness to allow something to shift. Many of my most profound sessions have been with people who approached the work with healthy scepticism but open minds. You don\u2019t need to understand how it works for it to be effective. I would simply ask that you come with curiosity rather than resistance, and let the experience speak for itself.",
  },
  {
    q: "What will I experience during a session?",
    a: "Experiences vary widely and all are perfectly normal. Some clients feel warmth, tingling, or gentle pressure. Others see colours, images, or have vivid inner experiences. Some feel deep emotion arise \u2014 tears, laughter, or a profound sense of peace. And some simply fall into a restful sleep, feeling the effects in the days that follow. There is no \u201cright\u201d way to experience a session. Whatever arises for you is exactly what needs to happen.",
  },
  {
    q: "How many sessions will I need?",
    a: "This depends entirely on your individual situation and what you\u2019re working with. Some clients experience profound shifts in a single session. Others benefit from a series of sessions that work layer by layer. During our discovery call, I can offer guidance on what might serve you best \u2014 but there is never any pressure to commit to more than feels right. You are always in control of your healing journey, and I will always be honest about what I believe will be most helpful.",
  },
  {
    q: "Is this a replacement for therapy or medical treatment?",
    a: "No. Shamanic healing is a complementary practice \u2014 it works beautifully alongside conventional therapy, counselling, and medical treatment, but it is not a substitute for professional healthcare. I am not a licensed medical or mental health professional and I do not diagnose or treat medical conditions. If you are currently receiving treatment, I encourage you to continue and to discuss any complementary approaches with your healthcare provider. Many therapists and doctors are increasingly supportive of holistic healing as part of a comprehensive approach to wellbeing.",
  },
  {
    q: "How do I prepare for a session?",
    a: "Preparation is simple. In the 24 hours before your session: rest well, drink plenty of water, eat lightly, and avoid alcohol or recreational substances. At the time of your session, find a quiet, comfortable space where you won\u2019t be disturbed. Lie down, close your eyes, and simply rest. You might set a gentle intention in your heart \u2014 something like \u201cI am open to receiving healing\u201d \u2014 but even this isn\u2019t necessary. After your session, I recommend gentle self-care: time in nature, journaling, and giving yourself space to process whatever arises over the following days.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="py-[clamp(80px,12vw,160px)] bg-sand-light" id="faq">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="text-center mb-[clamp(48px,6vw,80px)]">
          <ScrollReveal>
            <SectionLabel center>Questions</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] tracking-[-0.01em] text-charcoal mb-4 text-balance">
              Frequently Asked
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-text-light max-w-[65ch] mx-auto">
              If your question isn&apos;t answered here, please don&apos;t
              hesitate to reach out.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={Math.min(i, 5)}>
              <div className="border-b border-sand">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 text-left font-heading text-[1.2rem] text-charcoal hover:text-gold-dark transition-colors"
                  aria-expanded={active === i}
                >
                  {faq.q}
                  <span className="w-6 h-6 shrink-0 ml-4 relative" aria-hidden="true">
                    <span className="absolute w-3.5 h-px bg-gold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <span
                      className={`absolute w-px h-3.5 bg-gold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ${
                        active === i ? "rotate-90 opacity-0" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: active === i ? "500px" : "0",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <div className="pb-6">
                    <p className="text-[0.88rem] text-text-light leading-[1.8] max-w-[65ch]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

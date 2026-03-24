"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const services = [
  {
    title: "Soul Retrieval",
    desc: "Recovering vital essence lost through trauma, grief, shock, or difficult life experiences — restoring your sense of wholeness.",
    detail:
      'Soul loss is a natural protective response to overwhelming experiences. Parts of our vital essence separate to help us survive. Through shamanic journeying, I locate and return these soul parts, restoring energy, vitality, and a renewed sense of self. Many clients describe feeling "more like themselves" after soul retrieval.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-gold">
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" />
      </svg>
    ),
  },
  {
    title: "Energy Clearing",
    desc: "Removing intrusive energies, heavy imprints, and spiritual blockages that no longer serve your highest good.",
    detail:
      "We all accumulate energies that are not our own — from environments, relationships, and experiences. Extraction healing identifies and compassionately removes these intrusions from your luminous energy field, creating space for your own vital energy to flow freely again. Clients often report feeling lighter and clearer afterward.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-gold">
        <path d="M24 4c0 11.046-8.954 20-20 20 11.046 0 20 8.954 20 20 0-11.046 8.954-20 20-20-11.046 0-20-8.954-20-20z" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    title: "Ancestral Healing",
    desc: "Healing inherited family patterns, generational trauma, and lineage wounds that echo through the bloodline.",
    detail:
      "Patterns of suffering, addiction, illness, or dysfunction often run through family lines. Working with ancestral spirits and guides, I journey to the root of these patterns — healing the original wound so its effects cease to ripple through future generations. This work can bring profound relief and a sense of freedom from burdens that were never yours to carry.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-gold">
        <path d="M24 4v40" stroke="currentColor" strokeWidth="1.2" />
        <path d="M16 12h16M12 20h24M8 28h32M12 36h24" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="24" cy="40" r="3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Cord Cutting",
    desc: "Releasing toxic energetic attachments to people, places, or situations that drain your vitality and keep you tethered to the past.",
    detail:
      'Energetic cords form in all relationships — but some become unhealthy, draining your energy and keeping you emotionally bound. Through shamanic journeying, I identify and sever these cords with care and ceremony, freeing you to move forward while honouring what the relationship taught you. This is particularly powerful after breakups, family estrangement, or leaving toxic environments.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-gold">
        <circle cx="14" cy="24" r="8" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="34" cy="24" r="8" stroke="currentColor" strokeWidth="1.2" />
        <line x1="22" y1="24" x2="26" y2="24" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="21" y1="21" x2="27" y2="27" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <line x1="27" y1="21" x2="21" y2="27" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Power Animal Retrieval",
    desc: "Reconnecting you with a protective animal spirit guide who brings strength, wisdom, and spiritual support.",
    detail:
      'In shamanic tradition, we each have power animals — spirit allies in animal form who protect and guide us. When we lose connection with these allies, we can feel vulnerable, directionless, or depleted. Through journeying, I retrieve your power animal and teach you how to build a lasting relationship with this guide. Clients often feel an immediate sense of being supported and protected.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-gold">
        <path d="M12 36c0-8 4-16 12-20 8 4 12 12 12 20" stroke="currentColor" strokeWidth="1.2" />
        <path d="M24 16v24" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <path d="M18 28c2-1 4-1 6 0 2 1 4 1 6 0" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Space Clearing",
    desc: "Remotely purifying the energy of your home, office, or land — releasing stagnant, heavy, or unsettled energies.",
    detail:
      'Spaces hold energy — from past events, previous inhabitants, or earth energies. If your home or workplace feels heavy, uncomfortable, or unsettled, space clearing can restore harmony and peace. I work remotely with spirit allies to cleanse, bless, and protect your space. Ideal after moving in, renovation, relationship breakdowns, or if a space simply "doesn\'t feel right".',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-gold">
        <rect x="8" y="14" width="32" height="26" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 14l16-10 16 10" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="24" cy="28" r="6" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
        <path d="M24 22v12M18 28h12" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
  },
];

function ServiceCard({
  title,
  desc,
  detail,
  icon,
  delay,
}: {
  title: string;
  desc: string;
  detail: string;
  icon: React.ReactNode;
  delay: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={delay}>
      <div
        className="bg-bg p-10 px-8 relative overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] group"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
        <div className="mb-6" aria-hidden="true">{icon}</div>
        <h3 className="font-heading text-[1.4rem] text-charcoal mb-3">
          {title}
        </h3>
        <p className="text-[0.85rem] leading-[1.7] text-text-light mb-4 max-w-[65ch]">
          {desc}
        </p>
        <button
          className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-gold inline-flex items-center gap-2 hover:gap-3 transition-all"
          aria-expanded={expanded}
        >
          {expanded ? "Show Less" : "Learn More"}
          <svg
            viewBox="0 0 12 12"
            fill="none"
            className={`w-3 h-3 transition-transform duration-400 ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? "max-h-[200px] mt-4" : "max-h-0"
          }`}
        >
          <p className="text-[0.82rem] text-text-light pt-4 border-t border-sand">
            {detail}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <section className="py-[clamp(80px,12vw,160px)] bg-sand-light" id="services">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="text-center mb-[clamp(48px,6vw,80px)]">
          <ScrollReveal>
            <SectionLabel center>Healing Services</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] tracking-[-0.01em] text-charcoal mb-4 text-balance">
              Sacred Work for Modern Lives
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-text-light max-w-[65ch] mx-auto">
              Each session is uniquely tailored to your needs, guided by
              compassionate spirit allies working on your behalf.
            </p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

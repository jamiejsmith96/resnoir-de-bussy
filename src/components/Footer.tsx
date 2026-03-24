const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

const serviceLinks = [
  "Soul Retrieval",
  "Energy Clearing",
  "Ancestral Healing",
  "Cord Cutting",
  "Power Animal Retrieval",
  "Space Clearing",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-sand pt-[clamp(60px,8vw,100px)] pb-10">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 mb-[60px]">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="font-heading text-[1.3rem] font-medium text-sand-light tracking-[0.02em] inline-block mb-4"
            >
              Resnoir <span className="text-gold italic">de Bussy</span>
            </a>
            <p className="text-[0.82rem] text-text-light leading-[1.7]">
              Remote shamanic healing for deep transformation. Serving clients
              worldwide with compassion, integrity, and respect for the sacred
              traditions that guide this work.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 border border-dark-section-light flex items-center justify-center text-text-light hover:border-gold hover:text-gold-light transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="13.5" cy="4.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-dark-section-light flex items-center justify-center text-text-light hover:border-gold hover:text-gold-light transition-colors"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M10 18V10h3l.5-3H10V5.5c0-1 .5-1.5 1.5-1.5H13V1h-2c-2.5 0-4 1.5-4 4v2H5v3h2v8h3z" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-dark-section-light flex items-center justify-center text-text-light hover:border-gold hover:text-gold-light transition-colors"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <rect x="1" y="3" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 6.5l5 2.5-5 2.5v-5z" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-sand-light mb-5">
              Navigate
            </h4>
            <ul className="list-none space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.82rem] text-text-light hover:text-gold-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-sand-light mb-5">
              Services
            </h4>
            <ul className="list-none space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[0.82rem] text-text-light hover:text-gold-light transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-sand-light mb-5">
              Get in Touch
            </h4>
            <ul className="list-none space-y-2.5">
              <li>
                <a
                  href="mailto:hello@resnoirdebussy.com"
                  className="text-[0.82rem] text-text-light hover:text-gold-light transition-colors"
                >
                  hello@resnoirdebussy.com
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-[0.82rem] text-text-light hover:text-gold-light transition-colors"
                >
                  Book a Free Discovery Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-dark-section-light">
          <p className="text-[0.72rem] text-text-light leading-[1.8] max-w-[800px] mb-6 opacity-70">
            <strong>Disclaimer:</strong> Shamanic healing is not a substitute
            for professional medical, psychological, or psychiatric care. Resnoir
            de Bussy is not a licensed medical or mental health professional. The
            services offered are spiritual and holistic in nature, intended to
            complement — not replace — conventional medical or therapeutic
            treatment. Always consult your healthcare provider regarding any
            health concerns. Do not stop, start, or change any medication without
            consulting your physician. Individual experiences and results vary;
            no specific outcomes are guaranteed. All healing work is performed
            with the express, informed consent of the client.
          </p>
          <p className="text-[0.72rem] text-text-light opacity-50">
            &copy; 2026 Resnoir de Bussy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

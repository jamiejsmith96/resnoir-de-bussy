"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggle = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const scrollTo = (href: string) => {
    close();
    const el = document.querySelector(href);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[80px] z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(250,247,242,0.92)] backdrop-blur-[20px] shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] h-full flex items-center justify-between">
        <a
          href="#"
          className="font-heading text-[1.3rem] font-medium text-charcoal tracking-[0.02em]"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Resnoir <span className="text-gold italic">de Bussy</span>
        </a>

        <nav>
          <ul
            className={`flex items-center gap-9 list-none max-md:fixed max-md:inset-0 max-md:bg-bg/[0.98] max-md:backdrop-blur-[20px] max-md:flex-col max-md:justify-center max-md:gap-8 max-md:transition-transform max-md:duration-500 ${
              menuOpen
                ? "max-md:translate-x-0"
                : "max-md:translate-x-full"
            }`}
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.href);
                  }}
                  className="text-[0.75rem] font-normal tracking-[0.12em] uppercase text-text-light hover:text-charcoal transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-400 hover:after:w-full max-md:text-base"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#booking");
                }}
                className="text-[0.72rem] font-medium tracking-[0.12em] uppercase !text-white bg-charcoal px-7 py-3 hover:bg-gold-dark transition-colors"
              >
                Book a Session
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="hidden max-md:flex flex-col gap-1.5 p-2 z-[1001]"
          onClick={toggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`w-6 h-[1.5px] bg-charcoal transition-transform duration-400 ${
              menuOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-charcoal transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-charcoal transition-transform duration-400 ${
              menuOpen
                ? "-rotate-45 translate-x-[5px] -translate-y-[5px]"
                : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}

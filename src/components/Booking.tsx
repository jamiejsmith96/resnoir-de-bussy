"use client";

import { useState, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const sessionTypes = [
  {
    key: "discovery",
    label: "Introduction",
    title: "Discovery Call",
    price: "Free",
    note: "20-minute consultation",
    features: [
      "Discuss your needs and goals",
      "Learn about the healing process",
      "Ask any questions",
      "No commitment required",
    ],
    featured: false,
  },
  {
    key: "single",
    label: "Single Session",
    title: "Healing Session",
    price: "\u00a3150",
    note: "60\u201390 minute session",
    features: [
      "Full shamanic healing session",
      "Detailed journey report",
      "Integration follow-up call",
      "Aftercare guidance",
    ],
    featured: true,
  },
  {
    key: "package",
    label: "Package",
    title: "Deep Transformation",
    price: "\u00a3400",
    note: "3 sessions \u00b7 Save \u00a350",
    features: [
      "Three full healing sessions",
      "Deeper, layered healing work",
      "Priority scheduling",
      "Extended integration support",
    ],
    featured: false,
  },
];

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function Calendar({
  selectedDate,
  onSelect,
}: {
  selectedDate: Date | null;
  onSelect: (d: Date) => void;
}) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const changeMonth = (delta: number) => {
    let m = month + delta;
    let y = year;
    if (m > 11) { m = 0; y++; }
    if (m < 0) { m = 11; y--; }
    setMonth(m);
    setYear(y);
  };

  const firstDay = new Date(year, month, 1);
  let startDay = firstDay.getDay() - 1;
  if (startDay < 0) startDay = 6;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className="bg-white border border-sand p-8">
      <div className="flex items-center justify-between mb-6">
        <span className="font-heading text-[1.2rem] text-charcoal">
          {MONTH_NAMES[month]} {year}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => changeMonth(-1)}
            className="w-9 h-9 border border-sand flex items-center justify-center text-text-main hover:border-gold hover:text-gold transition-colors"
            aria-label="Previous month"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
          <button
            onClick={() => changeMonth(1)}
            className="w-9 h-9 border border-sand flex items-center justify-center text-text-main hover:border-gold hover:text-gold transition-colors"
            aria-label="Next month"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
          <span key={d} className="text-center text-[0.65rem] font-medium tracking-[0.1em] uppercase text-text-light py-2">
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`e-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const isToday = date.toDateString() === today.toDateString();
          const isSunday = date.getDay() === 0;
          const isSelected = selectedDate?.toDateString() === date.toDateString();
          const disabled = isPast || isSunday;

          return (
            <button
              key={day}
              disabled={disabled}
              onClick={() => onSelect(date)}
              className={`aspect-square flex items-center justify-center text-[0.85rem] rounded-full transition-colors ${
                isSelected
                  ? "bg-gold text-white"
                  : isToday
                  ? "border border-gold text-text-main"
                  : disabled
                  ? "text-sand cursor-default"
                  : "text-text-main hover:bg-sand-light"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="mt-5 pt-5 border-t border-sand text-[0.82rem] text-text-light">
        {selectedDate ? (
          <>
            Selected:{" "}
            <strong className="text-gold font-medium">
              {selectedDate.toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </strong>
          </>
        ) : (
          "Select a date to continue"
        )}
      </div>
    </div>
  );
}

export default function Booking() {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = useCallback((form: FormData) => {
    const errs: Record<string, string> = {};
    const name = (form.get("name") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const intention = (form.get("intention") as string)?.trim();

    if (!name) errs.name = "Please enter your name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address";
    if (!intention) errs.intention = "Please share a brief intention";
    if (!selectedDate) errs.date = "Please select a date";

    return errs;
  }, [selectedDate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSuccess(true);
      }, 1500);
    }
  };

  if (success) {
    return (
      <section className="py-[clamp(80px,12vw,160px)] bg-bg" id="booking">
        <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] text-center py-20">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="mx-auto mb-6 text-sage" aria-hidden="true">
            <circle cx="28" cy="28" r="27" stroke="currentColor" strokeWidth="1.5" />
            <path d="M18 28l7 7 13-13" stroke="currentColor" strokeWidth="2" />
          </svg>
          <h3 className="font-heading text-[1.8rem] text-charcoal mb-3">
            Thank You
          </h3>
          <p className="text-[0.9rem] text-text-light max-w-[65ch] mx-auto">
            Your booking request has been received. I&apos;ll be in touch within 24
            hours to confirm your session and share preparation details. In the
            meantime, take a moment to breathe and honour this step you&apos;ve
            taken.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[clamp(80px,12vw,160px)] bg-bg" id="booking">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="text-center mb-[clamp(48px,6vw,80px)]">
          <ScrollReveal>
            <SectionLabel center>Book a Session</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] tracking-[-0.01em] text-charcoal mb-4 text-balance">
              Begin Your Healing Journey
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-text-light max-w-[65ch] mx-auto">
              Choose your session type, select a date, and share a little about
              what brings you here.
            </p>
          </ScrollReveal>
        </div>

        {/* Session cards */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sessionTypes.map((s) => (
              <div
                key={s.key}
                onClick={() => setSelected(s.key)}
                className={`border p-9 px-7 text-center cursor-pointer transition-all relative hover:border-gold hover:-translate-y-0.5 ${
                  selected === s.key
                    ? "border-gold shadow-[0_0_0_1px_var(--color-gold),0_8px_32px_rgba(184,150,90,0.12)]"
                    : s.featured
                    ? "border-gold"
                    : "border-sand"
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-[0.6rem] font-medium tracking-[0.15em] uppercase px-4 py-1 whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <div className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold mb-3">
                  {s.label}
                </div>
                <h3 className="font-heading text-[1.4rem] text-charcoal mb-2">
                  {s.title}
                </h3>
                <div className="font-heading text-[2.2rem] text-charcoal mb-1">
                  {s.price}
                </div>
                <div className="text-[0.75rem] text-text-light mb-5">
                  {s.note}
                </div>
                <ul className="text-left text-[0.82rem] text-text-light list-none">
                  {s.features.map((f) => (
                    <li key={f} className="py-1.5 flex items-center gap-2.5">
                      <span className="w-1 h-1 bg-gold rounded-full shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full py-3.5 text-[0.7rem] font-medium tracking-[0.15em] uppercase border transition-colors ${
                    selected === s.key
                      ? "bg-charcoal text-white border-charcoal"
                      : "border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                  }`}
                >
                  {selected === s.key ? "Selected" : "Select"}
                </button>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Calendar + Form */}
        <div
          className={`overflow-hidden transition-all duration-800 ${
            selected ? "max-h-[2000px]" : "max-h-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-sand">
            <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />

            <div>
              <h3 className="font-heading text-[1.4rem] text-charcoal mb-2">
                Share Your Intention
              </h3>
              <p className="text-[0.82rem] text-text-light mb-7 max-w-[65ch]">
                Tell me a little about what brings you to this work. All
                information is held in strict confidence.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block text-[0.7rem] font-medium tracking-[0.15em] uppercase text-text-main mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                    className={`w-full px-4 py-3.5 border bg-white text-[0.9rem] text-text-main outline-none transition-colors placeholder:text-sand ${
                      errors.name ? "border-[#C0392B]" : "border-sand focus:border-gold"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[0.72rem] text-[#C0392B] mt-1.5 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-[0.7rem] font-medium tracking-[0.15em] uppercase text-text-main mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    spellCheck={false}
                    className={`w-full px-4 py-3.5 border bg-white text-[0.9rem] text-text-main outline-none transition-colors placeholder:text-sand ${
                      errors.email ? "border-[#C0392B]" : "border-sand focus:border-gold"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[0.72rem] text-[#C0392B] mt-1.5 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="block text-[0.7rem] font-medium tracking-[0.15em] uppercase text-text-main mb-2"
                  >
                    Phone Number{" "}
                    <span className="font-light normal-case tracking-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+44 7XXX XXXXXX"
                    autoComplete="tel"
                    className="w-full px-4 py-3.5 border border-sand bg-white text-[0.9rem] text-text-main outline-none transition-colors focus:border-gold placeholder:text-sand"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="intention"
                    className="block text-[0.7rem] font-medium tracking-[0.15em] uppercase text-text-main mb-2"
                  >
                    What Brings You Here?
                  </label>
                  <textarea
                    id="intention"
                    name="intention"
                    placeholder="Share as much or as little as you feel comfortable with&hellip;"
                    rows={4}
                    className={`w-full px-4 py-3.5 border bg-white text-[0.9rem] text-text-main outline-none transition-colors resize-y placeholder:text-sand ${
                      errors.intention ? "border-[#C0392B]" : "border-sand focus:border-gold"
                    }`}
                  />
                  {errors.intention && (
                    <span className="text-[0.72rem] text-[#C0392B] mt-1.5 block">
                      {errors.intention}
                    </span>
                  )}
                </div>

                {errors.date && (
                  <p className="text-[0.72rem] text-[#C0392B] mb-4" role="alert">
                    {errors.date}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-[18px] bg-charcoal text-white text-[0.72rem] font-medium tracking-[0.18em] uppercase hover:bg-gold-dark hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {submitting ? "Sending\u2026" : "Request Booking"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

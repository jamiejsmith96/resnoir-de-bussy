"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    const form = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};

    const name = (form.get("name") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const message = (form.get("message") as string)?.trim();

    if (!name) errs.name = "Please enter your name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address";
    if (!message) errs.message = "Please enter a message";

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setSubmitError(data.error || "Something went wrong.");
        setSubmitting(false);
      }
    } catch {
      setSubmitError("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <section className="py-[clamp(60px,8vw,100px)] bg-bg" id="contact">
        <div className="max-w-[600px] mx-auto px-[clamp(24px,5vw,80px)] text-center py-12">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-5 text-sage" aria-hidden="true">
            <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" />
            <path d="M15 24l6 6 12-12" stroke="currentColor" strokeWidth="2" />
          </svg>
          <h3 className="font-heading text-[1.5rem] text-charcoal mb-2">Message Sent</h3>
          <p className="text-[0.88rem] text-text-light">
            Thank you for reaching out. I&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[clamp(60px,8vw,100px)] bg-bg" id="contact">
      <div className="max-w-[600px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="text-center mb-10">
          <ScrollReveal>
            <SectionLabel center>Get in Touch</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-heading text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-[1.2] tracking-[-0.01em] text-charcoal mb-3 text-balance">
              Have a Question?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-[clamp(0.88rem,1vw,1rem)] text-text-light max-w-[50ch] mx-auto">
              Send a message and I&apos;ll get back to you within 24 hours.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
              <label htmlFor="contact-name" className="block text-[0.7rem] font-medium tracking-[0.15em] uppercase text-text-main mb-2">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                className={`w-full px-4 py-3.5 border bg-white text-[0.9rem] text-text-main outline-none transition-colors placeholder:text-sand ${
                  errors.name ? "border-[#C0392B]" : "border-sand focus:border-gold"
                }`}
              />
              {errors.name && <span className="text-[0.72rem] text-[#C0392B] mt-1.5 block">{errors.name}</span>}
            </div>

            <div className="mb-5">
              <label htmlFor="contact-email" className="block text-[0.7rem] font-medium tracking-[0.15em] uppercase text-text-main mb-2">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                spellCheck={false}
                className={`w-full px-4 py-3.5 border bg-white text-[0.9rem] text-text-main outline-none transition-colors placeholder:text-sand ${
                  errors.email ? "border-[#C0392B]" : "border-sand focus:border-gold"
                }`}
              />
              {errors.email && <span className="text-[0.72rem] text-[#C0392B] mt-1.5 block">{errors.email}</span>}
            </div>

            <div className="mb-5">
              <label htmlFor="contact-message" className="block text-[0.7rem] font-medium tracking-[0.15em] uppercase text-text-main mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="How can I help&hellip;"
                rows={5}
                className={`w-full px-4 py-3.5 border bg-white text-[0.9rem] text-text-main outline-none transition-colors resize-y placeholder:text-sand ${
                  errors.message ? "border-[#C0392B]" : "border-sand focus:border-gold"
                }`}
              />
              {errors.message && <span className="text-[0.72rem] text-[#C0392B] mt-1.5 block">{errors.message}</span>}
            </div>

            {submitError && (
              <p className="text-[0.72rem] text-[#C0392B] mb-4" role="alert">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-[16px] bg-charcoal text-white text-[0.72rem] font-medium tracking-[0.18em] uppercase hover:bg-gold-dark hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending\u2026" : "Send Message"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

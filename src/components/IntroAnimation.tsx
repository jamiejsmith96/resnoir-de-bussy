"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const SignaturePlayer = dynamic(() => import("./SignaturePlayer"), {
  ssr: false,
});

export default function IntroAnimation() {
  const [phase, setPhase] = useState<"playing" | "holding" | "fading" | "done">(
    "playing"
  );
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // Hide scrollbar thumb during intro (track stays so no shift)
    document.documentElement.classList.add("intro-active");

    const mountTimer = setTimeout(() => setMounted(true), 50);
    const t1 = setTimeout(() => setPhase("holding"), 2800);
    const t2 = setTimeout(() => setPhase("fading"), 3400);
    const t3 = setTimeout(() => {
      setPhase("done");
      document.documentElement.classList.remove("intro-active");
    }, 4800);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.documentElement.classList.remove("intro-active");
    };
  }, []);

  if (phase === "done") return null;

  const isFading = phase === "fading";

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FAF7F2",
        opacity: isFading ? 0 : 1,
        transition: isFading
          ? "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)"
          : "none",
        pointerEvents: isFading ? "none" : "auto",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          width: 240,
          height: 240,
          borderRadius: "50%",
          border: "1px solid rgba(184, 150, 90, 0.12)",
          transform: isFading ? "scale(1.15)" : "scale(1)",
          transition: "transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 340,
          height: 340,
          borderRadius: "50%",
          border: "1px solid rgba(184, 150, 90, 0.06)",
          transform: isFading ? "scale(1.1)" : "scale(1)",
          transition: "transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Signature */}
      {mounted && (
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "min(480px, 85vw)",
            transform: isFading ? "translateY(-8px)" : "translateY(0)",
            transition: "transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <SignaturePlayer />
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;

    const update = () => {
      if (!barRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      barRef.current.style.width = `${pct}%`;
    };

    // Poll every frame — syncs perfectly with Lenis since both run on rAF
    const loop = () => {
      update();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[1001]" aria-hidden="true">
      <div ref={barRef} className="h-full bg-gold" style={{ width: 0 }} />
    </div>
  );
}

"use client";

import React, { useRef, useState } from "react";

export default function BookTitle() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0.5);
  const [mouseY, setMouseY] = useState(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMouseX(Math.min(1, Math.max(0, x)));
    setMouseY(Math.min(1, Math.max(0, y)));
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="relative inline-block select-none z-20">
      {/* Letterpress base */}
      <h1
        className="font-display font-bold text-3xl md:text-[38px] tracking-[0.26em] uppercase text-center leading-[1.4]"
        style={{
          color: "#3A2C1E",
          textShadow:
            "0.5px 0.5px 0px rgba(255,255,255,0.45), " +
            "-0.5px -0.5px 0px rgba(110,90,78,0.2), " +
            "1.5px 1.5px 2px rgba(58,44,30,0.12), " +
            "2.5px 2.5px 4px rgba(58,44,30,0.06)",
        }}
      >
        PROJECT POONAM
      </h1>
      {/* Gold foil sheen overlay */}
      <span
        className="absolute inset-0 font-display font-bold text-3xl md:text-[38px] tracking-[0.26em] uppercase text-center leading-[1.4] pointer-events-none"
        style={{
          background:
            `radial-gradient(circle 50px at ${mouseX * 100}% ${mouseY * 100}%, rgba(234,216,178,0.5) 0%, rgba(234,216,178,0.15) 30%, transparent 60%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        aria-hidden="true"
      >
        PROJECT POONAM
      </span>
    </div>
  );
}

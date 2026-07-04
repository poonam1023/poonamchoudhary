"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function BookTitle() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(Math.min(1, Math.max(0, x)));
    mouseY.set(Math.min(1, Math.max(0, y)));
  };

  const xPct = useTransform(mouseX, (x) => `${x * 100}%`);
  const yPct = useTransform(mouseY, (y) => `${y * 100}%`);

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="relative inline-block select-none z-20">
      {/* Letterpress base */}
      <h1
        className="font-display font-bold text-3xl md:text-[38px] tracking-[0.26em] uppercase text-center leading-[1.4]"
        style={{
          color: "#3A2C1E",
          textShadow:
            "0.5px 0.5px 0px rgba(255,255,255,0.45), " +
            "-0.5px -0.5px 0px rgba(90,70,58,0.38), " +
            "1.5px 1.5px 2.5px rgba(45,30,20,0.24), " +
            "2.5px 2.5px 5px rgba(45,30,20,0.12)",
        }}
      >
        POONAM CHOUDHARY
      </h1>
      {/* Gold foil sheen overlay */}
      <motion.span
        className="absolute inset-0 font-display font-bold text-3xl md:text-[38px] tracking-[0.26em] uppercase text-center leading-[1.4] pointer-events-none"
        style={{
          "--x-pos": xPct,
          "--y-pos": yPct,
          backgroundImage:
            "radial-gradient(circle 50px at var(--x-pos) var(--y-pos), rgba(234,216,178,0.5) 0%, rgba(234,216,178,0.15) 30%, transparent 60%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        } as any}
        aria-hidden="true"
      >
        POONAM CHOUDHARY
      </motion.span>
    </div>
  );
}

export default React.memo(BookTitle);

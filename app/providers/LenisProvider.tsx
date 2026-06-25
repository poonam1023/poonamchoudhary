"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Syncs every Lenis scroll tick with GSAP's ScrollTrigger engine
function GSAPSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    // After Lenis mounts and measures the page, refresh ScrollTrigger's trigger positions
    const id = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(id);
  }, []);

  return null;
}

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      }}
    >
      <GSAPSync />
      {children}
    </ReactLenis>
  );
}

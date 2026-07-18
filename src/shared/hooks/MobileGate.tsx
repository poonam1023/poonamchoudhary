"use client";

import React, { useState, useEffect, ReactNode } from "react";

const MOBILE_BREAKPOINT = 1024;

/**
 * SSR-safe hook — returns true when viewport < 1024px.
 * Always false on the server to avoid hydration mismatch.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

// ─── MobileGate ────────────────────────────────────────────────────────────

interface MobileGateProps {
  desktop: ReactNode;
  mobile: ReactNode;
}

/**
 * Conditionally renders the desktop or mobile experience based on viewport.
 * Server renders `desktop` (avoids layout shift); client swaps to `mobile`
 * on viewports < 1024px after hydration.
 */
export function MobileGate({ desktop, mobile }: MobileGateProps) {
  const isMobile = useIsMobile();
  return <>{isMobile ? mobile : desktop}</>;
}

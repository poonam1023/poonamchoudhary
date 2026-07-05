import React from "react";

interface CoverSectionProps {
  children: React.ReactNode;
}

/**
 * CoverSection — Full-bleed cover layout wrapper.
 * Uses h-full so the inner flex layout can use justify-between for editorial rhythm.
 */
export default function CoverSection({ children }: CoverSectionProps) {
  return (
    <section className="relative w-full h-full flex flex-col z-10 select-none overflow-hidden">
      {children}
    </section>
  );
}

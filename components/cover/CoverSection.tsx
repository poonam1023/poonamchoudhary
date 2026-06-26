import React from "react";

interface CoverSectionProps {
  children: React.ReactNode;
}

export default function CoverSection({ children }: CoverSectionProps) {
  return (
    <section className="relative w-full h-full flex flex-col justify-between items-center py-8 px-8 md:py-12 md:px-[72px] lg:px-[120px] max-w-[900px] mx-auto select-none z-10">
      {children}
    </section>
  );
}

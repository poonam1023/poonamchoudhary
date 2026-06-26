import React from "react";

export default function AuthorName() {
  return (
    <div className="flex flex-col items-center justify-center select-none">
      <span className="font-sans text-[8px] md:text-[9px] tracking-[0.3em] text-ink/40 uppercase">by</span>
      <span className="mt-4 font-display font-bold text-sm md:text-base tracking-[0.18em] text-ink/90 uppercase">Poonam</span>
    </div>
  );
}

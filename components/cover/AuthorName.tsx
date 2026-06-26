import React from "react";

export default function AuthorName() {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 select-none">
      <span className="font-sans text-[9px] md:text-[10px] tracking-[0.25em] text-ink/45 uppercase">by</span>
      <span className="font-display font-medium text-lg md:text-xl tracking-[0.1em] text-ink/80 italic">Poonam</span>
    </div>
  );
}

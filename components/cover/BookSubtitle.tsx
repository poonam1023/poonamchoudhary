import React from "react";

export default function BookSubtitle() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 select-none">
      {/* Decorative star ornament between Title and Subtitle */}
      <span className="text-[10px] text-ink/30 tracking-widest">✦</span>
      <p className="font-sans font-normal text-[11px] md:text-[12.5px] tracking-wide text-ink/75 text-center max-w-[320px] md:max-w-[420px] mx-auto leading-[1.9]">
        Every project begins as a page waiting to be turned.
      </p>
    </div>
  );
}

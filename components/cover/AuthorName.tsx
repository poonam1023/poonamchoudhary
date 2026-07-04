import React from "react";

function AuthorName() {
  return (
    <div className="flex flex-col items-center justify-center select-none">
      {/* Decorative fleuron divider */}
      <span className="text-[10px] text-ink/30 mb-3 select-none leading-none">❦</span>
      <span className="font-sans text-[8px] md:text-[9px] tracking-[0.3em] text-ink/40 uppercase">by</span>
      <span className="mt-4 font-display font-bold text-sm md:text-base tracking-[0.18em] text-ink/90 uppercase">Poonam Choudhary</span>
      {/* Credentials line */}
      <span className="mt-2 font-sans text-[7px] md:text-[8px] tracking-[0.15em] text-ink/50 text-center">
        Former Banker <span className="mx-1.5 inline-block text-[3px] align-middle">•</span> Writer <span className="mx-1.5 inline-block text-[3px] align-middle">•</span> Mother
      </span>
      {/* Decorative fleuron divider */}
      <span className="text-[10px] text-ink/30 mt-4 select-none leading-none">❦</span>
    </div>
  );
}

export default React.memo(AuthorName);

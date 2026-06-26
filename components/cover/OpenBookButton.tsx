"use client";

import React from "react";

interface OpenBookButtonProps {
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
}

export default function OpenBookButton({
  onHoverStart,
  onHoverEnd,
  onClick,
}: OpenBookButtonProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      className="group flex flex-col items-center justify-center py-4 px-12 cursor-pointer focus:outline-none select-none z-20"
      aria-label="Open the book"
    >
      {/* Top Divider Line */}
      <div className="w-32 h-[1px] bg-ink/20 group-hover:bg-accent-sage/40 transition-colors duration-500" />
      
      {/* Button Text & Arrow */}
      <div className="my-4 flex items-center font-sans font-medium text-[10px] md:text-[11px] tracking-[0.25em] text-ink/75 group-hover:text-accent-sage transition-colors duration-500 uppercase">
        Open the Book
        <span className="ml-2 inline-block transform group-hover:translate-x-2 transition-transform duration-500 ease-out">
          →
        </span>
      </div>

      {/* Bottom Divider Line with growing center-out underline */}
      <div className="relative w-32 h-[1px] bg-ink/20">
        <div className="absolute inset-0 bg-accent-sage scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ease-[0.25,1,0.5,1]" />
      </div>
    </button>
  );
}

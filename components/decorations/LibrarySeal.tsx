"use client";

import React from "react";

interface LibrarySealProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  opacity?: number;
  variant?: "ink" | "emboss";
  text1?: string;
  text2?: string;
  className?: string;
}

export default function LibrarySeal({
  position = { bottom: "10%", left: "10%" },
  rotation = -5,
  scale = 1,
  opacity = 0.35,
  variant = "ink",
  text1 = "PROJECT POONAM",
  text2 = "LITERARY JOURNAL",
  className = "",
}: LibrarySealProps) {
  return (
    <div
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        ...position,
        width: 72 * scale,
        height: 72 * scale,
        transform: `rotate(${rotation}deg)`,
        opacity,
        zIndex: 22,
      }}
    >
      {variant === "ink" ? (
        // Circular ink library stamp
        <div
          className="w-full h-full rounded-full border-[1.5px] border-[#6E5A4E]/30 flex flex-col items-center justify-center p-1.5 text-center mix-blend-multiply"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(110,90,78,0.1)",
          }}
        >
          {/* Inner ring */}
          <div className="w-full h-full rounded-full border border-dashed border-[#6E5A4E]/25 flex flex-col items-center justify-center p-1 relative">
            <span className="text-[5.5px] font-sans font-bold tracking-[0.16em] text-[#6E5A4E]/60 mb-0.5 leading-none">
              {text1}
            </span>
            <div className="w-6 h-[0.5px] bg-[#6E5A4E]/20 my-0.5" />
            <span className="text-[4px] font-sans tracking-[0.12em] text-[#6E5A4E]/50 leading-none">
              {text2}
            </span>
            <span className="text-[5px] font-sans font-medium text-[#6E5A4E]/40 mt-1 select-none leading-none">
              MMXXVI
            </span>

            {/* Ink smudge spots */}
            <div className="absolute top-2 left-2 w-1.5 h-1 rounded-full bg-[#6E5A4E]/10 blur-[0.5px]" />
            <div className="absolute bottom-3 right-2 w-1 h-1.5 rounded-full bg-[#6E5A4E]/8 blur-[0.5px]" />
          </div>
        </div>
      ) : (
        // Embossed paper seal
        <div
          className="w-full h-full rounded-full flex flex-col items-center justify-center text-center select-none"
          style={{
            border: "0.5px solid rgba(110,90,78,0.12)",
            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1.5px rgba(110,90,78,0.15), 0 1px 3px rgba(0,0,0,0.04)",
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 80%)",
          }}
        >
          <div className="w-[88%] h-[88%] rounded-full border border-dashed border-[#6E5A4E]/12 flex flex-col items-center justify-center p-1.5">
            <span
              className="text-[5px] font-display text-emboss tracking-[0.2em] font-medium text-[#6E5A4E]/30 leading-none"
              style={{
                textShadow: "0.5px 0.5px 0px rgba(255,255,255,0.35), -0.5px -0.5px 0px rgba(0,0,0,0.06)",
              }}
            >
              PC
            </span>
            <span className="text-[3px] font-sans tracking-widest text-[#6E5A4E]/20 mt-1 uppercase">
              Publisher
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

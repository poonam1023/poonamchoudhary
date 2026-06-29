"use client";

import React from "react";

interface VintageStampProps {
  text: string;
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  rotation?: number;
  scale?: number;
  opacity?: number;
  className?: string;
}

export default function VintageStamp({
  text,
  position = { bottom: "10%", left: "10%" },
  rotation = -4,
  scale = 1,
  opacity = 0.28,
  className = "",
}: VintageStampProps) {
  return (
    <div
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        ...position,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        opacity,
        zIndex: 2,
      }}
    >
      {/* Box borders with ink distressing */}
      <div 
        className="border-[1.5px] border-[#6E5A4E] text-[#6E5A4E] font-sans text-[7.5px] font-bold tracking-[0.24em] uppercase px-2 py-1 select-none flex items-center justify-center relative mix-blend-multiply"
        style={{
          borderRadius: "1px",
          boxShadow: "inset 0 0 4px rgba(110,90,78,0.15)",
        }}
      >
        {/* Distress overlays — simple dots to simulate patchy ink */}
        <div className="absolute top-0.5 left-1 w-1.5 h-0.5 bg-paper-primary opacity-60 rounded-full" />
        <div className="absolute bottom-1 right-2 w-1 h-1 bg-paper-primary opacity-60 rounded-full" />
        <div className="absolute top-1.5 right-1 w-0.5 h-0.5 bg-paper-primary opacity-80 rounded-full" />
        
        {text}
      </div>
    </div>
  );
}

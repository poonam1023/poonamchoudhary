"use client";

import React from "react";

interface DecorativeFrameProps {
  children?: React.ReactNode;
  variant?: "double-rule" | "filigree" | "simple";
  opacity?: number;
  color?: string;
  padding?: number | string;
  className?: string;
}

export default function DecorativeFrame({
  children,
  variant = "double-rule",
  opacity = 0.35,
  color = "#6E5A4E",
  padding = "8px",
  className = "",
}: DecorativeFrameProps) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        padding,
      }}
    >
      {/* ── Frame Border lines ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          opacity,
          border: `0.75px solid ${color}`,
        }}
      />

      {variant === "double-rule" && (
        <div
          className="absolute inset-1 pointer-events-none select-none"
          style={{
            opacity: opacity * 0.7,
            border: `0.4px solid ${color}`,
          }}
        />
      )}

      {/* ── Corner Ornaments ── */}
      {variant === "filigree" && (
        <>
          {/* Top-Left Filigree */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px]" style={{ borderColor: color }} />
          {/* Top-Right Filigree */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px]" style={{ borderColor: color }} />
          {/* Bottom-Left Filigree */}
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px]" style={{ borderColor: color }} />
          {/* Bottom-Right Filigree */}
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px]" style={{ borderColor: color }} />
        </>
      )}

      {variant === "double-rule" && (
        <>
          {/* Tiny corner dots for luxury print detail */}
          <div className="absolute -top-0.5 -left-0.5 w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
          <div className="absolute -top-0.5 -right-0.5 w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
          <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
          <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
        </>
      )}

      {/* ── Inner content ── */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

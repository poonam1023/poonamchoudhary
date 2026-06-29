"use client";

import React from "react";

interface VintageBorderProps {
  opacity?: number;
  color?: string;
  className?: string;
}

export default function VintageBorder({
  opacity = 0.2,
  color = "#6E5A4E",
  className = "",
}: VintageBorderProps) {
  return (
    <div
      className={`absolute inset-4 pointer-events-none select-none ${className}`}
      style={{
        opacity,
        zIndex: 11,
      }}
    >
      {/* Outer thin border */}
      <div
        className="absolute inset-0 border border-double"
        style={{
          borderColor: color,
          borderWidth: "3px",
        }}
      />
      {/* Inner thin line */}
      <div
        className="absolute inset-1.5 border"
        style={{
          borderColor: color,
          borderWidth: "0.5px",
        }}
      />

      {/* Ornate corners using SVG vectors */}
      {/* Top Left */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-2 left-2"
      >
        <path d="M2 22 V2 H22 M6 18 V6 H18" stroke={color} strokeWidth="0.75" />
        <circle cx="6" cy="6" r="1.5" fill={color} />
      </svg>

      {/* Top Right */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-2 right-2 transform rotate-90"
      >
        <path d="M2 22 V2 H22 M6 18 V6 H18" stroke={color} strokeWidth="0.75" />
        <circle cx="6" cy="6" r="1.5" fill={color} />
      </svg>

      {/* Bottom Left */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-2 left-2 transform -rotate-90"
      >
        <path d="M2 22 V2 H22 M6 18 V6 H18" stroke={color} strokeWidth="0.75" />
        <circle cx="6" cy="6" r="1.5" fill={color} />
      </svg>

      {/* Bottom Right */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-2 right-2 transform rotate-180"
      >
        <path d="M2 22 V2 H22 M6 18 V6 H18" stroke={color} strokeWidth="0.75" />
        <circle cx="6" cy="6" r="1.5" fill={color} />
      </svg>
    </div>
  );
}

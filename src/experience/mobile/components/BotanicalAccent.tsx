"use client";

import React from "react";

interface BotanicalAccentProps {
  variant?: "branch" | "leaf" | "sprig" | "divider";
  opacity?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const paths: Record<string, React.ReactNode> = {
  branch: (
    <>
      <path d="M40 80 C40 60 30 40 20 20" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M40 65 C50 55 60 48 72 45" strokeWidth="1" strokeLinecap="round" />
      <path d="M40 50 C28 42 22 35 18 28" strokeWidth="1" strokeLinecap="round" />
      <path d="M40 35 C50 28 58 22 68 20" strokeWidth="0.9" strokeLinecap="round" />
      <ellipse cx="72" cy="44" rx="6" ry="4" transform="rotate(-20 72 44)" />
      <ellipse cx="68" cy="19" rx="5" ry="3" transform="rotate(15 68 19)" />
      <ellipse cx="18" cy="27" rx="5" ry="3" transform="rotate(-30 18 27)" />
    </>
  ),
  leaf: (
    <>
      <path d="M40 80 C40 50 20 30 10 10 C30 15 50 30 40 80Z" />
      <path d="M40 80 C40 60 30 45 25 35" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M35 60 C28 55 22 48 20 42" strokeWidth="0.7" strokeLinecap="round" />
    </>
  ),
  sprig: (
    <>
      <path d="M40 80 L40 20" strokeWidth="1" strokeLinecap="round" />
      <path d="M40 65 C30 58 25 52 22 44" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M40 50 C50 43 55 37 57 30" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M40 35 C32 28 28 22 26 16" strokeWidth="0.8" strokeLinecap="round" />
      <ellipse cx="22" cy="43" rx="5" ry="3" transform="rotate(-35 22 43)" />
      <ellipse cx="57" cy="29" rx="5" ry="3" transform="rotate(25 57 29)" />
      <ellipse cx="26" cy="15" rx="4" ry="2.5" transform="rotate(-20 26 15)" />
    </>
  ),
  divider: (
    <>
      <path d="M0 10 C20 5 35 14 50 10 C65 6 80 14 100 10" strokeWidth="1" strokeLinecap="round" />
      <ellipse cx="25" cy="7" rx="4" ry="2.5" transform="rotate(-15 25 7)" />
      <ellipse cx="75" cy="7" rx="4" ry="2.5" transform="rotate(15 75 7)" />
      <ellipse cx="50" cy="9" rx="3" ry="2" />
    </>
  ),
};

const viewBoxes: Record<string, string> = {
  branch: "0 0 90 90",
  leaf: "0 0 80 90",
  sprig: "0 0 80 90",
  divider: "0 0 100 20",
};

/**
 * Lightweight inline SVG botanical illustration for section dividers and
 * decorative accents in the mobile experience. Zero external dependencies.
 */
export default function BotanicalAccent({
  variant = "divider",
  opacity = 0.18,
  color = "#A8B29A",
  className = "",
  style = {},
}: BotanicalAccentProps) {
  return (
    <svg
      viewBox={viewBoxes[variant]}
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      {paths[variant]}
    </svg>
  );
}

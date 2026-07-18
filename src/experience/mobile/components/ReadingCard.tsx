"use client";

import React, { ReactNode } from "react";

interface ReadingCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Slight rotation for editorial feel */
  tilt?: number;
  onClick?: () => void;
}

/**
 * Rounded editorial card with warm paper background and soft shadow.
 * The foundation for testimonials, article previews, and highlight items.
 */
export default function ReadingCard({
  children,
  className = "",
  style = {},
  tilt = 0,
  onClick,
}: ReadingCardProps) {
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      className={className}
      style={{
        background: "linear-gradient(145deg, #FDFAF6 0%, #F7F2EA 100%)",
        borderRadius: "20px",
        border: "1px solid rgba(110,90,78,0.08)",
        boxShadow:
          "0 2px 8px rgba(58,44,30,0.06), 0 8px 24px rgba(58,44,30,0.05)",
        padding: "24px",
        transform: tilt !== 0 ? `rotate(${tilt}deg)` : undefined,
        cursor: onClick ? "pointer" : "default",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

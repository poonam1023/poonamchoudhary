"use client";

import React from "react";

interface EditorialLabelProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function EditorialLabel({
  text,
  className = "",
  style = {},
}: EditorialLabelProps) {
  return (
    <span
      className={`font-sans uppercase text-[7px] md:text-[8px] tracking-[0.38em] font-semibold text-[#6E5A4E]/40 select-none leading-none inline-block ${className}`}
      style={{
        textShadow: "0.2px 0.2px 0px rgba(255,255,255,0.45)",
        ...style,
      }}
    >
      {text}
    </span>
  );
}

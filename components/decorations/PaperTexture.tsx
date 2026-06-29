"use client";

import React from "react";

interface PaperTextureProps {
  opacity?: number;
  variant?: "antique" | "sage" | "rose" | "parchment";
  className?: string;
}

export default function PaperTexture({
  opacity = 1,
  variant = "antique",
  className = "",
}: PaperTextureProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "sage":
        return {
          gradient: "from-[#A8B29A]/15 via-transparent to-[#8EA98C]/20",
          stain1: "rgba(168,178,154,0.06)",
          stain2: "rgba(142,169,140,0.04)",
        };
      case "rose":
        return {
          gradient: "from-[#D9A0A0]/15 via-transparent to-[#B89482]/20",
          stain1: "rgba(217,160,160,0.06)",
          stain2: "rgba(184,148,130,0.04)",
        };
      case "parchment":
        return {
          gradient: "from-[#EAD8B2]/20 via-transparent to-[#C4A882]/25",
          stain1: "rgba(196,168,130,0.08)",
          stain2: "rgba(180,150,110,0.05)",
        };
      case "antique":
      default:
        return {
          gradient: "from-[#E8DCCB]/25 via-transparent to-[#C4A882]/30",
          stain1: "rgba(110,90,78,0.05)",
          stain2: "rgba(168,178,154,0.04)",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden rounded-md ${className}`}
      style={{ opacity }}
    >
      {/* Base Hue Blend */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${styles.gradient}`} />

      {/* Layer of fibers: repeating micro-grid simulating fine woven book cover fibers */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(110,90,78,0.15) 1px, transparent 1px),
            linear-gradient(0deg, rgba(110,90,78,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "4px 4px",
        }}
      />

      {/* Organic Age Spots & Stains */}
      <div
        className="absolute top-[15%] left-[20%] w-[200px] h-[160px] rounded-full blur-[40px]"
        style={{
          background: `radial-gradient(circle, ${styles.stain1} 0%, rgba(0,0,0,0) 75%)`,
        }}
      />
      <div
        className="absolute bottom-[20%] right-[15%] w-[240px] h-[200px] rounded-full blur-[45px]"
        style={{
          background: `radial-gradient(circle, ${styles.stain2} 0%, rgba(0,0,0,0) 80%)`,
        }}
      />

      {/* Subtle foxing/spores */}
      <div
        className="absolute top-[40%] left-[80%] w-[3px] h-[3px] rounded-full opacity-30"
        style={{ background: "#8A6D56", filter: "blur(0.5px)" }}
      />
      <div
        className="absolute top-[75%] left-[25%] w-[2px] h-[4px] rounded-full opacity-20 rotate-45"
        style={{ background: "#8A6D56", filter: "blur(0.5px)" }}
      />

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_75%,rgba(110,90,78,0.06)_100%)]" />
    </div>
  );
}

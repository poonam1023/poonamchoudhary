"use client";

import React from "react";

interface WatercolorWashProps {
  position?: { top?: number | string; left?: number | string; right?: number | string; bottom?: number | string };
  width?: number | string;
  height?: number | string;
  opacity?: number;
  variant?: "sage" | "olive" | "cream" | "lavender" | "terracotta" | "rose";
  className?: string;
  style?: React.CSSProperties;
}

export default function WatercolorWash({
  position = { top: "10%", left: "10%" },
  width = 240,
  height = 180,
  opacity = 0.12,
  variant = "sage",
  className = "",
  style = {},
}: WatercolorWashProps) {
  const getColors = () => {
    switch (variant) {
      case "olive":
        return { main: "#9AA68F", dark: "#7B8E67", light: "#B8C2AA", wash: "#C4CCB8", paper: "#E8ECE4" };
      case "cream":
        return { main: "#ECD9B5", dark: "#D4C49A", light: "#F0E6D0", wash: "#F7F1E8", paper: "#FAF5EA" };
      case "lavender":
        return { main: "#A198AF", dark: "#8A7F9A", light: "#C8C0D0", wash: "#D8D2DE", paper: "#E4E0E8" };
      case "terracotta":
        return { main: "#BA664A", dark: "#A0523A", light: "#D4A090", wash: "#E8C4B8", paper: "#F0D8D0" };
      case "rose":
        return { main: "#C4867A", dark: "#B07065", light: "#D8AAA0", wash: "#E8C8C0", paper: "#F0DCD8" };
      case "sage":
      default:
        return { main: "#A8B29A", dark: "#8EA98C", light: "#D8E0D2", wash: "#E8ECE4", paper: "#F0F2EC" };
    }
  };

  const colors = getColors();

  /* ── Highly organic watercolor shapes ──
     Each path is hand-crafted to look irregular, asymmetrical, and "painted".
     Multiple layers simulate wet-into-wet bleeding, pigment pooling at edges,
     and the natural unevenness of real watercolor on cold-pressed paper. */

  const washPath = "M28 38 C35 18 62 8 90 12 C118 16 140 6 168 18 C192 28 204 22 206 52 C208 82 200 105 192 128 C184 148 162 156 135 152 C108 148 85 162 62 148 C39 134 15 120 14 92 C13 64 18 50 28 38 Z";

  const pigmentPath = "M38 48 C48 30 72 22 95 26 C118 30 138 18 158 30 C176 42 186 38 184 62 C182 86 178 100 170 118 C162 136 140 140 118 136 C96 132 78 142 60 132 C42 122 28 110 30 85 C32 60 28 58 38 48 Z";

  const secondaryPath = "M62 35 C78 20 102 16 125 22 C148 28 166 15 178 32 C190 49 194 68 188 90 C182 112 170 128 150 130 C130 132 112 140 92 132 C72 124 52 112 50 90 C48 68 46 50 62 35 Z";

  const edgePoolPath = "M22 42 C30 16 64 4 94 8 C124 12 146 4 172 16 C194 26 210 20 212 52 C214 80 204 106 196 130 C188 152 162 158 134 154 C106 150 82 164 56 148 C30 132 12 118 12 88 C12 62 16 50 22 42 Z";

  const bleedPath = "M42 55 C52 40 70 30 88 34 C106 38 124 30 140 40 C156 50 164 46 162 64 C160 82 156 94 150 108 C144 122 126 126 108 122 C90 118 74 126 60 118 C46 110 36 100 38 82 C40 64 36 60 42 55 Z";

  const stainPath = "M68 52 C78 42 92 40 105 44 C118 48 130 42 142 50 C154 58 158 56 156 68 C154 80 150 88 144 96 C138 104 124 106 110 102 C96 98 82 104 72 98 C62 92 56 84 58 72 C60 60 58 56 68 52 Z";

  const brushStroke1 = "M 120 28 C 132 22 150 18 168 22 C 182 26 192 34 196 44";
  const brushStroke2 = "M 28 82 C 22 98 18 112 22 126 C 26 138 34 146 44 148";
  const brushStroke3 = "M 172 108 C 180 118 186 132 184 144 C 182 152 176 156 166 154";

  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        ...position,
        width,
        height,
        opacity,
        zIndex: 0,
        filter: "blur(3px)",
        ...style,
      }}
    >
      <svg
        viewBox="0 0 220 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Layer 1: Very light base wash — simulates watercolor bleeding into damp paper */}
        <path
          d={washPath}
          fill={colors.wash}
          fillOpacity="0.55"
        />

        {/* Layer 2: Light secondary wash offset — creates depth through overlapping washes */}
        <path
          d={secondaryPath}
          fill={colors.light}
          fillOpacity="0.40"
        />

        {/* Layer 3: Main pigment body — the heart of the wash */}
        <path
          d={pigmentPath}
          fill={colors.main}
          fillOpacity="0.38"
        />

        {/* Layer 4: Darker pigment pooling at edges — the "tide mark" of real watercolor */}
        <path
          d={edgePoolPath}
          fill={colors.dark}
          fillOpacity="0.18"
        />

        {/* Layer 5: Concentrated stain — simulates pigment settling into paper grain */}
        <path
          d={stainPath}
          fill={colors.dark}
          fillOpacity="0.12"
        />

        {/* Layer 6: Bleed extension — pigment that crept slightly beyond the main body */}
        <path
          d={bleedPath}
          fill={colors.main}
          fillOpacity="0.15"
        />

        {/* Layer 7: Brush stroke hints — directional marks showing brush lift-off */}
        <path
          d={brushStroke1}
          stroke={colors.dark}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.08"
          fill="none"
        />
        <path
          d={brushStroke2}
          stroke={colors.dark}
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.06"
          fill="none"
        />
        <path
          d={brushStroke3}
          stroke={colors.main}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeOpacity="0.07"
          fill="none"
        />

        {/* Layer 8: Pigment granulation — tiny spots where pigment particles settled */}
        {[
          { cx: 48, cy: 52, r: 2.5, op: 0.15 },
          { cx: 72, cy: 38, r: 1.8, op: 0.12 },
          { cx: 95, cy: 28, r: 3.0, op: 0.10 },
          { cx: 118, cy: 35, r: 2.0, op: 0.14 },
          { cx: 142, cy: 30, r: 2.8, op: 0.11 },
          { cx: 165, cy: 42, r: 1.5, op: 0.13 },
          { cx: 185, cy: 58, r: 2.2, op: 0.09 },
          { cx: 195, cy: 78, r: 1.8, op: 0.12 },
          { cx: 188, cy: 102, r: 2.5, op: 0.10 },
          { cx: 172, cy: 125, r: 2.0, op: 0.14 },
          { cx: 148, cy: 140, r: 2.8, op: 0.11 },
          { cx: 122, cy: 148, r: 1.5, op: 0.13 },
          { cx: 98, cy: 152, r: 2.2, op: 0.09 },
          { cx: 72, cy: 145, r: 3.0, op: 0.12 },
          { cx: 48, cy: 132, r: 1.8, op: 0.10 },
          { cx: 32, cy: 110, r: 2.5, op: 0.14 },
          { cx: 22, cy: 88, r: 2.0, op: 0.11 },
          { cx: 28, cy: 65, r: 2.8, op: 0.09 },
          { cx: 85, cy: 68, r: 1.2, op: 0.18 },
          { cx: 110, cy: 72, r: 1.5, op: 0.15 },
          { cx: 140, cy: 65, r: 1.0, op: 0.20 },
          { cx: 60, cy: 95, r: 1.8, op: 0.12 },
          { cx: 155, cy: 88, r: 1.3, op: 0.16 },
          { cx: 78, cy: 112, r: 2.0, op: 0.10 },
          { cx: 130, cy: 108, r: 1.6, op: 0.14 },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill={colors.dark}
            opacity={dot.op}
          />
        ))}

        {/* Layer 9: Paper texture — tiny fibers that show through the pigment */}
        <g opacity="0.04">
          {[
            "M 20 20 L 21 21", "M 50 15 L 52 14", "M 100 10 L 102 12",
            "M 160 18 L 162 16", "M 190 30 L 192 32", "M 200 70 L 202 68",
            "M 190 120 L 192 122", "M 170 155 L 172 153", "M 120 160 L 122 162",
            "M 70 155 L 72 153", "M 30 140 L 32 142", "M 10 100 L 12 98",
            "M 15 60 L 17 62", "M 65 40 L 67 38", "M 150 50 L 152 52",
            "M 80 80 L 82 78", "M 140 90 L 142 92", "M 50 110 L 52 108",
          ].map((d, i) => (
            <path key={`fiber-${i}`} d={d} stroke="#6E5A4E" strokeWidth="0.5" strokeLinecap="round" />
          ))}
        </g>
      </svg>
    </div>
  );
}

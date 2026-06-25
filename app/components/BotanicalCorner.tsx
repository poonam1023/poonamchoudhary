"use client";

interface BotanicalCornerProps {
  position?: "tl" | "tr" | "bl" | "br";
  opacity?: number;
  size?: number;
}

export default function BotanicalCorner({
  position = "tl",
  opacity = 0.08,
  size = 200,
}: BotanicalCornerProps) {
  const transforms = {
    tl: "none",
    tr: "scaleX(-1)",
    bl: "scaleY(-1)",
    br: "scale(-1)",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: "absolute",
        top: position === "tl" || position === "tr" ? 0 : "auto",
        bottom: position === "bl" || position === "br" ? 0 : "auto",
        left: position === "tl" || position === "bl" ? 0 : "auto",
        right: position === "tr" || position === "br" ? 0 : "auto",
        transform: transforms[position],
        opacity,
        pointerEvents: "none",
      }}
    >
      {/* Main stem */}
      <path
        d="M20 180 Q40 140 30 100 Q25 75 45 55"
        stroke="#6E5A4E"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Branch 1 */}
      <path
        d="M30 140 Q55 125 70 130"
        stroke="#6E5A4E"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      {/* Branch 2 */}
      <path
        d="M28 115 Q50 95 68 100"
        stroke="#6E5A4E"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      {/* Branch 3 */}
      <path
        d="M35 90 Q60 72 75 78"
        stroke="#6E5A4E"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      {/* Leaf cluster 1 */}
      <ellipse cx="80" cy="130" rx="14" ry="7" transform="rotate(-20 80 130)" fill="#A8B29A" />
      <ellipse cx="72" cy="134" rx="10" ry="5" transform="rotate(-35 72 134)" fill="#8FA083" />
      <ellipse cx="88" cy="126" rx="9" ry="4" transform="rotate(-5 88 126)" fill="#C4CCB8" />
      {/* Leaf cluster 2 */}
      <ellipse cx="80" cy="98" rx="13" ry="6" transform="rotate(-15 80 98)" fill="#A8B29A" />
      <ellipse cx="70" cy="103" rx="9" ry="4" transform="rotate(-30 70 103)" fill="#8FA083" />
      <ellipse cx="88" cy="93" rx="9" ry="4" transform="rotate(0 88 93)" fill="#C4CCB8" />
      {/* Leaf cluster 3 */}
      <ellipse cx="86" cy="76" rx="12" ry="5" transform="rotate(-10 86 76)" fill="#A8B29A" />
      <ellipse cx="76" cy="80" rx="8" ry="4" transform="rotate(-25 76 80)" fill="#8FA083" />
      {/* Small flower at top */}
      <circle cx="48" cy="52" r="4" fill="#C9A96E" opacity="0.6" />
      <path d="M45 49 Q48 44 51 49" stroke="#C9A96E" strokeWidth="1" fill="none" />
      <path d="M44 52 Q39 52 44 55" stroke="#C9A96E" strokeWidth="1" fill="none" />
      <path d="M51 52 Q56 52 51 55" stroke="#C9A96E" strokeWidth="1" fill="none" />
      <path d="M45 55 Q48 60 51 55" stroke="#C9A96E" strokeWidth="1" fill="none" />
      {/* Small dots / berries */}
      <circle cx="92" cy="128" r="2" fill="#C9A96E" opacity="0.5" />
      <circle cx="95" cy="96" r="1.5" fill="#C9A96E" opacity="0.5" />
      <circle cx="98" cy="74" r="1.5" fill="#C9A96E" opacity="0.4" />
      {/* Fern-like frond bottom-left */}
      <path
        d="M5 180 Q15 165 10 150"
        stroke="#6E5A4E"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <ellipse cx="18" cy="162" rx="10" ry="4" transform="rotate(-30 18 162)" fill="#A8B29A" opacity="0.5" />
      <ellipse cx="14" cy="153" rx="8" ry="3" transform="rotate(-40 14 153)" fill="#C4CCB8" opacity="0.5" />
    </svg>
  );
}

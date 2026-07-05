import React from "react";

/**
 * BookSubtitle — Book title treatment on clothbound cover.
 *
 * Acts as the hero title of the book, positioned at the upper-center.
 * Gold foil typography, restrained and elegant.
 * Inspired by Penguin Clothbound Classics cover lettering.
 */
function BookSubtitle() {
  return (
    <div className="select-none text-center w-full">
      <p
        className="font-display uppercase text-center leading-[1.8]"
        style={{
          fontSize: "clamp(0.6rem, 1.2vw, 0.95rem)",
          letterSpacing: "0.22em",
          fontWeight: 400,
          color: "#C8A56A",
          // Subtle emboss: highlight top-left, shadow bottom-right
          textShadow:
            "0.4px 0.4px 0px rgba(240,215,160,0.65), " +
            "-0.4px -0.4px 0px rgba(80,60,20,0.40), " +
            "0.8px 1.5px 3px rgba(30,20,8,0.22)",
        }}
      >
        Raising Ourselves
        <br />
        Before We Raise Our Children
      </p>
    </div>
  );
}

export default React.memo(BookSubtitle);

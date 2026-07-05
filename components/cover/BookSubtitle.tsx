import React from "react";

/**
 * BookSubtitle — Book title treatment on clothbound cover.
 *
 * Acts as the hero title of the book, positioned at the upper-center.
 * Gold foil typography, restrained, all caps, elegant serif.
 */
function BookSubtitle() {
  return (
    <div className="select-none text-center w-full">
      <p
        className="uppercase text-center leading-[1.8] font-normal"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(0.6rem, 1.1vw, 0.85rem)",
          letterSpacing: "0.26em",
          color: "#C8A56A",
          // Debossed foil stamping shadow effect
          textShadow: `
            -0.4px -0.4px 0.4px rgba(45, 28, 19, 0.90),  /* Cavity shadow */
            0.4px 0.4px 0.4px rgba(255, 235, 190, 0.60), /* Metallic lip highlight */
            0.5px 1px 2px rgba(10, 5, 3, 0.25)           /* Ambient drop shadow */
          `,
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

import React from "react";

/**
 * BookTitle — Hero author name treatment.
 *
 * Editorial luxury design: the author name IS the title.
 * Two-line layout with generous kerning and gold-foil letterpress effect.
 * Inspired by Thames & Hudson / Assouline hardcover design.
 */
function BookTitle() {
  return (
    <div className="relative w-full select-none z-20 flex flex-col items-center">
      <h1
        className="font-display font-bold uppercase text-center leading-[1.18]"
        style={{
          // Fluid type that scales with the available book cover width
          fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)",
          color: "#2E2218",
          letterSpacing: "0.18em",
          // Gold foil letterpress: warm highlight top-left, deep shadow, subtle gold gloss
          textShadow:
            "0.5px 0.5px 0px rgba(255,248,220,0.65), " +
            "-0.5px -0.5px 0px rgba(80,60,40,0.30), " +
            "1px 1px 0px rgba(196,168,100,0.18), " +
            "2px 2px 4px rgba(45,30,18,0.16), " +
            "0 0 20px rgba(196,168,100,0.06)",
        }}
      >
        POONAM
        <br />
        CHOUDHARY
      </h1>
    </div>
  );
}

export default React.memo(BookTitle);

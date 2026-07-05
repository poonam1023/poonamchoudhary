import React from "react";
import BookPage from "./BookPage";

interface LeftPageProps {
  children: React.ReactNode;
}

/**
 * LeftPage — semantic wrapper around BookPage for the left side of a spread.
 * Keeps chapter components declarative.
 */
export default function LeftPage({ children }: LeftPageProps) {
  return (
    <div
      className="relative w-full h-full"
      style={{
        transform: "rotateY(2.2deg) translateZ(1px)",
        transformOrigin: "right center",
        transformStyle: "preserve-3d",
      }}
    >
      <BookPage side="left">{children}</BookPage>
    </div>
  );
}

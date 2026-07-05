import React from "react";
import BookPage from "./BookPage";

interface RightPageProps {
  children: React.ReactNode;
}

/**
 * RightPage — semantic wrapper around BookPage for the right side of a spread.
 */
export default function RightPage({ children }: RightPageProps) {
  return (
    <div
      className="relative w-full h-full"
      style={{
        transform: "rotateY(-2.2deg) translateZ(1px)",
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
      }}
    >
      <BookPage side="right">{children}</BookPage>
    </div>
  );
}

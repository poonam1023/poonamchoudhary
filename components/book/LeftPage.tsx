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
  return <BookPage side="left">{children}</BookPage>;
}

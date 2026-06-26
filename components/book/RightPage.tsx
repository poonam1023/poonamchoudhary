import React from "react";
import BookPage from "./BookPage";

interface RightPageProps {
  children: React.ReactNode;
}

/**
 * RightPage — semantic wrapper around BookPage for the right side of a spread.
 */
export default function RightPage({ children }: RightPageProps) {
  return <BookPage side="right">{children}</BookPage>;
}

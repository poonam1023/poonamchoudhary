"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Preloader from "./components/Preloader";
import BookCanvas from "./components/book/BookCanvas";
import AuthorSpread from "./components/AuthorSpread";
import ReadersSpread from "./components/ReadersSpread";
import JournalSpread from "./components/JournalSpread";
import LetterSpread from "./components/LetterSpread";

// Lazy-load heavy / client-only sections
const BookStage = dynamic(
  () => import("./components/Book3D/BookStage").then((m) => m.default),
  { ssr: false }
);

const HorizontalPhilosophy = dynamic(
  () => import("./components/HorizontalPhilosophy"),
  { ssr: false }
);

const KineticBookshelf = dynamic(
  () => import("./components/KineticBookshelf"),
  { ssr: false }
);

export default function Home() {
  const [preloaded, setPreloaded] = useState(false);

  const handlePreloadDone = useCallback(() => {
    setPreloaded(true);
  }, []);

  return (
    <>
      {/* Phase 0: Cinematic preloader */}
      <Preloader onDone={handlePreloadDone} />

      {/* Phase I: 3D Book Stage — 300vh sticky section */}
      <BookStage />

      {/* Phase II: Horizontal Philosophy scroll */}
      <HorizontalPhilosophy />

      {/* Phase III: Kinetic Bookshelf */}
      <KineticBookshelf />

      {/* Phase IV–VII: Editorial spreads in the book canvas */}
      <BookCanvas>
        <main id="main-content">
          <AuthorSpread />
          <ReadersSpread />
          <JournalSpread />
          <LetterSpread />
        </main>
      </BookCanvas>
    </>
  );
}

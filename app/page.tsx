"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BookOpeningAnimation from "@/components/cover/BookOpeningAnimation";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <BookOpeningAnimation />
      </motion.div>
    </div>
  );
}

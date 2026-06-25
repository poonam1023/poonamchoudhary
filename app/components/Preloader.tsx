"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const QUOTE = "Every child is a letter\nto a time we will not see.";
const ATTR = "— Poonam Choudhary";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");

  useEffect(() => {
    // in → hold → out → done
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("out"), 2600);
    const t3 = setTimeout(() => {
      setPhase("done");
      onDone();
    }, 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="preloader"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#f7eddd",
            pointerEvents: "all",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Progress line */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 1,
              background: "linear-gradient(90deg, #879570, #c9a96e)",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, ease: "linear" }}
          />

          {/* Quote */}
          <motion.div
            style={{ textAlign: "center", maxWidth: "30rem", padding: "0 2rem" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: phase === "out" ? 0 : 1,
              y: phase === "out" ? -10 : 0,
            }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1.4,
                color: "#2b251d",
                whiteSpace: "pre-line",
                margin: 0,
              }}
            >
              {QUOTE}
            </p>
            <motion.p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#879570",
                marginTop: "1.25rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "out" ? 0 : 0.8 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {ATTR}
            </motion.p>
          </motion.div>

          {/* Corner mark */}
          <motion.div
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(90,75,60,0.4)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.6 }}
          >
            Loading
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

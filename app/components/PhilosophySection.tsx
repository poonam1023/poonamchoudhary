"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BookSpread, BookPage } from "./book";
import styles from "./book/BookSystem.module.css";

const principles = [
  {
    title: "Presence before perfection",
    text: "Children need adults who return, repair, and remain emotionally available.",
  },
  {
    title: "Connection before correction",
    text: "Guidance begins with understanding what a child is trying to say beneath the behaviour.",
  },
  {
    title: "Repair before shame",
    text: "Every difficult moment can become a way back to trust when parents pause and reconnect.",
  },
];

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <BookSpread
      id="philosophy"
      left={
        <BookPage
          side="left"
          chapterLabel="Chapter Two"
          chapterTitle="Parenting Philosophy"
          pageNumber="4"
        >
          <motion.div
            ref={ref}
            className={styles.marginQuote}
            style={{ padding: "1.5rem 1.25rem", marginTop: "0.5rem" }}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.55rem)", lineHeight: 1.2 }}>
              Parenting is not a performance. It is a relationship practiced in
              ordinary moments.
            </p>
          </motion.div>

          <motion.p
            className={`${styles.pageProse} ${styles.pageProseMuted}`}
            style={{ marginTop: "1rem" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            This spread slows the reader down — from admiration of the author into
            recognition of the invisible pressure parents carry.
          </motion.p>
        </BookPage>
      }
      right={
        <BookPage side="right" chapterLabel="Chapter Two" pageNumber="5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className={styles.pageEyebrow}>Three guiding principles</p>
            <h3 className={styles.pageHeadline}>The quiet work of raising humans</h3>
            <div className={styles.flourish} />

            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className={styles.principleItem}
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + index * 0.08 }}
              >
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </BookPage>
      }
      transitionNote="Once the philosophy feels familiar, the reader holds the work in their hands."
    />
  );
}

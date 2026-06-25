"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BookSpread, BookPage } from "./book";
import styles from "./book/BookSystem.module.css";

const leftLetters = [
  {
    quote:
      "Poonam's book changed the way I speak to my daughter — a fundamental shift in how I see her.",
    author: "Meera Krishnan",
    role: "Mother of two, Bengaluru",
  },
  {
    quote:
      "I walked into her workshop expecting a lecture and walked out having a conversation I didn't know I needed.",
    author: "Rajat Sharma",
    role: "Father & Counsellor, Delhi",
  },
];

const rightLetters = [
  {
    quote:
      "Reading 'The Present Parent' felt like sitting with a wise friend who truly understood modern parenting.",
    author: "Ananya Iyer",
    role: "Pediatrician & Mother, Mumbai",
  },
  {
    quote:
      "She doesn't tell you how to be a better parent. She reminds you of who you already are.",
    author: "Sunita Joshi",
    role: "Workshop Attendee",
  },
];

const press = ["The Hindu", "Times of India", "India Today", "Femina"];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <BookSpread
      id="readers"
      left={
        <BookPage
          side="left"
          chapterLabel="Chapter Four"
          chapterTitle="Reader Margins"
          pageNumber="8"
        >
          <div ref={ref}>
            <p className={styles.pageEyebrow}>Notes left by families</p>
            <div className={styles.flourish} />

            {leftLetters.map((letter, i) => (
              <motion.article
                key={letter.author}
                className={styles.letterCard}
                style={{ marginBottom: "0.65rem" }}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <blockquote>&ldquo;{letter.quote}&rdquo;</blockquote>
                <footer>
                  {letter.author} · {letter.role}
                </footer>
              </motion.article>
            ))}
          </div>
        </BookPage>
      }
      right={
        <BookPage side="right" chapterLabel="Chapter Four" pageNumber="9">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            {rightLetters.map((letter) => (
              <article
                key={letter.author}
                className={styles.letterCard}
                style={{ marginBottom: "0.65rem" }}
              >
                <blockquote>&ldquo;{letter.quote}&rdquo;</blockquote>
                <footer>
                  {letter.author} · {letter.role}
                </footer>
              </article>
            ))}

            <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(213,202,188,0.5)" }}>
              <p className={styles.pageEyebrow} style={{ marginBottom: "0.5rem" }}>
                Featured in
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem 1rem", opacity: 0.65 }}>
                {press.map((pub) => (
                  <span
                    key={pub}
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "0.85rem",
                      color: "#6c5c48",
                    }}
                  >
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </BookPage>
      }
      transitionNote="From reader stories, the book opens into ongoing essays."
    />
  );
}

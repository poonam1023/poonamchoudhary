"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { BookSpread, BookPage } from "./book";
import styles from "./book/BookSystem.module.css";

const pillars = [
  { title: "Author", note: "Three books" },
  { title: "Speaker", note: "200+ events" },
  { title: "Guide", note: "Families worldwide" },
];

export default function AuthorSpread() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <BookSpread
      id="author"
      left={
        <BookPage
          side="left"
          chapterLabel="Chapter One"
          chapterTitle="Meet the Author"
          pageNumber="2"
        >
          <div ref={ref}>
            <motion.div
              className={styles.insetImage}
              style={{ height: "clamp(12rem, 36vh, 20rem)" }}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/author-portrait.png"
                alt="Poonam Choudhary — Author and Parenting Speaker"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>

            <motion.div
              className={styles.marginQuote}
              style={{ marginTop: "0.85rem" }}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p>&ldquo;Every child is a letter to a time we will not see.&rdquo;</p>
              <cite>— Poonam Choudhary</cite>
            </motion.div>
          </div>
        </BookPage>
      }
      right={
        <BookPage side="right" chapterLabel="Chapter One" pageNumber="3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className={styles.pageEyebrow}>The person behind the work</p>
            <h3 className={styles.pageHeadline}>
              Stories whispered at kitchen tables
            </h3>
            <div className={styles.flourish} />

            <p className={styles.pageProse} style={{ marginBottom: "0.65rem" }}>
              Poonam Choudhary grew up surrounded by stories — the ones whispered
              between mothers, shared on evening walks, and lived in the spaces
              between words.
            </p>
            <p className={styles.pageProse} style={{ marginBottom: "0.65rem" }}>
              That early understanding — that{" "}
              <em>parenting is a practice, not a performance</em> — became the
              seed of everything she does today.
            </p>
            <p className={`${styles.pageProse} ${styles.pageProseMuted}`}>
              Her work draws from developmental psychology, mindfulness, and lived
              experience as a mother of two.
            </p>

            <div className={styles.pillarRow}>
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  className={styles.pillarItem}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08 }}
                >
                  <span>{pillar.title}</span>
                  <small>{pillar.note}</small>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </BookPage>
      }
      transitionNote="The philosophy follows naturally from the author."
    />
  );
}

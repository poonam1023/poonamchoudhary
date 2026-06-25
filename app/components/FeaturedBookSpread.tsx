"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BookSpread, BookPage } from "./book";
import styles from "./book/BookSystem.module.css";

const featured = {
  title: "Raising with Heart",
  subtitle: "Conscious Parenting for a Changing World",
  description:
    "A deeply personal and practical exploration of how parents can raise emotionally intelligent, resilient, and compassionate children.",
  badge: "Award Nominated",
  year: "2020",
};

const otherBooks = [
  { title: "The Present Parent", year: "2022", tag: "Presence" },
  { title: "Letters to Tomorrow", year: "2024", tag: "Reflection" },
];

export default function FeaturedBookSpread() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <BookSpread
      id="books"
      left={
        <BookPage
          side="left"
          chapterLabel="Chapter Three"
          chapterTitle="The Bookshelf"
          pageNumber="6"
        >
          <div ref={ref}>
            <motion.div
              className={styles.insetImage}
              style={{
                height: "clamp(10rem, 30vh, 16rem)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #DDD0BC, #C9B8A0)",
              }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/book-cover.png"
                alt={`${featured.title} by Poonam Choudhary`}
                width={120}
                height={170}
                className="object-contain drop-shadow-xl"
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "0.75rem" }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
            >
              {otherBooks.map((book) => (
                <div key={book.title} className={styles.bookThumb} style={{ marginBottom: "0.5rem", padding: "0.55rem 0.65rem" }}>
                  <small className={styles.pageEyebrow} style={{ margin: 0, fontSize: "0.55rem" }}>
                    {book.tag} · {book.year}
                  </small>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "0.92rem",
                      color: "#2b251d",
                    }}
                  >
                    {book.title}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </BookPage>
      }
      right={
        <BookPage side="right" chapterLabel="Chapter Three" pageNumber="7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className={styles.pageEyebrow}>{featured.badge} · {featured.year}</p>
            <h3 className={styles.pageHeadline}>{featured.title}</h3>
            <p
              style={{
                margin: "0.25rem 0 0.5rem",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontStyle: "italic",
                color: "#9e8a7e",
                fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
              }}
            >
              {featured.subtitle}
            </p>
            <div className={styles.flourish} />
            <p className={styles.pageProse}>{featured.description}</p>

            <div className={styles.buttonRow} style={{ marginTop: "1rem" }}>
              <button type="button" className={styles.primaryCta} aria-label={`Order ${featured.title}`}>
                Order Now
                <ArrowRight size={14} />
              </button>
              <button type="button" className={styles.secondaryCta} aria-label={`Preview ${featured.title}`}>
                Read a Sample
              </button>
            </div>
          </motion.div>
        </BookPage>
      }
      transitionNote="After the work is tangible, the reader turns toward the families it has touched."
    />
  );
}

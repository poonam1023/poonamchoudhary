"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { BookSpread, BookPage } from "./book";
import styles from "./book/BookSystem.module.css";

const featured = {
  category: "Emotional Growth",
  title: "Why 'Good Job' Might Be Doing More Harm",
  excerpt:
    "Research — and lived experience — suggests that how we praise matters more than whether we praise at all.",
  readTime: "6 min read",
  date: "June 10, 2026",
};

const articles = [
  {
    title: "The Extraordinary Power of Simply Being There",
    readTime: "4 min",
    category: "Presence",
  },
  {
    title: "Saying No with Love: A Guide for Conflict-Averse Parents",
    readTime: "7 min",
    category: "Boundaries",
  },
  {
    title: "When Your Child Stops Talking to You",
    readTime: "5 min",
    category: "Teenage Years",
  },
];

export default function JournalSpread() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <BookSpread
      id="journal"
      left={
        <BookPage
          side="left"
          chapterLabel="Chapter Five"
          chapterTitle="The Journal Desk"
          pageNumber="10"
        >
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              <div
                style={{
                  height: "clamp(6rem, 15vh, 8.5rem)",
                  borderRadius: "4px",
                  background: "linear-gradient(135deg, #DDD0BC, #E8DCCB)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.75rem",
                  border: "1px solid rgba(196,204,184,0.4)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.4rem",
                    fontStyle: "italic",
                    color: "rgba(110,90,78,0.35)",
                  }}
                >
                  Journal
                </span>
              </div>

              <p className={styles.pageEyebrow}>{featured.category}</p>
              <h3 className={styles.pageHeadline} style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)", lineHeight: 1.1 }}>
                {featured.title}
              </h3>
              <div className={styles.flourish} />
              <p className={styles.pageProse} style={{ fontSize: "clamp(0.72rem, 0.85vw, 0.82rem)", lineHeight: 1.6 }}>{featured.excerpt}</p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginTop: "0.55rem" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.65rem", color: "#9e8a7e" }}>
                  <Clock size={11} /> {featured.readTime}
                </span>
                <span style={{ fontSize: "0.65rem", color: "#9e8a7e" }}>{featured.date}</span>
              </div>

              <button type="button" className={styles.secondaryCta} style={{ marginTop: "0.55rem" }}>
                Continue Reading
                <ArrowRight size={13} />
              </button>
            </motion.div>
          </div>
        </BookPage>
      }
      right={
        <BookPage side="right" chapterLabel="Chapter Five" pageNumber="11">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
          >
            <p className={styles.pageEyebrow}>Recent essays</p>
            <div className={styles.flourish} />

            {articles.map((article) => (
              <article key={article.title} className={styles.journalEntry} style={{ padding: "0.5rem 0" }}>
                <small className={styles.pageEyebrow} style={{ margin: 0, fontSize: "0.55rem" }}>
                  {article.category} · {article.readTime}
                </small>
                <h4 style={{ fontSize: "clamp(0.85rem, 1vw, 0.98rem)", marginTop: "0.15rem" }}>{article.title}</h4>
              </article>
            ))}

            <button
              type="button"
              className={styles.primaryCta}
              style={{ marginTop: "0.75rem", width: "100%", minHeight: "2.8rem" }}
              aria-label="View all journal articles"
            >
              View All Essays
              <ArrowRight size={13} />
            </button>
          </motion.div>
        </BookPage>
      }
      transitionNote="The essays narrow into one final letter — a personal invitation to begin."
    />
  );
}

"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Leaf,
  PlayCircle,
  Quote,
} from "lucide-react";
import { BookSpread, BookPage, scrollToSection } from "../book";
import styles from "../book/BookSystem.module.css";

export default function BookHero() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const portraitX = useSpring(useTransform(rawX, [-720, 720], [-5, 5]), {
    stiffness: 52,
    damping: 28,
    bounce: 0,
  });
  const portraitY = useSpring(useTransform(rawY, [-480, 480], [-3, 3]), {
    stiffness: 52,
    damping: 28,
    bounce: 0,
  });

  return (
    <div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        rawX.set(event.clientX - rect.left - rect.width / 2);
        rawY.set(event.clientY - rect.top - rect.height / 2);
      }}
    >
      <BookSpread
        id="home"
        variant="cover"
        ariaLabel="Cover spread — Poonam Choudhary"
        left={
          <BookPage side="left" showHeader={false} pageNumber="i">
            <div className={styles.coverBrandBlock}>
              <span className={styles.coverMark}>
                <Leaf size={20} strokeWidth={1.25} />
              </span>
              <div>
                <p className={styles.coverBrandName}>Poonam Choudhary</p>
                <p className={styles.coverBrandRole}>Author · Speaker · Parenting Guide</p>
              </div>
            </div>

            <motion.div
              className={styles.coverCopy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              <p className={styles.pageEyebrow}>Parenting is not perfect.</p>
              <h1 className={styles.coverHeadline}>
                But presence
                <br />
                changes
                <br />
                <em>everything.</em>
              </h1>
              <div className={styles.flourish} aria-hidden="true" />
              <p className={styles.coverIntro}>
                I help parents build stronger relationships with their children
                through understanding, empathy, and everyday moments that matter.
              </p>
              <HeroButtons />
            </motion.div>
          </BookPage>
        }
        right={
          <BookPage side="right" showHeader={false} pageNumber="ii">
            <BotanicalSprig />

            <motion.div
              className={styles.portraitPlate}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
            >
              <motion.div
                className={styles.portraitInner}
                style={{ x: portraitX, y: portraitY }}
              >
                <Image
                  src="/author-portrait.png"
                  alt="Poonam Choudhary smiling in warm natural light"
                  fill
                  priority
                  sizes="(max-width: 900px) 70vw, 430px"
                  className={styles.portrait}
                />
              </motion.div>
            </motion.div>

            <QuoteCard />
          </BookPage>
        }
        transitionNote="Turn the page to meet the author."
      />
    </div>
  );
}

function QuoteCard() {
  return (
    <motion.aside
      className={styles.quoteCard}
      initial={{ opacity: 0, rotate: 3, y: 14 }}
      animate={{ opacity: 1, rotate: -2.5, y: 0 }}
      transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
      aria-label="Poonam Choudhary quote"
    >
      <span className={styles.tape} aria-hidden="true" />
      <Quote size={22} strokeWidth={1.1} className={styles.quoteIcon} />
      <p>There is no perfect parent, only a present one.</p>
      <strong>— Poonam Choudhary</strong>
    </motion.aside>
  );
}

function HeroButtons() {
  return (
    <div className={styles.buttonRow}>
      <motion.button
        type="button"
        className={styles.primaryCta}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={() => scrollToSection("books")}
      >
        <BookOpen size={16} strokeWidth={1.35} />
        Explore my book
        <ArrowRight size={15} strokeWidth={1.35} />
      </motion.button>
      <motion.button
        type="button"
        className={styles.secondaryCta}
        whileHover={{ x: 3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={() => scrollToSection("author")}
      >
        <PlayCircle size={16} strokeWidth={1.2} />
        Meet the author
      </motion.button>
    </div>
  );
}

function BotanicalSprig() {
  return (
    <svg
      className={`${styles.botanical} ${styles.rightSprig}`}
      viewBox="0 0 180 260"
      fill="none"
      aria-hidden="true"
    >
      <path d="M88 245C84 190 90 124 115 25" stroke="currentColor" strokeWidth="1.7" />
      <path d="M98 176C72 166 53 145 47 118C76 121 95 144 98 176Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M108 138C136 126 153 102 157 75C128 82 109 106 108 138Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

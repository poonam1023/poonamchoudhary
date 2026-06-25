"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Home,
  Leaf,
  Mail,
  Mic2,
  PenLine,
  PlayCircle,
  Quote,
  Sparkles,
  UserRound,
} from "lucide-react";
import styles from "./BookHero.module.css";

const navItems = [
  { label: "Home", href: "home", icon: Home },
  { label: "About", href: "about", icon: UserRound },
  { label: "Books", href: "books", icon: BookOpen },
  { label: "Speaking", href: "speaking", icon: Mic2 },
  { label: "Journal", href: "journal", icon: PenLine },
  { label: "Connect", href: "connect", icon: Mail },
];

const particles = [
  { left: "12%", top: "22%", delay: 0.1 },
  { left: "22%", top: "72%", delay: 0.7 },
  { left: "41%", top: "16%", delay: 0.4 },
  { left: "57%", top: "80%", delay: 0.9 },
  { left: "73%", top: "20%", delay: 0.2 },
  { left: "88%", top: "62%", delay: 0.6 },
  { left: "35%", top: "45%", delay: 1.1 },
  { left: "66%", top: "48%", delay: 0.3 },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function BookHero() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const lightX = useSpring(rawX, { stiffness: 70, damping: 24, bounce: 0 });
  const lightY = useSpring(rawY, { stiffness: 70, damping: 24, bounce: 0 });

  return (
    <section
      id="home"
      className={styles.hero}
      aria-label="Poonam Choudhary hero section"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        rawX.set(event.clientX - rect.left - rect.width / 2);
        rawY.set(event.clientY - rect.top - rect.height / 2);
      }}
    >
      <BookBackground lightX={lightX} lightY={lightY} />
      <AmbientParticles />

      <div className={styles.stage}>
        <BookNavbar />

        <motion.article
          className={styles.book}
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.hardcover} aria-hidden="true" />
          <div className={styles.paperStackLeft} aria-hidden="true" />
          <div className={styles.paperStackRight} aria-hidden="true" />
          <BookFold />

          <PaperCard side="left">
            <div className={styles.brandBlock}>
              <span className={styles.mark}>
                <Leaf size={26} strokeWidth={1.35} />
              </span>
              <div>
                <p className={styles.brandName}>Poonam Choudhary</p>
                <p className={styles.brandRole}>Author - Speaker - Parenting Guide</p>
              </div>
            </div>

            <BotanicalDecoration variant="vine" className={styles.leftVine} />

            <motion.div
              className={styles.copy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              <p className={styles.eyebrow}>Parenting is not perfect.</p>
              <h1 className={styles.headline}>
                But presence
                <br />
                changes
                <br />
                <em>everything.</em>
              </h1>
              <div className={styles.flourish} aria-hidden="true" />
              <p className={styles.intro}>
                I help parents build stronger relationships with their children
                through understanding, empathy, and everyday moments that matter.
              </p>
              <HeroButtons />
            </motion.div>

            <div className={styles.featuredStrip} aria-label="Featured publications">
              <span>As featured in</span>
              <strong>The Hindu</strong>
              <strong>Forbes</strong>
              <strong>Femina</strong>
            </div>
          </PaperCard>

          <PaperCard side="right">
            <div className={styles.paintWash} aria-hidden="true" />
            <BotanicalDecoration variant="sprig" className={styles.rightSprig} />
            <BotanicalDecoration variant="pressed" className={styles.pressedFlower} />

            <motion.div
              className={styles.portraitPlate}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
            >
              <Image
                src="/author-portrait.png"
                alt="Poonam Choudhary smiling in warm natural light"
                fill
                priority
                sizes="(max-width: 900px) 70vw, 430px"
                className={styles.portrait}
              />
              <PaperTexture subtle />
            </motion.div>

            <QuoteCard />

            <aside className={styles.statCard} aria-label="Author credentials">
              <span className={styles.statIcon}>
                <Sparkles size={18} />
              </span>
              <div>
                <strong>Bestselling Author</strong>
                <p>of Conscious Parenting</p>
                <span>50K+ families impacted</span>
              </div>
            </aside>
          </PaperCard>
        </motion.article>
      </div>
    </section>
  );
}

export function BookBackground({
  lightX,
  lightY,
}: {
  lightX: ReturnType<typeof useSpring>;
  lightY: ReturnType<typeof useSpring>;
}) {
  return (
    <div className={styles.background} aria-hidden="true">
      <PaperTexture />
      <motion.div
        className={styles.followLight}
        style={{ x: lightX, y: lightY }}
      />
      <BotanicalDecoration variant="wallpaperLeft" className={styles.wallBotanicalLeft} />
      <BotanicalDecoration variant="wallpaperRight" className={styles.wallBotanicalRight} />
    </div>
  );
}

export function BookNavbar() {
  return (
    <nav className={styles.bookNav} aria-label="Primary navigation">
      {navItems.map((item, index) => (
        <BookmarkTab
          key={item.href}
          label={item.label}
          targetId={item.href}
          icon={item.icon}
          active={item.href === "home"}
          rotation={[-2.5, 1.5, -1, 1, -1.6, 2][index]}
        />
      ))}
    </nav>
  );
}

export function BookmarkTab({
  label,
  targetId,
  icon: Icon,
  active,
  rotation,
}: {
  label: string;
  targetId: string;
  icon: typeof Home;
  active?: boolean;
  rotation: number;
}) {
  return (
    <motion.button
      type="button"
      className={`${styles.bookmark} ${active ? styles.bookmarkActive : ""}`}
      style={{ rotate: rotation }}
      whileHover={{ y: -7 }}
      whileTap={{ y: -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={() => scrollToSection(targetId)}
      aria-current={active ? "page" : undefined}
    >
      <Icon size={21} strokeWidth={1.35} />
      <span>{label}</span>
    </motion.button>
  );
}

export function PaperCard({
  children,
  side,
}: {
  children: React.ReactNode;
  side: "left" | "right";
}) {
  return (
    <section className={`${styles.page} ${side === "left" ? styles.leftPage : styles.rightPage}`}>
      <PaperTexture subtle />
      {children}
    </section>
  );
}

export function BookFold() {
  return <div className={styles.bookFold} aria-hidden="true" />;
}

export function QuoteCard() {
  return (
    <motion.aside
      className={styles.quoteCard}
      initial={{ opacity: 0, rotate: 3, y: 14 }}
      animate={{ opacity: 1, rotate: -2.5, y: 0 }}
      transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
      aria-label="Poonam Choudhary quote"
    >
      <span className={styles.tape} aria-hidden="true" />
      <Quote size={28} strokeWidth={1.2} className={styles.quoteIcon} />
      <p>There is no perfect parent, only a present one.</p>
      <strong>- Poonam Choudhary</strong>
    </motion.aside>
  );
}

export function HeroButtons() {
  return (
    <div className={styles.buttonRow}>
      <motion.button
        type="button"
        className={styles.primaryCta}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={() => scrollToSection("books")}
      >
        <BookOpen size={18} strokeWidth={1.5} />
        Explore my book
        <ArrowRight size={17} strokeWidth={1.5} />
      </motion.button>
      <motion.button
        type="button"
        className={styles.secondaryCta}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={() => scrollToSection("speaking")}
      >
        <PlayCircle size={18} strokeWidth={1.35} />
        Watch my story
      </motion.button>
    </div>
  );
}

export function AmbientParticles() {
  return (
    <div className={styles.particles} aria-hidden="true">
      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.08, 0.2, 0.08], y: [0, -8, 0] }}
          transition={{
            duration: 4.8 + index * 0.2,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export function PaperTexture({ subtle = false }: { subtle?: boolean }) {
  return (
    <span
      className={`${styles.paperTexture} ${subtle ? styles.paperTextureSubtle : ""}`}
      aria-hidden="true"
    />
  );
}

export function BotanicalDecoration({
  variant,
  className = "",
}: {
  variant: "vine" | "sprig" | "pressed" | "wallpaperLeft" | "wallpaperRight";
  className?: string;
}) {
  if (variant === "pressed") {
    return (
      <motion.svg
        className={`${styles.botanical} ${className}`}
        viewBox="0 0 120 180"
        fill="none"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeOut" }}
        aria-hidden="true"
      >
        <path d="M58 165C62 118 62 72 48 20" stroke="currentColor" strokeWidth="2" />
        <path d="M52 74C28 59 17 42 17 24C41 27 55 45 52 74Z" fill="currentColor" opacity=".22" />
        <path d="M61 98C87 81 99 61 97 40C72 47 58 68 61 98Z" fill="currentColor" opacity=".18" />
        <path d="M61 126C38 116 22 99 18 79C42 81 60 99 61 126Z" fill="currentColor" opacity=".16" />
      </motion.svg>
    );
  }

  return (
    <svg
      className={`${styles.botanical} ${className}`}
      viewBox="0 0 180 260"
      fill="none"
      aria-hidden="true"
    >
      <path d="M88 245C84 190 90 124 115 25" stroke="currentColor" strokeWidth="1.7" />
      <path d="M98 176C72 166 53 145 47 118C76 121 95 144 98 176Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M108 138C136 126 153 102 157 75C128 82 109 106 108 138Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M86 212C58 204 34 181 28 151C60 155 84 181 86 212Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M115 94C92 82 80 61 81 36C105 45 118 66 115 94Z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="126" cy="45" r="5" fill="currentColor" opacity=".18" />
      <circle cx="139" cy="66" r="4" fill="currentColor" opacity=".16" />
      <circle cx="37" cy="138" r="3.5" fill="currentColor" opacity=".14" />
    </svg>
  );
}

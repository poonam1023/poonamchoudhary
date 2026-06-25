import type { ReactNode } from "react";

interface BookChapterProps {
  id: string;
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  tone?: "paper" | "warm" | "cream";
  align?: "center" | "left";
  children: ReactNode;
}

const toneMap = {
  paper: "linear-gradient(180deg, #F7F1E8 0%, #EFE6D4 100%)",
  warm: "linear-gradient(180deg, #EFE6D4 0%, #F7F1E8 100%)",
  cream: "#F0E8D6",
};

export default function BookChapter({
  id,
  number,
  label,
  title,
  subtitle,
  tone = "paper",
  align = "center",
  children,
}: BookChapterProps) {
  return (
    <section
      id={id}
      className="book-chapter relative overflow-hidden"
      style={{ background: toneMap[tone] }}
      aria-labelledby={`${id}-heading`}
    >
      <div className="book-chapter__grain" aria-hidden="true" />
      <div className="book-chapter__page-number" aria-hidden="true">
        {number}
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <header
          className={`book-chapter__header ${
            align === "left" ? "book-chapter__header--left" : ""
          }`}
        >
          <span className="book-chapter__kicker">{label}</span>
          <h2 id={`${id}-heading`} className="book-chapter__title">
            {title}
          </h2>
          {subtitle && <p className="book-chapter__subtitle">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

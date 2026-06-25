"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { BookSpread, BookPage } from "./book";
import styles from "./book/BookSystem.module.css";

export default function LetterSpread() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <BookSpread
      id="letter"
      variant="final"
      left={
        <BookPage
          side="left"
          chapterLabel="Final Letter"
          chapterTitle="Begin the conversation"
          pageNumber="12"
        >
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5" aria-label="Contact form">
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className={styles.formField}>
                      <label htmlFor="contact-name">Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        style={{ padding: "0.45rem 0.65rem", fontSize: "0.75rem" }}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        style={{ padding: "0.45rem 0.65rem", fontSize: "0.75rem" }}
                      />
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Write your message..."
                      style={{ padding: "0.45rem 0.65rem", fontSize: "0.75rem" }}
                    />
                  </div>
                  <button type="submit" className={styles.primaryCta} disabled={loading} style={{ alignSelf: "flex-start", minHeight: "2.8rem", marginTop: "0.25rem" }}>
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && <Send size={13} />}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "2.5rem 0" }} role="status">
                  <p className={styles.pageHeadline} style={{ fontSize: "1.4rem" }}>
                    Message received
                  </p>
                  <p className={styles.pageProse} style={{ marginTop: "0.5rem" }}>
                    Poonam personally reads every message.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </BookPage>
      }
      right={
        <BookPage side="right" chapterLabel="Final Letter" pageNumber="13">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
          >
            <p className={styles.pageProse} style={{ marginBottom: "0.75rem", fontSize: "clamp(0.72rem, 0.85vw, 0.82rem)", lineHeight: 1.6 }}>
              Whether you&apos;d like to book a speaking engagement, discuss a
              collaboration, or share how this work has touched your family —
              Poonam would love to hear from you.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", marginBottom: "0.85rem" }}>
              {[
                { icon: Mail, label: "Email", value: "hello@poonamchoudhary.com" },
                { icon: Phone, label: "Phone", value: "+91 98765" },
                { icon: MapPin, label: "Based in", value: "Mumbai, IN" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0.45rem",
                    borderRadius: "4px",
                    background: "rgba(168,178,154,0.1)",
                    border: "1px solid rgba(168,178,154,0.15)",
                    textAlign: "center",
                  }}
                >
                  <Icon size={12} className="text-[#6E5A4E]" style={{ marginBottom: "0.2rem" }} />
                  <p className={styles.pageEyebrow} style={{ margin: 0, fontSize: "0.5rem" }}>
                    {label}
                  </p>
                  <p className={styles.pageProse} style={{ margin: 0, fontSize: "0.62rem", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "100%" }} title={value}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Merged Footer / Closing Brand Block */}
            <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(213,202,188,0.5)" }}>
              <h4 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2rem", color: "#2b251d", margin: 0, fontWeight: 500 }}>
                Poonam Choudhary
              </h4>
              <p style={{ fontSize: "0.72rem", color: "#6c5c48", marginTop: "0.2rem", fontStyle: "italic", lineHeight: 1.5 }}>
                Parenting is not about raising perfect children. It is about raising children who feel perfectly loved — one conversation at a time.
              </p>
              
              <div style={{ marginTop: "0.85rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.58rem", color: "rgba(110, 90, 78, 0.42)" }}>
                <span>© {new Date().getFullYear()} Poonam Choudhary</span>
                <span>Privacy · Terms</span>
              </div>
            </div>
          </motion.div>
        </BookPage>
      }
    />
  );
}

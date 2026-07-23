"use client";

import React, { useState, useRef, useCallback, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ═══════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════ */
type Phase = "letter" | "folding" | "sealing" | "floating" | "thanks";

/* ═══════════════════════════════════════════════════
   SUB-COMPONENTS: DESK OBJECTS
═══════════════════════════════════════════════════ */

/** Elegant fountain pen (detailed SVG) */
function FountainPen({ active, style }: { active?: boolean; style?: React.CSSProperties }) {
  return (
    <motion.svg
      viewBox="0 0 160 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 130, height: 22, ...style }}
      animate={active ? { rotate: [0, -1, 1, 0] } : {}}
      transition={{ duration: 0.4, repeat: active ? Infinity : 0, repeatDelay: 0.8 }}
    >
      <defs>
        <linearGradient id="penBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1C1410" />
          <stop offset="25%" stopColor="#2A1E16" />
          <stop offset="50%" stopColor="#3A2A1E" />
          <stop offset="75%" stopColor="#2A1E16" />
          <stop offset="100%" stopColor="#1C1410" />
        </linearGradient>
        <linearGradient id="penShine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,230,160,0.14)" />
          <stop offset="50%" stopColor="rgba(255,200,80,0)" />
        </linearGradient>
        <linearGradient id="penGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9A7820" />
          <stop offset="40%" stopColor="#C8A030" />
          <stop offset="70%" stopColor="#D4B040" />
          <stop offset="100%" stopColor="#A88020" />
        </linearGradient>
        <linearGradient id="nibGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8B060" />
          <stop offset="50%" stopColor="#E0C870" />
          <stop offset="100%" stopColor="#A89040" />
        </linearGradient>
      </defs>
      {/* Body */}
      <rect x="14" y="6" width="110" height="16" rx="8" fill="url(#penBody)" />
      <rect x="14" y="6" width="110" height="16" rx="8" fill="url(#penShine)" />
      {/* Gold band near cap */}
      <rect x="17" y="6" width="14" height="16" rx="7" fill="url(#penGold)" />
      <rect x="19" y="6.5" width="4" height="15" rx="2" fill="rgba(255,230,140,0.18)" />
      {/* Gold cap band */}
      <rect x="24" y="8.5" width="3" height="11" rx="1" fill="#8A6818" />
      {/* Mid ring */}
      <rect x="100" y="8.5" width="4" height="11" rx="1.5" fill="url(#penGold)" />
      {/* Cap */}
      <rect x="4" y="7" width="14" height="14" rx="7" fill="#1A1008" />
      <rect x="5" y="8.5" width="4" height="11" rx="2" fill="rgba(255,220,100,0.08)" />
      {/* Nib */}
      <path d="M120 14 L148 11 L154 14 L148 17 Z" fill="url(#nibGold)" />
      <line x1="130" y1="14" x2="154" y2="14" stroke="rgba(180,140,40,0.5)" strokeWidth="0.6" />
      <path d="M134 14 L144 12.5" stroke="rgba(200,170,60,0.4)" strokeWidth="0.4" />
      {/* Ink drop when active */}
      {active && (
        <motion.ellipse
          cx="154" cy="15" rx="1.5" ry="1"
          fill="#1A1008"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.85, 0], scale: [0, 1, 1.6], y: [0, 1.5, 4] }}
          transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 1.4 }}
        />
      )}
      {/* Clip */}
      <rect x="8" y="5.5" width="2.5" height="16" rx="1.2" fill="rgba(200,175,90,0.45)" />
    </motion.svg>
  );
}

/** Ink bottle */
function InkBottle({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 48 72" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 36, height: 54, ...style }}>
      <defs>
        <linearGradient id="inkGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(60,45,30,0.7)" />
          <stop offset="45%" stopColor="rgba(40,30,20,0.55)" />
          <stop offset="100%" stopColor="rgba(20,15,10,0.8)" />
        </linearGradient>
        <radialGradient id="inkInside" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="rgba(26,20,12,0.9)" />
          <stop offset="100%" stopColor="rgba(10,8,5,0.95)" />
        </radialGradient>
      </defs>
      {/* Label */}
      <rect x="7" y="35" width="34" height="20" rx="2" fill="#EDE0C8" opacity="0.65" />
      <line x1="10" y1="40" x2="38" y2="40" stroke="rgba(110,90,60,0.2)" strokeWidth="0.5" />
      <line x1="10" y1="44" x2="32" y2="44" stroke="rgba(110,90,60,0.15)" strokeWidth="0.5" />
      <text x="24" y="52" textAnchor="middle" fontFamily="Georgia, serif" fontSize="5" fill="rgba(70,50,30,0.55)" fontStyle="italic">ink</text>
      {/* Body */}
      <rect x="5" y="26" width="38" height="40" rx="4" fill="url(#inkGlass)" />
      {/* Ink level */}
      <rect x="7" y="40" width="34" height="24" rx="3" fill="url(#inkInside)" />
      {/* Shine */}
      <path d="M10 29 C10 29 14 32 12 38" stroke="rgba(255,230,160,0.15)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Shoulder */}
      <path d="M5 26 C5 20 10 16 16 14 L32 14 C38 16 43 20 43 26 Z" fill="url(#inkGlass)" />
      <path d="M7 24 C8 19 12 17 17 15 L31 15 C36 17 40 19 41 24 Z" fill="rgba(255,220,100,0.04)" />
      {/* Neck */}
      <rect x="17" y="6" width="14" height="10" rx="3" fill="url(#inkGlass)" />
      {/* Cap */}
      <rect x="15" y="2" width="18" height="8" rx="3" fill="#2A1E10" />
      <rect x="17" y="3" width="6" height="6" rx="2" fill="rgba(255,200,80,0.06)" />
    </svg>
  );
}

/** Vintage postage stamp */
function PostageStamp({ rotation = 0, style }: { rotation?: number; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 55 68" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 40, height: 50, transform: `rotate(${rotation}deg)`, ...style }}>
      {/* Perforations */}
      {Array.from({ length: 8 }, (_, i) => <circle key={`t${i}`} cx={6 + i * 6.5} cy="4" r="2.5" fill="#FAF7F0" />)}
      {Array.from({ length: 8 }, (_, i) => <circle key={`b${i}`} cx={6 + i * 6.5} cy="64" r="2.5" fill="#FAF7F0" />)}
      {Array.from({ length: 9 }, (_, i) => <circle key={`l${i}`} cx="4" cy={6 + i * 6.5} r="2.5" fill="#FAF7F0" />)}
      {Array.from({ length: 9 }, (_, i) => <circle key={`r${i}`} cx="51" cy={6 + i * 6.5} r="2.5" fill="#FAF7F0" />)}
      {/* Body */}
      <rect x="5" y="5" width="45" height="58" rx="1" fill="#E8E0D0" />
      <rect x="8" y="8" width="39" height="42" rx="1" fill="#D4C8B0" />
      {/* Botanical illustration */}
      <path d="M27 46 C27 36 22 28 20 22" stroke="#8B7050" strokeWidth="1" fill="none" />
      <ellipse cx="20" cy="21" rx="4" ry="6" transform="rotate(-20 20 21)" fill="#A89060" opacity="0.55" />
      <path d="M27 38 C23 36 19 38 18 42" stroke="#8B7050" strokeWidth="0.8" fill="none" />
      <ellipse cx="17" cy="43" rx="3" ry="5" transform="rotate(15 17 43)" fill="#A89060" opacity="0.5" />
      <path d="M27 32 C31 30 35 32 36 28" stroke="#8B7050" strokeWidth="0.8" fill="none" />
      <ellipse cx="36" cy="27" rx="4" ry="5" transform="rotate(-10 36 27)" fill="#A89060" opacity="0.5" />
      {/* Value */}
      <text x="27" y="57" textAnchor="middle" fontFamily="Georgia, serif" fontSize="5" fill="#6B5040" letterSpacing="0.5">INDIA · 1</text>
    </svg>
  );
}

/** Paper clip */
function PaperClip({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 18 58" fill="none" style={{ width: 14, height: 44, ...style }}>
      <path d="M9 52 C3 52 2 42 2 30 L2 12 C2 6 6 3 9 3 C12 3 16 6 16 12 L16 38" stroke="#9A8070" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M5 12 C5 8 7 6 9 6 C11 6 13 8 13 12 L13 32" stroke="rgba(180,160,130,0.5)" strokeWidth="1" fill="none" />
    </svg>
  );
}

/** Folded envelope (sealed) */
function SealedEnvelope({ scale = 1, style }: { scale?: number; style?: React.CSSProperties }) {
  const w = 100 * scale, h = 70 * scale;
  return (
    <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: w, height: h, ...style }}>
      <defs>
        <linearGradient id="envBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EDE8DC" />
          <stop offset="100%" stopColor="#E2DBCA" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="98" height="68" rx="3" fill="url(#envBody)" stroke="rgba(140,110,70,0.3)" strokeWidth="0.8" />
      {/* Closed flap (triangle pointing down — sealed) */}
      <path d="M1 1 L50 36 L99 1 Z" fill="#D8D0C0" opacity="0.7" />
      {/* Bottom fold lines */}
      <path d="M1 69 L32 40" stroke="rgba(140,110,70,0.12)" strokeWidth="0.6" />
      <path d="M99 69 L68 40" stroke="rgba(140,110,70,0.12)" strokeWidth="0.6" />
      {/* Wax seal */}
      <circle cx="50" cy="26" r="10" fill="#BA664A" />
      <circle cx="50" cy="26" r="7.5" fill="#C47A5E" />
      <text x="50" y="29.5" textAnchor="middle" fill="rgba(255,235,200,0.8)" fontSize="7" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="0.5">PC</text>
      <circle cx="44" cy="22" r="1.5" fill="rgba(255,255,255,0.2)" />
      {/* Address lines */}
      <text x="20" y="52" fontFamily="Georgia, serif" fontSize="6" fill="rgba(110,90,70,0.4)" fontStyle="italic">To Poonam Choudhary</text>
      <text x="20" y="60" fontFamily="Georgia, serif" fontSize="5" fill="rgba(110,90,70,0.28)">New Delhi, India</text>
    </svg>
  );
}

/** Wax seal button decoration */
function WaxSealCircle({ enabled }: { enabled: boolean }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" style={{ width: 46, height: 46 }}>
      <defs>
        <radialGradient id="sealFill" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor={enabled ? "#D4785A" : "#A08070"} />
          <stop offset="60%" stopColor={enabled ? "#BA664A" : "#907060"} />
          <stop offset="100%" stopColor={enabled ? "#8C4830" : "#705040"} />
        </radialGradient>
      </defs>
      {/* Starburst / seal edge */}
      {Array.from({ length: 18 }, (_, i) => {
        const angle = (i * 360) / 18;
        const r1 = 24, r2 = 27;
        const a1 = (angle - 10) * Math.PI / 180;
        const a2 = (angle + 10) * Math.PI / 180;
        const mid = angle * Math.PI / 180;
        return (
          <path
            key={i}
            d={`M${28 + r1 * Math.cos(a1)} ${28 + r1 * Math.sin(a1)} L${28 + r2 * Math.cos(mid)} ${28 + r2 * Math.sin(mid)} L${28 + r1 * Math.cos(a2)} ${28 + r1 * Math.sin(a2)} Z`}
            fill={enabled ? "#C06848" : "#806050"}
            opacity="0.8"
          />
        );
      })}
      <circle cx="28" cy="28" r="22" fill="url(#sealFill)" />
      <circle cx="28" cy="28" r="17" fill="none" stroke="rgba(255,220,180,0.2)" strokeWidth="1" />
      <text x="28" y="32" textAnchor="middle" fill={enabled ? "rgba(255,240,210,0.85)" : "rgba(255,230,200,0.4)"} fontSize="8" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="0.5">PC</text>
      <circle cx="22" cy="22" r="2.5" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   DESK SCENE
═══════════════════════════════════════════════════ */
function DeskScene({ mouseX, mouseY, isTyping }: { mouseX: number; mouseY: number; isTyping: boolean }) {
  const mx = mouseX * 0.008;
  const my = mouseY * 0.005;

  return (
    <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 3 }}>

      {/* Postage stamps — top right cluster */}
      <motion.div
        className="absolute"
        style={{ top: "5%", right: "7%", opacity: 0.82 }}
        animate={{ rotate: [-6, -5.5, -6], y: [0, -1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <PostageStamp rotation={-6} />
      </motion.div>
      <motion.div
        className="absolute"
        style={{ top: "8%", right: "14%", opacity: 0.62 }}
        animate={{ rotate: [4, 5, 4], y: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      >
        <PostageStamp rotation={4} />
      </motion.div>

      {/* Ink bottle — top left corner */}
      <motion.div
        className="absolute"
        style={{ top: "5%", left: "5%", opacity: 0.88 }}
        animate={{ y: [0, -2, 0], x: [0, mx * 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <InkBottle />
      </motion.div>

      {/* Fountain pen — diagonal above letter */}
      <motion.div
        className="absolute"
        style={{ top: "17%", right: "6%", opacity: 0.9, transform: "rotate(-32deg)" }}
        animate={{ rotate: [-32 + mx, -32 + mx * 0.5], y: [0, -my] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
      >
        <FountainPen active={isTyping} />
      </motion.div>

      {/* Small folded envelope — bottom left */}
      <motion.div
        className="absolute"
        style={{ bottom: "10%", left: "3%", opacity: 0.7 }}
        animate={{ rotate: [8, 9, 8], y: [0, -1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <SealedEnvelope scale={0.55} />
      </motion.div>

      {/* Paper clip — beside the letter area */}
      <motion.div
        className="absolute"
        style={{ top: "23%", left: "5%", opacity: 0.55, transform: "rotate(40deg)" }}
        animate={{ rotate: [40, 41, 40] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <PaperClip />
      </motion.div>

      {/* Second paper clip */}
      <motion.div
        className="absolute"
        style={{ top: "26%", left: "8%", opacity: 0.38, transform: "rotate(-15deg)" }}
        animate={{ rotate: [-15, -14, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <PaperClip />
      </motion.div>

      {/* Pressed flower petal — bottom right */}
      <motion.div
        className="absolute"
        style={{ bottom: "6%", right: "5%", opacity: 0.55 }}
        animate={{ rotate: [0, 1, 0], scale: [0.9, 0.92, 0.9] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 60 60" fill="none" style={{ width: 44, height: 44 }}>
          {[0, 60, 120, 180, 240, 300].map((a, i) => (
            <ellipse
              key={i}
              cx={30 + 16 * Math.cos(a * Math.PI / 180)}
              cy={30 + 16 * Math.sin(a * Math.PI / 180)}
              rx="8" ry="12"
              transform={`rotate(${a} ${30 + 16 * Math.cos(a * Math.PI / 180)} ${30 + 16 * Math.sin(a * Math.PI / 180)})`}
              fill="#B8A8C8"
              opacity={0.45 - i * 0.04}
            />
          ))}
          <circle cx="30" cy="30" r="5" fill="#E8C870" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Subtle ink stains */}
      <div className="absolute" style={{ top: "14%", right: "22%", opacity: 0.06 }}>
        <svg viewBox="0 0 30 16" style={{ width: 24, height: 12 }}>
          <ellipse cx="8" cy="8" rx="5" ry="3.5" fill="#2A1E16" />
          <ellipse cx="20" cy="10" rx="3" ry="2" fill="#2A1E16" />
          <ellipse cx="26" cy="6" rx="2" ry="1.5" fill="#2A1E16" />
        </svg>
      </div>

      {/* Tiny handwritten note */}
      <motion.div
        className="absolute"
        style={{ bottom: "19%", right: "5%", opacity: 0.55, transform: "rotate(5deg)" }}
        animate={{ rotate: [5, 6, 5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 68 50" fill="none" style={{ width: 52, height: 38 }}>
          <rect width="68" height="50" rx="2" fill="#F5F0E5" stroke="rgba(140,110,70,0.2)" strokeWidth="0.5" />
          {[10, 18, 26, 34, 42].map((y, i) => (
            <line key={i} x1="6" y1={y} x2={58 - i * 3} y2={y} stroke="rgba(110,90,70,0.1)" strokeWidth="0.7" />
          ))}
          <text x="34" y="47" textAnchor="middle" fontFamily="Georgia, serif" fontSize="4.5" fill="rgba(110,90,70,0.3)" fontStyle="italic">a note</text>
        </svg>
      </motion.div>

      {/* Subtle desk surface shadow */}
      <div
        className="absolute"
        style={{
          bottom: 0, left: 0, right: 0, height: "22%",
          background: "linear-gradient(0deg, rgba(110,90,60,0.04) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
export default function ConnectRight() {
  const [phase, setPhase] = useState<Phase>("letter");
  const [name, setName]     = useState("");
  const [email, setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sending, setSending]   = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [emailError, setEmailError] = useState("");

  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nameSpanRef    = useRef<HTMLSpanElement>(null);
  const emailSpanRef   = useRef<HTMLSpanElement>(null);
  const [nameWidth, setNameWidth]   = useState(80);
  const [emailWidth, setEmailWidth] = useState(110);

  const useSafeLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
  useSafeLayoutEffect(() => {
    if (nameSpanRef.current) setNameWidth(nameSpanRef.current.getBoundingClientRect().width + 6);
  }, [name]);
  useSafeLayoutEffect(() => {
    if (emailSpanRef.current) setEmailWidth(emailSpanRef.current.getBoundingClientRect().width + 6);
  }, [email]);

  const handleTyping = useCallback(() => {
    setIsTyping(true);
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => setIsTyping(false), 1400);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left - rect.width / 2, y: e.clientY - rect.top - rect.height / 2 });
  }, []);

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const canSend = name.trim() !== "" && email.trim() !== "" && message.trim() !== "" && isValidEmail(email);

  const handleSend = async () => {
    if (!canSend || sending) return;
    if (!isValidEmail(email)) { setEmailError("Please enter a valid email address."); return; }
    setEmailError("");
    setSending(true);

    // Start animation immediately
    setPhase("folding");

    // Fire API call in parallel
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    }).catch(() => {}); // graceful fail — animation continues regardless

    setTimeout(() => setPhase("sealing"),  1400);
    setTimeout(() => setPhase("floating"), 2800);
    setTimeout(() => {
      setPhase("thanks");
      setSending(false);
    }, 4600);
  };

  const handleBack = () => {
    setPhase("letter");
    setName("");
    setEmail("");
    setMessage("");
    setEmailError("");
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: "linear-gradient(198deg, #FFFDF8 0%, #FAF7F2 44%, #F5EFE5 100%)" }}
      onMouseMove={handleMouseMove}
    >
      {/* ── Global styles ── */}
      <style>{`
        .letter-field::placeholder {
          color: rgba(110,90,78,0.45) !important;
          font-style: italic;
        }
        .letter-field:focus { outline: none; }
        .letter-textarea::placeholder {
          color: rgba(110,90,78,0.4) !important;
          font-style: italic;
        }
        .letter-textarea:focus { outline: none; }
        .letter-signature::placeholder {
          color: rgba(110,90,78,0.4);
          font-style: italic;
        }
        .letter-signature:focus { outline: none; }
      `}</style>

      {/* ── Subtle ruled paper lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(110,90,78,0.022) 31px, rgba(110,90,78,0.022) 32px)",
          zIndex: 1,
        }}
      />

      {/* ── Desk ambience wash ── */}
      <div
        className="absolute pointer-events-none"
        style={{ top: "5%", right: "-6%", width: "55%", height: "55%", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(210,170,80,0.055) 0%, transparent 70%)", zIndex: 1 }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "10%", left: "0%", width: "40%", height: "35%", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(158,168,138,0.065) 0%, transparent 70%)", zIndex: 1 }}
      />

      {/* ── Desk scene objects ── */}
      <DeskScene mouseX={mousePos.x} mouseY={mousePos.y} isTyping={isTyping} />

      {/* ═══════════════════════════════════════════
          LETTER FORM / ANIMATION PHASES
      ═══════════════════════════════════════════ */}
      <AnimatePresence mode="wait">

        {/* ── PHASE: LETTER WRITING ── */}
        {phase === "letter" && (
          <motion.div
            key="letter-form"
            className="absolute"
            style={{ bottom: "3%", left: "5%", right: "5%", zIndex: 20 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              scaleY: [1, 0.06],
              scaleX: [1, 0.8],
              opacity: [1, 1, 0],
              y: "30%",
              transformOrigin: "bottom center",
              transition: { duration: 1.3, ease: [0.4, 0, 0.2, 1] },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Paper card */}
            <motion.div
              style={{
                position: "relative",
                background: "linear-gradient(175deg, #FEFCF5 0%, #FAF7EE 52%, #F7F2E8 100%)",
                borderRadius: "1px",
                boxShadow: "0 1px 0 rgba(255,255,255,0.75) inset, 0 -1px 0 rgba(110,90,60,0.06) inset, 3px 8px 24px rgba(58,44,30,0.09), -1px 0 0 rgba(110,90,60,0.04)",
                padding: "16px 18px 14px",
              }}
              whileHover={{ y: -2, boxShadow: "0 1px 0 rgba(255,255,255,0.75) inset, 0 -1px 0 rgba(110,90,60,0.06) inset, 4px 12px 30px rgba(58,44,30,0.12), -1px 0 0 rgba(110,90,60,0.04)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Deckled top edge */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: -3, left: 0, right: 0, height: 6,
                  background: "linear-gradient(90deg, #FAF7EE 0%, #F7F2E8 20%, #FEFCF5 40%, #F7F2E8 60%, #FAF7EE 80%, #F7F2E8 100%)",
                  clipPath: "polygon(0% 60%, 1% 0%, 2% 80%, 3% 20%, 4% 70%, 5% 10%, 6% 60%, 7% 0%, 8% 80%, 9% 30%, 10% 70%, 11% 10%, 12% 60%, 13% 0%, 14% 80%, 15% 20%, 16% 70%, 17% 10%, 18% 60%, 19% 0%, 20% 80%, 21% 30%, 22% 60%, 23% 10%, 24% 80%, 25% 20%, 26% 70%, 27% 0%, 28% 80%, 29% 30%, 30% 70%, 31% 10%, 32% 60%, 33% 0%, 34% 80%, 35% 20%, 36% 70%, 37% 10%, 38% 60%, 39% 0%, 40% 80%, 41% 30%, 42% 60%, 43% 10%, 44% 80%, 45% 20%, 46% 70%, 47% 0%, 48% 80%, 49% 30%, 50% 70%, 51% 10%, 52% 60%, 53% 0%, 54% 80%, 55% 20%, 56% 70%, 57% 10%, 58% 60%, 59% 0%, 60% 80%, 61% 30%, 62% 60%, 63% 10%, 64% 80%, 65% 20%, 66% 70%, 67% 0%, 68% 80%, 69% 30%, 70% 70%, 71% 10%, 72% 60%, 73% 0%, 74% 80%, 75% 20%, 76% 70%, 77% 10%, 78% 60%, 79% 0%, 80% 80%, 81% 30%, 82% 60%, 83% 10%, 84% 80%, 85% 20%, 86% 70%, 87% 0%, 88% 80%, 89% 30%, 90% 70%, 91% 10%, 92% 60%, 93% 0%, 94% 80%, 95% 20%, 96% 70%, 97% 10%, 98% 60%, 99% 0%, 100% 60%)",
                  zIndex: 2,
                }}
              />

              {/* Ruled lines */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(110,90,70,0.042) 24px, rgba(110,90,70,0.042) 25px)",
                  borderRadius: "1px", zIndex: 0,
                }}
              />

              {/* Letter content */}
              <div style={{ position: "relative", zIndex: 1 }}>

                {/* Salutation */}
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(12px, 1.7vh, 14.5px)", color: "rgba(110,90,78,0.65)", marginBottom: 6, lineHeight: 1.4 }}>
                  Dear Poonam,
                </p>

                {/* Line 1: name */}
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(11px, 1.55vh, 13px)", color: "rgba(90,74,56,0.75)", lineHeight: 2.1, marginBottom: 0, display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "0 4px" }}>
                  <span>My name is</span>
                  <span className="relative inline-block">
                    <span ref={nameSpanRef} className="absolute invisible whitespace-pre" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(11px, 1.55vh, 13px)", fontStyle: "italic", fontWeight: name ? 600 : 400, padding: "0 2px" }}>
                      {name || "your name here"}
                    </span>
                    <input
                      value={name}
                      onChange={e => { setName(e.target.value); handleTyping(); }}
                      placeholder="your name here"
                      className="letter-field bg-transparent"
                      style={{ width: `${nameWidth}px`, fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(11px, 1.55vh, 13px)", fontStyle: "italic", fontWeight: name ? 600 : 400, color: name ? "#2A1E16" : "rgba(110,90,78,0.5)", border: "none", borderBottom: `1px solid ${name ? "rgba(110,90,78,0.38)" : "rgba(110,90,78,0.18)"}`, paddingBottom: "1px", verticalAlign: "baseline", transition: "all 0.2s ease" }}
                      aria-label="Your name"
                    />
                  </span>
                  <span>—</span>
                </p>

                {/* Line 2: email */}
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(11px, 1.55vh, 13px)", color: "rgba(90,74,56,0.75)", lineHeight: 2.1, marginBottom: 0, display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "0 4px" }}>
                  <span>my email is</span>
                  <span className="relative inline-block">
                    <span ref={emailSpanRef} className="absolute invisible whitespace-pre" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(11px, 1.55vh, 13px)", fontStyle: "italic", fontWeight: email ? 600 : 400, padding: "0 2px" }}>
                      {email || "your@email.com"}
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={e => { setEmail(e.target.value); setEmailError(""); handleTyping(); }}
                      placeholder="your@email.com"
                      className="letter-field bg-transparent"
                      style={{ width: `${emailWidth}px`, fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(11px, 1.55vh, 13px)", fontStyle: "italic", fontWeight: email ? 600 : 400, color: emailError ? "#B05040" : (email ? "#2A1E16" : "rgba(110,90,78,0.5)"), border: "none", borderBottom: `1px solid ${emailError ? "rgba(176,80,64,0.45)" : (email ? "rgba(110,90,78,0.38)" : "rgba(110,90,78,0.18)")}`, paddingBottom: "1px", verticalAlign: "baseline", transition: "all 0.2s ease" }}
                      aria-label="Your email address"
                    />
                  </span>
                  <span>.</span>
                </p>
                {emailError && (
                  <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(9px, 1.25vh, 10.5px)", color: "#B05040", opacity: 0.85, marginTop: 2, marginBottom: 2 }}>
                    {emailError}
                  </p>
                )}

                {/* Message prompt + textarea */}
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(11px, 1.55vh, 13px)", color: "rgba(90,74,56,0.7)", lineHeight: 1.8, marginTop: 4, marginBottom: 2 }}>
                  I wanted to write because…
                </p>
                <textarea
                  value={message}
                  onChange={e => { setMessage(e.target.value); handleTyping(); }}
                  placeholder="Share what is on your heart…"
                  rows={3}
                  className="letter-textarea bg-transparent w-full resize-none"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(11px, 1.55vh, 13px)", fontStyle: "italic", color: "#2A1E16", border: "none", borderBottom: "1px solid rgba(110,90,70,0.1)", paddingBottom: 4, marginBottom: 8, lineHeight: 2.05 }}
                  aria-label="Your message"
                />

                {/* Footer: closing + wax seal button */}
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(11px, 1.5vh, 13px)", color: "rgba(110,90,78,0.6)", marginBottom: 2, lineHeight: 1.4 }}>
                      With gratitude,
                    </p>
                    {/* Signature underline */}
                    <div style={{ width: 70, height: "0.5px", background: "rgba(110,90,78,0.22)", marginTop: 2 }} />
                  </div>

                  {/* Wax Seal Button */}
                  <motion.button
                    onClick={handleSend}
                    disabled={!canSend || sending}
                    whileHover={canSend ? { scale: 1.08, rotate: 2 } : {}}
                    whileTap={canSend ? { scale: 0.94 } : {}}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: canSend ? "pointer" : "default", opacity: canSend ? 1 : 0.35, transition: "opacity 0.3s ease" }}
                    aria-label="Seal and Send Letter"
                  >
                    <WaxSealCircle enabled={canSend} />
                    <span style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(9px, 1.28vh, 11px)", color: canSend ? "#BA664A" : "#907060", letterSpacing: "0.04em" }}>
                      Seal &amp; Send
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* ── PHASE: FOLDING ── */}
        {phase === "folding" && (
          <motion.div
            key="folding"
            className="absolute"
            style={{ bottom: "5%", left: "12%", right: "12%", zIndex: 25 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              style={{ background: "linear-gradient(175deg, #FEFCF5 0%, #FAF7EE 100%)", border: "0.5px solid rgba(110,90,60,0.12)", padding: "16px 18px", boxShadow: "2px 8px 22px rgba(58,44,30,0.09)", transformOrigin: "center bottom" }}
              animate={{ scaleY: [1, 0.45, 0.12], scaleX: [1, 0.88, 0.68], rotate: [0, -1, 2] }}
              transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "12px", color: "rgba(110,90,78,0.55)", lineHeight: 1.9 }}>
                Dear Poonam, my name is {name}.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "11px", color: "#4A3728", lineHeight: 1.7, marginTop: 4 }}>
                {message.slice(0, 60)}{message.length > 60 ? "…" : ""}
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* ── PHASE: SEALING ── */}
        {phase === "sealing" && (
          <motion.div
            key="envelope-seal"
            className="absolute"
            style={{ bottom: "10%", left: "50%", transform: "translateX(-50%)", zIndex: 25 }}
            initial={{ opacity: 0, scale: 0.65 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <SealedEnvelope scale={1.15} />
          </motion.div>
        )}

        {/* ── PHASE: FLOATING ── */}
        {phase === "floating" && (
          <motion.div
            key="floating-envelope"
            className="absolute pointer-events-none"
            style={{ bottom: "10%", left: "50%", x: "-50%", zIndex: 25 }}
            initial={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
            animate={{ y: -320, rotate: [0, -4, 3, -1, 0], opacity: [1, 1, 0.9, 0.4, 0], scale: [1, 1.04, 1.02, 0.98] }}
            transition={{ duration: 1.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <SealedEnvelope scale={1.15} />
          </motion.div>
        )}

        {/* ── PHASE: THANKS ── */}
        {phase === "thanks" && (
          <motion.div
            key="thanks"
            className="absolute"
            style={{ bottom: "4%", left: "7%", right: "7%", zIndex: 30 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div
              style={{
                background: "linear-gradient(175deg, #FEFCF5 0%, #FAF7EE 100%)",
                border: "0.5px solid rgba(110,90,60,0.09)",
                padding: "20px 22px 18px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), 2px 8px 22px rgba(58,44,30,0.07)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 5,
              }}
            >
              {/* Wax seal decoration */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.3 }}
              >
                <svg viewBox="0 0 48 48" fill="none" style={{ width: 36, height: 36 }}>
                  {Array.from({ length: 16 }, (_, i) => {
                    const angle = (i * 360) / 16;
                    const a1 = (angle - 12) * Math.PI / 180;
                    const a2 = (angle + 12) * Math.PI / 180;
                    const mid = angle * Math.PI / 180;
                    return <path key={i} d={`M${24 + 20 * Math.cos(a1)} ${24 + 20 * Math.sin(a1)} L${24 + 23 * Math.cos(mid)} ${24 + 23 * Math.sin(mid)} L${24 + 20 * Math.cos(a2)} ${24 + 20 * Math.sin(a2)} Z`} fill="#C06848" opacity="0.7" />;
                  })}
                  <circle cx="24" cy="24" r="19" fill="#BA664A" />
                  <circle cx="24" cy="24" r="14.5" fill="#C47A5E" />
                  <text x="24" y="28" textAnchor="middle" fill="rgba(255,235,200,0.85)" fontSize="8" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="0.5">PC</text>
                  <circle cx="18" cy="18" r="2" fill="rgba(255,255,255,0.2)" />
                </svg>
              </motion.div>

              <div style={{ width: 22, height: "0.5px", background: "rgba(168,178,154,0.4)", margin: "2px 0" }} />

              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(14px, 2vh, 17px)", color: "#3A2C1E", lineHeight: 1.45 }}>
                Your letter is on its way.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(10px, 1.42vh, 12px)", color: "#5A4A38", lineHeight: 1.75, maxWidth: 270, opacity: 0.82 }}>
                Thank you for reaching out, {name}.<br />Your message has been safely delivered.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(9px, 1.28vh, 10.5px)", color: "#6E5A4E", opacity: 0.55, marginTop: 2 }}>
                Every thoughtful message is read with care.
              </p>

              <div style={{ width: 22, height: "0.5px", background: "rgba(168,178,154,0.38)", margin: "2px 0" }} />

              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(9px, 1.25vh, 10px)", color: "#6E5A4E", opacity: 0.45 }}>
                With warmth, Poonam
              </p>

              <button
                onClick={handleBack}
                style={{ marginTop: 6, fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "10px", color: "#9EA88A", background: "none", border: "none", cursor: "pointer", opacity: 0.7, letterSpacing: "0.03em" }}
              >
                ← Write another letter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PAGE NUMBER ── */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "1.5%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "7.5px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.18 }}>5</span>
      </div>
    </div>
  );
}

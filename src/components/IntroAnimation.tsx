import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { m } from "framer-motion";

/* ─── Constants ─────────────────────────────────────────── */

const EBUBEDIKE = "Ebubedike".split("");
const IGWE_CHARS = "IGWE DE MC".split("").map((c) => (c === " " ? "\u00A0" : c));

const PARTICLES = Array.from({ length: 10 }, () => ({
  id: Math.random(),
  size: 2 + Math.random() * 2,
  startOpacity: 0.3 + Math.random() * 0.3,
  x: Math.random() * 100,
}));

/* ─── Crown SVG path ─────────────────────────────────────── */

const CROWN_PATH =
  "M 4,28 L 4,20 L 9,27 L 14,8 L 18,25 L 22,4 L 26,24 L 30,8 L 34,27 L 39,20 L 39,28";

/* ─── Mic SVG sub‑components ─────────────────────────────── */

function MicCapsule() {
  return (
    <g>
      <ellipse
        cx={30}
        cy={28}
        rx={18}
        ry={22}
        fill="none"
        stroke="#D4AF37"
        strokeWidth={1.5}
        opacity={0.7}
      />
      {[16, 20, 24, 28, 32].map((y) => (
        <line
          key={y}
          x1={14}
          y1={y}
          x2={46}
          y2={y}
          stroke="#D4AF37"
          strokeWidth={0.8}
          opacity={0.4}
        />
      ))}
    </g>
  );
}

function MicBody() {
  return (
    <g>
      <rect x={22} y={50} width={16} height={6} rx={2} fill="#D4AF37" opacity={0.5} />
      <rect x={27} y={56} width={6} height={16} rx={2} fill="#D4AF37" opacity={0.4} />
      <ellipse cx={30} cy={74} rx={10} ry={3} fill="#D4AF37" opacity={0.3} />
    </g>
  );
}

function CrownIcon() {
  return (
    <m.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
      className="pointer-events-none"
      style={{
        filter: "drop-shadow(0 0 6px rgba(212,175,55,0.6))",
      }}
    >
      <svg
        width={48}
        height={34}
        viewBox="0 0 43 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={CROWN_PATH}
          stroke="#F0CC5A"
          strokeWidth={1.5}
          fill="none"
        />
      </svg>
    </m.div>
  );
}

function MicSvg() {
  return (
    <m.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration:0.5, ease: "easeOut", delay: 0.7 }}
      className="pointer-events-none"
    >
      <svg
        width={60}
        height={90}
        viewBox="0 0 60 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <MicCapsule />
        <MicBody />
      </svg>
    </m.div>
  );
}

/* ─── Staggered text line ────────────────────────────────── */

function StaggerLine({
  chars,
  baseDelay,
  className,
  lineHeight,
  textShadow,
}: {
  chars: string[];
  baseDelay: number;
  className: string;
  lineHeight: string;
  textShadow?: string;
}) {
  return (
    <div
      className={`font-display font-bold leading-none ${className}`}
      style={{ lineHeight, textShadow }}
    >
      {chars.map((ch, i) => (
        <m.span
          key={`${ch}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: baseDelay + i * 0.045,
            ease: "easeOut",
          }}
        >
          {ch}
        </m.span>
      ))}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────── */

export function IntroAnimation() {
  /* ── Session-storage / a11y gate ── */
  const shouldSkip = useMemo(() => {
    try {
      if (sessionStorage.getItem("introPlayed")) return true;
      if (typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        sessionStorage.setItem("introPlayed", "true");
        return true;
      }
    } catch {
      /* noop */
    }
    return false;
  }, []);

  if (shouldSkip) return null;

  return <IntroContent />;
}

/* ─── Inner component (runs animation) ───────────────────── */

function IntroContent() {
  const [phase, setPhase] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [removed, setRemoved] = useState(false);
  const skipGuard = useRef(false);

  /* ── Phase timers ── */
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),    // Act 2 – spotlight
      setTimeout(() => setPhase(2), 600),    // Act 3 – mic + crown
      setTimeout(() => setPhase(3), 900),   // Act 4 – "Ebubedike"
      setTimeout(() => setPhase(4), 1000),   // Act 4 – "IGWE DE MC"
      setTimeout(() => setPhase(5), 3400),   // Act 4 – rule + tagline
      setTimeout(() => setExiting(true), 4600), // Act 5 – curtain rise
      setTimeout(() => {
        sessionStorage.setItem("introPlayed", "true");
        setRemoved(true);
      }, 5200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  /* ── Skip handler ── */
  const handleSkip = useCallback(() => {
    if (skipGuard.current) return;
    skipGuard.current = true;
    setExiting(true);
    setTimeout(() => {
      sessionStorage.setItem("introPlayed", "true");
      setRemoved(true);
    }, 600);
  }, []);

  if (removed) return null;

  const showSpotlight = phase >= 1;
  const showMicCrown = phase >= 2;
  const showEbube = phase >= 3;
  const showIgwe = phase >= 4;
  const showRule = phase >= 5;

  return (
    <m.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-[#050507]"
      style={{
        clipPath: "inset(0% 0% 0% 0%)",
      }}
      animate={
        exiting
          ? { clipPath: "inset(100% 0% 0% 0%)" }
          : { clipPath: "inset(0% 0% 0% 0%)" }
      }
      transition={
        exiting
          ? { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
          : { duration: 0 }
      }
      onClick={handleSkip}
    >
      {/* ──────────────────────────────── */}
      {/*  Ambient orbs                   */}
      {/* ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <m.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle 400px at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute left-[30%] top-[70%] -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle 300px at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ──────────────────────────────── */}
      {/*  Spotlight                       */}
      {/* ──────────────────────────────── */}
      {showSpotlight && (
        <m.div
          className="absolute pointer-events-none"
          style={{
            width: 560,
            height: 560,
            background:
              "radial-gradient(circle 280px at 50% 48%, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 40%, transparent 70%)",
          }}
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}

      {/* ──────────────────────────────── */}
      {/*  Spotlight gold pulse (Act 4)    */}
      {/* ──────────────────────────────── */}
      {showIgwe && (
        <m.div
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle 300px at 50% 48%, rgba(212,175,55,0.12) 0%, transparent 60%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.18, 0.06, 0.22, 0.08, 0.18, 0.06] }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            ease: "easeInOut",
          }}
        />
      )}

      {/* ──────────────────────────────── */}
      {/*  Floating particles              */}
      {/* ──────────────────────────────── */}
      {showSpotlight &&
        PARTICLES.map((p) => (
          <m.div
            key={p.id}
            className="absolute pointer-events-none"
            style={{
              width: p.size,
              height: p.size,
              background: "#D4AF37",
              borderRadius: "50%",
              left: `${p.x}%`,
              bottom: "30%",
              opacity: p.startOpacity,
            }}
            animate={{ y: [0, -window.innerHeight * 0.6] }}
            transition={{
              duration: 3,
              delay: 0.4,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        ))}

      {/* ──────────────────────────────── */}
      {/*  Content stack (fades on exit)   */}
      {/* ──────────────────────────────── */}
      <m.div
        className="relative z-10 flex flex-col items-center justify-center"
        animate={exiting ? { opacity: 0 } : { opacity: 1 }}
        transition={exiting ? { duration: 0.3 } : { duration: 0 }}
      >
        {/* ── Crown + Mic ── */}
        {showMicCrown && (
          <div className="flex flex-col items-center">
            <div className="mb-[-4px]">
              <CrownIcon />
            </div>
            <MicSvg />
          </div>
        )}

        {/* ── "Ebubedike" ── */}
        {showEbube && (
          <div className="mt-6">
            <StaggerLine
              chars={EBUBEDIKE}
              baseDelay={1.0}
              className="text-[32px] md:text-[52px] text-foreground"
              lineHeight="1.05"
              textShadow="0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(240,237,230,0.15)"
            />
          </div>
        )}

        {/* ── "IGWE DE MC" ── */}
        {showIgwe && (
          <div className="mt-1">
            <StaggerLine
              chars={IGWE_CHARS}
              baseDelay={1.4}
              className="text-[42px] md:text-[68px] gold-gradient-text"
              lineHeight="1.05"
              textShadow="0 2px 8px rgba(0,0,0,0.8), 0 0 32px rgba(212,175,55,0.4), 0 0 64px rgba(212,175,55,0.15)"
            />
          </div>
        )}

        {/* ── Rule line ── */}
        {showRule && (
          <m.div
            className="mt-4 h-[1px] w-[80px] md:w-[120px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}

        {/* ── Tagline ── */}
        {showRule && (
          <m.p
            className="mt-2 font-mono text-[10px] uppercase"
            style={{ color: "rgba(212,175,55,0.65)", letterSpacing: "0.3em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            Southampton &middot; UK &middot; Master of Ceremony
          </m.p>
        )}
      </m.div>


    </m.div>
  );
}

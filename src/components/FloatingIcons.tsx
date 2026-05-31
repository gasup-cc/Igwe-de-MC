import { m, useReducedMotion } from "framer-motion";
import { Mic2, Crown, Star, Music, Laugh, Sparkles, PartyPopper, Radio, Volume2, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

type IconConfig = {
  Icon: typeof Mic2;
  left: string;
  top: string;
  color: string;
  size: number;
  floatY: number;
  rotateDeg: number;
  duration: number;
  delay: number;
  hideOnMobile?: boolean;
};

const icons: IconConfig[] = [
  { Icon: Mic2, left: "5%", top: "15%", color: "#D4AF37", size: 22, floatY: -22, rotateDeg: 6, duration: 6.2, delay: 0.4 },
  { Icon: Crown, left: "90%", top: "8%", color: "#D4AF37", size: 20, floatY: -19, rotateDeg: -7, duration: 7.4, delay: 1.6 },
  { Icon: Star, left: "75%", top: "35%", color: "#F0CC5A", size: 18, floatY: -25, rotateDeg: 8, duration: 5.5, delay: 0.9 },
  { Icon: Music, left: "12%", top: "55%", color: "#7C3AED", size: 20, floatY: -20, rotateDeg: -5, duration: 8.1, delay: 2.1 },
  { Icon: Laugh, left: "88%", top: "62%", color: "#D4AF37", size: 22, floatY: -27, rotateDeg: 7, duration: 6.8, delay: 0.2 },
  { Icon: Sparkles, left: "45%", top: "80%", color: "#F0CC5A", size: 18, floatY: -18, rotateDeg: -8, duration: 4.6, delay: 1.2 },
  { Icon: PartyPopper, left: "22%", top: "82%", color: "#D4AF37", size: 20, floatY: -23, rotateDeg: 5, duration: 7.9, delay: 2.7, hideOnMobile: true },
  { Icon: Radio, left: "60%", top: "12%", color: "#7C3AED", size: 18, floatY: -21, rotateDeg: -6, duration: 5.2, delay: 1.9, hideOnMobile: true },
  { Icon: Volume2, left: "38%", top: "45%", color: "rgba(212,175,55,0.7)", size: 16, floatY: -19, rotateDeg: 4, duration: 8.6, delay: 0.7, hideOnMobile: true },
  { Icon: Trophy, left: "82%", top: "85%", color: "#D4AF37", size: 18, floatY: -26, rotateDeg: -7, duration: 4.8, delay: 2.4, hideOnMobile: true },
];

export const FloatingIcons = () => {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const opacityRange = [0.12, 0.35];
  const visibleIcons = isMobile
    ? icons.filter(({ Icon }) => Icon === Mic2 || Icon === Crown || Icon === Star || Icon === Sparkles)
    : icons;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {visibleIcons
        .map(({ Icon, left, top, color, size, floatY, rotateDeg, duration, delay }, i) => {
          const style = { position: "absolute" as const, left, top, color };
          if (reduceMotion) {
            return (
              <div key={i} style={{ ...style, opacity: 0.12 }}>
                <Icon size={size} />
              </div>
            );
          }
          if (isMobile) {
            return (
              <div
                key={i}
                className="floating-icon-mobile"
                style={{ ...style, animationDelay: `${delay}s` }}
              >
                <Icon size={size} />
              </div>
            );
          }
          return (
            <m.div
              key={i}
              style={style}
              initial={{ y: 0, rotate: 0, opacity: opacityRange[0] }}
              animate={{
                y: [0, floatY, 0],
                rotate: [-rotateDeg, rotateDeg, -rotateDeg],
                opacity: [opacityRange[0], opacityRange[1], opacityRange[0]],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Icon size={size} />
            </m.div>
          );
        })}
    </div>
  );
};

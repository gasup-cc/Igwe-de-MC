import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const getMotionDisabled = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 767px)").matches);

export function ParallaxSection({ children, className, speed = 0.15 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [motionDisabled, setMotionDisabled] = useState(getMotionDisabled);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  useEffect(() => {
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateMotion = () => setMotionDisabled(reducedQuery.matches || mobileQuery.matches);

    updateMotion();
    reducedQuery.addEventListener("change", updateMotion);
    mobileQuery.addEventListener("change", updateMotion);

    return () => {
      reducedQuery.removeEventListener("change", updateMotion);
      mobileQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: className?.includes("absolute") ? undefined : "relative", overflow: "hidden" }}
    >
      <motion.div
        style={{ y: motionDisabled ? 0 : y, position: "absolute", inset: "-20% 0", zIndex: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

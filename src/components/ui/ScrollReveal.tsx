import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
}

/**
 * Universal scroll-triggered reveal.
 * Hidden → visible with opacity + lift + blur, spring transition.
 */
export function ScrollReveal({
  children,
  delay = 0.1,
  className,
  as = "div",
}: ScrollRevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
      transition={{ type: "spring", duration: 0.9, bounce: 0.2, delay }}
    >
      {children}
    </MotionTag>
  );
}

import { m, useReducedMotion, Variants } from "framer-motion";
import { cloneElement, isValidElement, ReactElement, ReactNode } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.9,
      bounce: 0.2,
      delay: 0.1 + Math.min(index, 7) * 0.08,
    },
  }),
};

export function StaggerContainer({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
}) {
  const MotionTag = m[as] as typeof m.div;
  const reduceMotion = useReducedMotion();
  const cappedChildren = Array.isArray(children)
    ? children.map((child, index) => {
        if (!isValidElement(child)) return child;
        const typeName = (child.type as { displayName?: string }).displayName;
        if (typeName !== "StaggerItem") return child;
        return cloneElement(child as ReactElement<{ staggerIndex?: number }>, {
          staggerIndex: Math.min(index, 7),
        });
      })
    : children;

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
    >
      {cappedChildren}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
  staggerIndex,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "span";
  staggerIndex?: number;
}) {
  const MotionTag = m[as] as typeof m.div;
  const reduceMotion = useReducedMotion();

  return (
    <MotionTag
      className={className}
      variants={reduceMotion ? undefined : itemVariants}
      custom={staggerIndex}
    >
      {children}
    </MotionTag>
  );
}

StaggerItem.displayName = "StaggerItem";

import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  borderGlow?: boolean;
  goldAccentTop?: boolean;
  hoverable?: boolean;
  padding?: string;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, borderGlow, goldAccentTop, hoverable = true, padding = "p-6", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass relative rounded-2xl",
          hoverable && "glass-hover",
          borderGlow && "shadow-[0_0_40px_rgba(212,175,55,0.15)]",
          padding,
          className
        )}
        {...props}
      >
        {goldAccentTop && (
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        )}
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  goldTitle?: string;
  className?: string;
}

export const SectionHeader = ({ eyebrow, title, subtitle, align = "left", goldTitle, className }: SectionHeaderProps) => {
  return (
    <div className={cn("flex flex-col gap-4 mb-12", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-gold" />
          <span className="eyebrow">{eyebrow}</span>
          <span className="inline-block w-8 h-px bg-gold" />
        </div>
      )}
      <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
        {title} {goldTitle && <span className="gold-gradient-text">{goldTitle}</span>}
      </h2>
      {subtitle && (
        <p className={cn("text-base md:text-lg text-muted-foreground font-light max-w-2xl leading-relaxed", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

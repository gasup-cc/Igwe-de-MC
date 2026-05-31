import { ReactNode } from "react";
import { AmbientOrbs } from "@/components/AmbientOrbs";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  goldTitle?: string;
  eyebrow?: string;
  subtitle?: string;
  breadcrumb?: { label: string; to?: string }[];
  children?: ReactNode;
  size?: "default" | "narrow";
}

export const PageHero = ({ title, goldTitle, eyebrow, subtitle, breadcrumb, children, size = "default" }: PageHeroProps) => {
  return (
    <section className={`section-surface relative ${size === "narrow" ? "py-20" : "py-28 md:py-32"} border-b border-white/[0.06] bg-void/70`}>
      <AmbientOrbs variant="hero" />
      <div className="container-x relative z-10 text-center">
        {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
        <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.02]">
          {title} {goldTitle && <span className="gold-gradient-text">{goldTitle}</span>}
        </h1>
        {subtitle && <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground font-light leading-relaxed">{subtitle}</p>}
        {breadcrumb && (
          <nav className="mt-7 flex items-center justify-center gap-2 text-xs text-muted-foreground tracking-wider">
            <Link to="/" className="hover:text-gold">Home</Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                {b.to ? <Link to={b.to} className="hover:text-gold">{b.label}</Link> : <span className="text-gold">{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {children}
      </div>
    </section>
  );
};

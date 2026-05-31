import { Link } from "react-router-dom";
import { AmbientOrbs } from "@/components/AmbientOrbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const BookingCTA = () => {
  return (
    <section className="section-surface relative py-32 md:py-40 overflow-hidden bg-void">
      <AmbientOrbs variant="gold" />
      <div className="container-x relative z-10 text-center max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05]">
            Ready to Make Your Event <span className="gold-gradient-text">Unforgettable?</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-6 text-base md:text-lg text-muted-foreground font-light">
            Based in Southampton. Available UK-wide. Book your date before it's gone.
          </p>
        </ScrollReveal>
        <div className="mt-10 flex flex-col items-center gap-4">
          <ScrollReveal delay={0.25}>
            <Link to="/booking" className="btn-shimmer inline-flex items-center gap-3 bg-gold text-void px-14 py-5 rounded-md text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all shadow-[0_0_40px_rgba(212,175,55,0.35)]">
              Book IGWE DE MC Now
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link
              to="/book-a-call"
              className="inline-flex items-center justify-center rounded-md border border-gold/30 bg-white/[0.03] px-8 py-3.5 text-[13px] font-medium uppercase tracking-[2px] text-gold transition-colors hover:bg-gold/10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Schedule a Free Discovery Call
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <p className="text-xs text-muted-foreground tracking-wider">Weddings · Corporates · Parties · Festivals</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

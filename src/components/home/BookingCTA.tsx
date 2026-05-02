import { Link } from "react-router-dom";
import { AmbientOrbs } from "@/components/AmbientOrbs";

export const BookingCTA = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-void">
      <AmbientOrbs variant="gold" />
      <div className="container-x relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight">
          Ready to Make Your Event <span className="gold-gradient-text">Unforgettable?</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground font-light">
          Based in Southampton. Available UK-wide. Book your date before it's gone.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Link to="/booking" className="btn-shimmer inline-flex items-center gap-3 bg-gold text-void px-14 py-5 rounded-md text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all shadow-[0_0_40px_rgba(212,175,55,0.35)]">
            Book IGWE DE MC Now
          </Link>
          <p className="text-xs text-muted-foreground tracking-wider">Weddings · Corporates · Parties · Festivals</p>
        </div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";
import { Calendar, PlayCircle, Mic } from "lucide-react";
import { AmbientOrbs } from "@/components/AmbientOrbs";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Ticker } from "@/components/Ticker";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <AmbientOrbs variant="hero" />

      <div className="container-x relative z-10 flex-1 flex items-center pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 w-full items-center">
          <div className="space-y-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 glass border-gold/30 bg-gold/10 text-gold rounded-full px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Southampton · UK · Master of Ceremony
            </span>

            <h1 className="font-display font-bold text-[42px] md:text-[64px] lg:text-[76px] leading-[1.02] tracking-tight">
              Highstar
              <br />
              <span className="gold-gradient-text">IGWE DE MC</span>
            </h1>

            <p className="text-base md:text-[17px] text-muted-foreground font-light max-w-[480px] leading-[1.8]">
              MC · Comedian · Event Host · Southampton & UK-wide. Creating unforgettable moments at every event.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/booking" className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gold text-void px-9 py-4 rounded-md text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)]">
                <Calendar className="w-4 h-4" /> Book Your Event
              </Link>
              <Link to="/videos" className="inline-flex items-center justify-center gap-2 glass px-9 py-4 rounded-md text-xs tracking-[0.2em] uppercase font-light text-foreground hover:border-gold/40 transition-all">
                <PlayCircle className="w-4 h-4 text-gold" /> Watch Showreel
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[0,1,2,3].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full glass-strong border-2 border-void bg-gradient-to-br from-gold/30 to-violet/20" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">100+ events hosted across the UK</span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <ImagePlaceholder aspect="aspect-[3/4]" rounded="rounded-3xl" label="IGWE DE MC Portrait" />
              <div className="absolute bottom-6 left-6 glass-strong border-gold/30 rounded-xl px-4 py-2.5 text-xs flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                <Mic className="w-4 h-4 text-gold" />
                <span className="text-foreground">Available UK-Wide</span>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Ticker items={["CONCERT", "WEDDINGS", "CORPORATE EVENTS", "DJ NIGHTS", "BIRTHDAY PARTIES", "PRIVATE PARTIES", "CULTURAL CEREMONIES", "STAND-UP COMEDY"]} />
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";
import { Calendar, PlayCircle, Mic } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-viewport ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute"
          style={{
            top: "25%", left: "15%", width: 700, height: 600, transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "75%", left: "85%", width: 700, height: 600, transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-10"
        style={{ paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-20 items-center">
          {/* LEFT */}
          <div className="flex flex-col items-start text-left gap-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 glass border-gold/30 bg-gold/10 text-gold rounded-full px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Southampton · UK · Master of Ceremony
            </span>

            <h1
              className="font-display font-bold tracking-tight"
              style={{ fontSize: "clamp(42px, 6vw, 80px)", lineHeight: 1.05 }}
            >
              <span className="block whitespace-nowrap">Ebubedike</span>
              <span className="block whitespace-nowrap gold-gradient-text">IGWE DE MC</span>
            </h1>

            <p className="text-base md:text-[17px] text-muted-foreground font-light max-w-[480px] leading-[1.8]">
              MC · Comedian · Event Host · Southampton & UK-wide. Creating unforgettable moments at every event.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Link
                to="/booking"
                className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gold text-void px-9 py-4 rounded-md text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                style={{ minWidth: 180 }}
              >
                <Calendar className="w-4 h-4" /> Book Your Event
              </Link>
              <Link
                to="/videos"
                className="inline-flex items-center justify-center gap-2 glass px-9 py-4 rounded-md text-xs tracking-[0.2em] uppercase font-light text-foreground hover:border-gold/40 transition-all"
                style={{ minWidth: 180 }}
              >
                <PlayCircle className="w-4 h-4 text-gold" /> Watch Showreel
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full glass-strong border-2 border-void bg-gradient-to-br from-gold/30 to-violet/20" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">100+ events hosted across the UK</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:block">
            <div className="relative" style={{ aspectRatio: "3 / 4", borderRadius: 24, overflow: "hidden" }}>
              <ImagePlaceholder aspect="aspect-[3/4]" rounded="rounded-3xl" label="IGWE DE MC Portrait" />
              <div className="absolute bottom-6 left-6 glass-strong border-gold/30 rounded-xl px-4 py-2.5 text-xs flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                <Mic className="w-4 h-4 text-gold" />
                <span className="text-foreground">Available UK-Wide</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom ticker strip */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden"
        style={{
          height: 44,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(5,5,7,0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div
          className="flex whitespace-nowrap h-full items-center"
          style={{ animation: "ticker 30s linear infinite" }}
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <span
              key={k}
              className="font-mono-acc uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.3em",
                color: "rgba(212,175,55,0.6)",
                paddingRight: 48,
              }}
            >
              CONCERT · WEDDINGS · CORPORATE EVENTS · DJ NIGHTS · BIRTHDAY PARTIES · PRIVATE PARTIES · IGWE DE MC ·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

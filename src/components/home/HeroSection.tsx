import { Link } from "react-router-dom";
import { Calendar, Crown, Laugh, Mic, Sparkles, Ticket } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import avatar1 from "@/assets/avatar-1.webp";
import avatar2 from "@/assets/avatar-2.webp";
import avatar3 from "@/assets/avatar-3.webp";
import avatar4 from "@/assets/avatar-4.webp";

const HERO_AVATARS = [avatar1, avatar3, avatar2, avatar4];
const HERO_STATS = [
  { value: "100+", label: "Events" },
  { value: "UK", label: "Wide" },
  { value: "5★", label: "Energy" },
];

export const HeroSection = () => {
  return (
    <section className="hero-stage relative top-0 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroCarousel />
      </div>
      <div aria-hidden className="hero-overlay">
        <div className="hero-overlay__base" />
        <div className="hero-overlay__left-vignette" />
        <div className="hero-overlay__top-vignette" />
        <div className="hero-overlay__gold-grade" />
      </div>
      <div aria-hidden className="hero-overlay-mobile-replacement" />

      <div className="container-x relative z-10 pt-36 pb-6 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl flex flex-col items-start text-left gap-7 animate-fade-up">
          <span className="hero-kicker inline-flex items-center gap-2 glass border-gold/30 text-gold rounded-full px-4 py-1.5 text-[10px] tracking-[0.26em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Southampton · UK · Master of Ceremony
          </span>

          <h1 className="hero-headline font-display">
            <span className="hero-headline__line hero-headline__line--white block">Ebubedike</span>
            <span className="hero-headline__line hero-headline__line--gold block">IGWE DE MC</span>
          </h1>

          <p className="text-base md:text-lg text-foreground/80 font-light max-w-[560px] leading-[1.85]">
            A comedian, crowd commander, and event host with the timing, culture, and stage presence to turn a room into a memory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            <Link
              to="/booking"
              className="hero-cta-button btn-shimmer inline-flex items-center justify-center gap-2 bg-gold text-void px-8 py-4 rounded-md text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-bright transition-all shadow-[0_0_34px_rgba(212,175,55,0.26)]"
              style={{ minWidth: 190 }}
            >
              <Calendar className="w-4 h-4" /> Book Your Event
            </Link>
            <Link
              to="/events/jokes-apart"
              className="hero-cta-button inline-flex items-center justify-center gap-2 glass px-8 py-4 rounded-md text-xs tracking-[0.2em] uppercase font-light text-foreground hover:border-gold/40 transition-all"
              style={{ minWidth: 190 }}
            >
              <Ticket className="w-4 h-4 text-gold" /> Book Jokes Apart
            </Link>
          </div>
          {/* <Link
            to="/book-a-call"
            className="hero-mobile-hidden text-[13px] font-light text-gold/70 hover:text-gold hover:underline underline-offset-4 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            or schedule a free discovery call →
          </Link> */}

          <div className="hero-mobile-hidden grid grid-cols-3 gap-3 w-full max-w-[460px] pt-2">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="hero-stat rounded-xl px-4 py-3">
                <div className="font-display text-3xl leading-none gold-gradient-text">{stat.value}</div>
                <div className="mt-1 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-mobile-hidden flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {HERO_AVATARS.map((src, i) => (
                  <div key={i} className="w-9 h-9 rounded-full overflow-hidden border-2 border-void shadow-[0_2px_8px_rgba(0,0,0,0.4)]" style={{ marginLeft: i === 0 ? 0 : -10 }}>
                    <img src={src} alt="" aria-hidden width={36} height={36} className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
                  </div>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Trusted across weddings, concerts, corporate nights, and cultural stages.</span>
            </div>
            <div className="hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-gold/75">
              <span className="inline-flex items-center gap-1.5"><Mic className="w-3.5 h-3.5" /> MC</span>
              <span className="inline-flex items-center gap-1.5"><Laugh className="w-3.5 h-3.5" /> Comedy</span>
              <span className="inline-flex items-center gap-1.5"><Crown className="w-3.5 h-3.5" /> Host</span>
            </div>
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

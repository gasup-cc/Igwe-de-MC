import { useEffect } from "react";
import {
  MapPin, Calendar, Clock, Clock3, Users, ParkingSquare, DoorOpen, Info,
  Car, Bus, Bike, PersonStanding, Sparkles, Ticket, ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { AmbientOrbs } from "@/components/AmbientOrbs";
import { GlassCard } from "@/components/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { jokesApartFlyer } from "@/data/site";

const TICKET_URL = "https://crm.gasup.ai/v2/preview/L1MkUz1ic0x1ZzLd5qJH";

const ChipBase = ({ icon: Icon, children }: { icon: typeof MapPin; children: React.ReactNode }) => (
  <div
    className="flex items-center gap-2 rounded-[10px] px-[18px] py-3"
    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
  >
    <Icon className="w-4 h-4 text-gold shrink-0" />
    <span className="text-[13px] font-light text-muted-foreground">{children}</span>
  </div>
);

const HighlightItem = ({ icon: Icon, children }: { icon: typeof Clock3; children: React.ReactNode }) => (
  <li className="flex items-center gap-[10px]">
    <Icon className="w-[14px] h-[14px] text-gold shrink-0" />
    <span className="text-[13px] font-light text-muted-foreground">{children}</span>
  </li>
);

const TravelItem = ({ icon: Icon, label }: { icon: typeof Car; label: string }) => (
  <div className="flex items-center gap-2">
    <Icon className="w-[14px] h-[14px] text-gold" />
    <span className="text-[13px] font-light text-muted-foreground">{label}</span>
  </div>
);

const TableFeature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2.5">
    <CheckCircle2 className="w-[15px] h-[15px] text-gold shrink-0 mt-[2px]" />
    <span className="text-[13px] font-light text-muted-foreground">{children}</span>
  </li>
);

const tablePackages = [
  {
    name: "Platinum Table",
    price: "£1,000",
    seats: "Seats 8",
    description: "The ultimate front-row experience.",
    features: [
      "Front table — closest to the action",
      "Special drinks selection",
      "Full food platter",
      "Nkwobi",
      "Suya",
    ],
  },
  {
    name: "Gold Table",
    price: "£700",
    seats: "Seats 5",
    description: "Premium seating with great views.",
    features: [
      "Second-row table",
      "Special drinks selection",
      "Full food platter",
      "Nkwobi",
    ],
  },
  {
    name: "Silver Table",
    price: "£500",
    seats: "Seats 3",
    description: "Great value, great vibes.",
    features: [
      "Table behind Gold section",
      "Food platter",
      "Drinks",
      "Suya",
    ],
  },
  {
    name: "Regular",
    price: "£50",
    seats: "Single seat",
    description: "Come for the comedy, stay for the food.",
    features: [
      "A plate of food",
    ],
  },
];

const goldButtonStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #D4AF37, #F0CC5A)",
  color: "#050507",
};

const JokesApart = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "JOKES APART — Igwe De MC | Live Event Southampton";
    return () => { document.title = prev; };
  }, []);

  const scrollToTicket = () => {
    document.getElementById("ticket-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative">
      <AmbientOrbs variant="gold" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-32 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
          {/* LEFT COLUMN */}
          <div>
            {/* Flyer */}
            <ScrollReveal>
              <div
                className="overflow-hidden rounded-[16px]"
                style={{
                  border: "1px solid rgba(212,175,55,0.25)",
                  boxShadow: "0 8px 40px rgba(212,175,55,0.12)",
                  maxHeight: 480,
                }}
              >
                <img
                  src={jokesApartFlyer}
                  alt="JOKES APART event flyer"
                  width={1288}
                  height={1824}
                  className="w-full h-full object-cover"
                  style={{ maxHeight: 480, objectPosition: "center top" }}
                />
              </div>
            </ScrollReveal>

            {/* Title + organizer */}
            <ScrollReveal delay={0.1}>
              <h1
                className="font-display font-bold text-white mt-7"
                style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1 }}
              >
                IGWE DE MC: JOKES APART
              </h1>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={jokesApartFlyer}
                  alt="Igwe De MC"
                  width={1288}
                  height={1824}
                  className="w-11 h-11 rounded-full object-cover"
                  style={{ objectPosition: "center 30%", border: "1px solid rgba(212,175,55,0.3)" }}
                />
                <span className="text-[14px] font-medium text-gold">by Igwe De MC</span>
              </div>
            </ScrollReveal>

            {/* Key Details Strip */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-wrap gap-3 mt-5">
                <ChipBase icon={MapPin}>Novotel Southampton, 1 West Quay Road, Southampton SO15 1RA</ChipBase>
                <ChipBase icon={Calendar}>Saturday, 25 July 2026</ChipBase>
                <ChipBase icon={Clock}>6:00 PM – 11:59 PM · Doors open 5:00 PM</ChipBase>
              </div>
            </ScrollReveal>

            {/* Overview */}
            <ScrollReveal delay={0.05}>
              <section className="mt-9">
                <h2 className="font-display font-bold text-white text-[26px]">Overview</h2>
                <p className="mt-3 text-[15px] font-light text-muted-foreground" style={{ lineHeight: 1.8 }}>
                  This is an Afro Comedy and Entertainment Event you would not want to miss. An unforgettable
                  night of laughter, music, and high-energy performance hosted by Igwe De MC — Southampton's
                  premier Master of Ceremony and comedian.
                </p>
              </section>
            </ScrollReveal>

            {/* Tables & Seating */}
            <ScrollReveal delay={0.05}>
              <section className="mt-10">
                <h2 className="font-display font-bold text-white text-[26px]">Tables & Seating</h2>
                <p className="mt-3 text-[15px] font-light text-muted-foreground" style={{ lineHeight: 1.8 }}>
                  Choose from four table and seating options, each designed for a different kind of night out.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  {tablePackages.map((tier) => (
                    <GlassCard key={tier.name} padding="p-6" className="rounded-[14px]">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-[17px] font-semibold text-white">{tier.name}</h3>
                          <p className="text-[13px] font-light text-muted-foreground mt-1">{tier.description}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-display font-bold text-[22px] gold-text leading-none">{tier.price}</div>
                          <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-[0.16em]">
                            {tier.seats}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2.5 mt-5">
                        {tier.features.map((feature) => (
                          <TableFeature key={feature}>{feature}</TableFeature>
                        ))}
                      </ul>
                    </GlassCard>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Good to Know */}
            <ScrollReveal delay={0.05}>
              <section className="mt-10">
                <h2 className="font-display font-bold text-white text-[26px] mb-4">Good to Know</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <GlassCard padding="p-6" className="rounded-[14px]">
                    <h3 className="text-[14px] font-semibold text-white mb-3.5">Highlights</h3>
                    <ul className="space-y-[10px]">
                      <HighlightItem icon={Clock3}>5 hours 59 minutes</HighlightItem>
                      <HighlightItem icon={Users}>All ages welcome</HighlightItem>
                      <HighlightItem icon={MapPin}>In person</HighlightItem>
                      <HighlightItem icon={ParkingSquare}>Free parking available</HighlightItem>
                      <HighlightItem icon={DoorOpen}>Doors open at 5:00 PM</HighlightItem>
                    </ul>
                  </GlassCard>
                  <GlassCard padding="p-6" className="rounded-[14px]">
                    <h3 className="text-[14px] font-semibold text-white mb-3.5">Refund Policy</h3>
                    <p className="text-[13px] font-light text-muted-foreground" style={{ lineHeight: 1.7 }}>
                      No refunds available for this event. Please ensure you can attend before purchasing.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Info className="w-[14px] h-[14px] text-gold" />
                      <span className="text-[12px] text-muted-foreground">All sales are final.</span>
                    </div>
                  </GlassCard>
                </div>
              </section>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal delay={0.05}>
              <section className="mt-10">
                <h2 className="font-display font-bold text-white text-[26px]">Location</h2>
                <div className="text-[16px] font-semibold text-white mt-3">Novotel Southampton</div>
                <div className="text-[13px] font-light text-muted-foreground">1 West Quay Road, Southampton SO15 1RA</div>
                <div
                  className="mt-4 overflow-hidden rounded-[14px]"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", height: 220 }}
                >
                  <iframe
                    title="Novotel Southampton map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.8!2d-1.4059!3d50.9048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487469e01b7f33d1%3A0xf4b6e3f9aa62e!2sNovotel%20Southampton!5e0!3m2!1sen!2suk!4v1"
                    width="100%"
                    height="220"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <div
                    className="text-[13px] font-medium text-muted-foreground uppercase mb-2.5"
                    style={{ letterSpacing: "2px" }}
                  >
                    How to get there
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <TravelItem icon={Car} label="Driving" />
                    <TravelItem icon={Bus} label="Public Transport" />
                    <TravelItem icon={Bike} label="Cycling" />
                    <TravelItem icon={PersonStanding} label="Walking" />
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* FAQ */}
            <ScrollReveal delay={0.05}>
              <section className="mt-10">
                <h2 className="font-display font-bold text-white text-[26px] mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {[
                    { q: "Is there free WiFi?", a: "Yes, complimentary WiFi is available at Novotel Southampton throughout the event." },
                    { q: "Are food and drinks available?", a: "Yes, the venue has a full bar and food service available. Bar opens from doors time at 5:00 PM." },
                    { q: "What is the show time?", a: "Doors open at 5:00 PM. The show begins at 6:00 PM and runs until approximately 11:59 PM." },
                  ].map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="rounded-[10px] px-3 border-0 glass transition-all duration-300"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" } as React.CSSProperties}
                    >
                      <AccordionTrigger className="text-[15px] font-medium text-white hover:no-underline [&>svg]:text-gold">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] font-light text-muted-foreground">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </ScrollReveal>

            {/* Organized By */}
            <ScrollReveal delay={0.05}>
              <section className="mt-10">
                <h2 className="font-display font-bold text-white text-[26px] mb-4">Organized By</h2>
                <GlassCard padding="p-6" className="rounded-[14px]">
                  <div className="flex items-center gap-4">
                    <img
                      src={jokesApartFlyer}
                      alt="Igwe De MC"
                      width={1288}
                      height={1824}
                      className="w-16 h-16 rounded-full object-cover shrink-0"
                      style={{ objectPosition: "center 30%", border: "1px solid rgba(212,175,55,0.3)" }}
                    />
                    <div>
                      <div className="text-[16px] font-semibold text-white">Igwe De MC</div>
                      <div className="text-[13px] font-light text-muted-foreground">
                        Master of Ceremony · Comedian · Southampton, UK
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={scrollToTicket}
                    className="btn-shimmer mt-5 w-full inline-flex items-center justify-center gap-2 bg-gold text-void px-7 py-3.5 rounded-md text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
                  >
                    <Ticket className="w-4 h-4" /> Book This Event
                  </button>
                </GlassCard>
              </section>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN — Sticky ticket card */}
          <aside>
            <div className="lg:sticky" style={{ top: 100 }}>
              <div
                id="ticket-card"
                className="rounded-[20px] p-8"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  boxShadow: "0 8px 48px rgba(212,175,55,0.1)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="font-display font-bold text-[36px] leading-none gold-text">£50 – £1,000</div>
                <div
                  className="mt-2 text-[11px] text-muted-foreground"
                  style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "2px" }}
                >
                  SAT, 25 JUL · 6:00 PM
                </div>

                <div className="my-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

                <div className="space-y-2.5">
                  <div className="text-[15px] font-semibold text-white">🎤 JOKES APART</div>
                  <div className="flex items-center gap-2 text-[13px] font-light text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> Novotel Southampton
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-light text-muted-foreground">
                    <Sparkles className="w-3.5 h-3.5 text-gold" /> Afro Comedy & Entertainment Night
                  </div>
                </div>

                <div className="my-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

                <div className="space-y-3">
                  <div
                    className="text-[11px] text-muted-foreground uppercase"
                    style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "2px" }}
                  >
                    Table options
                  </div>
                  <div className="space-y-2.5">
                    {tablePackages.map((tier) => (
                      <div
                        key={tier.name}
                        className="flex items-center justify-between gap-3 rounded-[10px] px-3.5 py-3"
                        style={{
                          background: "rgba(255,255,255,0.035)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        <div>
                          <div className="text-[13px] font-semibold text-white">{tier.name}</div>
                          <div className="text-[11px] font-light text-muted-foreground mt-0.5">{tier.seats}</div>
                        </div>
                        <div className="text-[14px] font-semibold text-gold shrink-0">{tier.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="my-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

                <a
                  href={TICKET_URL}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-[10px] uppercase font-bold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    ...goldButtonStyle,
                    height: 56,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "2px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "brightness(1.1)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(212,175,55,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <Ticket className="w-4 h-4" /> GET TICKETS NOW
                </a>

                <div className="flex items-center justify-center gap-2 mt-3">
                  <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#4ade80" }} />
                  <span className="text-[12px] font-light text-muted-foreground">Secure booking via GasUp.AI</span>
                </div>
                <div className="text-center text-[11px] font-light text-muted-foreground mt-2">
                  No refunds · All ages · Free parking
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile floating bottom bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-3"
        style={{
          background: "rgba(5,5,7,0.95)",
          backdropFilter: "blur(20px)",
          padding: "16px 20px",
          borderTop: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        <div className="font-display font-semibold text-[22px] gold-text">£50+</div>
        <a
          href={TICKET_URL}
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-[8px] uppercase font-bold transition-all"
          style={{
            ...goldButtonStyle,
            height: 48,
            padding: "0 20px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "2px",
          }}
        >
          <Ticket className="w-4 h-4" /> GET TICKETS
        </a>
      </div>
    </div>
  );
};

export default JokesApart;

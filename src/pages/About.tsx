import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import aboutImg from "@/assets/about.webp";
import { GlassCard } from "@/components/GlassCard";
import { Mic2, Disc3, PartyPopper, Briefcase, Heart, Cake, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

const services = [
  { icon: Mic2, name: "Concert & Live Performance", desc: "Bringing energy and crowd-control to live music nights and comedy shows across the UK." },
  { icon: Disc3, name: "DJ Nights", desc: "Hyping the dancefloor — from intro to final track — with timing, pace and personality." },
  { icon: PartyPopper, name: "Private Parties", desc: "Intimate gatherings hosted with charisma, comedy and unforgettable moments." },
  { icon: Briefcase, name: "Corporate Events", desc: "Polished, professional hosting for awards dinners, galas, conferences and brand activations." },
  { icon: Heart, name: "Weddings", desc: "Master of ceremony for traditional Igbo, contemporary and multicultural weddings." },
  { icon: Cake, name: "Birthdays & Milestones", desc: "Making 30ths, 40ths, 50ths and beyond truly memorable occasions." },
  { icon: Sparkles, name: "Cultural & Community", desc: "New Yam Festivals, dedications, community days and Igbo cultural celebrations." },
];

const stats = [
  { num: "100+", label: "Events Hosted" },
  { num: "20+", label: "Years Experience" },
  { num: "UK", label: "Wide Coverage" },
  { num: "5★", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <>
      <PageHero title="About" goldTitle="IGWE DE MC" eyebrow="The Story" breadcrumb={[{ label: "About" }]} subtitle="Master of Ceremony · Comedian · Storyteller. Based in Southampton, performing UK-wide." />

      <section className="py-24">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div
              className="stage-frame relative aspect-[4/5] overflow-hidden rounded-2xl group"
            >
              <img
                src={aboutImg}
                alt="Igwe De MC"
                loading="lazy"
                width={720}
                height={1080}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal><div className="eyebrow">The Story</div></ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05]">From Southampton to <span className="gold-gradient-text">Stages Across the UK</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground font-light leading-[1.85]">
                Ebubedike — known professionally as Igwe De MC — is a Southampton-based Master of Ceremony, comedian and event host. Rooted in Igbo culture and shaped by years on stages large and small, he has anchored hundreds of events across the United Kingdom.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-muted-foreground font-light leading-[1.85]">
                From the Igbo Community Day and New Yam Festival in Dorset, to weddings in Wales, child dedication ceremonies, corporate dinners and stand-up comedy nights — Igwe brings the same blend of cultural fluency, sharp wit and commanding presence that makes every event feel unforgettable.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground font-light leading-[1.85]">
                Whether hosting a 40th birthday or anchoring a high-profile cultural celebration, his goal remains the same: leave the room better than he found it.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-surface py-24">
        <div className="container-x">
          <div className="text-center mb-14">
            <ScrollReveal><div className="eyebrow mb-3">What He Does</div></ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-display font-bold text-4xl md:text-5xl">Every Event, <span className="gold-gradient-text">Done Right</span></h2>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.name}>
                <GlassCard padding="p-7" glowVariant="premium" className="flex flex-col gap-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center"><s.icon className="w-5 h-5 text-gold" /></div>
                  <h3 className="font-display font-semibold text-xl">{s.name}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24">
        <StaggerContainer className="container-x grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(s => (
            <StaggerItem key={s.label}>
              <GlassCard goldAccentTop padding="p-10" className="text-center">
                <div className="font-display font-bold text-6xl gold-gradient-text leading-none">{s.num}</div>
                <div className="mt-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">{s.label}</div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="section-surface py-24 bg-void text-center">
        <div className="container-x max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl">Work with <span className="gold-gradient-text">Igwe De MC</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-muted-foreground font-light">Let's craft something unforgettable for your next event.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <Link to="/booking" className="btn-shimmer mt-8 inline-flex items-center gap-2 bg-gold text-void px-12 py-4 rounded-md text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition shadow-[0_0_30px_rgba(212,175,55,0.3)]">Start a Booking</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;

import { Link } from "react-router-dom";
import { ArrowRight, Mic2, Disc3, PartyPopper, Briefcase, Heart, Cake, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";

const iconMap = { Mic2, Disc3, PartyPopper, Briefcase, Heart, Cake, Sparkles };

const services = [
  { name: "Concert", icon: "Mic2", desc: "High-energy hosting for live music & comedy nights." },
  { name: "DJ Night", icon: "Disc3", desc: "Hype the crowd from first track to final beat." },
  { name: "Private Party", icon: "PartyPopper", desc: "Intimate gatherings with unforgettable energy." },
  { name: "Corporate Event", icon: "Briefcase", desc: "Polished hosting for awards & dinners." },
  { name: "Wedding", icon: "Heart", desc: "MC for traditional & contemporary weddings." },
  { name: "Birthday Party", icon: "Cake", desc: "Milestone celebrations done right." },
  { name: "Other", icon: "Sparkles", desc: "Festivals, dedications, cultural events & more." },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 md:py-28">
      <div className="container-x">
        <SectionHeader eyebrow="Services" title="What IGWE DE MC" goldTitle="Does" subtitle="From cultural ceremonies to corporate stages — every event built around the moment." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <Link to="/booking" key={s.name}>
                <GlassCard padding="p-7" className="h-full group flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-xl">{s.name}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                  <span className="text-gold text-[11px] tracking-[0.25em] uppercase inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    Enquire <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";
import { ArrowRight, Mic2, Sparkles, Briefcase, Laugh } from "lucide-react";
import { AmbientOrbs } from "@/components/AmbientOrbs";
import { GlassCard } from "@/components/GlassCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

const features = [
  { icon: Mic2, name: "Live Events", desc: "Concerts & shows" },
  { icon: Sparkles, name: "Cultural Ceremonies", desc: "Traditions honoured" },
  { icon: Briefcase, name: "Corporate Hosting", desc: "Polished & precise" },
  { icon: Laugh, name: "Stand-Up Comedy", desc: "Sharp & original" },
];

export const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <AmbientOrbs />
      <div className="container-x relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="relative">
          <ImagePlaceholder aspect="aspect-[4/5]" label="IGWE DE MC On Stage" />
          <GlassCard padding="p-5" className="absolute -bottom-6 -right-4 max-w-[260px] border-gold/30">
            <p className="font-display italic text-lg leading-snug">"Every room deserves a great host."</p>
            <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-gold">— Igwe De MC</p>
          </GlassCard>
        </div>

        <div className="space-y-7">
          <div className="eyebrow">About IGWE DE MC</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight">
            The Man Who Commands <span className="gold-gradient-text">Every Room</span>
          </h2>
          <p className="text-base text-muted-foreground font-light leading-[1.85]">
            Ebubedike, known professionally as Igwe De MC, is a Southampton-based Master of Ceremony and comedian who has anchored hundreds of events across the United Kingdom. From Igbo cultural celebrations and community festivals to high-profile corporate dinners and intimate weddings, his commanding presence, sharp wit, and cultural fluency make every event unforgettable.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {features.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="glass rounded-xl p-4 flex items-start gap-3 glass-hover">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-medium">{name}</div>
                  <div className="text-xs text-muted-foreground font-light mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Link to="/about" className="inline-flex items-center gap-2 text-gold text-sm tracking-[0.2em] uppercase border-b border-gold/30 pb-1 hover:gap-3 transition-all">
            Read Full Story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

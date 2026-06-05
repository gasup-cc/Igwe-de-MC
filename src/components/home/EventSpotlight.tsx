import { Link } from "react-router-dom";
import { events } from "@/data/site";
import { EventCard } from "@/components/EventCard";
import { AmbientOrbs } from "@/components/AmbientOrbs";
import { LightningEffect } from "@/components/LightningEffect";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const EventSpotlight = () => {
  const featured = events.find(e => e.featured) || events[0];
  return (
    <section className="section-surface relative py-24 md:py-28 overflow-hidden">
      <ParallaxSection className="absolute inset-0 z-0 pointer-events-none" speed={0.10}>
        <AmbientOrbs variant="gold" />
      </ParallaxSection>
      <LightningEffect />
      <div className="container-x relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-gold" />
            <span className="eyebrow">Next Show</span>
          </div>
        </ScrollReveal>
        {featured && <ScrollReveal delay={0.15} className="featured-event-card-frame"><EventCard event={featured} variant="featured" /></ScrollReveal>}
        <ScrollReveal delay={0.25}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            More events coming soon — <Link to="/events" className="text-gold underline-offset-4 hover:underline">view all events</Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

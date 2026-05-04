import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { GlassCard } from "@/components/GlassCard";
import { testimonials } from "@/data/site";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };
  return (
    <section className="py-24 md:py-28 bg-surface-2">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <SectionHeader eyebrow="Testimonials" title="What People" goldTitle="Say" className="mb-0" />
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold transition" aria-label="Previous"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={() => scroll(1)} className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold transition" aria-label="Next"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
        <StaggerContainer className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 pb-4">
          <div ref={scrollRef as any} className="flex gap-5">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <GlassCard padding="p-8" className="min-w-[320px] sm:min-w-[380px] snap-start flex flex-col gap-5">
                  <div className="flex gap-0.5 text-gold">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold" />)}
                  </div>
                  <p className="font-display italic text-xl leading-snug text-foreground">"{t.quote}"</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.event}</div>
                    </div>
                    <span className="glass text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full text-gold border-gold/30">{t.event}</span>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

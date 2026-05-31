import { AnimatedGrid } from "@/components/AnimatedGrid";
import { GlassCard } from "@/components/GlassCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

const stats = [
  { num: "100+", label: "Events Hosted" },
  { num: "10+", label: "Years Experience" },
  { num: "UK", label: "Wide Coverage" },
  { num: "5★", label: "Client Satisfaction" },
];

export const StatsSection = () => {
  return (
    <section className="section-surface py-20 md:py-24 border-y border-white/[0.06] relative z-[1]">
      <AnimatedGrid />
      <StaggerContainer className="container-x relative z-[1] grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <GlassCard goldAccentTop padding="p-8" className="text-center">
              <div className="font-display font-bold text-5xl md:text-[52px] gold-gradient-text leading-none">{s.num}</div>
              <div className="mt-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground font-light">{s.label}</div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

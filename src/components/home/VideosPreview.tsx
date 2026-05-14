import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { VideoCard } from "@/components/VideoCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { videos } from "@/data/site";

export const VideosPreview = () => {
  const featured = videos.slice(0, 4);
  return (
    <section className="py-24 md:py-28 bg-surface-2">
      <div className="container-x">
        <SectionHeader eyebrow="Showreel" title="Watch IGWE DE MC" goldTitle="Live" subtitle="A glimpse into the energy he brings to every stage." />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map(v => <StaggerItem key={v.id}><VideoCard video={v} /></StaggerItem>)}
        </StaggerContainer>
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <Link to="/videos" className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.25em] uppercase border-b border-gold/30 pb-1 hover:gap-3 transition-all">
              View All Videos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

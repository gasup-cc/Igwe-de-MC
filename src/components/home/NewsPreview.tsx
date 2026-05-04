import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/data/site";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const NewsPreview = () => {
  const top = posts.slice(0, 3);
  return (
    <section className="py-24 md:py-28">
      <div className="container-x">
        <SectionHeader eyebrow="Journal" title="Latest" goldTitle="News" subtitle="Stories from the road, the stage and the studio." />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {top.map(p => <StaggerItem key={p.id}><PostCard post={p} /></StaggerItem>)}
        </StaggerContainer>
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <Link to="/news" className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.25em] uppercase border-b border-gold/30 pb-1 hover:gap-3 transition-all">
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

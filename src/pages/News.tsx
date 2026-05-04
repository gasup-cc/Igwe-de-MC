import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FilterBar } from "@/components/FilterBar";
import { PostCard } from "@/components/PostCard";
import { posts, PostCategory } from "@/data/site";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FILTERS = ["All", "Lifestyle", "Wedding", "Cultural", "Comedy", "Announcements"] as const;
type Filter = typeof FILTERS[number];

const News = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = useMemo(() => filter === "All" ? posts : posts.filter(p => p.category === (filter as PostCategory)), [filter]);
  const featured = filtered[0];
  const rest = filtered.slice(1);
  return (
    <>
      <PageHero title="Latest" goldTitle="News" eyebrow="Journal" breadcrumb={[{ label: "News" }]} subtitle="Stories from the road, the stage and behind the mic." />
      <section className="py-12"><div className="container-x"><FilterBar options={FILTERS} active={filter} onChange={setFilter} /></div></section>
      <section className="pb-24">
        <div className="container-x space-y-10">
          {featured && <ScrollReveal><PostCard post={featured} variant="featured" /></ScrollReveal>}
          {rest.length > 0 && (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(p => <StaggerItem key={p.id}><PostCard post={p} /></StaggerItem>)}
            </StaggerContainer>
          )}
          {filtered.length === 0 && (
            <div className="glass rounded-2xl p-16 text-center"><p className="text-muted-foreground">No posts in this category yet.</p></div>
          )}
        </div>
      </section>
    </>
  );
};

export default News;

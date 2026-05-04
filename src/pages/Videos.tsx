import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FilterBar } from "@/components/FilterBar";
import { VideoCard } from "@/components/VideoCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

const FILTERS = ["All", "On Stage", "Weddings", "Cultural Events", "Comedy", "Behind the Scenes"] as const;
type Filter = typeof FILTERS[number];

const Videos = () => {
  const [filter, setFilter] = useState<Filter>("All");
  return (
    <>
      <PageHero title="Watch" goldTitle="IGWE DE MC" eyebrow="Showreel" breadcrumb={[{ label: "Videos" }]} subtitle="Live performances, weddings, cultural events and more — coming soon." />
      <section className="py-12"><div className="container-x"><FilterBar options={FILTERS} active={filter} onChange={setFilter} /></div></section>
      <section className="pb-24">
        <StaggerContainer className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => <StaggerItem key={i}><VideoCard placeholder /></StaggerItem>)}
        </StaggerContainer>
        <p className="container-x mt-10 text-center text-sm text-muted-foreground">Showreel videos loading soon — bookmark this page.</p>
      </section>
    </>
  );
};

export default Videos;

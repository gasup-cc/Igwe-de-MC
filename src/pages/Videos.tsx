import { useState, useMemo } from "react";
import { PageHero } from "@/components/PageHero";
import { FilterBar } from "@/components/FilterBar";
import { VideoCard } from "@/components/VideoCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { videos } from "@/data/site";

const FILTERS = ["All", "On Stage", "Weddings", "Cultural Events", "Comedy", "Behind the Scenes"] as const;
type Filter = typeof FILTERS[number];

const Videos = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = useMemo(
    () => (filter === "All" ? videos : videos.filter(v => v.category === filter)),
    [filter]
  );
  return (
    <>
      <PageHero title="Watch" goldTitle="IGWE DE MC" eyebrow="Showreel" breadcrumb={[{ label: "Videos" }]} subtitle="Live performances, weddings, cultural events and more." />
      <section className="py-12"><div className="container-x"><FilterBar options={FILTERS} active={filter} onChange={setFilter} /></div></section>
      <section className="pb-24">
        <StaggerContainer className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map(v => <StaggerItem key={v.id}><VideoCard video={v} /></StaggerItem>)}
        </StaggerContainer>
      </section>
    </>
  );
};

export default Videos;

import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FilterBar } from "@/components/FilterBar";
import { EventCard } from "@/components/EventCard";
import { events, EventCategory } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FILTERS = ["All", "Concert", "DJ Night", "Private Party", "Corporate", "Wedding", "Birthday"] as const;
type Filter = typeof FILTERS[number];

const Events = () => {
  const [filter, setFilter] = useState<Filter>("All");

  const upcoming = useMemo(() => events.filter(e => !e.past), []);
  const past = useMemo(() => events.filter(e => e.past), []);

  const filtered = useMemo(() => {
    if (filter === "All") return upcoming;
    return upcoming.filter(e => e.category === (filter as EventCategory));
  }, [filter, upcoming]);

  const featured = filtered.find(e => e.featured);
  const rest = filtered.filter(e => !e.featured);

  return (
    <>
      <PageHero title="Upcoming" goldTitle="Events" eyebrow="Live · UK-Wide" breadcrumb={[{ label: "Events" }]} subtitle="Catch IGWE DE MC live — concerts, comedy nights, weddings & more." />

      <section className="py-12">
        <div className="container-x">
          <FilterBar options={FILTERS} active={filter} onChange={setFilter} />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x space-y-8">
          {featured && <ScrollReveal className="featured-event-card-frame">{<EventCard event={featured} variant="featured" />}</ScrollReveal>}
          {rest.length > 0 && (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(e => <StaggerItem key={e.id}><EventCard event={e} /></StaggerItem>)}
            </StaggerContainer>
          )}
          {filtered.length === 0 && (
            <div className="glass rounded-2xl p-16 text-center">
              <p className="text-muted-foreground">No events in this category yet — check back soon.</p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <Accordion type="single" collapsible className="glass rounded-2xl px-6">
            <AccordionItem value="past" className="border-none">
              <AccordionTrigger className="text-base font-display py-5 hover:no-underline">
                <span className="flex items-center gap-3"><span className="eyebrow">Archive</span><span>Past Events</span></span>
              </AccordionTrigger>
              <AccordionContent>
                {past.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4">Past events will appear here.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2 pb-6">
                    {past.map(e => <EventCard key={e.id} event={e} />)}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Events;

import { GlassCard } from "./GlassCard";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { MapPin, Clock, Ticket, Share2 } from "lucide-react";
import { EventItem } from "@/data/site";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: EventItem;
  variant?: "default" | "featured";
}

const TicketButton = ({ event, size = "lg" }: { event: EventItem; size?: "lg" | "sm" }) => {
  const className =
    size === "lg"
      ? "btn-shimmer inline-flex items-center justify-center gap-2 bg-gold text-void px-7 py-3.5 rounded-md text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
      : "btn-shimmer flex-1 inline-flex items-center justify-center gap-2 bg-gold text-void px-4 py-2.5 rounded-md text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all";
  const icon = <Ticket className={size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5"} />;
  const label = size === "lg" ? "Get Tickets" : "Tickets";
  if (event.detailUrl) {
    return (
      <Link to={event.detailUrl} className={className}>
        {icon} {label}
      </Link>
    );
  }
  return (
    <a href={event.ticketUrl} target="_blank" rel="noreferrer" className={className}>
      {icon} {label}
    </a>
  );
};

export const EventCard = ({ event, variant = "default" }: EventCardProps) => {
  if (variant === "featured") {
    return (
      <GlassCard goldAccentTop borderGlow padding="p-0" className="overflow-hidden border-gold/30 group">
        {event.image && (
          <Link to={event.detailUrl ?? "#"} className="block overflow-hidden">
            <img
              src={event.image}
              alt={event.name}
              loading="lazy"
              width={1288}
              height={1824}
              className="w-full max-h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
              style={{ objectPosition: "center top" }}
            />
          </Link>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-10 p-8 md:p-12 items-center">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="font-mono-acc gold-text text-7xl md:text-8xl leading-none">{event.day}</div>
              <div className="font-mono-acc text-xs tracking-[0.4em] mt-2 text-muted-foreground">{event.month}</div>
            </div>
            <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>
          <div className="space-y-3">
            <div className="eyebrow">Next Show</div>
            <h3 className="font-display font-bold text-4xl md:text-6xl leading-[1]">{event.name}</h3>
            <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">{event.venue}</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="w-4 h-4 text-gold" />{event.time}</div>
          </div>
          <div className="space-y-4 lg:text-right">
            <div>
              <div className="font-display font-bold text-5xl gold-gradient-text">{event.price}</div>
              <div className="text-xs text-muted-foreground tracking-wider">per ticket</div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <TicketButton event={event} size="lg" />
            </div>
          </div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard goldAccentTop padding="p-0" className={cn("overflow-hidden flex flex-col group", event.past && "grayscale opacity-70")}>
      <div className="relative">
        {event.image ? (
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={event.image}
              alt={event.name}
              loading="lazy"
              width={1288}
              height={1824}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ objectPosition: "center top" }}
            />
          </div>
        ) : (
          <ImagePlaceholder aspect="aspect-[16/9]" rounded="rounded-none" label="Event Flyer" />
        )}
        {event.soldOut && (
          <span className="absolute top-4 right-4 glass bg-red-500/30 border-red-400/40 text-red-100 text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full">Sold Out</span>
        )}
        {event.past && (
          <span className="absolute top-4 right-4 glass text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full">Completed</span>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-baseline gap-3">
          <span className="font-mono-acc gold-text text-3xl">{event.day}</span>
          <span className="font-mono-acc text-[11px] tracking-[0.3em] text-muted-foreground">{event.month} {event.year}</span>
        </div>
        <h3 className="font-display font-bold text-2xl leading-tight">{event.name}</h3>
        <div className="space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-gold" />{event.venue}, {event.city}</div>
          <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-gold" />{event.time}</div>
        </div>
        <div className="font-display font-bold text-3xl gold-gradient-text mt-2">{event.price}</div>
        <div className="flex gap-2 mt-auto pt-4">
          <TicketButton event={event} size="sm" />
          <button className="inline-flex items-center justify-center w-11 glass rounded-md text-muted-foreground hover:text-gold transition-all" aria-label="Share">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

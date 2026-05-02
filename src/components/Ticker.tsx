interface TickerProps {
  items: string[];
}

export const Ticker = ({ items }: TickerProps) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] glass py-4">
      <div className="ticker-track flex gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-light">
            {item}
            <span className="text-gold">●</span>
          </span>
        ))}
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils";

interface FilterBarProps<T extends string> {
  options: readonly T[];
  active: T;
  onChange: React.Dispatch<React.SetStateAction<T>>;
  className?: string;
}

export function FilterBar<T extends string>({ options, active, onChange, className }: FilterBarProps<T>) {
  return (
    <div className={cn("flex flex-wrap gap-2 justify-center", className)}>
      {options.map((opt) => {
        const isActive = opt === active;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "px-5 py-2.5 rounded-full text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300",
              isActive
                ? "bg-gold text-void border border-gold shadow-[0_0_24px_rgba(212,175,55,0.4)]"
                : "glass text-muted-foreground hover:text-gold hover:border-gold/40"
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

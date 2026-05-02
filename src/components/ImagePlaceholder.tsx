import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  aspect?: string;
  className?: string;
  label?: string;
  rounded?: string;
}

/** A glassmorphic shimmering placeholder used until real images are added. */
export const ImagePlaceholder = ({
  aspect = "aspect-[4/5]",
  className,
  label,
  rounded = "rounded-2xl",
}: ImagePlaceholderProps) => {
  return (
    <div
      className={cn(
        aspect,
        rounded,
        "relative overflow-hidden border border-white/10 bg-white/[0.03]",
        className
      )}
    >
      <div className="absolute inset-0 skeleton-shimmer" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/20">
        <ImageIcon className="w-8 h-8" />
        {label && <span className="text-[10px] tracking-[0.3em] uppercase font-mono">{label}</span>}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
    </div>
  );
};

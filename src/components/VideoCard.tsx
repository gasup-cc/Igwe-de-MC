import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { PlayCircle, X } from "lucide-react";
import { VideoItem } from "@/data/site";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoCardProps {
  video?: VideoItem;
  placeholder?: boolean;
}

export const VideoCard = ({ video, placeholder }: VideoCardProps) => {
  const [open, setOpen] = useState(false);

  if (placeholder || !video) {
    return (
      <GlassCard padding="p-0" className="overflow-hidden flex flex-col">
        <div className="relative">
          <ImagePlaceholder aspect="aspect-video" rounded="rounded-none" label="Video Loading Soon" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 rounded-full glass-strong flex items-center justify-center text-gold/50">
              <PlayCircle className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="h-3 w-3/4 bg-white/10 rounded skeleton-shimmer mb-2" />
          <div className="h-2 w-1/3 bg-white/5 rounded skeleton-shimmer" />
        </div>
      </GlassCard>
    );
  }

  return (
    <>
      <GlassCard padding="p-0" className="overflow-hidden flex flex-col cursor-pointer group" onClick={() => setOpen(true)}>
        <div className="relative">
          <ImagePlaceholder aspect="aspect-video" rounded="rounded-none" label={video.category} />
          <span className="absolute top-3 left-3 bg-gold text-void text-[9px] font-bold tracking-[0.2em] px-2 py-1 rounded">HD</span>
          <span className="absolute top-3 right-3 glass text-[10px] font-mono-acc px-2 py-1 rounded">{video.duration}</span>
          <div className="absolute inset-0 flex items-center justify-center bg-void/0 group-hover:bg-void/40 transition-all duration-500">
            <div className="w-16 h-16 rounded-full glass-strong border-gold/40 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <PlayCircle className="w-9 h-9" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-sm font-medium leading-snug line-clamp-2">{video.title}</h4>
          <p className="text-xs text-muted-foreground font-light mt-1">{video.views} views · {video.date}</p>
        </div>
      </GlassCard>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl glass-strong border-white/10 bg-void/95 p-0 overflow-hidden">
          <div className="relative">
            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full glass flex items-center justify-center text-foreground hover:text-gold">
              <X className="w-4 h-4" />
            </button>
            <ImagePlaceholder aspect="aspect-video" rounded="rounded-none" label="Video Player" />
            <div className="p-6">
              <h3 className="font-display text-2xl">{video.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{video.category} · {video.views} views</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

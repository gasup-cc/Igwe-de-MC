import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Play, X } from "lucide-react";
import { VideoItem } from "@/data/site";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoCardProps {
  video?: VideoItem;
  placeholder?: boolean;
}

const isDirectFile = (src: string) => /\.(mov|mp4|webm|m4v)(\?|$)/i.test(src);

export const VideoCard = ({ video, placeholder }: VideoCardProps) => {
  const [open, setOpen] = useState(false);

  if (placeholder || !video) {
    return (
      <GlassCard padding="p-0" className="overflow-hidden flex flex-col">
        <div className="relative aspect-video bg-[rgba(255,255,255,0.04)] flex items-center justify-center">
          <Play className="w-8 h-8 text-gold/50" />
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
        <div className="relative aspect-video overflow-hidden flex items-center justify-center">
          <img
            src={video.thumbnail}
            alt={video.title}
            loading="lazy"
            width={644}
            height={541}
            className="absolute inset-0 w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="relative z-10 w-14 h-14 rounded-full glass flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <Play className="w-6 h-6 text-gold ml-0.5" />
          </div>
          <div className="absolute inset-0 z-[1] bg-void/20 group-hover:bg-void/35 transition-all duration-500 pointer-events-none" />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-gold/15 text-gold text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full border border-gold/30">{video.label}</span>
          </div>
          <h4 className="text-sm font-medium leading-snug line-clamp-2" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{video.title}</h4>
          <p className="text-xs text-muted-foreground font-light mt-1">— views</p>
        </div>
      </GlassCard>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl glass-strong border-white/10 !bg-[#050507] p-0 overflow-hidden">
          <div className="relative">
            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full glass flex items-center justify-center text-foreground hover:text-gold">
              <X className="w-4 h-4" />
            </button>
            <div className="relative w-full bg-black aspect-video flex items-center justify-center">
              {isDirectFile(video.url) ? (
                <video
                  src={video.url}
                  poster={video.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={video.url}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl">{video.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{video.label} · {video.category}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

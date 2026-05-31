import { useState } from "react";
import { Play, Star, X } from "lucide-react";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { GlassCard } from "@/components/GlassCard";
import { testimonials } from "@/data/site";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const videoTestimonials = [
  {
    url: "https://assets.cdn.filesafe.space/anudewnYrwCmf0LVpuJw/media/6a16d4d35be84ad6400370ca.mov",
    quote: "An absolutely incredible host. Had the whole room laughing and on their feet the entire night.",
  },
  {
    url: "https://assets.cdn.filesafe.space/anudewnYrwCmf0LVpuJw/media/6a16d41850a5a2a5d2f84486.mov",
    quote: "Igwe De MC made our event one we will never forget. Pure professionalism and energy.",
  },
];

const VideoTestimonialCard = ({ url, quote }: { url: string; quote: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlassCard padding="p-0" glowVariant="premium" className="h-full overflow-hidden flex flex-col">
        <button
          type="button"
          className="group relative aspect-video w-full overflow-hidden bg-white/[0.035] flex items-center justify-center"
          onClick={() => setOpen(true)}
          aria-label="Play video testimonial"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-gold/[0.05]" />
          <span className="relative z-[1] w-[60px] h-[60px] rounded-full glass border-gold/40 flex items-center justify-center animate-pulse">
            <Play className="w-10 h-10 text-gold ml-1" />
          </span>
        </button>
        <div className="p-8 flex flex-col gap-4 flex-1">
          <div className="text-gold text-sm tracking-[0.16em]">★★★★★</div>
          <p className="font-display italic text-[18px] leading-snug text-foreground">"{quote}"</p>
          <div className="mt-auto flex items-center justify-between gap-3">
            <span className="text-sm font-medium">— Event Guest</span>
            <span className="glass text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full text-gold border-gold/30">
              Video Review
            </span>
          </div>
        </div>
      </GlassCard>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl glass-strong border-white/10 !bg-[#050507] p-0 overflow-hidden">
          <div className="relative">
            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full glass flex items-center justify-center text-foreground hover:text-gold">
              <X className="w-4 h-4" />
            </button>
            <div className="relative w-full bg-black aspect-video flex items-center justify-center">
              <video src={url} controls autoPlay playsInline className="w-full h-full object-contain" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="section-surface relative py-24 md:py-28">
      <AnimatedGrid />
      <div className="container-x relative z-[1]">
        <div className="mb-12">
          <SectionHeader eyebrow="Testimonials" title="What People" goldTitle="Say" className="mb-0" />
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 overflow-visible">
          {videoTestimonials.map((item) => (
            <StaggerItem key={item.url}>
              <VideoTestimonialCard url={item.url} quote={item.quote} />
            </StaggerItem>
          ))}
          {testimonials.map((t, i) => (
            <StaggerItem key={`${t.name}-${i}`}>
              <GlassCard padding="p-8" glowVariant="premium" className="h-full flex flex-col gap-5">
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold" />)}
                </div>
                <p className="font-display italic text-xl leading-snug text-foreground">"{t.quote}"</p>
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.event}</div>
                  </div>
                  <span className="glass text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full text-gold border-gold/30">{t.event}</span>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

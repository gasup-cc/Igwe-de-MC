import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ArrowRight, Calendar, X, Share2 } from "lucide-react";
import { PostItem } from "@/data/site";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PostCardProps {
  post: PostItem;
  variant?: "default" | "featured";
}

export const PostCard = ({ post, variant = "default" }: PostCardProps) => {
  const [open, setOpen] = useState(false);

  const Trigger = ({ children }: { children: React.ReactNode }) => (
    <button onClick={() => setOpen(true)} className="text-left w-full group">{children}</button>
  );

  return (
    <>
      {variant === "featured" ? (
        <Trigger>
          <GlassCard goldAccentTop padding="p-0" className="overflow-hidden grid grid-cols-1 md:grid-cols-[60%_40%]">
            <ImagePlaceholder aspect="aspect-[16/10] md:aspect-auto md:h-full" rounded="rounded-none" label={post.category} />
            <div className="p-8 md:p-10 flex flex-col gap-4 justify-center">
              <span className="self-start glass text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full text-gold border-gold/30">{post.category}</span>
              <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight">{post.title}</h3>
              <p className="text-sm text-muted-foreground font-light line-clamp-3 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-4 mt-auto">
                <div className="text-xs text-muted-foreground flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-gold" />{post.date}</div>
                <span className="text-gold text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read More <ArrowRight className="w-3.5 h-3.5" /></span>
              </div>
            </div>
          </GlassCard>
        </Trigger>
      ) : (
        <Trigger>
          <GlassCard padding="p-0" className="overflow-hidden flex flex-col h-full">
            <ImagePlaceholder aspect="aspect-video" rounded="rounded-none" label={post.category} />
            <div className="p-6 flex flex-col gap-3 flex-1">
              <span className="self-start glass text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full text-gold border-gold/30">{post.category}</span>
              <h3 className="font-display font-semibold text-lg leading-tight">{post.title}</h3>
              <p className="text-xs text-muted-foreground font-light line-clamp-2 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-3 mt-auto border-t border-white/[0.06]">
                <span className="text-[11px] text-muted-foreground">{post.date}</span>
                <span className="text-gold text-[11px] tracking-[0.2em] uppercase inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">Read <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          </GlassCard>
        </Trigger>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass-strong border-white/10 bg-void/95 p-0">
          <div className="relative">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-gold">
              <X className="w-4 h-4" />
            </button>
            <ImagePlaceholder aspect="aspect-[16/9]" rounded="rounded-none" label={post.category} />
            <div className="p-8 md:p-10 space-y-5">
              <span className="inline-block glass text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full text-gold border-gold/30">{post.category}</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">{post.title}</h2>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{post.author}</span><span>·</span><span>{post.date}</span>
              </div>
              <div className="gold-line" />
              <p className="text-base text-foreground/90 font-light leading-relaxed whitespace-pre-line">{post.body}</p>
              <div className="flex items-center gap-3 pt-4">
                <button className="glass px-4 py-2 rounded-md text-xs tracking-wider uppercase text-muted-foreground hover:text-gold inline-flex items-center gap-2"><Share2 className="w-3.5 h-3.5" /> Share</button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

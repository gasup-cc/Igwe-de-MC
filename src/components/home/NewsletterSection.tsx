import { useState } from "react";
import { toast } from "sonner";
import { GlassCard } from "@/components/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { z } from "zod";

const schema = z.object({ email: z.string().trim().email().max(255) });

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse({ email });
    if (!r.success) { toast.error("Please enter a valid email."); return; }
    toast.success("You're on the list. Thank you.");
    setEmail("");
  };
  return (
    <section className="py-24">
      <div className="container-x">
        <GlassCard padding="p-10 md:p-14" className="max-w-xl mx-auto text-center" goldAccentTop>
          <div className="eyebrow mb-4">Newsletter</div>
          <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight">Stay in the loop</h3>
          <p className="mt-3 text-sm text-muted-foreground font-light">Be first to know about shows, drops & behind-the-scenes moments.</p>
          <form onSubmit={submit} className="mt-7 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              maxLength={255}
              className="flex-1 glass bg-white/[0.03] rounded-md px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 focus:shadow-[0_0_24px_rgba(212,175,55,0.2)] transition"
            />
            <button type="submit" className="btn-shimmer bg-gold text-void px-7 py-3.5 rounded-md text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition">Subscribe</button>
          </form>
          <p className="mt-4 text-[11px] text-muted-foreground">We respect your inbox. Unsubscribe anytime.</p>
        </GlassCard>
      </div>
    </section>
  );
};

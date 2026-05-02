import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PageHero } from "@/components/PageHero";
import { GlassCard } from "@/components/GlassCard";

const schema = z.object({ email: z.string().trim().email().max(255) });

const Shop = () => {
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse({ email });
    if (!r.success) { toast.error("Enter a valid email."); return; }
    toast.success("You're on the early access list.");
    setEmail("");
  };
  return (
    <>
      <PageHero title="The" goldTitle="Shop" eyebrow="Merch" breadcrumb={[{ label: "Shop" }]} />
      <section className="py-24">
        <div className="container-x">
          <GlassCard padding="p-12 md:p-20" goldAccentTop className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">📦</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl">Shop <span className="gold-gradient-text">Coming Soon</span></h2>
            <p className="mt-4 text-muted-foreground font-light max-w-md mx-auto">Exclusive IGWE DE MC merchandise launching soon. Drop your email to be first to know.</p>
            <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 glass bg-white/[0.03] rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-gold/40 transition" maxLength={255} />
              <button className="btn-shimmer bg-gold text-void px-7 py-3.5 rounded-md text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition">Notify Me</button>
            </form>
          </GlassCard>
        </div>
      </section>
    </>
  );
};

export default Shop;

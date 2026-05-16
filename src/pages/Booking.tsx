import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Phone, Mail, MessageCircle, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { GlassCard } from "@/components/GlassCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(30),
  eventType: z.string().min(1),
  eventDate: z.string().min(1),
  location: z.string().max(150).optional(),
  guests: z.string().max(10).optional(),
  budget: z.string().max(60).optional(),
  message: z.string().max(2000).optional(),
  source: z.string().max(60).optional(),
});

const inputClass = "w-full glass bg-white/[0.03] rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 focus:shadow-[0_0_24px_rgba(212,175,55,0.15)] transition";
const labelClass = "block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2";

const features = [
  "UK-wide availability",
  "Response within 24 hours",
  "Tailored to your event",
  "100+ events hosted",
];

const faqs = [
  { q: "How far in advance should I book?", a: "We recommend booking 4–6 weeks minimum to secure your date, especially for weekends and holiday seasons." },
  { q: "Do you travel outside Southampton?", a: "Yes — IGWE DE MC is available UK-wide. Travel costs are discussed per booking and quoted transparently." },
  { q: "What types of events do you host?", a: "Concerts, weddings, corporate events, DJ nights, birthdays, cultural ceremonies, dedications, festivals and more." },
  { q: "Can I see a showreel before booking?", a: "Absolutely — visit the Videos page for live performance clips, or request a private showreel via the form." },
  { q: "How is payment handled?", a: "A deposit is required to confirm your booking, with the balance due before the event date. Full details are shared on enquiry." },
];

const Booking = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", eventType: "", eventDate: "",
    location: "", guests: "", budget: "", message: "", source: "",
  });
  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) { toast.error("Please complete all required fields correctly."); return; }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Booking enquiry sent. We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", phone: "", eventType: "", eventDate: "", location: "", guests: "", budget: "", message: "", source: "" });
    }, 800);
  };

  return (
    <>
      <PageHero title="Book" goldTitle="IGWE DE MC" eyebrow="Bookings Open" breadcrumb={[{ label: "Booking" }]} />

      <section className="py-20">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-7">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 glass border-gold/30 bg-gold/10 text-gold rounded-full px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> Availability: Open
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05]">Book IGWE DE MC for <span className="gold-gradient-text">Your Event</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground font-light leading-[1.85]">
                Based in Southampton and available UK-wide, Igwe De MC brings energy, precision, and unforgettable performance to every event. Fill in the form and we'll be in touch within 24 hours.
              </p>
            </ScrollReveal>
            <StaggerContainer as="ul" className="space-y-3 pt-2">
              {features.map(f => (
                <StaggerItem as="li" key={f} className="flex items-center gap-3 text-sm">
                  <span className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center"><Check className="w-3.5 h-3.5 text-gold" /></span>
                  {f}
                </StaggerItem>
              ))}
            </StaggerContainer>
            <StaggerContainer className="pt-4 flex flex-wrap gap-3">
              <StaggerItem><a href="tel:+447733751948" className="glass rounded-md px-4 py-3 text-sm flex items-center gap-2 hover:border-gold/40 transition"><Phone className="w-4 h-4 text-gold" /> +44 7733 751948</a></StaggerItem>
              <StaggerItem><a href="https://wa.me/447733751948" target="_blank" rel="noreferrer" className="glass rounded-md px-4 py-3 text-sm flex items-center gap-2 hover:border-gold/40 transition"><MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp</a></StaggerItem>
              <StaggerItem><a href="mailto:info@igwedemc.uk" className="glass rounded-md px-4 py-3 text-sm flex items-center gap-2 hover:border-gold/40 transition"><Mail className="w-4 h-4 text-gold" /> info@igwedemc.uk</a></StaggerItem>
            </StaggerContainer>
          </div>

          <ScrollReveal delay={0.2}>
            <GlassCard goldAccentTop padding="p-8 md:p-10" hoverable={false}>
              <form onSubmit={submit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className={labelClass}>Full Name *</label><input required className={inputClass} value={form.name} onChange={e => update("name", e.target.value)} maxLength={100} /></div>
                  <div><label className={labelClass}>Email *</label><input required type="email" className={inputClass} value={form.email} onChange={e => update("email", e.target.value)} maxLength={255} /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className={labelClass}>Phone *</label><input required type="tel" className={inputClass} value={form.phone} onChange={e => update("phone", e.target.value)} maxLength={30} /></div>
                  <div>
                    <label className={labelClass}>Event Type *</label>
                    <select required className={inputClass} value={form.eventType} onChange={e => update("eventType", e.target.value)}>
                      <option value="">Select...</option>
                      {["Concert / Live Performance","DJ Night","Private Party","Corporate Event","Wedding","Birthday Party","Other"].map(o => <option key={o} value={o} className="bg-void">{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className={labelClass}>Event Date *</label><input required type="date" className={inputClass} value={form.eventDate} onChange={e => update("eventDate", e.target.value)} /></div>
                  <div><label className={labelClass}>Location</label><input className={inputClass} placeholder="City, Venue name" value={form.location} onChange={e => update("location", e.target.value)} maxLength={150} /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className={labelClass}>Number of Guests</label><input type="number" min="1" className={inputClass} value={form.guests} onChange={e => update("guests", e.target.value)} /></div>
                  <div>
                    <label className={labelClass}>Budget Range</label>
                    <select className={inputClass} value={form.budget} onChange={e => update("budget", e.target.value)}>
                      <option value="">Select...</option>
                      {["Under £500","£500–£1000","£1000–£2500","£2500+","Discuss"].map(o => <option key={o} value={o} className="bg-void">{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Message / Additional Details</label>
                  <textarea className={`${inputClass} min-h-[140px] resize-y`} value={form.message} onChange={e => update("message", e.target.value)} maxLength={2000} placeholder="Tell us about your event..." />
                </div>
                <div>
                  <label className={labelClass}>How did you hear about us?</label>
                  <select className={inputClass} value={form.source} onChange={e => update("source", e.target.value)}>
                    <option value="">Select...</option>
                    {["Google","Social Media","Word of Mouth","Saw a show","Other"].map(o => <option key={o} value={o} className="bg-void">{o}</option>)}
                  </select>
                </div>
                <button disabled={submitting} type="submit" className="btn-shimmer w-full inline-flex items-center justify-center gap-2 bg-gold text-void px-6 py-4 rounded-md text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-bright transition disabled:opacity-60">
                  <Send className="w-4 h-4" /> {submitting ? "Sending…" : "Send Booking Enquiry"}
                </button>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <ScrollReveal><div className="eyebrow mb-3">FAQ</div></ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">Booking <span className="gold-gradient-text">Questions</span></h2>
            </ScrollReveal>
          </div>
          <StaggerContainer>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <StaggerItem key={i} className="mb-3">
                  <AccordionItem value={`f-${i}`} className="glass rounded-xl border-white/10 px-6 data-[state=open]:border-gold/30 transition">
                    <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
};

export default Booking;

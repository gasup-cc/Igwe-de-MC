import { Clock, Lock, ShieldCheck, Video } from "lucide-react";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const benefits = [
  { icon: Clock, label: "15 minutes" },
  { icon: Video, label: "Phone or Video Call" },
  { icon: ShieldCheck, label: "No commitment" },
];

const ScheduleACall = () => {
  return (
    <section className="relative top-0 min-h-screen overflow-hidden pt-[120px]">
      <AnimatedGrid />
      <div className="container-x relative z-[1]">
        <div className="schedule-call-hero -mx-5 px-5 py-20 pb-12 text-center md:-mx-10 md:px-10">
          <div className="relative z-[1] mx-auto max-w-[640px]">
            <ScrollReveal>
              <span className="inline-flex rounded-full border border-gold/40 bg-white/[0.04] px-4 py-1.5 font-mono-acc text-[10px] uppercase tracking-[3px] text-gold">
                FREE 15-MINUTE CALL
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white md:text-[56px]">
                Schedule a Discovery Call
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <p className="mx-auto mt-5 max-w-[520px] text-[17px] font-light leading-[1.8] text-muted-foreground">
                Pick a date and time that works for you. We will discuss your event, answer your questions, confirm availability, and make sure Igwe De MC is the perfect fit.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {benefits.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.05] px-4 py-2 text-[13px] font-light text-muted-foreground"
                  >
                    <Icon className="h-3.5 w-3.5 text-gold" />
                    {label}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mx-auto max-w-[900px] pb-20">
          <ScrollReveal delay={0.3}>
            <div
              className="overflow-visible"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: 24,
                boxShadow: "0 8px 48px rgba(212,175,55,0.08)",
              }}
            >
              <iframe
                src="https://app.gasup.ai/widget/booking/VvAAQWOegarV4VdRZu1p"
                className="h-[950px] w-full md:h-[1000px] lg:h-[1050px]"
                style={{ border: "none" }}
                title="Schedule a Discovery Call with Igwe De MC"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.36}>
            <div className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] font-light text-muted-foreground">
              <Lock className="h-3 w-3 shrink-0 text-gold" />
              <span>Secure booking. Your details are safe and will only be used to confirm your appointment.</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ScheduleACall;

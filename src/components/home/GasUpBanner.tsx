import { useReducedMotion, m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import GasUpLogo from "@/assets/GASUP_SYMBOL_NO_BG.png";
// import GasUpLogo from "@/assets/GasUp_logo_no_bg.png";

const GASUP_KEYFRAMES = `
@keyframes gasupSweep {
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}
@keyframes gasupOrbGold {
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  33% { transform: translate(12%, -16%) scale(1.15); }
  66% { transform: translate(-8%, 10%) scale(0.9); }
}
@keyframes gasupOrbPurple {
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  33% { transform: translate(-14%, 10%) scale(0.85); }
  66% { transform: translate(10%, -14%) scale(1.15); }
}
@keyframes gasupTextShine {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
@keyframes gasupGlowPulse {
  0%, 100% { box-shadow: 0 0 0 rgba(212,175,55,0); }
  50% { box-shadow: 0 0 20px rgba(212,175,55,0.25); }
}
@keyframes gasupOrbPulse {
  0%, 100% { opacity: 0.08; }
  50% { opacity: 0.14; }
}
`;

export const GasUpBanner = () => {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <style>{GASUP_KEYFRAMES}</style>
      <section className="relative overflow-hidden py-5 md:py-7 lg:py-10">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #050507 0%, #0d0d14 100%)" }}
        />

        {!reduceMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #D4AF37 22%, #7C3AED 48%, #D4AF37 72%, transparent 100%)",
                animation: "gasupSweep 15s linear infinite",
                filter: "blur(80px)",
              }}
            />
          </div>
        )}

        {!reduceMotion && (
          <>
            <div
              className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] -top-[150px] -left-[100px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
                animation: "gasupOrbGold 20s ease-in-out infinite, gasupOrbPulse 8s ease-in-out infinite",
              }}
            />
            <div
              className="absolute w-[350px] md:w-[400px] h-[350px] md:h-[400px] -bottom-[100px] -right-[50px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
                animation: "gasupOrbPurple 25s ease-in-out infinite, gasupOrbPulse 10s ease-in-out infinite 2s",
              }}
            />
          </>
        )}

        <div className="container-x relative z-[1]">
          <ScrollReveal delay={0.1}>
            <div
              className="relative rounded-[20px] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,175,55,0.15)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none rounded-[20px]"
                style={{
                  background:
                    "linear-gradient(130deg, rgba(212,175,55,0.16), transparent 36%), linear-gradient(315deg, rgba(124,58,237,0.08), transparent 32%)",
                  opacity: 0.55,
                }}
              />

              <div
                className="relative z-[2] flex flex-col lg:flex-row items-center justify-between p-5 md:p-7 lg:p-10 gap-4 lg:gap-0"
              >
                <m.a
                  href="https://www.gasup.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                  initial={!reduceMotion ? { scale: 0, opacity: 0 } : undefined}
                  whileInView={!reduceMotion ? { scale: 1, opacity: 1 } : undefined}
                  viewport={{ once: true }}
                  transition={
                    !reduceMotion
                      ? { type: "spring", duration: 0.9, bounce: 0.4, delay: 0.15 }
                      : undefined
                  }
                >
                  <m.img
                    src={GasUpLogo}
                    alt="GasUp.AI"
                    className="w-[55px] h-[55px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] object-contain"
                    animate={
                      !reduceMotion
                        ? { y: [0, -6, 0], rotate: [-2, 2, -2] }
                        : undefined
                    }
                    transition={
                      !reduceMotion
                        ? {
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                          }
                        : undefined
                    }
                  />
                </m.a>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-12 flex-1 gap-1">
                  <h3
                    className="font-display font-bold text-[28px] md:text-[34px] lg:text-[42px] leading-tight text-white"
                    style={
                      !reduceMotion
                        ? { animation: "gasupGlowPulse 15s ease-in-out infinite" }
                        : undefined
                    }
                  >
                    <span
                      className={cn(!reduceMotion && "bg-clip-text text-transparent")}
                      style={
                        !reduceMotion
                          ? {
                              background:
                                "linear-gradient(90deg, #ffffff 0%, #ffffff 15%, #D4AF37 30%, #7C3AED 50%, #ffffff 70%, #ffffff 100%)",
                              backgroundSize: "200% 100%",
                              animation: "gasupTextShine 15s linear infinite",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }
                          : { color: "#ffffff" }
                      }
                    >
                      Engineered by GasUp.AI
                    </span>
                  </h3>
                  <p className="text-[11px] md:text-[12px] lg:text-[13px] font-light text-white/60 font-sans max-w-md leading-relaxed">
                    Advanced Systems & AI automations powering next-generation experiences
                  </p>
                </div>

                <a
                  href="https://www.gasup.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex-shrink-0 flex items-center gap-2 text-gold text-[12px] md:text-[13px] font-medium font-sans tracking-wide",
                    !reduceMotion && "transition-all duration-200 hover:text-gold-bright hover:scale-105"
                  )}
                >
                  Discover the Future of Businesses
                  <ArrowRight
                    className={cn(
                      "w-3.5 h-3.5 md:w-4 md:h-4",
                      !reduceMotion && "transition-transform duration-200 group-hover:translate-x-[4px]"
                    )}
                  />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

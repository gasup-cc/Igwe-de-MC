import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { LightningEffect } from "@/components/LightningEffect";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/share/1DKNiGSfty/", label: "Facebook" },
  { icon: XIcon, href: "https://x.com/igwedemc", label: "X" },
  { icon: Instagram, href: "https://www.instagram.com/igwedemc", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@igwedemc", label: "YouTube" },
];

export const Footer = () => {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/[0.06] bg-void/60">
      <LightningEffect variant="footer" />
<div
  className="
    absolute inset-0 pointer-events-none overflow-hidden select-none
    flex items-end justify-center
    md:items-end md:justify-center
  "
  style={{
    zIndex: 0,
    paddingBottom: "40px",
  }}
  aria-hidden="true"
>
  <span
    className="
      font-display font-bold text-gold select-none
      hidden md:block
    "
    style={{
      fontSize: "clamp(100px, 14vw, 350px)",
      letterSpacing: "0.08em",
      opacity: 0.03,
      filter: "blur(0.8px)",
      lineHeight: 0.9,
      whiteSpace: "nowrap",
    }}
  >
    IGWE DE MC
  </span>

  {/* Mobile Version */}
  <span
    className="
      md:hidden absolute right-0 bottom-40
      font-display font-bold text-gold
    "
    style={{
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      fontSize: "clamp(90px, 13vw, 90px)",
      letterSpacing: "0.15em",
      opacity: 0.05,
      filter: "blur(0.2px)",
      lineHeight: 0.3,
    }}
  >
    IGWE DE MC
  </span>
</div>
      <div className="footer-grid container-x relative z-[1] py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="footer-column footer-brand">
          <Link to="/" className="logo-hover-link inline-flex">
            <m.div
              className="logo-hover-shell mb-4"
              whileHover={{
                scale: 1.06,
                filter: "drop-shadow(0 0 12px rgba(212,175,55,0.55)) drop-shadow(0 0 24px rgba(212,175,55,0.25)) brightness(1.12)",
              }}
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src="/igwedemc-no-bg-logo.webp"
                alt="IGWE DE MC"
                className="h-auto w-[120px] object-contain md:w-[140px] lg:w-[160px]"
                style={{ objectFit: "contain" }}
              />
              <span className="logo-hover-shimmer" aria-hidden />
            </m.div>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed font-light">
            Master of Ceremony · Comedian · Event Host. Based in Southampton, available UK-wide.
          </p>
          <div className="social-icons flex items-center gap-3 mt-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <a
              href="https://www.tiktok.com/@igwedemc"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-all duration-300"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="eyebrow mb-5 text-muted-foreground">Quick Links</h4>
          <ul className="footer-links flex flex-col space-y-3 text-sm font-light">
            {[
              ["Home", "/"], ["About", "/about"], ["Events", "/events"], ["Videos", "/videos"],
              ["News", "/news"], ["Shop", "/shop"], ["Book Now", "/booking"], ["Schedule a Call", "/schedule-a-call"],
            ].map(([l, h]) => (
              <li key={h}><Link to={h} className="footer-link text-muted-foreground hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-column contact-column">
          <h4 className="eyebrow mb-5 text-muted-foreground">Contact</h4>
          <ul className="space-y-3 text-sm font-light text-muted-foreground">
            <li className="footer-contact-item flex items-start gap-3"><Mail className="w-4 h-4 text-gold mt-0.5" /><a href="mailto:info@igwedemc.uk" className="hover:text-gold">info@igwedemc.uk</a></li>
            <li className="footer-contact-item flex items-start gap-3"><Phone className="w-4 h-4 text-gold mt-0.5" /><a href="tel:+447733751948" className="hover:text-gold">+44 7733 751948</a></li>
            <li className="footer-contact-item flex items-start gap-3"><MapPin className="w-4 h-4 text-gold mt-0.5" /><span>Tremona Road, Southampton<br/>SO16 6TH</span></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="eyebrow mb-5 text-muted-foreground">Legal</h4>
          <ul className="footer-links flex flex-col space-y-3 text-sm font-light">
            {[
              ["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms"],
              ["Cookie Policy", "/cookie-policy"],
            ].map(([l, h]) => (
              <li key={h}><Link to={h} className="footer-link text-muted-foreground hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-[1] border-t border-white/[0.06]">
        <div className="container-x">
          <div
            className="footer-bottom"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              textAlign: "center",
              width: "100%",
              padding: "20px 0",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: 12,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            <span>© 2026 IGWE DE MC. All Rights Reserved.</span>
            <span>Powered by <a href="https://www.gasup.ai" target="_blank" rel="noopener noreferrer" className="text-gold hover:brightness-110 transition-all" style={{ textDecoration: "none", borderBottom: "1px solid rgba(212,175,55,0.3)", transition: "border-color 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "rgba(212,175,55,0.8)")} onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(212,175,55,0.3)")}>GasUp.AI</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

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
  return (
    <footer className="relative mt-32 border-t border-white/[0.06] bg-void/60">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-gold/60">●</span>
            <span className="font-display font-bold uppercase tracking-[0.4em] gold-text">IGWE DE MC</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed font-light">
            Master of Ceremony · Comedian · Event Host. Based in Southampton, available UK-wide.
          </p>
          <div className="flex items-center gap-3 mt-6">
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

        <div>
          <h4 className="eyebrow mb-5 text-muted-foreground">Quick Links</h4>
          <ul className="space-y-3 text-sm font-light">
            {[
              ["Home", "/"], ["About", "/about"], ["Events", "/events"], ["Videos", "/videos"],
              ["News", "/news"], ["Shop", "/shop"], ["Book Now", "/booking"],
            ].map(([l, h]) => (
              <li key={h}><Link to={h} className="text-muted-foreground hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5 text-muted-foreground">Contact</h4>
          <ul className="space-y-3 text-sm font-light text-muted-foreground">
            <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-gold mt-0.5" /><a href="mailto:info@igwedemc.com" className="hover:text-gold">info@igwedemc.com</a></li>
            <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-gold mt-0.5" /><a href="tel:+447733751948" className="hover:text-gold">+44 7733 751948</a></li>
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-gold mt-0.5" /><span>Tremona Road, Southampton<br/>SO16 6TH</span></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5 text-muted-foreground">Legal</h4>
          <ul className="space-y-3 text-sm font-light">
            {[
              ["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms"],
              ["Cookie Policy", "/cookie-policy"],
            ].map(([l, h]) => (
              <li key={h}><Link to={h} className="text-muted-foreground hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© 2026 IGWE DE MC. All Rights Reserved.</p>
          <p>Powered by <a href="https://www.gasup.ai" target="_blank" rel="noopener noreferrer" className="text-gold hover:brightness-110 transition-all" style={{ textDecoration: "none", borderBottom: "1px solid rgba(212,175,55,0.3)", transition: "border-color 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "rgba(212,175,55,0.8)")} onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(212,175,55,0.3)")}>GasUp.AI</a></p>
        </div>
      </div>
    </footer>
  );
};

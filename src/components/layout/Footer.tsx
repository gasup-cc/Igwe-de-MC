import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/share/1DKNiGSfty/", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/igwedemc", label: "Twitter" },
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
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-all duration-300 text-xs font-bold"
            >
              TT
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
              ["Cookie Policy", "/cookie-policy"], ["Booking Policy", "/booking-policy"],
            ].map(([l, h]) => (
              <li key={h}><Link to={h} className="text-muted-foreground hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© 2026 IGWE DE MC. All Rights Reserved.</p>
          <p>Powered by <span className="gold-text">GasUp.AI</span></p>
        </div>
      </div>
    </footer>
  );
};

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Calendar, Facebook, Instagram, Youtube, Phone } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

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

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/videos", label: "Videos" },
  { to: "/news", label: "News" },
  { to: "/shop", label: "Shop" },
  { to: "/book-a-call", label: "Book a Call" },
  { to: "/booking", label: "Book Now" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const isHome = location.pathname === "/";
  const isSolid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on back button
  useEffect(() => {
    const onPop = () => setOpen(false);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 h-[72px]"
        style={{
          background: isSolid ? "rgba(5, 5, 10, 0.85)" : "transparent",
          backdropFilter: isSolid ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: isSolid ? "blur(20px) saturate(180%)" : "none",
          borderBottom: isSolid ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
          boxShadow: isSolid ? "0 4px 24px rgba(0, 0, 0, 0.3)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div className="container-x h-full flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="/Horizontal_Logo.webp"
              alt="IGWE DE MC"
              className="h-[48px] w-auto object-contain lg:h-14"
              style={{ width: "auto", objectFit: "contain" }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.filter((item) => item.to !== "/booking").map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative text-[11px] tracking-[3px] uppercase font-normal py-2",
                    "nav-glow-link",
                    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-gold after:transition-all after:duration-300",
                    isActive
                      ? "text-gold after:w-full"
                      : "text-[rgba(240,237,230,0.82)] hover:text-white after:w-0 hover:after:w-full"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/booking"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 rounded-md px-5 py-2.5",
                "text-[11px] tracking-[0.2em] uppercase text-gold border border-gold/30 bg-gold/10",
                "hover:bg-gold/20 hover:shadow-[0_0_24px_rgba(212,175,55,0.25)] transition-all duration-300 btn-shimmer"
              )}
            >
              <Calendar className="w-3.5 h-3.5" />
              Book an Event
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden relative flex flex-col items-center justify-center"
              style={{ width: 44, height: 44 }}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <m.span
                className="block bg-gold rounded-[1px] absolute"
                style={{ width: 22, height: 2 }}
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -7 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
              />
              <m.span
                className="block bg-gold rounded-[1px] absolute"
                style={{ width: 22, height: 2 }}
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
              />
              <m.span
                className="block bg-gold rounded-[1px] absolute"
                style={{ width: 22, height: 2 }}
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 7 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <m.div
            key="mobile-overlay"
            className="lg:hidden fixed inset-0"
            style={{
              zIndex: 9999,
              width: "100vw",
              height: "100dvh",
              background: "linear-gradient(135deg, #050507 0%, #0d0d14 50%, #0a0810 100%)",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Ambient orbs */}
            <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="absolute top-0 right-0 w-[500px] h-[500px]"
                style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
              />
              <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px]"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
              />
            </div>

            {/* Vertical gold accent bar */}
            <div
              aria-hidden
              className="absolute"
              style={{
                left: 40, top: "20%", width: 2, height: "60%",
                background: "linear-gradient(to bottom, transparent, #D4AF37, transparent)",
              }}
            />

            {/* Close button (×) — handled by hamburger transform; but ensure tap closes via header overlay sits below z-9999 */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-[14px] right-5 lg:hidden flex flex-col items-center justify-center"
              style={{ width: 44, height: 44, zIndex: 10 }}
            >
              <span className="block bg-gold rounded-[1px] absolute" style={{ width: 22, height: 2, transform: "rotate(45deg)" }} />
              <span className="block bg-gold rounded-[1px] absolute" style={{ width: 22, height: 2, transform: "rotate(-45deg)" }} />
            </button>

            {/* Nav links */}
            <m.nav
              className="absolute"
              style={{ top: "42%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", textAlign: "left" }}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.06, delayChildren: reduceMotion ? 0 : 0.2 } },
                exit: { transition: { staggerChildren: reduceMotion ? 0 : 0.03, staggerDirection: -1 } },
              }}
            >
              {NAV.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <m.div
                    key={item.to}
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0, transition: { duration: reduceMotion ? 0 : 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
                      exit: { opacity: 0, x: 40, transition: { duration: reduceMotion ? 0 : 0.2 } },
                    }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setTimeout(() => setOpen(false), 200)}
                      className="group flex items-center font-display font-bold transition-all duration-200"
                      style={{
                        fontSize: "clamp(32px, 8vw, 52px)",
                        lineHeight: 1.2,
                        color: isActive ? "#D4AF37" : "rgba(240,237,230,0.85)",
                        letterSpacing: "-0.01em",
                        padding: "14px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        className="inline-block transition-transform duration-200 origin-left"
                        style={{
                          color: "#D4AF37",
                          width: 24,
                          transform: isActive ? "scaleX(1)" : "scaleX(0)",
                          opacity: isActive ? 1 : 0,
                          overflow: "hidden",
                        }}
                      >
                        ●
                      </span>
                      <span className="group-hover:text-gold group-hover:translate-x-2 transition-all duration-200">
                        {item.label}
                      </span>
                    </Link>
                  </m.div>
                );
              })}
            </m.nav>

            {/* Bottom info strip */}
            <div
              className="absolute flex flex-col items-start"
              style={{ bottom: 32, left: "50%", width: "80%", transform: "translateX(-50%)" }}
            >
              <div
                aria-hidden
                className="w-full"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: 16 }}
              />
              <a
                href="tel:+447733751948"
                className="text-[rgba(240,237,230,0.7)] hover:text-gold transition-colors flex items-center justify-start gap-2 text-left"
                style={{
                  minHeight: 44,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: "1px",
                  marginBottom: 16,
                }}
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                +44 7733 751948
              </a>
              <div className="flex items-center justify-start gap-3">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/share/1DKNiGSfty/", label: "Facebook" },
                  { Icon: XIcon, href: "https://x.com/igwedemc", label: "X" },
                  { Icon: Instagram, href: "https://www.instagram.com/igwedemc", label: "Instagram" },
                  { Icon: Youtube, href: "https://youtube.com/@igwedemc", label: "YouTube" },
                  { Icon: TikTokIcon, href: "https://www.tiktok.com/@igwedemc", label: "TikTok" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                    className="rounded-full glass flex items-center justify-center transition-all hover:text-gold"
                    style={{ width: 36, height: 36, color: "rgba(212,175,55,0.7)" }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

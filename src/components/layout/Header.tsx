import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/videos", label: "Videos" },
  { to: "/news", label: "News" },
  { to: "/shop", label: "Shop" },
  { to: "/booking", label: "Book Now" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-[72px] transition-all duration-300 border-b",
        scrolled ? "bg-void/85 border-white/10" : "bg-void/60 border-white/[0.06]"
      )}
      style={{ backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}
    >
      <div className="container-x h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-gold/60 group-hover:text-gold transition-colors">●</span>
          <span className="font-display font-bold text-[1.1rem] uppercase tracking-[0.4em] gold-text">IGWE DE MC</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.slice(0, 6).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative text-[11px] tracking-[0.25em] uppercase font-light transition-colors py-2",
                  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-gold after:transition-all after:duration-300",
                  isActive
                    ? "text-gold after:w-full"
                    : "text-muted-foreground hover:text-gold after:w-0 hover:after:w-full"
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
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-void/95 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
      >
        <nav className="container-x py-12 flex flex-col gap-6">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-2xl font-display tracking-wide transition-colors",
                  isActive ? "gold-text" : "text-foreground hover:text-gold"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

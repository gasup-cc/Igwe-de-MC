import { useEffect, useRef, useState } from "react";
import { Share2, Facebook, Linkedin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
    <defs>
      <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <path fill="url(#igGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

interface SharePopoverProps {
  title: string;
  url?: string;
  className?: string;
  buttonClassName?: string;
  buttonLabel?: React.ReactNode;
}

export const SharePopover = ({
  title,
  url,
  className = "",
  buttonClassName = "glass px-4 py-2 rounded-md text-xs tracking-wider uppercase text-muted-foreground hover:text-gold inline-flex items-center gap-2",
  buttonLabel,
}: SharePopoverProps) => {
  const [open, setOpen] = useState(false);
  const [placeAbove, setPlaceAbove] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setPlaceAbove(window.innerHeight - rect.bottom < 160);
    }
    setOpen(o => !o);
  };

  const shareUrl = typeof window !== "undefined" ? (url ?? window.location.href) : (url ?? "");
  const t = encodeURIComponent(title);
  const u = encodeURIComponent(shareUrl);

  const platforms: { key: string; label: string; icon: React.ReactNode; onClick: () => void }[] = [
    { key: "wa", label: "WhatsApp", icon: <span style={{ color: "#25D366" }}><WhatsAppIcon /></span>, onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`, "_blank", "noopener,noreferrer") },
    { key: "fb", label: "Facebook", icon: <Facebook size={20} color="#1877F2" fill="#1877F2" />, onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${u}`, "_blank", "noopener,noreferrer") },
    { key: "x", label: "X", icon: <span className="text-foreground"><XIcon /></span>, onClick: () => window.open(`https://twitter.com/intent/tweet?text=${t}&url=${u}`, "_blank", "noopener,noreferrer") },
    { key: "li", label: "LinkedIn", icon: <Linkedin size={20} color="#0A66C2" fill="#0A66C2" />, onClick: () => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${u}&title=${t}`, "_blank", "noopener,noreferrer") },
    { key: "ig", label: "Instagram", icon: <InstagramIcon />, onClick: () => window.open("https://www.instagram.com/igwedemc", "_blank", "noopener,noreferrer") },
  ];

  return (
    <div ref={wrapRef} className={`relative inline-block ${className}`}>
      <button
        ref={btnRef}
        type="button"
        onClick={toggle}
        className={buttonClassName}
        aria-label="Share"
        aria-expanded={open}
      >
        {buttonLabel ?? <Share2 className="w-4 h-4" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="share-pop"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.15, ease: "easeOut" } }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.1 } }}
            onClick={(e) => e.stopPropagation()}
            className="absolute z-50"
            style={{
              [placeAbove ? "bottom" : "top"]: "calc(100% + 8px)",
              right: 0,
              background: "rgba(13,13,20,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "16px 20px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-start" style={{ gap: 12 }}>
              {platforms.map(p => (
                <button
                  key={p.key}
                  type="button"
                  onClick={(e) => { e.stopPropagation(); p.onClick(); setOpen(false); }}
                  className="flex flex-col items-center gap-1.5 group"
                  style={{ minWidth: 52 }}
                >
                  <span className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                    {p.icon}
                  </span>
                  <span className="text-[10px] text-muted-foreground tracking-wide">{p.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

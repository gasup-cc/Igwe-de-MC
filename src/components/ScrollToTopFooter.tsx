import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";

export const ScrollToTopFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          key="scroll-top-footer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="group fixed z-40 flex items-center justify-center"
          style={{
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(212,175,55,0.12)",
            border: "1px solid rgba(212,175,55,0.3)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            transition: "background 250ms ease, box-shadow 250ms ease, transform 250ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(212,175,55,0.25)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(212,175,55,0.3)";
            e.currentTarget.style.transform = "translateX(-50%) translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(212,175,55,0.12)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateX(-50%)";
          }}
        >
          <ChevronUp size={20} color="#D4AF37" />
        </m.button>
      )}
    </AnimatePresence>
  );
};

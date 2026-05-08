import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

export const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/447733751948"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp IGWE DE MC"
        className="hidden lg:flex fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white items-center justify-center shadow-lg pulse-ring hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass flex items-center justify-center text-gold transition-all duration-500 ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

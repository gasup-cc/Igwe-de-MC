import { MessageCircle } from "lucide-react";

export const FloatingButtons = () => {
  return (
    <a
      href="https://wa.me/447733751948"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp IGWE DE MC"
      className="hidden lg:flex fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white items-center justify-center shadow-lg pulse-ring hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { ParticleField } from "@/components/ParticleField";
import { FloatingIcons } from "@/components/FloatingIcons";
import { ScrollToTopFooter } from "@/components/ScrollToTopFooter";

export const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="site-shell min-h-screen bg-surface text-foreground flex flex-col relative">
      <ParticleField />
      <FloatingIcons />
      <Header />
      <main className={`flex-1 relative z-[1] ${isHome ? "" : "pt-[72px]"}`}>{children}</main>
      <Footer />
      {/* SCROLL TO TOP BUTTON — temporarily disabled. Remove comment tags to re-enable. */}
      {/* <ScrollToTopFooter /> */}
      <FloatingButtons />
    </div>
  );
};

import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { ParticleField } from "@/components/ParticleField";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-surface text-foreground flex flex-col relative">
      <ParticleField />
      <Header />
      <main className="flex-1 pt-[72px] relative z-[1]">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

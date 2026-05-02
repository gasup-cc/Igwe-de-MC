import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-surface text-foreground flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

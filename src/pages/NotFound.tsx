import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AmbientOrbs } from "@/components/AmbientOrbs";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <AmbientOrbs variant="hero" />
      <div className="container-x relative z-10 text-center">
        <div className="font-mono-acc gold-text text-[120px] md:text-[180px] leading-none">404</div>
        <h1 className="font-display font-bold text-3xl md:text-5xl mt-2">Lost in the <span className="gold-gradient-text">spotlight</span></h1>
        <p className="mt-4 text-muted-foreground">The page you're looking for isn't on the bill tonight.</p>
        <Link to="/" className="btn-shimmer mt-8 inline-flex items-center gap-2 bg-gold text-void px-8 py-3.5 rounded-md text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition">Back to Home</Link>
      </div>
    </section>
  );
};

export default NotFound;

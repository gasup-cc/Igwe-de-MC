import { useEffect, useMemo, useState } from "react";
import p1 from "@/assets/hero/p1.webp";
import p2 from "@/assets/hero/p2.webp";
import p3 from "@/assets/hero/p3.webp";
import p4 from "@/assets/hero/p4.webp";
import p5 from "@/assets/hero/p5.webp";
import ls1 from "@/assets/hero/ls1.webp";
import ls2 from "@/assets/hero/ls2.webp";
import ls3 from "@/assets/hero/ls3.webp";
import ls4 from "@/assets/hero/ls4.webp";
import ls5 from "@/assets/hero/ls5.webp";

const mobileImages = [p1, p2, p3, p4, p5];
const desktopImages = [ls1, ls2, ls3, ls4, ls5];

const getDesktopMatch = () =>
  typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : true;

const getReducedMotion = () =>
  typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

export const HeroCarousel = () => {
  const [isDesktop, setIsDesktop] = useState(getDesktopMatch);
  const [reducedMotion, setReducedMotion] = useState(getReducedMotion);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  const images = useMemo(() => (isDesktop ? desktopImages : mobileImages), [isDesktop]);

  useEffect(() => {
    const breakpointQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let resizeTimer: number | undefined;

    const updateBreakpoint = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => setIsDesktop(breakpointQuery.matches), 200);
    };
    const updateMotion = () => setReducedMotion(motionQuery.matches);

    setIsDesktop(breakpointQuery.matches);
    setReducedMotion(motionQuery.matches);
    breakpointQuery.addEventListener("change", updateBreakpoint);
    motionQuery.addEventListener("change", updateMotion);
    window.addEventListener("resize", updateBreakpoint, { passive: true });

    return () => {
      window.clearTimeout(resizeTimer);
      breakpointQuery.removeEventListener("change", updateBreakpoint);
      motionQuery.removeEventListener("change", updateMotion);
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
    setPrevIndex(null);
  }, [isDesktop]);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((current) => {
        setPrevIndex(current);
        return (current + 1) % images.length;
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, [images.length, reducedMotion]);

  useEffect(() => {
    if (prevIndex === null || reducedMotion) return;
    const timeout = window.setTimeout(() => setPrevIndex(null), 1250);
    return () => window.clearTimeout(timeout);
  }, [prevIndex, reducedMotion]);

  return (
    <div className="hero-carousel" aria-hidden>
      {images.map((src, index) => {
        const isActive = index === currentIndex;
        const isPrevious = index === prevIndex && !isActive;
        const isVisibleLayer = isActive || isPrevious;

        return (
          <img
            key={`${isDesktop ? "desktop" : "mobile"}-${index}`}
            src={src}
            alt=""
            width={isDesktop ? 1920 : 1080}
            height={isDesktop ? 1080 : 1440}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            className={[
              "hero-carousel__image",
              isActive ? "hero-carousel__image--active" : "",
              isPrevious ? "hero-carousel__image--previous" : "",
            ].join(" ")}
            style={{
              opacity: isActive ? 1 : 0,
              visibility: isVisibleLayer ? "visible" : "hidden",
              transition: reducedMotion || !isVisibleLayer ? "none" : undefined,
            }}
          />
        );
      })}
    </div>
  );
};

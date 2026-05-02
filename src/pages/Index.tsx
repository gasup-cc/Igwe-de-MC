import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EventSpotlight } from "@/components/home/EventSpotlight";
import { ServicesSection } from "@/components/home/ServicesSection";
import { VideosPreview } from "@/components/home/VideosPreview";
import { NewsPreview } from "@/components/home/NewsPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BookingCTA } from "@/components/home/BookingCTA";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <EventSpotlight />
      <ServicesSection />
      <VideosPreview />
      <NewsPreview />
      <TestimonialsSection />
      <BookingCTA />
      <NewsletterSection />
    </>
  );
};

export default Index;

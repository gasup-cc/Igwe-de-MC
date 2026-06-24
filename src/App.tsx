import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LazyMotion, domAnimation } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { IntroAnimation } from "@/components/IntroAnimation";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Events from "./pages/Events.tsx";
import JokesApart from "./pages/JokesApart.tsx";
import Videos from "./pages/Videos.tsx";
import News from "./pages/News.tsx";
import Shop from "./pages/Shop.tsx";
import Booking from "./pages/Booking.tsx";
import ScheduleACall from "./pages/ScheduleACall.tsx";
import LegalPage from "./pages/LegalPage.tsx";
import { bookingPolicyContent, termsContent, cookiePolicyContent } from "./data/legal";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();
const legacySchedulePath = ["/book", "a", "call"].join("-");

const App = () => (
  <LazyMotion features={domAnimation}>
    <IntroAnimation />
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner theme="dark" position="top-right" toastOptions={{ classNames: { toast: "glass !bg-void/90 !text-foreground !border-gold/30", title: "text-foreground", description: "text-muted-foreground" } }} />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/jokes-apart" element={<JokesApart />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/news" element={<News />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/schedule-a-call" element={<ScheduleACall />} />
              <Route path={legacySchedulePath} element={<Navigate to="/schedule-a-call" replace />} />
              <Route path="/privacy-policy" element={<LegalPage {...bookingPolicyContent} />} />
              <Route path="/terms" element={<LegalPage {...termsContent} />} />
              <Route path="/cookie-policy" element={<LegalPage {...cookiePolicyContent} />} />
              <Route path="/booking-policy" element={<LegalPage {...bookingPolicyContent} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LazyMotion>
);

export default App;

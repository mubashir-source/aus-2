import HeroSlider from "../components/sections/HeroSlider";
import IndustrySection from "../components/sections/IndustrySection";
import ServicesSection from "../components/sections/ServicesSection";
import TopSellingSection from "../components/sections/TopSellingSection";
import MarqueeSection from "../components/sections/MarqueeSection";
import TrustSection from "../components/sections/TrustSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import LogoSliderSection from "../components/sections/LogoSliderSection";
import FAQSection from "../components/sections/FAQSection";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <HeroSlider />
      <IndustrySection />
      <ServicesSection />
      <TopSellingSection />
      <MarqueeSection />
      <TrustSection />
      <TestimonialsSection />
      <LogoSliderSection />
      <FAQSection />
    </div>
  );
}

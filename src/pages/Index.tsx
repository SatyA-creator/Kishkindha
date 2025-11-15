import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { MediaSection } from "@/components/sections/MediaSection";
import { SteamSection } from "@/components/sections/SteamSection";
import { DevlogSection } from "@/components/sections/DevlogSection";
import { JoinSection } from "@/components/sections/JoinSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <MediaSection />
        <SteamSection />
        <DevlogSection />
        <JoinSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

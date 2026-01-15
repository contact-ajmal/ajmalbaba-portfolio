import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { PlaygroundSection } from "@/components/sections/PlaygroundSection";
import { PersonalSection } from "@/components/sections/PersonalSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ToolsSection />
        <PlaygroundSection />
        <PersonalSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

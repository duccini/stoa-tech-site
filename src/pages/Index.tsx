import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { VolunteerRolesSection } from "@/components/home/VolunteerRolesSection";
import { VolunteerCTASection } from "@/components/home/VolunteerCTASection";
import { ONGSection } from "@/components/home/ONGSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AccessibilityMenu } from "@/components/AccessibilityMenu";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <StatsSection />
        <TestimonialsSection />
        <VolunteerRolesSection />
        <VolunteerCTASection />
        <ONGSection />
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
};

export default Index;

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { VolunteerCTASection } from "@/components/home/VolunteerCTASection";
import { StatsSection } from "@/components/home/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <VolunteerCTASection />
        <SolutionsSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

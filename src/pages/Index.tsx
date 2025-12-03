import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { VolunteerCTASection } from "@/components/home/VolunteerCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <TestimonialsSection />
        <VolunteerCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

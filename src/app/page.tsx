import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { VolunteerRolesSection } from "@/components/home/VolunteerRolesSection";
import { VolunteerCTASection } from "@/components/home/VolunteerCTASection";
import { ONGSection } from "@/components/home/ONGSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AccessibilityMenu } from "@/components/AccessibilityMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <SolutionsSection />
        <VolunteerCTASection />
        <ONGSection />
        <VolunteerRolesSection />
        <StatsSection />
      </main>

      <AccessibilityMenu />
    </div>
  );
}

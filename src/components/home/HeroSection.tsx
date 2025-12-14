import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-team-hands.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
              Multiplicamos{" "}
              <span className="text-gradient">ações sociais</span>{" "}
              por meio da tecnologia
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
              Oferecemos serviços e produtos digitais gratuitos a outras ONGs,
              fortalecendo suas causas com o talento e dedicação dos nossos
              voluntários.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="rounded-full px-8 gap-2 group">
                <Link to="/ajude">
                  Ajude a STOÁ
                  <Heart className="h-4 w-4 transition-transform group-hover:scale-110" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2 group">
                <Link to="/seja-voluntario">
                  Seja Voluntário
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual - Volunteer/Impact Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative max-w-md w-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-brand rounded-3xl blur-3xl opacity-20 scale-110" />
              
              {/* Main visual card */}
              <div className="relative bg-gradient-card rounded-3xl p-1 border border-border/50 shadow-lg overflow-hidden">
                {/* Floating stats - Top */}
                <div className="absolute top-4 left-4 right-4 flex gap-3 z-10">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2 border border-border/50 flex-1">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-bold">40+</p>
                      <p className="text-xs text-muted-foreground">Voluntários</p>
                    </div>
                  </div>
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2 border border-border/50 flex-1">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-bold">7</p>
                      <p className="text-xs text-muted-foreground">Projetos</p>
                    </div>
                  </div>
                </div>

                <img
                  src={heroBg}
                  alt="Equipe diversa unindo as mãos em colaboração"
                  className="w-full h-auto rounded-[1.25rem] object-cover aspect-[3/4]"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Users, Code, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSymbol from "@/assets/logo-symbol.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              ONG de Tecnologia para o Bem
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Multiplicamos{" "}
              <span className="text-gradient">ações sociais</span>{" "}
              por meio da tecnologia
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Oferecemos serviços e produtos digitais gratuitos a outras ONGs,
              fortalecendo suas causas com o talento e dedicação dos nossos
              voluntários.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="rounded-full px-8 gap-2 group">
                <Link to="/seja-voluntario">
                  Seja Voluntário
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/quem-somos">Conhecer a STOÁ</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl sm:text-3xl font-bold">40+</span>
                </div>
                <p className="text-sm text-muted-foreground">Voluntários Ativos</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Code className="h-5 w-5" />
                  <span className="text-2xl sm:text-3xl font-bold">7</span>
                </div>
                <p className="text-sm text-muted-foreground">Projetos em Andamento</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Heart className="h-5 w-5" />
                  <span className="text-2xl sm:text-3xl font-bold">4</span>
                </div>
                <p className="text-sm text-muted-foreground">ONGs Atendidas</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-brand rounded-3xl blur-3xl opacity-30 scale-110" />
              
              {/* Main visual card */}
              <div className="relative bg-gradient-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
                <img
                  src={logoSymbol}
                  alt="STOÁ Symbol"
                  className="w-48 md:w-64 h-auto animate-float"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 border border-border shadow-md animate-float" style={{ animationDelay: "1s" }}>
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 border border-border shadow-md animate-float" style={{ animationDelay: "2s" }}>
                  <Heart className="h-8 w-8 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

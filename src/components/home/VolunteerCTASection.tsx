import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Users2, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const benefits = [
  { icon: Rocket, text: "Experiência em projetos reais com impacto mensurável" },
  { icon: Users2, text: "Networking com profissionais de diversas áreas" },
  { icon: GraduationCap, text: "Mentoria e aprendizado com especialistas" },
  { icon: Briefcase, text: "Portfólio com cases de sucesso social" },
];

export function VolunteerCTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-background/95 dark:bg-background/98" />
      </div>

      <div className="container relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
            Seja Voluntário
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Construa sua carreira enquanto{" "}
            <span className="text-gradient">transforma vidas</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Junte-se a mais de 40 voluntários que crescem profissionalmente enquanto 
            desenvolvem soluções tecnológicas para ONGs que precisam de apoio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 gap-2 group">
              <Link to="/seja-voluntario">
                Quero Fazer a Diferença
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6">Por que ser voluntário na STOÁ?</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-border/30">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm leading-relaxed pt-2 text-muted-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

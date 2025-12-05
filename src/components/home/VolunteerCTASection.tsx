import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, LineChart, Megaphone, Users2, Briefcase, GraduationCap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const roles = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Frontend, Backend, Mobile, DevOps",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX, Branding, Ilustração",
  },
  {
    icon: LineChart,
    title: "Produto",
    description: "Product Owner, Scrum Master",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Social Media, Conteúdo, SEO",
  },
];

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
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container relative z-10 text-white">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-white/20 text-white border-white/30 hover:bg-white/30">
            Seja Voluntário
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Construa sua carreira enquanto{" "}
            <span className="text-accent">transforma vidas</span>
          </h2>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Junte-se a mais de 40 voluntários que crescem profissionalmente enquanto 
            desenvolvem soluções tecnológicas para ONGs que precisam de apoio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 gap-2 group bg-white text-primary hover:bg-white/90">
              <Link to="/seja-voluntario">
                Quero Fazer a Diferença
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-white">Áreas de atuação</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <role.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="font-semibold mb-1 text-white">{role.title}</h4>
                <p className="text-sm text-white/80">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-xl font-semibold text-center mb-6 text-white">Por que ser voluntário na STOÁ?</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex items-start gap-3 p-4 rounded-xl bg-white/10">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-sm leading-relaxed pt-2 text-white/90">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ONGs Section */}
        <div className="mt-16 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
          <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-accent/20 text-accent border-accent/30">
            Para ONGs
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Sua ONG precisa de soluções tecnológicas?
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Se sua organização precisa de um site, aplicativo ou sistema mas não tem 
            recursos para contratar, a STOÁ pode ajudar. Todos os nossos serviços são 
            <strong className="text-white"> 100% gratuitos</strong>.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 gap-2 group bg-white text-primary hover:bg-white/90"
          >
            <Link to="/contato">
              Solicitar Apoio Tecnológico
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Code2, Users2, Rocket, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Code2,
    title: "Experiência Real",
    description: "Trabalhe em projetos reais com impacto social mensurável.",
  },
  {
    icon: Users2,
    title: "Networking",
    description: "Conecte-se com profissionais de diversas áreas e empresas.",
  },
  {
    icon: Rocket,
    title: "Crescimento",
    description: "Desenvolva suas habilidades técnicas e soft skills.",
  },
  {
    icon: GraduationCap,
    title: "Mentoria",
    description: "Aprenda com profissionais experientes do mercado.",
  },
];

export function VolunteerCTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Seja Voluntário
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Transforme sua carreira enquanto{" "}
              <span className="text-gradient">transforma vidas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Junte-se a mais de 40 voluntários que estão construindo suas
              carreiras enquanto fazem a diferença no terceiro setor. Na STOÁ,
              você cresce enquanto ajuda outras organizações a crescerem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8 gap-2 group">
                <Link to="/seja-voluntario">
                  Quero Ser Voluntário
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link to="/quem-somos">Saiba Mais</Link>
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ONGs Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">É uma ONG e precisa de ajuda?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Se sua organização precisa de soluções tecnológicas mas não tem
            recursos, a STOÁ pode ajudar. Todos os nossos serviços são 100%
            gratuitos.
          </p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="rounded-full px-8 gap-2 group"
          >
            <Link to="/seja-voluntario">
              Solicitar Ajuda Tech
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

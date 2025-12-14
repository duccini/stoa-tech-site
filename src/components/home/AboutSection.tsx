import { Lightbulb, Target, Sparkles, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Lightbulb,
    title: "Nosso Propósito",
    description:
      "Multiplicar ações sociais por meio da tecnologia, oferecendo soluções digitais gratuitas para ONGs e criando oportunidades através do voluntariado.",
  },
  {
    icon: Target,
    title: "Nossa Missão",
    description:
      "Criar soluções digitais gratuitas que fortalecem ONGs e inspiram nossos voluntários a crescerem enquanto transformam o mundo ao seu redor.",
  },
  {
    icon: Sparkles,
    title: "Nossa Visão",
    description:
      "Ser, até 2028, uma ONG de referência nacional no fortalecimento do terceiro setor por meio da tecnologia e no desenvolvimento de profissionais.",
  },
];

const values = [
  { title: "Transformar com propósito", desc: "Transformar realidades por meio da tecnologia e do trabalho voluntário.", icon: Heart },
  { title: "Abraçar desafios", desc: "Aceitar projetos difíceis como oportunidades de crescer e gerar impacto.", icon: Target },
  { title: "Confiar nas pessoas", desc: "Praticar autonomia, respeito e autogerenciamento com responsabilidade.", icon: Lightbulb },
  { title: "Valorizar a diversidade", desc: "Acolher pessoas de todas as idades, regiões e trajetórias.", icon: Sparkles },
  { title: "Crescer e aprender juntos", desc: "Fazer de cada projeto um espaço de desenvolvimento humano e profissional.", icon: Target },
  { title: "Fazer com o coração", desc: "Agir com empatia, colaboração e comprometimento em tudo que construímos.", icon: Heart },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent border-primary/20 dark:border-accent/20 hover:bg-primary/15 dark:hover:bg-accent/15">
            Sobre Nós
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tecnologia com <span className="text-gradient">propósito</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A STOÁ nasceu da vontade de seus voluntários de criarem oportunidades
            em vez de apenas reclamar das dificuldades do mercado. Desde julho de
            2024, desenvolvemos projetos de alto impacto social.
          </p>
        </div>

        {/* Features Grid - Propósito, Missão, Visão */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-card rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent border-primary/20 dark:border-accent/20 hover:bg-primary/15 dark:hover:bg-accent/15">
              Nossos Valores
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold">
              O que nos <span className="text-gradient">move</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group flex gap-4 p-5 rounded-xl bg-secondary/50 border border-border/30 hover:bg-secondary hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <value.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

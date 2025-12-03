import { Lightbulb, Target, Sparkles } from "lucide-react";

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

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Tecnologia com <span className="text-gradient">propósito</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A STOÁ nasceu da vontade de seus voluntários de criarem oportunidades
            em vez de apenas reclamar das dificuldades do mercado. Desde julho de
            2024, desenvolvemos projetos de alto impacto social.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
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

        {/* Values */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Transformar com propósito", desc: "Transformar realidades por meio da tecnologia e do trabalho voluntário." },
            { title: "Abraçar desafios", desc: "Aceitar projetos difíceis como oportunidades de crescer e gerar impacto." },
            { title: "Confiar nas pessoas", desc: "Praticar autonomia, respeito e autogerenciamento com responsabilidade." },
            { title: "Valorizar a diversidade", desc: "Acolher pessoas de todas as idades, regiões e trajetórias." },
            { title: "Crescer e aprender juntos", desc: "Fazer de cada projeto um espaço de desenvolvimento humano e profissional." },
            { title: "Fazer com o coração", desc: "Agir com empatia, colaboração e comprometimento em tudo que construímos." },
          ].map((value, index) => (
            <div
              key={value.title}
              className="flex gap-4 p-5 rounded-xl bg-secondary/50 border border-border/30 hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Globe, Smartphone, Database, Palette, Cog, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Criação e atualização de sites modernos e responsivos que comunicam sua causa com clareza.",
  },
  {
    icon: Smartphone,
    title: "Aplicações Web e Mobile",
    description:
      "Desenvolvimento sob medida de aplicações que atendem às necessidades específicas da sua ONG.",
  },
  {
    icon: Database,
    title: "Sistemas de Gestão",
    description:
      "Soluções para gerenciar doações, voluntários, beneficiários e outras operações essenciais.",
  },
  {
    icon: Palette,
    title: "Design e UX",
    description:
      "Interfaces intuitivas e acessíveis que proporcionam a melhor experiência para seus usuários.",
  },
  {
    icon: Cog,
    title: "Automação de Processos",
    description:
      "Automatize tarefas repetitivas e ganhe mais tempo para focar no que realmente importa.",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description:
      "Dashboards e relatórios que ajudam a medir o impacto e tomar decisões baseadas em dados.",
  },
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Tecnologia <span className="text-gradient">100% gratuita</span> para
            sua ONG
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma variedade de serviços digitais desenvolvidos por
            nossos voluntários especializados, sem nenhum custo para ONGs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20 bg-gradient-card rounded-3xl p-8 md:p-12 border border-border/50">
          <h3 className="text-2xl font-bold text-center mb-10">
            Como trabalhamos
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Entendemos sua ONG e suas necessidades" },
              { step: "02", title: "Planejamento", desc: "Definimos escopo, prazos e equipe" },
              { step: "03", title: "Desenvolvimento", desc: "Construímos a solução em sprints ágeis" },
              { step: "04", title: "Entrega e Suporte", desc: "Lançamos e oferecemos suporte contínuo" },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="text-4xl font-bold text-gradient mb-3">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-border -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

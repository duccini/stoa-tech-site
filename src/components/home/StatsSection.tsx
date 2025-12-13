import { Users, Code, Heart, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "40+", label: "Voluntários Ativos" },
  { icon: Code, value: "7", label: "Projetos em Andamento" },
  { icon: Heart, value: "4", label: "ONGs Atendidas" },
  { icon: Award, value: "100%", label: "Gratuito" },
];

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-hero">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nosso Impacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Números que <span className="text-gradient">transformam</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-card rounded-2xl p-6 border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient dark:text-white mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

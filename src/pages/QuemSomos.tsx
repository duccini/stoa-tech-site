import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Target, Heart, Lightbulb, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSymbol from "@/assets/logo-symbol.png";

const timeline = [
  {
    date: "Julho 2024",
    title: "Fundação da STOÁ",
    description: "A STOÁ nasce da vontade de criar oportunidades através da tecnologia.",
  },
  {
    date: "Agosto 2024",
    title: "Primeiros Voluntários",
    description: "Formação das primeiras equipes e início dos projetos piloto.",
  },
  {
    date: "Outubro 2024",
    title: "Primeiras Entregas",
    description: "Conclusão dos primeiros projetos para ONGs parceiras.",
  },
  {
    date: "2025",
    title: "Expansão",
    description: "Crescimento da equipe para 40+ voluntários e 7 projetos em andamento.",
  },
];

const values = [
  {
    icon: Target,
    title: "Transformar com propósito",
    description: "Transformar realidades por meio da tecnologia e do trabalho voluntário.",
  },
  {
    icon: Lightbulb,
    title: "Abraçar desafios",
    description: "Aceitar projetos difíceis como oportunidades de crescer e gerar impacto verdadeiro.",
  },
  {
    icon: Heart,
    title: "Confiar nas pessoas",
    description: "Praticar a autonomia, o respeito e o autogerenciamento com responsabilidade e empatia.",
  },
  {
    icon: Users,
    title: "Valorizar a diversidade",
    description: "Acolher pessoas de todas as idades, regiões e trajetórias, reconhecendo a riqueza de cada história.",
  },
  {
    icon: Sparkles,
    title: "Crescer e aprender juntos",
    description: "Fazer de cada projeto um espaço de desenvolvimento humano e profissional.",
  },
  {
    icon: Shield,
    title: "Fazer com o coração",
    description: "Agir com empatia, colaboração e comprometimento em tudo o que construímos.",
  },
];

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Quem Somos
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                  Construindo o futuro com{" "}
                  <span className="text-gradient">tecnologia e propósito</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A STOÁ é uma ONG de tecnologia que nasceu com um propósito
                  simples, mas poderoso: multiplicar ações sociais por meio da
                  tecnologia.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Nosso nome é inspirado na palavra grega "STOÁ", origem do
                  estoicismo, simbolizando nossa construção coletiva e
                  comprometida. Somos uma comunidade de desenvolvedores,
                  designers, e outros profissionais unidos pelo desejo de fazer a
                  diferença.
                </p>
                <Button asChild size="lg" className="rounded-full px-8 gap-2 group">
                  <Link to="/seja-voluntario">
                    Faça Parte
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-brand rounded-3xl blur-3xl opacity-30 scale-110" />
                  <div className="relative bg-gradient-card rounded-3xl p-12 border border-border/50">
                    <img
                      src={logoSymbol}
                      alt="STOÁ Symbol"
                      className="w-48 md:w-64 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Purpose */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Criar soluções digitais (produtos e serviços) gratuitos que
                  fortalecem ONGs e inspiram nossos voluntários a crescerem
                  enquanto transformam o mundo ao seu redor.
                </p>
              </div>

              <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Sparkles className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser, até 2028, uma ONG de referência nacional no fortalecimento
                  do terceiro setor por meio da tecnologia e no desenvolvimento
                  de profissionais que unem propósito e excelência técnica.
                </p>
              </div>

              <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nosso Propósito</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Multiplicar ações sociais por meio da tecnologia, oferecendo
                  soluções digitais gratuitas para ONGs e criando oportunidades
                  através do voluntariado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Nossos Valores
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                O que nos <span className="text-gradient">guia</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Uma jornada de <span className="text-gradient">impacto</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={item.date} className="relative pl-8 pb-12 last:pb-0">
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-[11px] top-6 w-0.5 h-full bg-border" />
                  )}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center">
                    <Calendar className="h-3 w-3 text-white" />
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border/50 ml-4">
                    <span className="text-sm font-medium text-primary">
                      {item.date}
                    </span>
                    <h3 className="text-lg font-semibold mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 md:py-28 bg-gradient-hero">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "40+", label: "Voluntários Ativos" },
                { value: "7", label: "Projetos em Andamento" },
                { value: "4", label: "ONGs Atendidas" },
                { value: "100%", label: "Gratuito" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="bg-gradient-card rounded-3xl p-8 md:p-16 border border-border/50 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para fazer parte dessa{" "}
                <span className="text-gradient">história</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Junte-se a nós e transforme sua carreira enquanto transforma
                vidas. Na STOÁ, cada linha de código é uma oportunidade de fazer
                a diferença.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 gap-2 group">
                  <Link to="/seja-voluntario">
                    Ser Voluntário
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link to="/">Voltar ao Início</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuemSomos;

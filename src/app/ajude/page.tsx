import Link from "next/link";
import {
  Heart,
  Users,
  Building2,
  HandCoins,
  Share2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const helpOptions = [
  {
    icon: HandCoins,
    title: "Doação Financeira",
    description:
      "Sua contribuição ajuda a manter nossa estrutura e ampliar o impacto dos nossos projetos para mais ONGs.",
    cta: "Fazer doação",
    link: "https://www.vakinha.com.br/vaquinha/regularize-a-ong-stoa",
  },
  {
    icon: Users,
    title: "Seja Voluntário",
    description:
      "Doe seu tempo e talento. Desenvolvedores, designers, gestores de projeto e mais — todos são bem-vindos para ajudar ONGs a crescerem.",
    cta: "Quero ser voluntário",
    link: "/seja-voluntario",
    highlight: true,
  },
  {
    icon: Building2,
    title: "Parceria Institucional",
    description:
      "Sua empresa pode apoiar a STOÁ através de parcerias estratégicas, oferecendo recursos, mentoria ou infraestrutura.",
    cta: "Propor parceria",
    link: "/contato",
  },

  {
    icon: Share2,
    title: "Divulgue Nossa Causa",
    description:
      "Compartilhe nosso trabalho nas redes sociais e ajude mais pessoas a conhecerem a STOÁ e seu impacto.",
    cta: "Ver redes sociais",
    link: "/contato",
  },
];

const Ajude = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20"
              >
                Faça Parte da Mudança
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ajude a STOÁ a{" "}
                <span className="text-gradient">transformar</span> o terceiro
                setor
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Existem várias formas de contribuir com nossa missão. Escolha a
                que melhor se encaixa no seu perfil e faça parte dessa
                transformação.
              </p>
            </div>
          </div>
        </section>

        {/* Help Options */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {helpOptions.map((option) => (
                <div
                  key={option.title}
                  className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg ${
                    option.highlight
                      ? "bg-gradient-card border-primary/30 hover:border-primary/50"
                      : "bg-card border-border/50 hover:border-primary/30"
                  }`}
                >
                  {option.highlight && (
                    <Badge className="absolute -top-3 right-6 bg-gradient-brand text-white border-0">
                      Mais Popular
                    </Badge>
                  )}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <option.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <Button asChild className="rounded-full gap-2 group">
                    <Link href={option.link}>
                      {option.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                Sua ajuda gera{" "}
                <span className="text-gradient">impacto real</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Cada contribuição — seja tempo, conhecimento ou recursos — ajuda
                a fortalecer organizações que trabalham por causas essenciais em
                todo o Brasil.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">4+</p>
                  <p className="text-sm text-muted-foreground">
                    ONGs Atendidas
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">7</p>
                  <p className="text-sm text-muted-foreground">
                    Projetos Ativos
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">40+</p>
                  <p className="text-sm text-muted-foreground">Voluntários</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ajude;

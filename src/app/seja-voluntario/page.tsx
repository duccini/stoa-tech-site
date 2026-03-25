"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import {
  ArrowRight,
  Code2,
  Palette,
  LineChart,
  Megaphone,
  Users,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const areas = [
  { value: "desenvolvimento", label: "Desenvolvimento", icon: Code2 },
  { value: "design", label: "Design / UX", icon: Palette },
  { value: "dados", label: "Dados / Analytics", icon: LineChart },
  { value: "marketing", label: "Marketing", icon: Megaphone },
  { value: "gestao", label: "Gestão de Projetos", icon: Briefcase },
  { value: "outros", label: "Outras áreas", icon: Users },
];

const experienceLevels = [
  { value: "iniciante", label: "Iniciante (0-1 ano)" },
  { value: "junior", label: "Júnior (1-3 anos)" },
  { value: "pleno", label: "Pleno (3-5 anos)" },
  { value: "senior", label: "Sênior (5+ anos)" },
  { value: "estudante", label: "Estudante" },
];

const availability = [
  { value: "2-4", label: "2-4 horas por semana" },
  { value: "4-8", label: "4-8 horas por semana" },
  { value: "8-12", label: "8-12 horas por semana" },
  { value: "12+", label: "Mais de 12 horas por semana" },
];

const SejaVoluntario = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    area: "",
    experience: "",
    availability: "",
    motivation: "",
    acceptedTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      toast({
        title: "Atenção",
        description: "Você precisa aceitar os termos para continuar.",
        variant: "destructive",
      });
      return;
    }

    console.log("Form Data:", formData);

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Inscrição enviada!",
      description: "Em breve entraremos em contato.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <section className="py-20 md:py-32">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Obrigado por se inscrever!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Recebemos sua inscrição e estamos muito felizes com seu
                  interesse em fazer parte da STOÁ. Nossa equipe entrará em
                  contato em breve para os próximos passos.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="rounded-full px-8"
                >
                  Fazer nova inscrição
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Seja Voluntário
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                Transforme sua carreira enquanto{" "}
                <span className="text-gradient">transforma vidas</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Junte-se a mais de 40 profissionais que estão usando suas
                habilidades para criar impacto social positivo.
              </p>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-12 bg-background border-b border-border">
          <div className="container">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Buscamos voluntários nas áreas de:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {areas.map((area) => (
                <div
                  key={area.value}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50"
                >
                  <area.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{area.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold border-b border-border pb-3">
                    Informações Pessoais
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp</Label>
                      <Input
                        id="phone"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        placeholder="linkedin.com/in/seuperfil"
                        value={formData.linkedin}
                        onChange={(e) =>
                          setFormData({ ...formData, linkedin: e.target.value })
                        }
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Info */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold border-b border-border pb-3">
                    Informações Profissionais
                  </h2>

                  <div className="space-y-2">
                    <Label>Área de atuação *</Label>
                    <Select
                      value={formData.area}
                      onValueChange={(value) =>
                        setFormData({ ...formData, area: value })
                      }
                      required
                    >
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Selecione sua área" />
                      </SelectTrigger>
                      <SelectContent>
                        {areas.map((area) => (
                          <SelectItem key={area.value} value={area.value}>
                            {area.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Nível de experiência *</Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) =>
                          setFormData({ ...formData, experience: value })
                        }
                        required
                      >
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {experienceLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Disponibilidade semanal *</Label>
                      <Select
                        value={formData.availability}
                        onValueChange={(value) =>
                          setFormData({ ...formData, availability: value })
                        }
                        required
                      >
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {availability.map((time) => (
                            <SelectItem key={time.value} value={time.value}>
                              {time.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">
                      Por que você quer ser voluntário na STOÁ?
                    </Label>
                    <Textarea
                      id="motivation"
                      placeholder="Conte um pouco sobre suas motivações..."
                      value={formData.motivation}
                      onChange={(e) =>
                        setFormData({ ...formData, motivation: e.target.value })
                      }
                      className="rounded-lg min-h-[120px]"
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptedTerms}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        acceptedTerms: checked as boolean,
                      })
                    }
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    Concordo em receber comunicações da STOÁ e entendo que meus
                    dados serão usados apenas para fins de voluntariado.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full gap-2 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Inscrição
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SejaVoluntario;

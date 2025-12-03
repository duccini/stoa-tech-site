import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "A STOÁ transformou completamente nossa presença digital. O site que desenvolveram nos ajudou a alcançar muito mais pessoas e doadores.",
    author: "Maria Silva",
    role: "Diretora",
    org: "ONG Esperança Viva",
  },
  {
    quote:
      "A dedicação dos voluntários é impressionante. Eles não apenas entregam tecnologia, mas entendem nossa causa e constroem junto conosco.",
    author: "João Santos",
    role: "Coordenador",
    org: "Instituto Futuro",
  },
  {
    quote:
      "Ser voluntário na STOÁ me permitiu crescer profissionalmente enquanto faço a diferença. É uma experiência transformadora.",
    author: "Ana Costa",
    role: "Voluntária",
    org: "Desenvolvedora Full Stack",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Quem já <span className="text-gradient">transformou</span> com a gente
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça as histórias de ONGs e voluntários que fazem parte da nossa
            jornada de impacto social.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.org}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

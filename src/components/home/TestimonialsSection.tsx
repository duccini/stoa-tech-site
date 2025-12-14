import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    <section id="depoimentos" className="relative py-20 md:py-28 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-background/95 dark:bg-background/98" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent border-primary/20 dark:border-accent/20 hover:bg-primary/15 dark:hover:bg-accent/15">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Histórias que <span className="text-gradient">inspiram</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça as experiências de ONGs e voluntários que fazem parte da nossa
            jornada de transformação social.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
            >
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <blockquote className="text-foreground mb-6 leading-relaxed flex-1">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
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

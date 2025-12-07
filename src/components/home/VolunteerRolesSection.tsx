import { Code2, Palette, LineChart, Megaphone } from "lucide-react";

const roles = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Frontend, Backend, Mobile, DevOps",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX, Branding, Ilustração",
  },
  {
    icon: LineChart,
    title: "Produto",
    description: "Product Owner, Scrum Master",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Social Media, Conteúdo, SEO",
  },
];

export function VolunteerRolesSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Áreas de atuação
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mx-auto mb-4">
                <role.icon className="h-7 w-7 text-white" />
              </div>
              <h4 className="font-semibold mb-1">{role.title}</h4>
              <p className="text-sm text-muted-foreground">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

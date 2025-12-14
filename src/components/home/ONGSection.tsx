import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ONGSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
            Para ONGs
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Sua ONG precisa de soluções tecnológicas?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Se sua organização precisa de um site, aplicativo ou sistema mas não tem 
            recursos para contratar, a STOÁ pode ajudar. Todos os nossos serviços são
            <strong className="text-foreground"> 100% gratuitos</strong>.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 gap-2 group"
          >
            <Link to="/contato">
              Solicitar Apoio Tecnológico
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

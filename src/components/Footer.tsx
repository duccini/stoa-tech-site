"use client";

import Link from "next/link";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/">
              <img
                src={
                  isDark
                    ? "/assets/logo-light.png"
                    : "/assets/logo-horizontal.png"
                }
                alt="STOÁ"
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Multiplicamos ações sociais por meio da tecnologia. Oferecemos
              serviços e produtos digitais gratuitos a outras ONGs, fortalecendo
              suas causas com o talento e dedicação dos nossos voluntários.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@stoa.org.br"
                className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/quem-somos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/#solucoes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Soluções
                </Link>
              </li>
              <li>
                <Link
                  href="/#depoimentos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Faça Parte</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/seja-voluntario"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Seja Voluntário
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contato@stoa.org.br"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <Link
                  href="/seja-voluntario"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Preciso de Ajuda Tech
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} STOÁ. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com 💜 por voluntários
          </p>
        </div>
      </div>
    </footer>
  );
}

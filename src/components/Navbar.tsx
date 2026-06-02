"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/seja-voluntario", label: "Seja Voluntário" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const { theme, setTheme } = useTheme();

  const pathname = usePathname(); // Substitui location.pathname
  const router = useRouter(); // Substitui navigate

  // Efeito para monitorar mudanças no Hash (âncoras)
  useEffect(() => {
    // Define o hash inicial
    setCurrentHash(window.location.hash);

    // Ouve mudanças no hash (cliques em âncoras)
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isDark = theme === "dark";

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");

      if (pathname === "/") {
        // Já está na home, apenas rola para a seção
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navega para a home.
        // Dica: O Next.js já lida com âncoras se você passar o caminho completo.
        router.push("/");

        // O timeout ainda é uma técnica válida para esperar a nova página montar
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
      return true;
    }
    return false;
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const isActive = (href: string) => {
    // Caso 1: Home exata
    if (href === "/") {
      return pathname === "/" && currentHash === "";
    }

    // Caso 2: Links de âncora (ex: /#quem-somos)
    if (href.startsWith("/#")) {
      const targetHash = href.replace("/", ""); // vira "#quem-somos"
      return pathname === "/" && currentHash === targetHash;
    }

    // Caso 3: Outras rotas (ex: /contato)
    return pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center">
          <img
            src={
              isDark ? "/assets/logo-light.png" : "/assets/logo-horizontal.png"
            }
            alt="STOÁ"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isHashLink = link.href.startsWith("/#");

            if (isHashLink) {
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </button>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button asChild variant="default" className="rounded-full px-6">
            <Link href="/seja-voluntario">Quero Ajudar</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith("/#");

              if (isHashLink) {
                return (
                  <button
                    key={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left ${
                      isActive(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild className="mt-2 rounded-full">
              <Link href="/seja-voluntario" onClick={() => setIsOpen(false)}>
                Quero Ajudar
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import {
  Accessibility,
  ZoomIn,
  ZoomOut,
  Eye,
  Contrast,
  RotateCcw,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  };

  const toggleGrayscale = () => {
    setGrayscale(!grayscale);
    if (!grayscale) {
      document.documentElement.style.filter = "grayscale(100%)";
    } else {
      document.documentElement.style.filter = "none";
    }
  };

  const resetAll = () => {
    setFontSize(100);
    setHighContrast(false);
    setGrayscale(false);
    document.documentElement.style.fontSize = "100%";
    document.documentElement.style.filter = "none";
    document.documentElement.classList.remove("high-contrast");
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="fixed bottom-6 left-6 z-[100] rounded-full w-12 h-12 shadow-lg bg-primary hover:bg-primary/90"
        aria-label="Abrir menu de acessibilidade"
      >
        <Accessibility className="h-5 w-5" />
      </Button>

      {/* Menu Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-50 w-72 bg-card border border-border rounded-2xl shadow-xl p-6 animate-fade-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-primary" />
              Acessibilidade
            </h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Tamanho do texto: {fontSize}%
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decreaseFontSize}
                  className="flex-1 gap-2"
                  aria-label="Diminuir tamanho do texto"
                >
                  <ZoomOut className="h-4 w-4" />
                  A-
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={increaseFontSize}
                  className="flex-1 gap-2"
                  aria-label="Aumentar tamanho do texto"
                >
                  <ZoomIn className="h-4 w-4" />
                  A+
                </Button>
              </div>
            </div>

            {/* High Contrast */}
            <Button
              variant={highContrast ? "default" : "outline"}
              className="w-full justify-start gap-2"
              onClick={toggleHighContrast}
              aria-pressed={highContrast}
            >
              <Contrast className="h-4 w-4" />
              Alto Contraste
              {highContrast && <span className="ml-auto text-xs">Ativo</span>}
            </Button>

            {/* Grayscale for color blindness */}
            <Button
              variant={grayscale ? "default" : "outline"}
              className="w-full justify-start gap-2"
              onClick={toggleGrayscale}
              aria-pressed={grayscale}
            >
              <Eye className="h-4 w-4" />
              Escala de Cinza
              {grayscale && <span className="ml-auto text-xs">Ativo</span>}
            </Button>

            {/* Reset */}
            <Button
              variant="secondary"
              className="w-full justify-start gap-2"
              onClick={resetAll}
            >
              <RotateCcw className="h-4 w-4" />
              Restaurar Padrão
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
            Utilize estas opções para melhorar sua experiência de navegação.
          </p>
        </div>
      )}
    </>
  );
}

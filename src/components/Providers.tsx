"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  // Criamos o QueryClient dentro de um state para garantir que seja instanciado apenas uma vez
  const [queryClient] = useState(() => new QueryClient());

  // Aguarda o componente montar no cliente para evitar avisos de hidratação

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        storageKey="stoa-theme"
      >
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
}

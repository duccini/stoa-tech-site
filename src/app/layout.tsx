import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css"; // Certifique-se de que seu CSS com Tailwind está aqui
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "STOÁ | Tecnologia para o Bem",
  description:
    "A STOÁ é uma ONG de tecnologia que multiplica ações sociais. Oferecemos serviços digitais gratuitos para ONGs e oportunidades de voluntariado para profissionais de tech.",
  authors: [{ name: "STOÁ" }],
  keywords: [
    "ONG",
    "tecnologia",
    "voluntariado",
    "impacto social",
    "desenvolvimento",
    "terceiro setor",
  ],
  alternates: {
    canonical: "https://stoa.org.br",
  },
  openGraph: {
    title: "STOÁ | Tecnologia para o Bem",
    description:
      "Multiplicamos ações sociais por meio da tecnologia. Serviços digitais gratuitos para ONGs.",
    type: "website",
    url: "https://stoa.org.br",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STOÁ | Tecnologia para o Bem",
    description: "Multiplicamos ações sociais por meio da tecnologia.",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

// Configuração da fonte DM Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  variable: "--font-dm-sans", // Cria uma variável CSS para usarmos no Tailwind
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

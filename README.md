# STOÁ | Tecnologia para o Bem

A **STOÁ** é uma organização social (ONG) focada em multiplicar o impacto de outras instituições por meio da tecnologia. Desenvolvemos produtos digitais gratuitos e oferecemos uma plataforma de voluntariado para profissionais de tecnologia que desejam aplicar suas habilidades em causas sociais.

## 🚀 Tecnologias e Frameworks

O projeto foi migrado de uma arquitetura Single Page Application (Vite) para uma estrutura de **Server-Side Rendering (SSR)** e **Static Site Generation (SSG)** utilizando o Next.js App Router para máxima performance e SEO.

- **Framework:** [Next.js 14+](https://nextjs.org/)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Componentes:** Shadcn/UI (Radix UI)
- **Gerenciamento de Dados:** TanStack Query (React Query)
- **Tema:** Next Themes (Suporte nativo a Dark/Light Mode)
- **Fontes:** DM Sans (via `next/font`)

## 📁 Estrutura do Projeto

```text
src/
├── app/              # Rotas, layouts e páginas (App Router)
├── components/       # Componentes React reutilizáveis
│   ├── ui/           # Componentes base do Shadcn/UI
│   └── layout/       # NavBar, Footer, etc.
├── hooks/            # Hooks customizados (navegação, tema, etc.)
├── lib/              # Configurações de bibliotecas e utilitários
└── types/            # Definições de tipos TypeScript
public/               # Arquivos estáticos (imagens, logos, ícones)
```

# Checklist de Progresso — Projeto E-commerce (React + TypeScript)

> Marque conforme avança. Cada fase representa um "marco" — se você concluiu a fase, está indo bem, mesmo que o ritmo não siga exatamente o cronograma original.

---

## Fase 0 — Preparação (concluída/em andamento)

- [x] Curso 05 — migrando componentes para React
- [x] Curso 06 — explorando estratégias de renderização (client-side rendering, fetch no `useEffect` / lib de data-fetching)
- [ ] Curso "TypeScript na prática: projeto completo com TypeScript e módulos" (ByteBank)
- [ ] Revisão prática de TS: tipar props, `useState<T>`, `type` vs `interface`

## Fase 1 — Mini-projetos de prática

- [ ] Listagem de produtos fake (`/produtos`) via `fetch`/hook customizado consumindo API pública
- [ ] Página de detalhe (`/produtos/:id`) com parâmetro dinâmico via React Router
- [ ] Função utilitária simples simulando uma API (ex: `lib/api/produtos.ts` retornando JSON mockado)
- [ ] Formulário com `onSubmit` + estado local (ex: favoritar produto)

> Se os 4 itens acima saíram sem travar muito, você está pronto pra Fase 2.

## Fase 2 — Setup do projeto real

- [x] Projeto criado com Vite (`npm create vite@latest`, template `react-ts`) + Tailwind
- [x] Prettier + ESLint configurados e funcionando juntos
- [x] Projeto criado no Supabase
- [x] `.env.local` configurado (prefixo `VITE_`) e `.env.example` commitado
- [ ] `lib/supabase/client.ts` criado e testado (uma query simples funcionando)
- [x] Estrutura de pastas base criada (`components/`, `lib/`, `types/`, `hooks/`, `store/`, `schemas/`, `pages/`)
- [ ] React Router instalado e configurado (`routes.tsx` com as rotas principais)
- [ ] Repositório no GitHub com README inicial

## Fase 3 — Modelagem de dados

- [ ] Tipos definidos: `Product`, `Category`, `CartItem` (em `types/`)
- [ ] Schema das tabelas criado no Supabase (produtos, categorias)
- [ ] Dados de teste populados (seed manual ou script — pode ser fake nessa fase)
- [ ] RLS básica configurada (mesmo que permissiva no início)

## Fase 4 — Estrutura visual base

- [ ] Componente raiz (`App.tsx`) com providers globais (roteador, contexto de auth, etc.)
- [ ] Layout da loja (`components/layout/ShopLayout.tsx`) com Header e Footer, usado via rota "layout" do React Router
- [ ] Identidade visual definida (paleta, tipografia — baseada em referências, não do zero)
- [ ] Componentes de UI genéricos criados (`Button`, `Input`, `Badge`)

## Fase 5 — Catálogo de produtos

- [ ] Home (`/`) exibindo produtos em destaque
- [ ] Listagem de produtos (`/produtos`) puxando dados reais do Supabase (via hook customizado, ex: `useProducts`)
- [ ] `ProductCard` componentizado
- [ ] Página de detalhe do produto (`/produtos/:id`)
- [ ] Filtro por categoria funcionando
- [ ] Busca por nome (usando `useSearch` com debounce)
- [ ] Estratégia de carregamento de dados escolhida com propósito (fetch direto, React Query/SWR, cache manual — e você sabe justificar por quê)

## Fase 6 — Carrinho

- [ ] Store do carrinho criada (Zustand)
- [ ] Botão "Adicionar ao carrinho" funcionando
- [ ] Página/modal do carrinho listando itens
- [ ] Cálculo de total, quantidade, remoção de item
- [ ] Persistência do carrinho (Supabase ou `localStorage`, conforme escopo decidido)

## Fase 7 — Checkout (escopo básico)

- [ ] Formulário de checkout com `onSubmit` + chamada à API do Supabase
- [ ] Validação com Zod (ex: integrado via `react-hook-form` + `zodResolver`)
- [ ] Confirmação de pedido (mesmo que sem pagamento real integrado ainda)

## Fase 8 — Refinamento

- [ ] Dados reais da loja da sua mãe integrados (amostra representativa, não o catálogo inteiro)
- [ ] Imagens tratadas/otimizadas (compressão manual ou lib tipo `vite-imagetools`, já que não há otimização automática como no Next)
- [ ] Responsividade revisada (mobile, tablet, desktop)
- [ ] Testes de performance com Lighthouse
- [ ] Ajustes de acessibilidade básica (alt em imagens, labels em formulários, contraste)

## Fase 9 — Testes (retomando o curso pausado)

- [ ] Curso "primeiros testes com Jest + RTL" finalizado (ou Vitest + RTL, mais comum em projetos Vite)
- [ ] Testes unitários escritos pros componentes principais do próprio e-commerce (`ProductCard`, `CartItem`, etc.)
- [ ] Pelo menos 1 teste de fluxo (E2E com Cypress ou Playwright, se seguir até o fim do curso)

## Fase 10 — Deploy e portfólio

- [ ] Deploy funcional na Vercel (ou Netlify, comum para SPAs Vite)
- [ ] Variáveis de ambiente configuradas em produção
- [ ] `README` completo (setup, decisões arquiteturais, prints/gif do projeto rodando)
- [ ] Projeto adicionado ao portfólio (joaoemanuels.pro) substituindo/complementando os destaques atuais
- [ ] LinkedIn atualizado mencionando o projeto

---

## Sinais de que você está indo bem (mesmo sem seguir 100% a ordem)

- Você consegue explicar **por que** escolheu a estratégia de carregamento de dados em cada página (fetch direto, cache, lib externa), não só que usou
- Seus componentes maiores que ~150 linhas você já sente vontade de quebrar em menores
- Você tipa por hábito, não porque "tem que", e usa `any` cada vez menos
- Você sabe onde cada tipo de lógica mora (dado → `lib/`, estado global → `store/`, tipo → `types/`) sem precisar pensar muito
- Quando você trava em algo, você sabe se é "Vite/build", "TypeScript" ou "React puro" — isso já é sinal de que virou conhecimento real, não decoreba

## Sinais de alerta (pausa e reavalia se acontecer)

- Está usando `any` em tudo e não voltando pra corrigir depois
- O projeto está crescendo em features novas antes de terminar o catálogo/carrinho básico
- Você não sabe mais explicar por que uma pasta existe ou o que vai dentro dela
- Está evitando o curso de testes indefinidamente

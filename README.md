# jpvariedades

E-commerce de produtos, decoração e itens para o lar, construído com React (Vite), TypeScript e Supabase.

## Sobre o projeto

O jpvariedades é uma loja virtual com catálogo de produtos, carrinho de compras persistente, busca e categorias (como Decoração e Cozinha). O projeto está em desenvolvimento ativo, seguindo um roadmap dividido em fases.

## Tecnologias

- **Build tool:** Vite
- **Biblioteca:** React
- **Linguagem:** TypeScript
- **Roteamento:** React Router
- **Estilização:** Tailwind CSS
- **Backend / Banco de dados:** Supabase (PostgreSQL)
- **Gerenciamento de estado:** Zustand (carrinho com persistência em `localStorage`)
- **Ícones:** lucide-react

## Funcionalidades

- [x] Navbar com busca, categorias, favoritos, carrinho e login
- [ ] Catálogo de produtos com filtros por categoria
- [ ] Página de produto individual
- [ ] Carrinho de compras persistente (Zustand + localStorage)
- [ ] Autenticação de usuário (Supabase Auth)
- [ ] Lista de favoritos
- [ ] Checkout
- [ ] Painel administrativo (cadastro de produtos)

> Atualize esta lista conforme as fases do roadmap forem concluídas.

## Estrutura do projeto

```
jpvariedades/
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   ├── images/            # Imagens estáticas (logo, ilustrações, placeholders)
│   │   └── icons/              # Ícones customizados que não vêm do lucide-react
│   │
│   ├── pages/                  # Páginas da aplicação (uma pasta = uma "rota" ou grupo de rotas)
│   │   ├── loja/                # Rotas públicas da loja
│   │   │   ├── Home.tsx
│   │   │   ├── Categoria.tsx           # /produtos?categoria=...
│   │   │   ├── ProdutoDetalhe.tsx      # /produtos/:id
│   │   │   ├── Busca.tsx               # /busca?q=...
│   │   │   ├── Carrinho.tsx
│   │   │   ├── Checkout.tsx
│   │   │   ├── Favoritos.tsx
│   │   │   └── CentralDeAjuda.tsx
│   │   ├── auth/                 # Rotas de autenticação
│   │   │   ├── Login.tsx
│   │   │   ├── Cadastro.tsx
│   │   │   └── RecuperarSenha.tsx
│   │   └── admin/                # Painel administrativo (cadastro de produtos)
│   │       ├── Dashboard.tsx
│   │       ├── ProdutosAdmin.tsx
│   │       └── ProdutoForm.tsx
│   │
│   ├── components/
│   │   ├── layout/              # Estrutura visual compartilhada entre páginas
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ShopLayout.tsx        # Layout com Navbar + Footer, usado nas rotas da loja
│   │   │   ├── AuthLayout.tsx        # Layout mais enxuto pras telas de login/cadastro
│   │   │   └── MobileBottomNav.tsx   # Navegação inferior fixa (estilo Shopee) no mobile
│   │   │
│   │   ├── ui/                  # Componentes de UI genéricos, reutilizáveis em todo o app
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Rating.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── Modal.tsx
│   │   │
│   │   ├── product/             # Componentes específicos de produto
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductCarousel.tsx      # Seções tipo "Ofertas do dia", "Mais vendidos"
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── ProductFilters.tsx
│   │   │   └── ProductReviews.tsx
│   │   │
│   │   ├── cart/                # Componentes do carrinho
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── CartDrawer.tsx           # Mini-carrinho lateral (aberto a partir da Navbar)
│   │   │
│   │   ├── checkout/
│   │   │   ├── CheckoutSteps.tsx
│   │   │   ├── AddressForm.tsx
│   │   │   ├── PaymentForm.tsx
│   │   │   └── OrderSummary.tsx
│   │   │
│   │   └── ai/                  # Tudo relacionado aos recursos de IA (chat, busca, recomendação)
│   │       ├── ChatWidget.tsx           # Botão flutuante + painel do chat (drawer/tela cheia)
│   │       ├── ChatMessageBubble.tsx    # Bolha de mensagem (usuário/assistente)
│   │       ├── ChatProductCard.tsx      # Mini-card de produto renderizado dentro do chat
│   │       ├── ChatSuggestionChips.tsx  # Chips de sugestão rápida ("Rastrear pedido", etc.)
│   │       ├── ChatInput.tsx            # Campo de input com suporte a anexar imagem
│   │       ├── AiSearchBar.tsx          # Busca com sugestão assistida por IA
│   │       └── AiRecommendedSection.tsx # Seção "Recomendados pra você" (rótulo de IA)
│   │
│   ├── hooks/
│   │   ├── useProducts.ts       # Busca de produtos (listagem, filtros, paginação)
│   │   ├── useProduct.ts        # Busca de um produto específico
│   │   ├── useSearch.ts         # Busca por nome com debounce
│   │   ├── useAuth.ts           # Estado de autenticação (Supabase Auth)
│   │   ├── useCart.ts           # Acesso simplificado ao cart-store
│   │   ├── useChat.ts           # Estado da conversa, envio de mensagens, streaming de resposta
│   │   └── useDebounce.ts
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts        # Instância do client Supabase
│   │   │   ├── products.ts      # Queries de produtos/categorias
│   │   │   ├── orders.ts        # Queries de pedidos/checkout
│   │   │   └── auth.ts          # Funções de login/cadastro/logout
│   │   ├── ai/
│   │   │   ├── client.ts        # Cliente/config da API de IA usada (chat, busca, recomendação)
│   │   │   ├── chat.ts          # Função que envia mensagem e trata a resposta (inclui parsing de produtos sugeridos)
│   │   │   └── search.ts        # Função de busca semântica/assistida por IA
│   │   └── utils/
│   │       ├── formatPrice.ts
│   │       ├── formatDate.ts
│   │       └── cn.ts            # Helper de merge de classes Tailwind (clsx/tailwind-merge)
│   │
│   ├── store/
│   │   ├── cart-store.ts        # Store Zustand do carrinho
│   │   ├── chat-store.ts        # Store Zustand do chat (mensagens, aberto/fechado, loading)
│   │   └── favorites-store.ts   # Store Zustand dos favoritos
│   │
│   ├── contexts/
│   │   └── AuthContext.tsx      # Contexto de sessão do usuário (se não centralizar tudo no useAuth)
│   │
│   ├── schemas/                 # Validações com Zod
│   │   ├── checkout.schema.ts
│   │   ├── auth.schema.ts
│   │   └── product.schema.ts
│   │
│   ├── types/
│   │   ├── product.ts           # Product, Category
│   │   ├── cart.ts              # CartItem
│   │   ├── chat.ts              # ChatMessage, ChatRole, ChatProductSuggestion
│   │   ├── order.ts             # Order, OrderStatus
│   │   └── user.ts              # User, Address
│   │
│   ├── routes.tsx               # Configuração das rotas (React Router)
│   ├── App.tsx                  # Componente raiz (Navbar + roteador + ChatWidget global)
│   ├── main.tsx                 # Ponto de entrada da aplicação
│   └── index.css
│
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .env.local
├── .env.example
└── package.json
```

## Pré-requisitos

- Node.js 18+
- Conta no [Supabase](https://supabase.com) com um projeto criado

## Como rodar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/joaoemanuels/jpvariedades.git
   cd jpvariedades
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env.local` na raiz do projeto com as variáveis do Supabase:

   ```env
   VITE_SUPABASE_URL=sua_url_do_projeto
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima
   ```

4. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Scripts disponíveis

| Comando           | Descrição                                   |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento (Vite) |
| `npm run build`   | Gera a build de produção                    |
| `npm run preview` | Roda um preview local da build de produção  |
| `npm run lint`    | Roda o linter                               |

## Identidade visual

- **Cor principal:** vinho/bordô (`#7c2d12`), usada na marca e nos elementos de destaque
- **Fonte:** sans-serif, alinhada ao restante do design system do projeto

## Roadmap

O desenvolvimento segue um plano em várias fases, cobrindo desde a estrutura base (schema do Supabase, rotas e layout) até funcionalidades completas de carrinho, autenticação e checkout. Consulte o board/planejamento interno do projeto para o detalhamento de cada fase.

## Autor

**João Emanuel**

- GitHub: [@joaoemanuels](https://github.com/joaoemanuels)
- LinkedIn: [joao-emanuels](https://linkedin.com/in/joao-emanuels)
- Portfólio: [joaoemanuels.pro](https://joaoemanuels.pro)

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

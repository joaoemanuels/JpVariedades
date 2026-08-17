// src/data/database.data.ts
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  CookingPot,
  House,
  Armchair,
  Lamp,
  Flower2,
  Sofa,
  Bath,
  BedDouble,
  BrushCleaning,
  Hammer,
  PawPrint,
  Truck,
  ArrowLeftRight,
  FileText,
  CreditCard,
  UserCog,
  ShieldCheck,
} from "lucide-react";

// ============================================================
// PRODUTO (base) — reflete o formato esperado da tabela
// `produtos` no Supabase. Todo produto no catálogo deriva daqui.
// ============================================================
export interface Produto {
  id: string;
  nome: string;
  imagem: string;
  preco: number;
}

// ============================================================
// PRODUTOS RELACIONADOS
// ============================================================
export interface ProdutoRelacionado extends Produto {
  novo?: boolean;
}

export const produtosRelacionados: ProdutoRelacionado[] = [
  {
    id: "1",
    nome: "Vaso Cerâmica Decorativo - Linha Terra",
    imagem: "https://placehold.co/400x400/e8ddd3/7c2d12?text=Vaso",
    preco: 65.9,
    novo: true,
  },
  {
    id: "2",
    nome: "Kit 4 Porta Copos Cortiça Premium",
    imagem: "https://placehold.co/400x400/e8ddd3/7c2d12?text=Porta+Copos",
    preco: 29.9,
  },
];

// ============================================================
// ITENS DO CARRINHO
// ============================================================
export interface ItemCarrinho extends Produto {
  quantidade: number;
  prontaEntrega: boolean;
}

export const itensIniciais: ItemCarrinho[] = [
  {
    id: "1",
    nome: "Luminária de Mesa Cerâmica Moderna - Bordeaux",
    imagem: "https://placehold.co/200x200/e8ddd3/7c2d12?text=Luminária",
    preco: 149.9,
    quantidade: 1,
    prontaEntrega: true,
  },
  {
    id: "2",
    nome: "Jogo de Toalhas Algodão Orgânico 5 Peças",
    imagem: "https://placehold.co/200x200/e8ddd3/7c2d12?text=Toalhas",
    preco: 89.9,
    quantidade: 1,
    prontaEntrega: true,
  },
];

// ============================================================
// OFERTAS DO DIA
// ============================================================
export interface Oferta extends Produto {
  precoAntigo: number;
  precoAtual: number;
  descontoPercentual: number;
}

export const ofertas: Oferta[] = [
  {
    id: "1",
    nome: "Caneca Cerâmica Terracota Minimalista 350ml",
    imagem: "https://placehold.co/400x400/e8ddd3/7c2d12?text=Caneca",
    preco: 49.9,
    precoAntigo: 49.9,
    precoAtual: 29.9,
    descontoPercentual: 40,
  },
  {
    id: "2",
    nome: "Luminária de Mesa Aço Escovado Articulada",
    imagem: "https://placehold.co/400x400/e8ddd3/7c2d12?text=Luminária",
    preco: 159.9,
    precoAntigo: 159.9,
    precoAtual: 119.9,
    descontoPercentual: 25,
  },
  {
    id: "3",
    nome: "Jogo de Toalhas Algodão Premium 5 Peças",
    imagem: "https://placehold.co/400x400/e8ddd3/7c2d12?text=Toalhas",
    preco: 129.9,
    precoAntigo: 129.9,
    precoAtual: 109.9,
    descontoPercentual: 15,
  },
  {
    id: "4",
    nome: "Vaso Decorativo Cimento Queimado Grande",
    imagem: "https://placehold.co/400x400/e8ddd3/7c2d12?text=Vaso",
    preco: 199.9,
    precoAntigo: 199.9,
    precoAtual: 99.9,
    descontoPercentual: 50,
  },
];

// ============================================================
// TÓPICOS DE AJUDA
// ============================================================
export interface TopicoAjuda {
  id: string;
  titulo: string;
  descricao: string;
  icone: LucideIcon;
  corIcone: string;
  corFundoIcone: string;
  href: string;
}

export const topicosAjuda: TopicoAjuda[] = [
  {
    id: "entregas",
    titulo: "Entregas e Frete",
    descricao: "Prazos, rastreamento e políticas de entrega.",
    icone: Truck,
    corIcone: "text-orange-600",
    corFundoIcone: "bg-orange-100",
    href: "/ajuda/entregas-e-frete",
  },
  {
    id: "trocas",
    titulo: "Trocas e Devoluções",
    descricao: "Como solicitar troca, prazos e reembolsos.",
    icone: ArrowLeftRight,
    corIcone: "text-indigo-500",
    corFundoIcone: "bg-indigo-100",
    href: "/ajuda/trocas-e-devolucoes",
  },
  {
    id: "pedidos",
    titulo: "Meus Pedidos",
    descricao: "Histórico de compras, notas fiscais e status.",
    icone: FileText,
    corIcone: "text-[#7c2d12]",
    corFundoIcone: "bg-orange-100",
    href: "/ajuda/meus-pedidos",
  },
  {
    id: "pagamentos",
    titulo: "Pagamentos",
    descricao: "Formas de pagamento, boletos e parcelamento.",
    icone: CreditCard,
    corIcone: "text-[#7c2d12]",
    corFundoIcone: "bg-orange-100",
    href: "/ajuda/pagamentos",
  },
  {
    id: "conta",
    titulo: "Minha Conta",
    descricao: "Alterar dados, senhas e preferências de e-mail.",
    icone: UserCog,
    corIcone: "text-stone-500",
    corFundoIcone: "bg-stone-200",
    href: "/ajuda/minha-conta",
  },
  {
    id: "privacidade",
    titulo: "Privacidade e Segurança",
    descricao: "Termos de uso e políticas de proteção de dados.",
    icone: ShieldCheck,
    corIcone: "text-emerald-600",
    corFundoIcone: "bg-emerald-100",
    href: "/ajuda/privacidade-e-seguranca",
  },
];

// ============================================================
// CATEGORIAS
// ============================================================
export interface Categoria {
  name: string;
  icon: LucideIcon;
}

export const categories: Categoria[] = [
  { name: "Decoração", icon: Sparkles },
  { name: "Cozinha", icon: CookingPot },
  { name: "Casa", icon: House },
  { name: "Organização", icon: Armchair },
  { name: "Iluminação", icon: Lamp },
  { name: "Jardim", icon: Flower2 },
  { name: "Móveis", icon: Sofa },
  { name: "Banheiro", icon: Bath },
  { name: "Cama, Mesa e Banho", icon: BedDouble },
  { name: "Limpeza", icon: BrushCleaning },
  { name: "Ferramentas", icon: Hammer },
  { name: "Pet", icon: PawPrint },
];

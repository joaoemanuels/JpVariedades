import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  CreditCard,
  FileText,
  ShieldCheck,
  Truck,
  UserCog,
} from "lucide-react";

export interface TopicoAjuda {
  id: string;
  titulo: string;
  descricao: string;
  icone: LucideIcon;
  corIcone: string;
  corFundoIcone: string;
  href: string;
}

const topicos: TopicoAjuda[] = [
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

function TopicoCard({ topico }: { topico: TopicoAjuda }) {
  const Icone = topico.icone;

  return (
    <a
      href={topico.href}
      className="flex flex-col gap-3 rounded-xl border border-stone-200 bg-white p-5 transition-shadow hover:shadow-md"
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full ${topico.corFundoIcone}`}
      >
        <Icone className={`h-5 w-5 ${topico.corIcone}`} strokeWidth={2} />
      </span>

      <div>
        <h3 className="font-bold text-stone-900">{topico.titulo}</h3>
        <p className="mt-1 text-sm text-stone-500">{topico.descricao}</p>
      </div>
    </a>
  );
}

export default function TopicosFrequentes() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="border-b border-stone-200 pb-3 text-lg font-bold text-stone-900">
        Tópicos Frequentes
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topicos.map((topico) => (
          <TopicoCard key={topico.id} topico={topico} />
        ))}
      </div>
    </div>
  );
}

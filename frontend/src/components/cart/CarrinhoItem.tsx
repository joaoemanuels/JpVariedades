import { Minus, Plus } from "lucide-react";

export interface ItemCarrinho {
  id: string;
  nome: string;
  imagem: string;
  preco: number;
  quantidade: number;
  prontaEntrega: boolean;
}

interface CarrinhoItemProps {
  item: ItemCarrinho;
  onAumentarQuantidade: (id: string) => void;
  onDiminuirQuantidade: (id: string) => void;
}

function formatarPreco(valor: number): string {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

export default function CarrinhoItem({
  item,
  onAumentarQuantidade,
  onDiminuirQuantidade,
}: CarrinhoItemProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-stone-100">
        <img
          src={item.imagem}
          alt={item.nome}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <p className="text-sm text-stone-800">{item.nome}</p>
        {item.prontaEntrega && (
          <span className="text-xs font-semibold text-stone-500">
            Pronta Entrega
          </span>
        )}
      </div>

      <p className="whitespace-nowrap text-base font-bold text-[#7c2d12]">
        R$ {formatarPreco(item.preco)}
      </p>

      <div className="flex items-center gap-2 rounded-lg border border-stone-300">
        <button
          type="button"
          aria-label="Diminuir quantidade"
          onClick={() => onDiminuirQuantidade(item.id)}
          className="flex h-8 w-8 items-center justify-center text-stone-600 hover:text-[#7c2d12] disabled:opacity-40"
          disabled={item.quantidade <= 1}
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="w-4 text-center text-sm font-medium text-stone-800">
          {item.quantidade}
        </span>
        <button
          type="button"
          aria-label="Aumentar quantidade"
          onClick={() => onAumentarQuantidade(item.id)}
          className="flex h-8 w-8 items-center justify-center text-stone-600 hover:text-[#7c2d12]"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

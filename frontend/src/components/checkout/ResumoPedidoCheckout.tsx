import { Lock, ShieldCheck } from "lucide-react";
import { formatarPreco } from "../../utils/formatarPrecoFrete";

export interface ItemResumoCheckout {
  id: string;
  nome: string;
  imagem: string;
  preco: number;
  quantidade: number;
}

interface ResumoPedidoCheckoutProps {
  itens: ItemResumoCheckout[];
  frete: number;
  onFinalizarCompra: () => void;
}

export default function ResumoPedidoCheckout({
  itens,
  frete,
  onFinalizarCompra,
}: ResumoPedidoCheckoutProps) {
  const subtotal = itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0,
  );
  const total = subtotal + frete;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-stone-200 bg-white p-6">
      <h2 className="text-base font-bold text-stone-900">Resumo do Pedido</h2>

      <div className="flex flex-col gap-3">
        {itens.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-stone-100">
              <img
                src={item.imagem}
                alt={item.nome}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="line-clamp-2 text-sm text-stone-800">
                {item.nome}
              </span>
              <span className="text-xs text-stone-500">
                Qtd: {item.quantidade}
              </span>
            </div>
            <span className="whitespace-nowrap text-sm font-bold text-[#7c2d12]">
              R$ {formatarPreco(item.preco)}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5 border-t border-stone-200 pt-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-stone-600">Subtotal</span>
          <span className="text-stone-800">R$ {formatarPreco(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-stone-600">Frete</span>
          <span className="text-stone-800">R$ {formatarPreco(frete)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-stone-200 pt-3">
        <span className="text-base font-bold text-stone-900">Total</span>
        <span className="text-xl font-bold text-[#7c2d12]">
          R$ {formatarPreco(total)}
        </span>
      </div>

      <button
        type="button"
        onClick={onFinalizarCompra}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#7c2d12] py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#6b2610]"
      >
        <Lock className="h-4 w-4" />
        Finalizar Compra
      </button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-stone-500">
        <ShieldCheck className="h-3.5 w-3.5" />
        Ambiente 100% seguro
      </p>
    </div>
  );
}

import { Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { formatarPreco } from "../../utils/formatarPrecoFrete";

interface ResumoPedidoProps {
  quantidadeItens: number;
  subtotal: number;
  desconto: number;
  freteGratis: boolean;
  onFinalizarCompra: () => void;
}

export default function ResumoPedido({
  quantidadeItens,
  subtotal,
  desconto,
  freteGratis,
  onFinalizarCompra,
}: ResumoPedidoProps) {
  const total = subtotal - desconto;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-stone-200 bg-white p-6">
      <h2 className="text-lg font-bold text-[#7c2d12]">Resumo do Pedido</h2>

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-stone-600">
            Subtotal ({quantidadeItens}{" "}
            {quantidadeItens === 1 ? "item" : "itens"})
          </span>
          <span className="text-stone-800">R$ {formatarPreco(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-stone-600">Frete</span>
          {freteGratis ? (
            <span className="font-semibold text-[#7c2d12]">Grátis</span>
          ) : (
            <span className="text-stone-800">A calcular</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#7c2d12]">Desconto</span>
          <span className="text-[#7c2d12]">- R$ {formatarPreco(desconto)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-stone-200 pt-4">
        <span className="text-base font-bold text-stone-900">Total</span>
        <span className="text-xl font-bold text-stone-900">
          R$ {formatarPreco(total)}
        </span>
      </div>

      <Link
        type="button"
        to="/checkout"
        onClick={onFinalizarCompra}
        className="w-full rounded-lg bg-[#7c2d12] py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#6b2610]"
      >
        Finalizar Compra
      </Link>

      <p className="flex items-center justify-center gap-1.5 text-xs text-stone-500">
        <Lock className="h-3.5 w-3.5" />
        Compra 100% Segura
      </p>
    </div>
  );
}

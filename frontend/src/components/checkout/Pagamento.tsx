import { CreditCard, QrCode, Wallet } from "lucide-react";
import { formatarNumeroCartao } from "../../utils/formatarNumeroCartao";
import { formatarValidade } from "../../utils/formatarValidade";
import type { CartaoForm } from "../../types/checkout";

export type MetodoPagamento = "cartao" | "pix";

interface PagamentoProps {
  metodoSelecionado: MetodoPagamento;
  onSelecionarMetodo: (metodo: MetodoPagamento) => void;
  cartao: CartaoForm;
  onChangeCartao: (campo: keyof CartaoForm, valor: string) => void;
}

export default function Pagamento({
  metodoSelecionado,
  onSelecionarMetodo,
  cartao,
  onChangeCartao,
}: PagamentoProps) {
  return (
    <section className="rounded-xl border border-stone-200 bg-white p-6">
      <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-stone-900">
        <Wallet className="h-4 w-4 text-[#7c2d12]" />
        Pagamento
      </h2>

      <div className="mb-5 flex gap-6 border-b border-stone-200">
        <button
          type="button"
          onClick={() => onSelecionarMetodo("cartao")}
          className={`flex items-center gap-1.5 border-b-2 pb-2 text-sm font-semibold transition-colors ${
            metodoSelecionado === "cartao"
              ? "border-[#7c2d12] text-[#7c2d12]"
              : "border-transparent text-stone-400 hover:text-stone-600"
          }`}
        >
          <CreditCard className="h-4 w-4" />
          Cartão de Crédito
        </button>
        <button
          type="button"
          onClick={() => onSelecionarMetodo("pix")}
          className={`flex items-center gap-1.5 border-b-2 pb-2 text-sm font-semibold transition-colors ${
            metodoSelecionado === "pix"
              ? "border-[#7c2d12] text-[#7c2d12]"
              : "border-transparent text-stone-400 hover:text-stone-600"
          }`}
        >
          <QrCode className="h-4 w-4" />
          Pix
        </button>
      </div>

      {metodoSelecionado === "cartao" ? (
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="numeroCartao"
              className="mb-1 block text-xs font-semibold text-stone-700"
            >
              Número do Cartão *
            </label>
            <input
              id="numeroCartao"
              type="text"
              inputMode="numeric"
              placeholder="0000 0000 0000 0000"
              value={cartao.numero}
              onChange={(e) =>
                onChangeCartao("numero", formatarNumeroCartao(e.target.value))
              }
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7c2d12]/20"
            />
          </div>

          <div>
            <label
              htmlFor="nomeImpresso"
              className="mb-1 block text-xs font-semibold text-stone-700"
            >
              Nome Impresso no Cartão *
            </label>
            <input
              id="nomeImpresso"
              type="text"
              value={cartao.nomeImpresso}
              onChange={(e) => onChangeCartao("nomeImpresso", e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7c2d12]/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="validade"
                className="mb-1 block text-xs font-semibold text-stone-700"
              >
                Validade (MM/AA) *
              </label>
              <input
                id="validade"
                type="text"
                inputMode="numeric"
                placeholder="MM/AA"
                value={cartao.validade}
                onChange={(e) =>
                  onChangeCartao("validade", formatarValidade(e.target.value))
                }
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7c2d12]/20"
              />
            </div>

            <div>
              <label
                htmlFor="cvv"
                className="mb-1 block text-xs font-semibold text-stone-700"
              >
                CVV *
              </label>
              <input
                id="cvv"
                type="text"
                inputMode="numeric"
                placeholder="123"
                maxLength={4}
                value={cartao.cvv}
                onChange={(e) =>
                  onChangeCartao(
                    "cvv",
                    e.target.value.replace(/\D/g, "").slice(0, 4),
                  )
                }
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7c2d12]/20"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-stone-300 py-8 text-center">
          <QrCode className="h-10 w-10 text-[#7c2d12]" strokeWidth={1.5} />
          <p className="text-sm text-stone-600">
            O QR Code do Pix será gerado no próximo passo, após a confirmação do
            pedido.
          </p>
        </div>
      )}
    </section>
  );
}

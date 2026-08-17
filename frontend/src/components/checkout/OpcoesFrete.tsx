import { Truck } from "lucide-react";
import { formatarPreco } from "../../utils/formatarPrecoFrete";

export interface OpcaoFrete {
  id: string;
  nome: string;
  prazo: string;
  preco: number;
}

interface OpcoesFreteProps {
  opcoes: OpcaoFrete[];
  opcaoSelecionadaId: string;
  onSelecionar: (id: string) => void;
}

export default function OpcoesFrete({
  opcoes,
  opcaoSelecionadaId,
  onSelecionar,
}: OpcoesFreteProps) {
  return (
    <section className="rounded-xl border border-stone-200 bg-white p-6">
      <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-stone-900">
        <Truck className="h-4 w-4 text-[#7c2d12]" />
        Opções de Frete
      </h2>

      <div className="flex flex-col gap-3">
        {opcoes.map((opcao) => {
          const selecionada = opcao.id === opcaoSelecionadaId;

          return (
            <label
              key={opcao.id}
              className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors ${
                selecionada
                  ? "border-[#7c2d12] bg-[#7c2d12]/5"
                  : "border-stone-200 hover:bg-stone-50"
              }`}
            >
              <span className="flex items-center gap-3">
                <input
                  type="radio"
                  name="frete"
                  checked={selecionada}
                  onChange={() => onSelecionar(opcao.id)}
                  className="h-4 w-4 accent-[#7c2d12]"
                />
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-stone-900">
                    {opcao.nome}
                  </span>
                  <span className="text-xs text-stone-500">{opcao.prazo}</span>
                </span>
              </span>

              <span
                className={`text-sm font-bold ${
                  opcao.preco === 0 ? "text-[#7c2d12]" : "text-stone-900"
                }`}
              >
                {formatarPreco(opcao.preco)}
              </span>
            </label>
          );
        })}
      </div>
    </section>
  );
}

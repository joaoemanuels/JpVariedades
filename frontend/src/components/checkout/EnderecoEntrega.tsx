import { MapPin } from "lucide-react";
import { useState } from "react";
import { formatarCep } from "../../utils/formatarCep";
import type { EnderecoForm } from "../../types/checkout";

interface EnderecoEntregaProps {
  valores: EnderecoForm;
  onChange: (campo: keyof EnderecoForm, valor: string) => void;
}

export default function EnderecoEntrega({
  valores,
  onChange,
}: EnderecoEntregaProps) {
  const [cepTocado, setCepTocado] = useState(false);

  const cepDigitos = valores.cep.replace(/\D/g, "");
  const cepInvalido =
    cepTocado && cepDigitos.length > 0 && cepDigitos.length !== 8;

  return (
    <section className="rounded-xl border border-stone-200 bg-white p-6">
      <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-stone-900">
        <MapPin className="h-4 w-4 text-[#7c2d12]" />
        Endereço de Entrega
      </h2>

      <div className="flex flex-col gap-4">
        <div className="max-w-xs">
          <label
            htmlFor="cep"
            className="mb-1 block text-xs font-semibold text-stone-700"
          >
            CEP *
          </label>
          <input
            id="cep"
            type="text"
            inputMode="numeric"
            placeholder="00000-000"
            value={valores.cep}
            onChange={(e) => onChange("cep", formatarCep(e.target.value))}
            onBlur={() => setCepTocado(true)}
            className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 ${
              cepInvalido
                ? "border-red-400 bg-red-50 focus:ring-red-200"
                : "border-stone-300 focus:ring-[#7c2d12]/20"
            }`}
          />
          {cepInvalido && (
            <p className="mt-1 text-xs text-red-500">
              CEP inválido. Por favor, verifique os dígitos.
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="endereco"
            className="mb-1 block text-xs font-semibold text-stone-700"
          >
            Endereço *
          </label>
          <input
            id="endereco"
            type="text"
            value={valores.endereco}
            onChange={(e) => onChange("endereco", e.target.value)}
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7c2d12]/20"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="numero"
              className="mb-1 block text-xs font-semibold text-stone-700"
            >
              Número *
            </label>
            <input
              id="numero"
              type="text"
              value={valores.numero}
              onChange={(e) => onChange("numero", e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7c2d12]/20"
            />
          </div>

          <div>
            <label
              htmlFor="complemento"
              className="mb-1 block text-xs font-semibold text-stone-700"
            >
              Complemento
            </label>
            <input
              id="complemento"
              type="text"
              value={valores.complemento}
              onChange={(e) => onChange("complemento", e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7c2d12]/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

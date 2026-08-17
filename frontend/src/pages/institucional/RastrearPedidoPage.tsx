import { useState } from "react";
import { PackageSearch, Search } from "lucide-react";

interface EtapaRastreio {
  titulo: string;
  data: string;
  concluida: boolean;
}

const etapasMock: EtapaRastreio[] = [
  { titulo: "Pedido confirmado", data: "12/08/2026", concluida: true },
  { titulo: "Em separação", data: "13/08/2026", concluida: true },
  { titulo: "A caminho", data: "14/08/2026", concluida: true },
  { titulo: "Entregue", data: "—", concluida: false },
];

export default function RastrearPedidoPage() {
  const [codigo, setCodigo] = useState("");
  const [resultado, setResultado] = useState<EtapaRastreio[] | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!codigo.trim()) return;
    setResultado(etapasMock);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <header className="mb-8 text-center">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-[#7c2d12]">
          <PackageSearch size={22} strokeWidth={1.8} />
        </div>
        <h1 className="text-3xl font-bold text-[#7c2d12]">Rastrear Pedido</h1>
        <p className="mt-3 text-stone-600">
          Informe o número do pedido ou o código de rastreio recebido por
          e-mail.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mb-8 flex gap-2">
        <input
          type="text"
          placeholder="Ex: JP123456789"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          className="flex-1 rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-[#7c2d12] focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center gap-2 rounded-lg bg-[#7c2d12] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#9b421c]"
        >
          <Search size={16} strokeWidth={2} />
          Buscar
        </button>
      </form>

      {resultado && (
        <div className="rounded-xl border border-stone-200 p-6">
          <h2 className="mb-5 text-sm font-semibold text-stone-800">
            Pedido {codigo.toUpperCase()}
          </h2>
          <div className="space-y-5">
            {resultado.map((etapa, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className={`mt-0.5 h-3 w-3 flex-shrink-0 rounded-full ${
                    etapa.concluida ? "bg-[#7c2d12]" : "bg-stone-300"
                  }`}
                />
                <div>
                  <p
                    className={`text-sm font-medium ${
                      etapa.concluida ? "text-stone-800" : "text-stone-400"
                    }`}
                  >
                    {etapa.titulo}
                  </p>
                  <p className="text-xs text-stone-500">{etapa.data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import { CalendarClock, PackageCheck, RefreshCcw, Truck } from "lucide-react";

interface Etapa {
  numero: number;
  titulo: string;
  descricao: string;
}

const etapas: Etapa[] = [
  {
    numero: 1,
    titulo: "Solicite a troca",
    descricao:
      "Acesse 'Meus Pedidos' e escolha o item que deseja trocar ou devolver.",
  },
  {
    numero: 2,
    titulo: "Escolha o motivo",
    descricao:
      "Informe se é troca por defeito, tamanho/modelo ou arrependimento.",
  },
  {
    numero: 3,
    titulo: "Envie o produto",
    descricao:
      "Utilize a etiqueta de postagem gratuita gerada automaticamente.",
  },
  {
    numero: 4,
    titulo: "Reembolso ou troca",
    descricao:
      "Após recebermos o item, processamos a troca ou o reembolso em até 5 dias úteis.",
  },
];

const regras = [
  {
    icone: CalendarClock,
    texto:
      "Prazo de até 7 dias corridos após o recebimento para arrependimento (CDC).",
  },
  {
    icone: PackageCheck,
    texto: "Produto deve estar sem uso, com embalagem original e nota fiscal.",
  },
  {
    icone: Truck,
    texto:
      "Frete de devolução é por nossa conta em casos de defeito ou erro no envio.",
  },
];

export default function PoliticasDeTrocaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-10 text-center">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
          <RefreshCcw size={22} strokeWidth={1.8} />
        </div>
        <h1 className="text-3xl font-bold text-[#7c2d12]">
          Políticas de Troca
        </h1>
        <p className="mt-3 text-stone-600">
          Simples, rápido e sem burocracia. Veja como funciona.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-5 text-lg font-semibold text-stone-800">
          Como solicitar
        </h2>
        <div className="space-y-4">
          {etapas.map((etapa) => (
            <div
              key={etapa.numero}
              className="flex gap-4 rounded-xl border border-stone-200 p-5"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#7c2d12] text-sm font-bold text-white">
                {etapa.numero}
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">{etapa.titulo}</h3>
                <p className="mt-1 text-sm text-stone-600">{etapa.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-lg font-semibold text-stone-800">
          Regras importantes
        </h2>
        <div className="space-y-3">
          {regras.map((regra, i) => {
            const Icone = regra.icone;
            return (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl bg-stone-50 p-4 text-sm text-stone-700"
              >
                <Icone
                  size={18}
                  strokeWidth={1.8}
                  className="flex-shrink-0 text-[#7c2d12]"
                />
                {regra.texto}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

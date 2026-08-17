import { Heart, Leaf, Package, Users } from "lucide-react";

const valores = [
  {
    icone: Heart,
    titulo: "Feito com Cuidado",
    descricao:
      "Cada produto é selecionado pensando em qualidade e durabilidade para a sua casa.",
  },
  {
    icone: Leaf,
    titulo: "Sustentabilidade",
    descricao:
      "Priorizamos parceiros e materiais que respeitam o meio ambiente.",
  },
  {
    icone: Package,
    titulo: "Curadoria própria",
    descricao:
      "Selecionamos pessoalmente cada item do nosso catálogo antes de chegar até você.",
  },
  {
    icone: Users,
    titulo: "Comunidade",
    descricao:
      "Construímos a JP Variedades ouvindo quem compra com a gente, todos os dias.",
  },
];

export default function SobreNosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#7c2d12]">Sobre Nós</h1>
        <p className="mt-3 text-stone-600">
          A JP Variedades nasceu para tornar a sua casa mais bonita, prática e
          aconchegante.
        </p>
      </header>

      <section className="mb-12 rounded-xl border border-stone-200 bg-stone-50 p-6">
        <h2 className="mb-3 text-lg font-semibold text-stone-800">
          Nossa história
        </h2>
        <p className="text-sm leading-relaxed text-stone-600">
          Começamos com um propósito simples: reunir em um só lugar produtos de
          decoração e utilidades domésticas com bom design e preço justo. Hoje
          seguimos crescendo, sempre com o mesmo cuidado do primeiro pedido
          enviado.
        </p>
      </section>

      <section>
        <h2 className="mb-5 text-lg font-semibold text-stone-800">
          O que nos move
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {valores.map((valor) => {
            const Icone = valor.icone;
            return (
              <div
                key={valor.titulo}
                className="flex gap-4 rounded-xl border border-stone-200 p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#7c2d12]">
                  <Icone size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">
                    {valor.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-stone-600">
                    {valor.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

import { ChevronRight } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";

interface Oferta {
  id: string;
  nome: string;
  imagem: string;
  precoAntigo: number;
  precoAtual: number;
  descontoPercentual: number;
}

const ofertas: Oferta[] = [
  {
    id: "1",
    nome: "Caneca Cerâmica Terracota Minimalista 350ml",
    imagem: "https://placehold.co/400x400/e8ddd3/7c2d12?text=Caneca",
    precoAntigo: 49.9,
    precoAtual: 29.9,
    descontoPercentual: 40,
  },
  {
    id: "2",
    nome: "Luminária de Mesa Aço Escovado Articulada",
    imagem: "https://placehold.co/400x400/e8ddd3/7c2d12?text=Luminária",
    precoAntigo: 159.9,
    precoAtual: 119.9,
    descontoPercentual: 25,
  },
  {
    id: "3",
    nome: "Jogo de Toalhas Algodão Premium 5 Peças",
    imagem: "https://placehold.co/400x400/e8ddd3/7c2d12?text=Toalhas",
    precoAntigo: 129.9,
    precoAtual: 109.9,
    descontoPercentual: 15,
  },
  {
    id: "4",
    nome: "Vaso Decorativo Cimento Queimado Grande",
    imagem: "https://placehold.co/400x400/e8ddd3/7c2d12?text=Vaso",
    precoAntigo: 199.9,
    precoAtual: 99.9,
    descontoPercentual: 50,
  },
];

function OfertaCard({ oferta }: { oferta: Oferta }) {
  return (
    <a
      href={`/produto/${oferta.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={oferta.imagem}
          alt={oferta.nome}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute right-2 top-2 rounded-md bg-[#7c2d12] px-2 py-1 text-xs font-bold text-white">
          -{oferta.descontoPercentual}%
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 min-h-10 text-sm text-stone-700">
          {oferta.nome}
        </h3>
        <div className="mt-auto pt-1">
          <p className="text-xs text-stone-400 line-through">
            R$ {formatPrice(oferta.precoAntigo)}
          </p>
          <p className="text-base font-bold text-stone-900">
            R$ {formatPrice(oferta.precoAtual)}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function DailyOfferts() {
  return (
    <section className="w-full bg-stone-50 px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-lg font-bold text-stone-900">
            Ofertas do dia <span aria-hidden="true">🔥</span>
          </h2>
          <a
            href="/ofertas"
            className="flex items-center gap-0.5 text-sm font-medium text-[#7c2d12] hover:underline"
          >
            Ver todas
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {ofertas.map((oferta) => (
            <OfertaCard key={oferta.id} oferta={oferta} />
          ))}
        </div>
      </div>
    </section>
  );
}

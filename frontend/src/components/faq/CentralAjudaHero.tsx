import { Search } from "lucide-react";

interface CentralAjudaHeroProps {
  busca: string;
  onChangeBusca: (valor: string) => void;
}

export default function CentralAjudaHero({
  busca,
  onChangeBusca,
}: CentralAjudaHeroProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-3xl font-bold text-[#7c2d12] sm:text-4xl">
        Como podemos ajudar?
      </h1>

      <div className="relative w-full max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
        <input
          type="text"
          placeholder="Busque por pedidos, trocas, frete..."
          value={busca}
          onChange={(e) => onChangeBusca(e.target.value)}
          className="w-full rounded-full border border-stone-300 bg-white py-3 pl-11 pr-4 text-sm text-stone-700 outline-none placeholder:text-stone-400 focus:ring-2 focus:ring-[#7c2d12]/20"
        />
      </div>
    </div>
  );
}

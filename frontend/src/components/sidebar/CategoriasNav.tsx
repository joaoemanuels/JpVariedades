import { categorias } from "../../data/categorias";

interface CategoriasNavProps {
  categoriaAtivaId?: string;
}

export default function CategoriasNav({
  categoriaAtivaId,
}: CategoriasNavProps) {
  return (
    <nav className="flex flex-col gap-1 p-3">
      {categorias.map((categoria) => {
        const Icone = categoria.icone;
        const ativa = categoria.id === categoriaAtivaId;

        return (
          <a
            key={categoria.id}
            href={categoria.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              ativa
                ? "bg-[#7c2d12]/10 text-[#7c2d12]"
                : "text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Icone className="h-4 w-4" strokeWidth={2} />
            {categoria.nome}
          </a>
        );
      })}
    </nav>
  );
}

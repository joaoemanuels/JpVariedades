import { produtosRelacionados, type ProdutoRelacionado } from "../../data/database.data";
import { formatarPreco } from "../../utils/formatarPrecoFrete";

function ProdutoRelacionadoCard({
  produto,
  onAdicionar,
}: {
  produto: ProdutoRelacionado;
  onAdicionar: (id: string) => void;
}) {
  return (
    <div className="flex w-44 flex-col overflow-hidden rounded-xl border border-stone-200 bg-white sm:w-48">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="h-full w-full object-cover"
        />
        {produto.novo && (
          <span className="absolute right-2 top-2 rounded-md bg-[#7c2d12] px-2 py-1 text-xs font-bold text-white">
            NOVO
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <h3 className="line-clamp-2 min-h-10 text-sm text-stone-700">
          {produto.nome}
        </h3>
        <p className="text-base font-bold text-[#7c2d12]">
          R$ {formatarPreco(produto.preco)}
        </p>

        <button
          type="button"
          onClick={() => onAdicionar(produto.id)}
          className="mt-1 w-full rounded-lg border border-[#7c2d12] py-2 text-sm font-semibold text-[#7c2d12] transition-colors hover:bg-[#7c2d12] hover:text-white"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default function ProdutosRelacionados() {
  function adicionarAoCarrinho(id: string) {
    console.log("Adicionar ao carrinho", id);
  }

  return (
    <section className="w-full bg-stone-50 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-lg font-bold text-[#7c2d12]">
          Quem comprou isso também levou
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {produtosRelacionados.map((produto) => (
            <ProdutoRelacionadoCard
              key={produto.id}
              produto={produto}
              onAdicionar={adicionarAoCarrinho}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

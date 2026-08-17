import { useState } from "react";
import type { ItemCarrinho } from "./CarrinhoItem";
import CarrinhoItem from "./CarrinhoItem";
import ResumoPedido from "./ResumoPedido";
import { itensIniciais } from "../../data/database.data";

const DESCONTO = 0;
const FRETE_GRATIS = true;

export default function Carrinho() {
  const [itens, setItens] = useState<ItemCarrinho[]>(itensIniciais);

  function aumentarQuantidade(id: string) {
    setItens((atual) =>
      atual.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item,
      ),
    );
  }

  function diminuirQuantidade(id: string) {
    setItens((atual) =>
      atual.map((item) =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item,
      ),
    );
  }

  function finalizarCompra() {
    console.log("Finalizar compra", itens);
  }

  const quantidadeItens = itens.reduce(
    (soma, item) => soma + item.quantidade,
    0,
  );

  const subtotal = itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0,
  );

  return (
    <section className="w-full bg-stone-50 px-4 py-8 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-[#7c2d12]">Meu Carrinho</h1>

          <div className="flex flex-col gap-4">
            {itens.map((item) => (
              <CarrinhoItem
                key={item.id}
                item={item}
                onAumentarQuantidade={aumentarQuantidade}
                onDiminuirQuantidade={diminuirQuantidade}
              />
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <ResumoPedido
            quantidadeItens={quantidadeItens}
            subtotal={subtotal}
            desconto={DESCONTO}
            freteGratis={FRETE_GRATIS}
            onFinalizarCompra={finalizarCompra}
          />
        </div>
      </div>
    </section>
  );
}

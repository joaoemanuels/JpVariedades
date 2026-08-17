import { useState } from "react";
import type { ItemResumoCheckout } from "../../components/checkout/ResumoPedidoCheckout";
import type { OpcaoFrete } from "../../components/checkout/OpcoesFrete";
import type { EnderecoForm } from "../../components/checkout/EnderecoEntrega";
import type {
  CartaoForm,
  MetodoPagamento,
} from "../../components/checkout/Pagamento";
import ResumoPedidoCheckout from "../../components/checkout/ResumoPedidoCheckout";
import EnderecoEntrega from "../../components/checkout/EnderecoEntrega";
import OpcoesFrete from "../../components/checkout/OpcoesFrete";
import Pagamento from "../../components/checkout/Pagamento";
import CheckoutLayout from "../../components/checkout/CheckoutLayout";

const itensPedido: ItemResumoCheckout[] = [
  {
    id: "1",
    nome: "Vaso Cerâmico Minimalista Bege Matte",
    imagem: "https://placehold.co/100x100/e8ddd3/7c2d12?text=Vaso",
    preco: 129.9,
    quantidade: 1,
  },
  {
    id: "2",
    nome: "Conjunto Castiçais Latão Polido",
    imagem: "https://placehold.co/100x100/e8ddd3/7c2d12?text=Castiçais",
    preco: 99.0,
    quantidade: 2,
  },
];

const opcoesFrete: OpcaoFrete[] = [
  {
    id: "expressa",
    nome: "Entrega Expressa",
    prazo: "Até 2 dias úteis",
    preco: 15.9,
  },
  { id: "padrao", nome: "Entrega Padrão", prazo: "Até 7 dias úteis", preco: 0 },
];

export default function CheckoutPage() {
  const [endereco, setEndereco] = useState<EnderecoForm>({
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
  });

  const [freteSelecionadoId, setFreteSelecionadoId] = useState("expressa");

  const [metodoPagamento, setMetodoPagamento] =
    useState<MetodoPagamento>("cartao");
  const [cartao, setCartao] = useState<CartaoForm>({
    numero: "",
    nomeImpresso: "",
    validade: "",
    cvv: "",
  });

  function handleChangeEndereco(campo: keyof EnderecoForm, valor: string) {
    setEndereco((atual) => ({ ...atual, [campo]: valor }));
  }

  function handleChangeCartao(campo: keyof CartaoForm, valor: string) {
    setCartao((atual) => ({ ...atual, [campo]: valor }));
  }

  function finalizarCompra() {
    console.log("Finalizar compra", {
      endereco,
      freteSelecionadoId,
      metodoPagamento,
      cartao,
    });
  }

  const freteSelecionado = opcoesFrete.find(
    (opcao) => opcao.id === freteSelecionadoId,
  );

  return (
    <CheckoutLayout
      resumo={
        <ResumoPedidoCheckout
          itens={itensPedido}
          frete={freteSelecionado?.preco ?? 0}
          onFinalizarCompra={finalizarCompra}
        />
      }
    >
      <EnderecoEntrega valores={endereco} onChange={handleChangeEndereco} />

      <OpcoesFrete
        opcoes={opcoesFrete}
        opcaoSelecionadaId={freteSelecionadoId}
        onSelecionar={setFreteSelecionadoId}
      />

      <Pagamento
        metodoSelecionado={metodoPagamento}
        onSelecionarMetodo={setMetodoPagamento}
        cartao={cartao}
        onChangeCartao={handleChangeCartao}
      />
    </CheckoutLayout>
  );
}

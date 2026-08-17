import { Banknote, CreditCard, QrCode } from "lucide-react";

interface FormaPagamento {
  icone: typeof CreditCard;
  titulo: string;
  descricao: string;
}

const formas: FormaPagamento[] = [
  {
    icone: CreditCard,
    titulo: "Cartão de Crédito",
    descricao:
      "Parcele em até 12x. Aceitamos as principais bandeiras: Visa, Mastercard, Elo e Amex.",
  },
  {
    icone: QrCode,
    titulo: "Pix",
    descricao: "Pagamento aprovado na hora, com 5% de desconto à vista.",
  },
  {
    icone: Banknote,
    titulo: "Boleto Bancário",
    descricao:
      "Compensação em até 2 dias úteis. O pedido é enviado após a confirmação do pagamento.",
  },
];

export default function PagamentosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#7c2d12]">
          Formas de Pagamento
        </h1>
        <p className="mt-3 text-stone-600">
          Escolha a opção mais conveniente para você na hora de finalizar sua
          compra.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {formas.map((forma) => {
          const Icone = forma.icone;
          return (
            <div
              key={forma.titulo}
              className="rounded-xl border border-stone-200 p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-[#7c2d12]">
                <Icone size={22} strokeWidth={1.8} />
              </div>
              <h2 className="font-semibold text-stone-800">{forma.titulo}</h2>
              <p className="mt-2 text-sm text-stone-600">{forma.descricao}</p>
            </div>
          );
        })}
      </div>

      <section className="mt-10 rounded-xl bg-stone-50 p-6 text-sm text-stone-600">
        <h2 className="mb-2 font-semibold text-stone-800">
          Dúvidas frequentes
        </h2>
        <p>
          Todos os pagamentos são processados de forma segura. Em caso de recusa
          do cartão, verifique os dados informados ou entre em contato com seu
          banco.
        </p>
      </section>
    </div>
  );
}

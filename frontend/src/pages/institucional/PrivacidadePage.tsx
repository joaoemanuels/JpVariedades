import { ShieldCheck } from "lucide-react";

interface SecaoPrivacidade {
  titulo: string;
  conteudo: string;
}

const secoes: SecaoPrivacidade[] = [
  {
    titulo: "1. Quais dados coletamos",
    conteudo:
      "Coletamos nome, e-mail, endereço, telefone e dados de pagamento necessários para processar seus pedidos e melhorar sua experiência na loja.",
  },
  {
    titulo: "2. Como usamos seus dados",
    conteudo:
      "Seus dados são usados exclusivamente para processar pedidos, entregas, comunicação sobre o status da compra e, quando autorizado, envio de ofertas.",
  },
  {
    titulo: "3. Compartilhamento",
    conteudo:
      "Não vendemos seus dados. Compartilhamos apenas com parceiros essenciais à operação, como transportadoras e processadores de pagamento.",
  },
  {
    titulo: "4. Segurança",
    conteudo:
      "Utilizamos criptografia e boas práticas de segurança para proteger suas informações contra acessos não autorizados.",
  },
  {
    titulo: "5. Seus direitos",
    conteudo:
      "Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail de contato, conforme a LGPD.",
  },
];

export default function PrivacidadePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-10 text-center">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <ShieldCheck size={22} strokeWidth={1.8} />
        </div>
        <h1 className="text-3xl font-bold text-[#7c2d12]">
          Privacidade e Segurança
        </h1>
        <p className="mt-3 text-stone-600">
          Última atualização: agosto de 2026
        </p>
      </header>

      <div className="space-y-6">
        {secoes.map((secao) => (
          <section
            key={secao.titulo}
            className="rounded-xl border border-stone-200 p-6"
          >
            <h2 className="mb-2 font-semibold text-stone-800">
              {secao.titulo}
            </h2>
            <p className="text-sm leading-relaxed text-stone-600">
              {secao.conteudo}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}

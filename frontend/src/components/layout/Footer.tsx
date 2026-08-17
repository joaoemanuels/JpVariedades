import { CreditCard, Wallet, Landmark } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const linksInstitucional: FooterLink[] = [
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Políticas de Troca", href: "/politicas-de-troca" },
  { label: "Privacidade", href: "/privacidade" },
];

const linksAjuda: FooterLink[] = [
  { label: "Pagamentos", href: "/pagamentos" },
  { label: "Fale Conosco", href: "/contato" },
  { label: "Rastrear Pedido", href: "/rastrear-pedido" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-bold text-[#7c2d12]">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-stone-600 underline decoration-stone-400 underline-offset-2 hover:text-[#7c2d12]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t-2 border-[#7c2d12] bg-stone-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-[#7c2d12]">jpvariedades</h2>
            <p className="max-w-55 text-sm text-stone-600">
              Sua casa mais bonita, com produtos de qualidade e preços que cabem
              no seu bolso.
            </p>
          </div>

          <FooterColumn title="Institucional" links={linksInstitucional} />
          <FooterColumn title="Ajuda" links={linksAjuda} />

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-[#7c2d12]">Pagamento</h3>
            <div className="flex items-center gap-3 text-[#7c2d12]">
              <CreditCard className="h-5 w-5" strokeWidth={1.75} />
              <Wallet className="h-5 w-5" strokeWidth={1.75} />
              <Landmark className="h-5 w-5" strokeWidth={1.75} />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-stone-300 pt-6">
          <p className="text-center text-xs text-stone-500">
            © {anoAtual} jpvariedades - Todos os direitos reservados.
          </p>
        </div>
      </div>

      
    </footer>
  );
}

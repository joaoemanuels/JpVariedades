type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "Categorias",
    href: "#categorias",
    active: true,
  },
  {
    label: "Ofertas",
    href: "#ofertas",
  },
  {
    label: "Novidades",
    href: "#novidades",
  },
  {
    label: "Mais Vendidos",
    href: "#mais-vendidos",
  },
];

export function Navbar() {
  return (
    <nav className="h-11 w-full border-y border-[#ead2c8] bg-[#f8f9fa]">
      <div className="mx-auto flex h-full items-center justify-center gap-8">
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            className={`relative flex h-full items-center text-[13px] font-semibold transition-colors ${
              index === 0
                ? "text-[#783817]"
                : "text-[#514744] hover:text-[#783817]"
            }`}
          >
            {item.label}

            {index === 0 && (
              <span className="absolute bottom-2.25 left-0 h-0.5 w-full rounded-full bg-[#783817]" />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}

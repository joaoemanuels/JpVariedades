import { Heart, Search, ShoppingCart, Sparkles, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="h-18 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-full items-center justify-evenly">
        <a href="/" className="flex shrink-0 items-center gap-3 text-[#783817]">
          <div className="flex h-12 w-12 items-center justify-center bg-[#f8f8f8]">
            <img
              src="/logo.svg"
              alt="JP Variedades"
              className="h-full w-full object-contain"
            />
          </div>

          <span className="text-lg font-bold">jpvariedades</span>
        </a>

        <div className="flex h-14 w-full max-w-140 items-center rounded-full border border-[#d9b7aa] bg-[#eef0f1] px-7">
          <Search size={26} className="shrink-0 text-[#4f4643]" />

          <input
            type="search"
            placeholder="Buscar com IA: descreva o que você precisa"
            className="min-w-0 flex-1 bg-transparent px-5 text-[18px] text-[#4f4643] placeholder:text-[#5c514d]"
          />

          <button type="button" className="shrink-0 text-[#783817]">
            <Sparkles size={27} />
          </button>
        </div>

        <nav className="flex shrink-0 items-center gap-5">
          <button
            type="button"
            aria-label="Favoritos"
            className="flex h-9 w-7 items-center justify-center text-[#6f2f13] transition hover:text-[#9b421c]"
          >
            <Heart size={21} strokeWidth={1.8} />
          </button>

          <Link
            to="/carrinho"
            aria-label="Carrinho"
            className="relative flex h-9 w-7 items-center justify-center text-[#6f2f13] transition hover:text-[#9b421c]"
          >
            <ShoppingCart size={21} strokeWidth={1.8} />

            <span className="absolute -right-2 -top-1 flex h-4.25 min-w-4.25 items-center justify-center rounded-full bg-[#b94716] px-1 text-[10px] font-bold text-white">
              3
            </span>
          </Link>

          <button
            type="button"
            aria-label="Minha conta"
            className="flex h-9 w-7 items-center justify-center text-[#6f2f13] transition hover:text-[#9b421c]"
          >
            <UserRound size={20} strokeWidth={1.8} />
          </button>
        </nav>
      </div>
    </header>
  );
}

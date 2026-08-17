import { Lock } from "lucide-react";

export default function CheckoutHeader() {
  return (
    <header className="w-full border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" className="text-lg font-bold text-[#7c2d12]">
          jpvariedades
        </a>

        <div className="flex items-center gap-1.5 text-sm text-stone-500">
          <Lock className="h-3.5 w-3.5" />
          Checkout Seguro
        </div>
      </div>
    </header>
  );
}

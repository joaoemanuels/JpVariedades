import { Sparkles, User } from "lucide-react";

interface AjudaRapidaProps {
  onFalarComIA: () => void;
  onFalarComHumano: () => void;
}

export default function AjudaRapida({
  onFalarComIA,
  onFalarComHumano,
}: AjudaRapidaProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-stone-200 bg-stone-100 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-lg font-bold text-stone-900">
          Precisa de ajuda rápida?
        </h2>
        <p className="mt-1 text-sm text-stone-500">
          Nosso Assistente IA está pronto para resolver suas dúvidas 24/7.
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:w-64 sm:shrink-0">
        <button
          type="button"
          onClick={onFalarComIA}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#7c2d12] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6b2610]"
        >
          <Sparkles className="h-4 w-4" />
          Fale com nosso Assistente IA
        </button>

        <button
          type="button"
          onClick={onFalarComHumano}
          className="flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white py-2.5 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-50"
        >
          <User className="h-4 w-4" />
          Falar com humano
        </button>
      </div>
    </div>
  );
}

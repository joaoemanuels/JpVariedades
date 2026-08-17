import { Sparkles } from "lucide-react";

interface AssistenteIACardProps {
  onFalarComIA: () => void;
}

export default function AssistenteIACard({
  onFalarComIA,
}: AssistenteIACardProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-stone-200 p-4">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100">
          <Sparkles className="h-5 w-5 text-[#7c2d12]" />
        </span>
        <div>
          <p className="text-sm font-bold text-[#7c2d12]">Assistente IA</p>
          <p className="text-xs leading-tight text-stone-500">
            Sugestões personalizadas para você
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onFalarComIA}
        className="w-full rounded-lg bg-[#7c2d12] py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6b2610]"
      >
        Falar com IA
      </button>
    </div>
  );
}

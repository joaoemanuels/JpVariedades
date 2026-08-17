import { HelpCircle, Settings } from "lucide-react";

export default function SidebarFooter() {
  return (
    <div className="flex flex-col gap-2 border-t border-stone-200 p-3">
      <a
        href="/configuracoes"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
      >
        <Settings className="h-4 w-4" strokeWidth={2} />
        Configurações
      </a>

      <a
        href="/ajuda"
        className="flex items-center gap-3 rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
      >
        <HelpCircle className="h-4 w-4" strokeWidth={2} />
        Ajuda
      </a>
    </div>
  );
}

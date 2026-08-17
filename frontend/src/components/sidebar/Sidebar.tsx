import AssistenteIACard from "./AssistenteIACard";
import CategoriasNav from "./CategoriasNav";
import SidebarFooter from "./SidebarFooter";

interface SidebarProps {
  categoriaAtivaId?: string;
}

export default function Sidebar({ categoriaAtivaId }: SidebarProps) {
  function falarComIA() {
    console.log("Abrir assistente IA");
  }

  return (
    <aside className="flex w-64 h-fit shrink-0 flex-col justify-between rounded-xl border border-stone-200 bg-white">
      <div>
        <AssistenteIACard onFalarComIA={falarComIA} />
        <CategoriasNav categoriaAtivaId={categoriaAtivaId} />
      </div>

      <SidebarFooter />
    </aside>
  );
}

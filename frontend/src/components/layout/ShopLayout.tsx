import { Outlet, useParams } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import Sidebar from "../sidebar/Sidebar";

export function ShopLayout() {
  const { categoriaId } = useParams<{ categoriaId?: string }>();

  return (
    <div className="min-h-screen bg-white">
      <button
        type="button"
        aria-label="Abrir assistente virtual"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#7c2d12] shadow-lg transition-transform hover:scale-105"
      >
        <Sparkles className="h-6 w-6 text-white" strokeWidth={1.75} />
        <span className="absolute -top-2 -right-1 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white shadow">
          Novo
        </span>
      </button>

      <Header />
      <Navbar />

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-6">
        <Sidebar categoriaAtivaId={categoriaId} />

        <div className="min-w-0 flex-1">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}

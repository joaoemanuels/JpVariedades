import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { Sparkles } from "lucide-react";

export function ShopLayout() {
  return (
    <div className="min-h-screen bg-white">
      <button
        type="button"
        aria-label="Abrir assistente virtual"
        className="group z-99 fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#7c2d12] shadow-lg transition-transform hover:scale-105"
      >
        <Sparkles className="h-6 w-6 text-white" strokeWidth={1.75} />
        <span className="absolute -top-2 -right-1 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white shadow">
          Novo
        </span>
      </button>

      <Header />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

// src/components/layout/InstitucionalLayout.tsx
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Header } from "./Header";

export function InstitucionalLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>

      <div className="mx-auto max-w-6xl">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

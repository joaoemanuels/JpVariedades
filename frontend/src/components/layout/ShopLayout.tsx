import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";
// import { MobileBottomNav } from "./MobileBottomNav";

export function ShopLayout() {
  return (
    <div className="">
      <Header />
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* <Footer />

      <MobileBottomNav /> */}
    </div>
  );
}

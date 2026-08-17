import type { ReactNode } from "react";
import CheckoutHeader from "./CheckoutHeader";

interface CheckoutLayoutProps {
  children: ReactNode;
  resumo: ReactNode;
}

export default function CheckoutLayout({
  children,
  resumo,
}: CheckoutLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-stone-50">
      <CheckoutHeader />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          <div className="flex flex-col gap-6">{children}</div>

          <div className="lg:sticky lg:top-6 lg:self-start">{resumo}</div>
        </div>
      </main>
    </div>
  );
}

import { createBrowserRouter } from "react-router-dom";
import { ShopLayout } from "../components/layout/ShopLayout";
import Home from "../pages/loja/Home";
import CarrinhoPage from "../pages/loja/CarrinhoPage";
import CheckoutPage from "../pages/loja/CheckoutPage";
import FAQ from "../pages/loja/FAQ";

export const router = createBrowserRouter([
  {
    element: <ShopLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      //   {
      //     path: "/produtos/:id",
      //     element: <ProdutoDetalhe />,
      //   },
      //   {
      //     path: "/busca",
      //     element: <Busca />,
      //   },
      {
        path: "/carrinho",
        element: <CarrinhoPage />,
      },
      //   {
      //     path: "/favoritos",
      //     element: <Favoritos />,
      //   },
      //   {
      //     path: "/ajuda",
      //     element: <CentralDeAjuda />,
      //   },
    ],
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { ShopLayout } from "../components/layout/ShopLayout";
import Home from "../pages/loja/Home";
import CarrinhoPage from "../pages/loja/CarrinhoPage";
import CheckoutPage from "../pages/loja/CheckoutPage";
import FAQ from "../pages/loja/FAQ";
import SobreNosPage from "../pages/institucional/SobreNosPage";
import PoliticasDeTrocaPage from "../pages/institucional/PoliticasDeTrocaPage";
import PrivacidadePage from "../pages/institucional/PrivacidadePage";
import PagamentosPage from "../pages/institucional/PagamentosPage";
import ContatoPage from "../pages/institucional/ContatoPage";
import RastrearPedidoPage from "../pages/institucional/RastrearPedidoPage";
import { InstitucionalLayout } from "../components/layout/InstitucionalLayout";

export const router = createBrowserRouter([
  {
    element: <ShopLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/carrinho", element: <CarrinhoPage /> },
      //   {
      //     path: "/produtos/:id",
      //     element: <ProdutoDetalhe />,
      //   },
      //   {
      //     path: "/busca",
      //     element: <Busca />,
      //   },

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
    element: <InstitucionalLayout />,
    children: [
      { path: "/sobre", element: <SobreNosPage /> },
      { path: "/politicas-de-troca", element: <PoliticasDeTrocaPage /> },
      { path: "/privacidade", element: <PrivacidadePage /> },
      { path: "/pagamentos", element: <PagamentosPage /> },
      { path: "/contato", element: <ContatoPage /> },
      { path: "/rastrear-pedido", element: <RastrearPedidoPage /> },
    ],
  },
  { path: "/checkout", element: <CheckoutPage /> },
]);

import { createBrowserRouter } from "react-router-dom";
import { ShopLayout } from "../components/layout/ShopLayout";
import Home from "../pages/loja/Home";

export const router = createBrowserRouter([
  {
    element: <ShopLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   {
      //     path: "/produtos",
      //     element: <Categoria />,
      //   },
      //   {
      //     path: "/produtos/:id",
      //     element: <ProdutoDetalhe />,
      //   },
      //   {
      //     path: "/busca",
      //     element: <Busca />,
      //   },
      //   {
      //     path: "/carrinho",
      //     element: <Carrinho />,
      //   },
    ],
  },
]);

// {
//   element: <ShopLayout />,
//   children: [
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/produtos",
//       element: <Categoria />,
//     },
//     {
//       path: "/produtos/:id",
//       element: <ProdutoDetalhe />,
//     },
//     {
//       path: "/busca",
//       element: <Busca />,
//     },
//     {
//       path: "/carrinho",
//       element: <Carrinho />,
//     },
//     {
//       path: "/checkout",
//       element: <Checkout />,
//     },
//     {
//       path: "/favoritos",
//       element: <Favoritos />,
//     },
//     {
//       path: "/ajuda",
//       element: <CentralDeAjuda />,
//     },
//   ],
// }

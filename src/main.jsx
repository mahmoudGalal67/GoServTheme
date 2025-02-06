import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import HomeDesign from "./pages/HomeDesign/HomeDesign.jsx";
import { AuthContextProvider } from "./components/context/Auth.jsx";

import { CookiesProvider, useCookies } from "react-cookie";
import { Provider } from "react-redux";
import { store } from "./store";
import Favorite from "./pages/Favorite/Favorite.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/productDetails/:id",
      element: <ProductDetails />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/Favorite",
      element: <Favorite />,
    },
    {
      path: "/design",
      element: <HomeDesign />,
    },
  ],
  { basename: "/" }
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CookiesProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </CookiesProvider>
  </Provider>
);

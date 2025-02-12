import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./assets/pages/layout/layout";
import ProductPage from "./assets/pages/ProductPage/ProductPage";
import GetProducts from "./assets/components/Data/GetProducts";
import Form from "./assets/components/Form/Form";
import Login from "./assets/components/Login/Login";
import Register from "./assets/components/Register/Register";
import About from "./assets/components/About";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap Login and Register pages in Layout
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <GetProducts />, // Default page after login
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Form />,
      },
    ],
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
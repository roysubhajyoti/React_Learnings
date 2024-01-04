import React from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./components/Header";
//named import
import { Title } from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import Error from "./components/ErrorC";

import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

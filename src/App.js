import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./components/Header";
//named import
import { Title } from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import Error from "./components/ErrorC";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart"; //normal import

//lets do lazy loading or chuncking or dynamic import

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense
            fallback={
              <h1
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                Loading . . . . . . . .
              </h1>
            }
          >
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

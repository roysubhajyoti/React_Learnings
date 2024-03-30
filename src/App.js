import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./components/Header";
//named import
// import { Title } from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import Error from "./components/ErrorC";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { Cart } from "./components/Cart";
// import Instamart from "./components/Instamart"; //normal import

//lets do lazy loading or chuncking or dynamic import

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Subhajyoti Roy",
    email: "roy@google.com",
  });
  return (
    <Provider store={Store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

import React from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./components/Header";
//named import
import { Title } from "./components/Header";

import Body from "./components/Body";

import Footer from "./components/Footer";

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(<HeaderCompon />);

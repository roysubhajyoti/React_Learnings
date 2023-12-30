/**
 - Create a `Header Component` from scratch using `Functional Component` with JSX
  - Add a `Logo on Left`
  - Add a `search bar in middle`
  - Add `User icon on right`
  - Add `CSS to make it look nice`
 */

import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => (
  <div className="header">
    <img src="../logo.png" id="img" className="logo" />
    <input type="search" className="search" />
    <h3 className="user">UserIcon</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

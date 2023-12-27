import React from "react";
import ReactDOM from "react-dom/client";
// //react code
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World! form React"
// );
// console.log(heading); //heading is a object
// //create a root and put heading inside it
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //here the render function will thake the object and create the element and put the element inside the root

/**
 in html 
    <div id="parent">
      <div id="child1">
        <h1>I'am an h1 tag</h1>        // here we have to use array of children for multiple child or siblings
        <h2>I'am an h2 tag</h2>
      </div>
      <div id="child2">
        <h1>I'am an h1 tag</h1>        // here we have to use array of children for multiple child or siblings
        <h2>I'am an h2 tag</h2>
      </div>
    </div>
 */
// by react the above HTML

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Im a h1 Tag of child1"),
    React.createElement("h2", {}, "Im a h2 Tag of child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im a h1 Tag of child2"),
    React.createElement("h2", {}, "Im a h2 Tag of child2"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

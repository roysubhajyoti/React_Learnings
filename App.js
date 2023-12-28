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
/*
const heading1 = React.createElement(
  "h1",
  { id: "heading", key: "h1" },
  "Im a h1 Tag of child1"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading", key: "h2" },
  "Im a h2 Tag of child1"
);
const heading3 = React.createElement(
  "h1",
  { id: "heading", key: "h3" },
  "Im a h1 Tag of child2"
);
const heading4 = React.createElement(
  "h2",
  { id: "heading", key: "h4" },
  "Im a h2 Tag of child2"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "c1" }, [heading1, heading2]),
  React.createElement("div", { id: "child2", key: "c2" }, [heading3, heading4]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/

//now lets use JSX instead as above tree structure is getting ugly

//react element
const heading = (
  <h1 id="title" key="name">
    Hello world!!! from JSX react element
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// now using function component
const name = "Subhajyoti";

const HeaderComponent = () => {
  return (
    <div>
      {
        <div>
          <h1>Any piece of js code can run here</h1>
          <h2>my name is {name}</h2>
        </div>
      }
      {heading}
      <h2>Hellu from Funtional component</h2>
      <HeaderCompon />
    </div>
  );
};

// another way

const HeaderCompon = () => (
  <div>
    <h2>Hellu from Funtional component arrow modified</h2>
  </div>
);
// root.render(heading);
root.render(<HeaderComponent />);
// root.render(<HeaderCompon />);

import { useEffect, useState } from "react";
import logo from "../assets/img/foodvilla.png";

//want to export both component then use named and defaulf export
export const Title = () => (
  <a href="/">
    <img className="logo" src={logo} alt="logo food vila" />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  // console.log("render");

  return (
    <div className="header">
      <Title />
      <div className="navItem">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Conatct</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>login</button>
      )}
    </div>
  );
};

export default Header;

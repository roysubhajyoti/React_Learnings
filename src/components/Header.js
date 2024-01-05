import { useEffect, useState } from "react";
import logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import Contact from "./Contact";
//want to export both component then use named and defaulf export
export const Title = () => (
  <Link to="/">
    <img className="logo" src={logo} alt="logo food vila" />
  </Link>
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
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/Contact">Conatct</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="logout" onClick={() => setIsLoggedIn(false)}>
          logout
        </button>
      ) : (
        <button className="login" onClick={() => setIsLoggedIn(true)}>
          login
        </button>
      )}
    </div>
  );
};

export default Header;

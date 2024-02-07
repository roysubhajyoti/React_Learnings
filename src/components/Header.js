import { useEffect, useState } from "react";
import logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import { useOnlinestatus } from "../utils/useOnlinestatus";
//want to export both component then use named and defaulf export
export const Title = () => (
  <Link to="/">
    <img
      className="w-20 mix-blend-multiply ml-5"
      src={logo}
      alt="logo food vila"
    />
  </Link>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isonline = useOnlinestatus();
  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  // console.log("render");

  return (
    <div className="flex justify-between h-20 bg-purple-400 items-center border-solid border-2 border-black ">
      <Title />
      <div>
        <ul className="navItem flex gap-11  hover:bg-transparent/50 hover:text-white p-3 rounded-md ease-in duration-200  hover:drop-shadow-lg">
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/about">
              About
            </Link>
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/Contact">
              Conatct
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/instamart">
              Instamart
            </Link>
          </li>
          <li>Cart</li>
          <li>OnlineStatus : {isonline ? "🟢" : "🔴"}</li>
        </ul>
      </div>

      <div className=" w-32">
        {isLoggedIn ? (
          <button
            className=" hover:bg-purple-500 rounded-md p-3 ease-in-out duration-200"
            onClick={() => setIsLoggedIn(false)}
          >
            logout
          </button>
        ) : (
          <button
            className=" hover:bg-purple-500 rounded-md  p-3 ease-in-out duration-200"
            onClick={() => setIsLoggedIn(true)}
          >
            login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

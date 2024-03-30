import { useState, useContext } from "react";
import logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import { useOnlinestatus } from "../utils/useOnlinestatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
//want to export both component then use named and defaulf export
export const Title = () => (
  <Link to="/">
    <img
      data-testid="logo"
      className="w-20 mix-blend-multiply ml-5"
      src={logo}
      alt="logo food vila"
    />
  </Link>
);
const Header = () => {
  const { user } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isonline = useOnlinestatus();
  const CartItems = useSelector((store) => store.Cart.items);
  console.log(CartItems);

  return (
    <div className="flex justify-between h-20 bg-purple-400 items-center border-solid border-2 border-black ">
      <Title />
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: -5 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          type: "spring",
          stiffness: 120,
        }}
      >
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
          <li className="flex gap-1">
            <Link style={{ textDecoration: "none" }} to="/cart">
              Cart
            </Link>
            <span
              data-testid="cartlen"
              className="rounded-md bg-orange-700  text-white"
            >
              {CartItems.length}
            </span>
          </li>
          <h1 data-testid="online-status">
            OnlineStatus : {isonline ? "🟢" : "🔴"}
          </h1>
        </ul>
      </motion.div>
      <div>
        <h1 className="text-xl font-bold text-white w-30">{user.name}</h1>
      </div>
      <div
        className=" w-32"
        whileHover={{ scaleY: 1.1, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
      >
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

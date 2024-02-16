import { useDispatch, useSelector } from "react-redux";
import FoodCart from "./FoodCart";
import { clearItems } from "../utils/CartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.Cart.items);
  // console.log(cartItems[0].card.info);
  const dispatch = useDispatch();
  const clearCart = (item) => {
    dispatch(clearItems(item));
  };

  return (
    <div className="w-full min-h-screen ">
      <div className="flex justify-evenly items-center bg-purple-100 rounded-md m-2">
        <h1 className="text-center text-5xl text-gray-500 leading-tight font-bold">
          Cart
        </h1>
        <h2 className="text-center font-semibold text-gray-500">
          Total Cart items {cartItems.length}
        </h2>
        <button
          className="bg-red-200 rounded-md p-2 hover:bg-green-500"
          onClick={() => clearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex justify-evenly">
        {cartItems.map((item) => (
          <FoodCart key={item.card.info} {...item.card.info} />
        ))}
      </div>
    </div>
  );
};

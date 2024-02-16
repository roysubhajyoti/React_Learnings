import { IMG_Cdn_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useResturantMenu } from "../utils/useResturantMenu";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../utils/CartSlice";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
const ResturantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const resturant = useResturantMenu(resId);
  if (resturant === null) return <Shimmer />;
  const {
    name,
    cloudinaryImageId,
    id,
    areaName,
    avgRatingString,
    city,
    costForTwoMessage,
  } = resturant?.cards[0]?.card?.card?.info;
  console.log(name);
  const { itemCards } =
    resturant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  const dispatch = useDispatch();
  const addItem = (item) => {
    dispatch(addItems(item));
  };
  const removeItem = (item) => {
    dispatch(removeItems(item));
  };
  return (
    <div className="w-full min-h-screen ">
      <div className="flex  justify-around p-5 bg-green-50 rounded-lg h-62">
        <div>
          <img
            src={IMG_Cdn_LINK + cloudinaryImageId}
            className="w-56 h-56  rounded-md"
          />
        </div>
        <div className="flex flex-col font-bold gap-2 justify-center">
          <h2 className="text-xl font-bold">{name}</h2>
          <h1>Resturant id: {id} </h1>
          <h3>{areaName}</h3>
          <h3>{city}</h3>
        </div>
        <div className="flex flex-col font-bold gap-2 justify-center">
          <h3>{avgRatingString} 🌟</h3>
          <h4>cost for two : {costForTwoMessage}</h4>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-5 bg-teal-100">
        <h1 className="text-center font-semibold text-xl bg-purple-100 rounded-md p-2">
          Restaurant Menu
        </h1>
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="flex justify-between ">
            <h1 className="text-bold text-lg w-1/3"> {item.card.info.name}</h1>
            <div className="bg-green-200 rounded-md flex gap-5 p-2">
              <button
                onClick={() => addItem(item)}
                className="hover:bg-green-400 rounded-md"
              >
                <CiSquarePlus />
              </button>
              <button
                onClick={() => removeItem()}
                className="hover:bg-red-400 rounded-md"
              >
                <CiSquareMinus />
              </button>
            </div>
            {"-- Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;

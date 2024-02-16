import { IMG_Cdn_LINK } from "../utils/constants";
const FoodCart = ({ name, imageId, price, defaultPrice }) => {
  return (
    <div className="res-card w-40 h-72 border-2 rounded-md hover:border-teal-300 bg-purple-200 m-2 ">
      <img
        className="w-32 h-36 m-2 rounded-md"
        src={IMG_Cdn_LINK + imageId}
        alt="foods"
      />
      <h2 className="text-gray-600 m-1 font-bold">{name}</h2>
      <h5 className="text-gray-600 m-1  ">
        Rupees-{price / 100 || defaultPrice / 100}
      </h5>
    </div>
  );
};

export default FoodCart;

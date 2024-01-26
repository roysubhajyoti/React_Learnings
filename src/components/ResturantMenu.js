import { IMG_Cdn_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useResturantMenu } from "../utils/useResturantMenu";
import Shimmer from "./Shimmer";

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
  return (
    <>
      <div>
        <img src={IMG_Cdn_LINK + cloudinaryImageId} />
        <h1>Resturant id: {id} </h1>
        <h2>{name}</h2>
        <h3>{areaName}</h3>
        <h3>{city}</h3>
        <h3>{avgRatingString} starts</h3>
        <h4>cost for two : {costForTwoMessage}</h4>
      </div>
      <div>
        <h1>RECOMENDED</h1>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}
            {"-- Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </div>
    </>
  );
};

export default ResturantMenu;

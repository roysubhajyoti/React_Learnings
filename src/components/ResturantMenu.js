import { useEffect, useState } from "react";
import { IMG_Cdn_LINK } from "../constants";
import { useParams } from "react-router-dom";
import { GET_RESTAURANT_MENU } from "../constants";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const [resturant, setResutant] = useState(null);

  useEffect(() => {
    getResturantDetails();
  }, []);

  const getResturantDetails = async () => {
    const data = await fetch(GET_RESTAURANT_MENU);
    const jsonData = await data.json();
    // console.log(jsonData);
    // console.log("here");
    setResutant(jsonData?.data);
  };
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

  const { itemCards } =
    resturant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log(itemCards);
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
      <div></div>
    </>
  );
};

export default ResturantMenu;

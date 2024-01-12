import { useEffect, useState } from "react";
import { IMG_Cdn_LINK } from "../constants";
import { useParams } from "react-router-dom";
import { GET_RESTAURANT_MENU } from "../constants";

const ResturantMenu = () => {
  const params = useParams();
  const { id } = params;
  const [resturant, setResutant] = useState({});
  useEffect(() => {
    getResturantDetails();
  }, []);

  async function getResturantDetails() {
    const data = await fetch(GET_RESTAURANT_MENU);
    const jsonData = await data.json();
    // console.log(jsonData.data.cards[0].card.card.info);
    setResutant(jsonData?.data?.cards[0]?.card?.card?.info);
  }

  return (
    <div>
      <img src={IMG_Cdn_LINK + resturant.cloudinaryImageId} />
      <h1>Resturant id: {resturant.id} </h1>
      <h2>{resturant.name}</h2>
      <h3>{resturant.areaName}</h3>
      <h3>{resturant.city}</h3>
      <h3>{resturant.avgRatingString} starts</h3>
      <h4>cost for two : {resturant.costForTwoMessage}</h4>
    </div>
  );
};

export default ResturantMenu;

import { useEffect, useState } from "react";
import { GET_RESTAURANT_MENU } from "../utils/constants";
export const useResturantMenu = (resId) => {
  //fetchdata from Swiggy menu API
  const [resturant, setResturant] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(GET_RESTAURANT_MENU + resId);
    const json = await response.json();
    setResturant(json.data);
  };

  return resturant;
};

import { useEffect, useState } from "react";
import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

function filterData(searchInput, resturants) {
  return resturants.filter((resturant) =>
    resturant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [allResturants, setAllResturants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  //const searchClicked =false;
  // const [searchClicked, setSearchClicked] = useState("false"); // for toggle purpose

  /*useEffect(()=>{
    console.log("callback");
  },[dependency Array])*/

  async function getResturants() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
    );
    let jsonData = await data.json();

    setAllResturants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResturants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  useEffect(() => {
    getResturants();
  }, []);

  // console.log(resturants);
  if (!allResturants) return null; //early return
  console.log("here");
  return allResturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-conatiner">
        <input
          type="text"
          className="search-ip"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the data according to the input
            let data = filterData(searchInput, allResturants);
            // update the data
            setFilteredResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardcontainer">
        <div className="res-container">
          {filteredResturants.map((resturant) => {
            return (
              <ResturantCard {...resturant.info} key={resturant.info.id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;

import { useEffect, useState } from "react";
import { resturantList } from "../utils/constants";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { swiggy_API } from "../utils/constants";
import { memo } from "react";
import { Link } from "react-router-dom";
import { useOnlinestatus } from "../utils/useOnlinestatus";

function filterData(searchInput, resturants) {
  return resturants.filter((resturant) =>
    resturant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  let [filteredResturants, setFilteredResturants] = useState([]);
  const [allResturants, setAllResturants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  //const searchClicked =false;
  // const [searchClicked, setSearchClicked] = useState("false"); // for toggle purpose

  /*useEffect(()=>{
    console.log("callback");
  },[dependency Array])*/

  async function getResturants() {
    let data = await fetch(swiggy_API);
    let jsonData = await data.json();
    // console.log(jsonData);
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
  const onlineStatus = useOnlinestatus();
  if (!onlineStatus)
    return (
      <h1>🔴You Are Offline It seems please check your Internet Connection</h1>
    );

  if (!allResturants) return null; //early return

  return allResturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-conatiner">
        <input
          type="text"
          className="search-ip"
          placeholder="Enter restaurant name "
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
        <button
          className="Top-btn"
          onClick={() => {
            const filteredList = filteredResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResturants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="cardcontainer">
        <div className="res-container">
          {filteredResturants.map((resturant) => {
            return (
              <Link
                key={resturant.info.id}
                to={"/resturant/" + resturant.info.id}
                style={{ textDecoration: "none" }}
              >
                <ResturantCard {...resturant.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;

import { useEffect, useState, useContext } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { swiggy_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlinestatus } from "../utils/useOnlinestatus";
import { OfflineShow } from "../utils/OfflineShow";
import { UserContext } from "../utils/UserContext";
function filterData(searchInput, resturants) {
  return resturants.filter((resturant) =>
    resturant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  let [filteredResturants, setFilteredResturants] = useState([]);
  const [allResturants, setAllResturants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { user, setUser } = useContext(UserContext);
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
  if (!onlineStatus) return <OfflineShow />;

  if (!allResturants) return null; //early return

  return allResturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-5 w-full min-h-screen  bg-emerald-100">
      <div
        className="search-conatiner mt-5 flex justify-center gap-5 items-center h-10 hover:bg-transparent
      drop-shadow-md"
      >
        <input
          type="text"
          className="search-ip rounded-lg w-96 h-10 border-solid border-2 p-2"
          placeholder="Enter restaurant name "
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn  pl-4 pr-4 border-2 rounded-md bg-lime-100"
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
          className="Top-btn pl-4 pr-4 border-2 rounded-md bg-lime-300"
          onClick={() => {
            const filteredList = filteredResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResturants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          placeholder={"Enter name"}
          className=" rounded-lg w-30 h-10 border-solid border-2 p-2"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <input
          placeholder={"Enter email"}
          className=" rounded-lg w-30 h-10 border-solid border-2 p-2"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className="cardcontainer ">
        <div className="res-container flex flex-wrap gap-8 justify-center items-center mb-5">
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
    </div>
  );
};

export default Body;

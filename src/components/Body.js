import { useState } from "react";
import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";

function filterData(searchInput, resturants) {
  return resturants.filter((resturant) =>
    resturant.info.name.includes(searchInput)
  );
}

const Body = () => {
  const [resturants, setResturants] = useState(resturantList);
  const [searchInput, setSearchInput] = useState("");
  //const searchClicked =false;
  // const [searchClicked, setSearchClicked] = useState("false");
  return (
    <>
      <div className="search-conatiner">
        <input
          type="text"
          className="search-ip"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            if (e.target.value === "") {
              setResturants(resturants);
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the data according to the input
            let data = filterData(searchInput, resturants);
            // update the data
            setResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardcontainer">
        <div className="res-container">
          {resturants.map((resturant) => {
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

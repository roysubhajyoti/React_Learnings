import { useState } from "react";
import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";
const Body = () => {
  const [searchInput, setSearchInput] = useState("KFC");
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
          }}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="cardcontainer">
        <div className="res-container">
          {resturantList.map((resturant) => {
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

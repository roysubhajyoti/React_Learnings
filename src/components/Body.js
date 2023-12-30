import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Bar</div>
      <div className="res-container">
        {resturantList.map((resturant) => {
          return <ResturantCard {...resturant.info} key={resturant.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;

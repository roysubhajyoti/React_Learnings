import { IMG_Cdn_LINK } from "../constants";
const ResturantCard = ({
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
}) => {
  //now instead of props we can do destructuting
  // console.log(props);
  //let again destructure resturant.info
  //let { name, cloudinaryImageId, avgRatingString, cuisines } = resturant.info;
  return (
    <div className="res-card">
      <img src={IMG_Cdn_LINK + cloudinaryImageId} alt="foods" />
      <h2 style={{ padding: "5px" }}>{name}</h2>
      <h3 style={{ padding: "5px" }}>{avgRatingString} rating</h3>
      <h5 style={{ padding: "5px", color: "gray" }}>{cuisines.join(", ")}</h5>
    </div>
  );
};

export default ResturantCard;

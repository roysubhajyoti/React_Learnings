import { IMG_Cdn_LINK } from "../utils/constants";

const ResturantCard = ({
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
  costForTwo,
  totalRatingsString,
}) => {
  //now instead of props we can do destructuting
  // console.log(props);
  //let again destructure resturant.info
  //let { name, cloudinaryImageId, avgRatingString, cuisines } = resturant.info;
  return (
    <div className="res-card w-72 h-[410] border-4 rounded-md hover:border-black drop-shadow-2xl shadow-md">
      <img
        className="w-[260] h-52 m-2 rounded-md"
        src={IMG_Cdn_LINK + cloudinaryImageId}
        alt="foods"
      />
      <h2 className="text-gray-600 m-1 font-bold">{name}</h2>
      <h3 className="text-gray-600 m-1 ">
        {totalRatingsString} {avgRatingString} ⭐ rating
      </h3>
      <h5 className="text-gray-600 m-1  ">{cuisines.join(", ")}</h5>
      <h5 className="text-gray-600 m-1  ">{costForTwo}</h5>
    </div>
  );
};

export default ResturantCard;

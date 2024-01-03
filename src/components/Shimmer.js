import "./Shimmer__card.css";
const Shimmer = () => {
  return (
    <div className="res-container">
      {Array.from({ length: 10 }).map((el, i) => {
        return <div className="shimmer__card" key={i}></div>;
      })}
    </div>
  );
};

export default Shimmer;

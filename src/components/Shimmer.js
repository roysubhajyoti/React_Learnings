import "./Shimmer__card.css";
const Shimmer = () => {
  return (
    <div className="res-container--shimmer">
      <div className="search__bar__shimmer">
        <input type="text" className="input_card" />
        <button className="input__button"></button>
      </div>
      <div className="shimmer_div">
        {Array.from({ length: 12 }).map((el, i) => {
          return <div className="shimmer__card" key={i}></div>;
        })}
      </div>
    </div>
  );
};

export default Shimmer;

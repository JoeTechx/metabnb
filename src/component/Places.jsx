import { placeToStay, placeHeader, placeHeaderBtn } from "../data";
import { useState } from "react";
import Card from "../UI/Card";
const Places = () => {
  const [isFilterShowing, setIsFilterShowing] = useState(false);
  return (
    <section className="places__to-stay">
      <div className="container places__container">
        <div
          className={`place__filter ${
            isFilterShowing ? "show__nav" : "hide__Nav"
          }`}
        >
          {placeHeader.map(({ id, name, icon }) => {
            return (
              <button className="filter" key={id}>
                {name}
                {icon}
              </button>
            );
          })}
        </div>
        <div className="MetaFilter">
          {placeHeaderBtn.map(({ id, name, icon }) => {
            return (
              <button
                className="btnFilter"
                key={id}
                onClick={() => setIsFilterShowing((prev) => !prev)}
              >
                {name}
                {icon}
              </button>
            );
          })}
        </div>
        <div className="adventures__wrapper places__wrapper">
          {placeToStay.map(
            ({
              id,
              Image,
              title,
              amount,
              distance,
              daysNumber,
              star1,
              star2,
              star3,
              star4,
              star5,
            }) => {
              return (
                <Card key={id} className="adventures__adventure">
                  <img src={Image} alt="" />
                  <div className="TA">
                    <small>{title}</small>
                    <small>{amount}</small>
                  </div>
                  <div className="DD">
                    <small>{distance}</small>
                    <small>{daysNumber}</small>
                  </div>
                  <div className="star">
                    <span>{star1}</span>
                    <span>{star2}</span>
                    <span>{star3}</span>
                    <span>{star4}</span>
                    <span>{star5}</span>
                  </div>
                </Card>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Places;

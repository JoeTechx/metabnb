import Card from "../UI/Card";
import { adventure } from "../data";

const Adventure = () => {
  return (
    <section className="adventures">
      <div className="container adventures__container">
        <h2>Inspiration for your next adventure</h2>

        <div className="adventures__wrapper">
          {adventure.map(
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

export default Adventure;

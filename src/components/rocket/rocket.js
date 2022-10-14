/* eslint-disable */
import propTypes from "prop-types";
import "./rocket.css";
function Rocket({
  id,
  rocket_name,
  description,
  image,
  reserve,
  cancel,
  isReserved,
}) {
  return (
    <div className="container">
      <div className="row">
        <img className="rocket col-4" src={image} alt="Rocket" />
        <div className="col-8">
          <h3 className="col-12">{rocket_name}</h3>
          <p className="col-12 my-4">
            <span className="reserve-text">
              {isReserved ? "Reserved" : " "}{" "}
            </span>
            {description}
          </p>
          {isReserved && (
            <button
              className="cancel-btn p-3 col-4"
              type="button"
              onClick={() => cancel(id)}
            >
              {" "}
              Cancel Reservation
            </button>
          )}{" "}
          {!isReserved && (
            <button
              className="reserve-btn p-3 col-4"
              type="button"
              onClick={() => reserve(id)}
            >
              {" "}
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

Rocket.prototype = {
  id: propTypes.number.isRequired,
  rocket_name: propTypes.string.isRequired,
  describe: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  reserve: propTypes.func.isRequired,
  cancel: propTypes.func.isRequired,
  isRequired: propTypes.bool.isRequired,
};

export default Rocket;

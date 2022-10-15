import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRockets,
  ChangeStatus,
} from '../redux/RocketActions/RocketAction';

function RocketList() {
  const rockets = useSelector((state) => state.rockets);
  // eslint-disable-next-line
  console.log('rockets list : ', rockets);
  const dispatch = useDispatch();
  const handleChangeBtn = (id) => {
    dispatch(ChangeStatus(id));
  };
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [rockets, dispatch]);
  return (
    <div className="cardContainer">
      {rockets.map((rocket) => (
        <div key={rockets.length} className="card">
          <div className="card-1">
            <div className="cardImg">
              <img src={rocket.flickr_images} alt="code-vector" />
            </div>
            <div className="cardContent">
              <p className="p1">{rocket.rocket_name}</p>
              {rocket.reserved && <span className="spanMessage">Reserved</span>}
              <p className="p2">{rocket.description}</p>
              {rocket.reserved ? (
                <button
                  className="cancel"
                  onClick={() => handleChangeBtn(rocket.id)}
                  type="button"
                >
                  Cancel reservation
                </button>
              ) : (
                <button
                  className=" button-a join"
                  onClick={() => handleChangeBtn(rocket.id)}
                  type="button"
                >
                  Reserve Rocket
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default RocketList;

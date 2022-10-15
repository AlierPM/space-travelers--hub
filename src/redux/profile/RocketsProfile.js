import React from 'react';
import { useSelector } from 'react-redux';

const AvailableRockets = () => {
  const rockets = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.reserved === true,
  );
  if (rockets.length === 0) {
    return (
      <>
        <div className="availableRockets">
          <h1>My Rockets</h1>
          <p>No rockets reserved</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="availableRockets">
        <h1>My Rockets</h1>
        <div className="rocketTable">
          {rockets.map((rocket) => (
            <p className="list" key={rocket.length}>
              {rocket.rocket_name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
export default AvailableRockets;

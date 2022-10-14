/* eslint-disable */
import { useSelector } from "react-redux";
import "./profile.css";
const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRocket = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="profile">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">My Missions</th>
          </tr>
        </thead>
        <tbody>
          {reservedRocket.map((rocket) => {
            return (
              <td scope="col" id={rocket.id}>
                {rocket.rocket_name}
              </td>
            );
          })}
        </tbody>
      </table>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">My Rockets</th>
          </tr>
        </thead>
        <tbody>
          {reservedRocket.map((rocket) => {
            return <td id={rocket.id}>{rocket.rocket_name}</td>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;

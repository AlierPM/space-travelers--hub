import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import AvailableRockets from '../redux/profile/RocketsProfile';

function Profile() {
  const profileMissonData = useSelector((state) => state.profile.joined);
  return (
    <div className="container">
      {profileMissonData.length === 0 ? (
        <div className="displayMission">
          <h1> My Missions</h1>
          <p>No Missions joined </p>
        </div>
      ) : (
        <div className="displayMission">
          <h1> My Missions</h1>
          <Table bordered className="profileTable">
            <tbody>
              {profileMissonData.map((item) => (
                <tr key={uuid}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <AvailableRockets className="displayRocket" />
    </div>
  );
}

export default Profile;

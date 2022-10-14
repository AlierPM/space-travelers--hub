/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/profile/profileMission';

const Mission = (props) => {
  const { missionName, missionDesc } = props;
  const joinedMission = useSelector((state) => state.profile.joined);
  const dispatch = useDispatch();

  const handleJoin = (e) => {
    e.preventDefault();
    const name = missionName;
    if (joinedMission.includes(name)) {
      return;
    }
    dispatch(joinMission(name));
  };
  const handleLeave = (e) => {
    e.preventDefault();
    dispatch(leaveMission(missionName));
  };

  return (
    <tr>
      <td> {missionName}</td>
      <td>{missionDesc}</td>
      {joinedMission.includes(missionName) && (
        <td colSpan={1} className="align">
          <span className="badge-primary">Active Member</span>
        </td>
      )}

      {!joinedMission.includes(missionName) && (
        <td colSpan={1} className="align">
          <span className="badge-primary red">Not a Member</span>
        </td>
      )}
      {joinedMission.includes(missionName) && (
        <td className="align">
          <button type="button" className="leave-btn" onClick={handleLeave}>
            Leave Mission
          </button>
        </td>
      )}
      {!joinedMission.includes(missionName) && (
        <td className="align">
          <button
            type="button"
            className="join-btn align-middle"
            onClick={handleJoin}
          >
            Join Mission
          </button>
        </td>
      )}
    </tr>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
};

export default Mission;

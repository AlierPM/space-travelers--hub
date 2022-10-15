import React, { useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Rocketcontainer from '../rocket/rocketcontainer';
import MissionCard from '../mission/missionCard';
import Profile from '../myProfile/Profile';
import DragonPage from '../dragon/dragon';
import { loadDragons } from '../../redux/dragon/dragon';
import { fetchRockets } from '../../redux/rocket/rocketSlice';
import { fetchMissions } from '../../redux/mission/missionSlice';

function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const getDragons = () => {
    dispatch(loadDragons());
  };
  useEffect(() => {
    getDragons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const styleNav = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <div>
      <header className="panel-bg">
        <div className="navigation">
          <div className="logoFrame">
            <img className="logo" src="/planet.png" alt="space logo" />
            <span className="Logo-Text">Space Travelers Hub</span>
          </div>
          <ul>
            <li>
              <NavLink style={styleNav} to="/" className="Mission Text-Style-3">
                Rocket
              </NavLink>
            </li>
            <li>
              <NavLink
                style={styleNav}
                to="/mission"
                className="Mission Text-Style-3"
              >
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink
                style={styleNav}
                to="/dragon"
                className="Myprofile Text-Style-3"
              >
                Dragon
              </NavLink>
            </li>
            <li>
              <NavLink
                style={styleNav}
                to="/profile"
                className="Myprofile Text-Style-3"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Rocketcontainer />} />
          <Route path="/mission" element={<MissionCard />} />
          <Route path="/dragon" element={<DragonPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
export default Navbar;

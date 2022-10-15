import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";

import Rocketcontainer from "../rocket/rocketcontainer";
import MissionCard from "../mission/missionCard";
import Profile from "../myProfile/Profile";
import DragonPage from "../dragon/dragon";
import { loadDragons } from "../../redux/dragon/dragon";
import { fetchRockets } from "../../redux/rocket/rocketSlice";
import { fetchMissions } from "../../redux/mission/missionSlice";

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
              <Link to="/" className="Mission Text-Style-3">
                Rocket
              </Link>
            </li>
            <li>
              <Link to="/mission" className="Mission Text-Style-3">
                Missions
              </Link>
            </li>
            <li>
              <Link to="/dragon" className="Myprofile Text-Style-3">
                Dragon
              </Link>
            </li>
            <li>
              <Link to="/profile" className="Myprofile Text-Style-3">
                Profile
              </Link>
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

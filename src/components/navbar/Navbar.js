import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Rocketcontainer from "../rocket/rocketcontainer";
import Mission from "../mission/mission";
import Profile from "../myProfile/Profile";
import DragonPage from "../dragon/dragon";
import { loadDragons } from "../../redux/dragon/dragon";
import { fetchRockets } from "../../redux/rocket/rocketSlice";

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
  }, []);
  return (
    <div>
      <header className="panel-bg">
        <div className="navigation">
          <span className="Logo-Text">Space Travelers Hub</span>
          <ul>
            <li>
              <Link to="/rocket" className="Mission Text-Style-3">
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
          <Route path="/rocket" element={<Rocketcontainer />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/dragon" element={<DragonPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
export default Navbar;

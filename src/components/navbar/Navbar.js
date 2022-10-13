import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className="panel-bg">
        <div className="logoFrame">
          <img className="logo" src="/planet.png" alt="space logo" />

          <span className="Logo-Text">Space Travelers Hub</span>
        </div>
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
            <Link to="/dragon" className="Mission Text-Style-3">
              Dragon
            </Link>
          </li>
          <li>
            <Link to="/profile" className="Myprofile Text-Style-3">
              Myprofile
            </Link>
          </li>
        </ul>
      </header>
      <hr className="horizon" />
    </>
  );
}
export default Navbar;

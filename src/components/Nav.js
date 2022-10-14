import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import pic from '../img/planet.png';
import RouterNavLink from './Router';

function Nav() {
  return (
    <div className="main">
      <div className="navbarMenu">
        <div className="logo">
          <img className="img" src={pic} alt="saturn" />
          <h1>Space Travelers Hub</h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/rockets">Rockets</NavLink>
            </li>
            <li>
              <NavLink to="/missions">Missions</NavLink>
            </li>
            <li>
              <NavLink to="/dragons">Dragons</NavLink>
            </li>
            <li>
              <NavLink end to="/">
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <RouterNavLink />
    </div>
  );
}
export default Nav;

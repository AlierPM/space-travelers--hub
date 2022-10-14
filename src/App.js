import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rocketcontainer from './components/rocket/rocketcontainer';
import Dragon from './components/dragon/dragon';
import Mission from './components/mission/mission';
import Profile from './components/myProfile/Profile';
import { fetchRockets } from './redux/rocket/rocketSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

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
          <Route path="/dragon" element={<Dragon />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

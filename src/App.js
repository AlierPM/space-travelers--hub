import { Route, Routes } from 'react-router-dom';
// Import rocket, mission, dragon and profile for the navlinks to function.
import Rocket from './components/rocket/rocket';
import Dragon from './components/dragon/dragon';
import Mission from './components/mission/mission';
import Profile from './components/myProfile/Profile';
import Navbar from './components/navbar/Navbar';

function App() {
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
          </ul>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/rocket" element={<Rocket />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/dragon" element={<Dragon />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

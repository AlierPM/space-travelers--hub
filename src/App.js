import { Link, Route, Routes } from "react-router-dom";
// Import rocket, mission, dragon and profile for the navlinks to function.
function App() {
  return (
    <div>
      <header className="panel-bg">
        <div className="navigation">
          <span className="Logo-Text">Space Travelers' Hub</span>
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
                My Profile
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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

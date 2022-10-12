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
      <Navbar />
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

import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// Import rocket, mission, dragon and profile for the navlinks to function.
import Rocket from './components/rocket/rocket';
import Mission from './components/mission/mission';
import Profile from './components/myProfile/Profile';
import Navbar from './components/navbar/Navbar';
import DragonPage from './components/dragon/dragon';
import { loadDragons } from './redux/dragon/dragon';

function App() {
  const dispatch = useDispatch();
  const getDragons = () => {
    dispatch(loadDragons());
  };
  useEffect(() => {
    getDragons();
  }, []);
  return (
    <div>
      <Navbar />

      <main>
        <Routes>
          <Route path="/rocket" element={<Rocket />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/dragon" element={<DragonPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

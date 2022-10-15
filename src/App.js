import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import { fetchMissions } from './redux/mission/missionSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;

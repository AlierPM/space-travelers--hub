
import Navbar from './components/navbar/Navbar';

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

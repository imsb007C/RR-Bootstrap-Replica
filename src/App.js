import './App.css';
import TopBar from './components/TopBar'
import StoreListings from './components/StoreListings';
import Background from './components/Background'

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Background/>
      <StoreListings/>
    </div>
  );
}

export default App;

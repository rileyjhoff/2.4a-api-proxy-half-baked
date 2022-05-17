import PokemonSearch from './components/PokemonSearch';
import YelpSearch from './components/YelpSearch';
import WeatherSearch from './components/WeatherSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
      <WeatherSearch />
    </div>
  );
}

export default App;

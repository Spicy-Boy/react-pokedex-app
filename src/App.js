import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import DisplayPokemonData from './components/DisplayPokemonData'
import SelectPokemonForm from './components/SelectPokemonForm'

function App() {
  const [data, isLoading] = useFetch("https://pokeapi.co/api/v2/pokemon/charizard");

  return (
    <div className="App">
      <SelectPokemonForm pokeData = {data}/>
      <DisplayPokemonData pokeData = {data} isLoading = {isLoading}/>
    </div>
  );
}

export default App;

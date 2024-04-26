import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import useAxios from './hooks/useAxios';
import DisplayPokemonData from './components/DisplayPokemonData'
import SelectPokemonForm from './components/SelectPokemonForm'

function App() {

  const [setUrl, data, loading, setLoading, error] = useAxios();

  //the poke list goes up to 493, the Sinnoh Dex
  const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/?limit=493";
  // setUrl(pokemonListUrl);
  // setLoading(true);
  // const [pokemonList, isLoading] = useFetch(pokemonListUrl);
  // console.log('Got the pokelist!');

  function handleOnSubmit(e){
    // prevent from refreshing the page
    e.preventDefault();
    setUrl(pokemonListUrl);
    setLoading(true);
  }

  return (
    <div className="App">
      <SelectPokemonForm pokemonList={data} isLoading={loading}/>
      <hr/>
      <DisplayPokemonData />
      <hr/>

      <form onSubmit={handleOnSubmit}>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

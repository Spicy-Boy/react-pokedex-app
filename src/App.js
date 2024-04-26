import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import useAxios from './hooks/useAxios';
import DisplayPokemonData from './components/DisplayPokemonData'
import SelectPokemonForm from './components/SelectPokemonForm'
import React, { useEffect, useState } from 'react';

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
    console.log(selectedPokemon);
  }

  //runs ONCE on page load
  useEffect(() => {
    // Code here will run only once when the component mounts.
    setUrl(pokemonListUrl);
    setLoading(true); //setLoading causes the useAxios hook to run at the setUrl
  }, []);

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="App">
      <SelectPokemonForm selectedPokemon={selectedPokemon} pokemonList={data} isLoading={loading}/>
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

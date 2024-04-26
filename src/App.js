import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import DisplayPokemonData from './components/DisplayPokemonData'
import SelectPokemonForm from './components/SelectPokemonForm'

function App() {

  

  return (
    <div className="App">
      <SelectPokemonForm />
      <DisplayPokemonData />
    </div>
  );
}

export default App;

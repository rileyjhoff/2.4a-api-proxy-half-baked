import { useState } from 'react';
import { getPokemonData } from '../services/fetch-utils';
import LoadingScreen from './LoadingScreen';

export default function PokemonSearch() {
  // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('char');

  async function handlePokemonSubmit(e) {
    e.preventDefault();
    // set the loading state to true
    setIsLoading(true);
    // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const pokemonData = await getPokemonData(search);
    // put the jsonified data in state and set the loading state to false
    setPokemonList(pokemonData);
    setIsLoading(false);
  }

  return (
    <section className="pokemon">
      {isLoading && <LoadingScreen />}
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
        Search pokemon
        {/* add inputs/labels for the pokemon name, using all the things we need with react forms. Don't forget to use the value property to sync this up with the default value in react state */}
        <label>
          Name: <input value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
        <button>Get Pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}

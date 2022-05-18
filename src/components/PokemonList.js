import React from 'react';

export default function PokemonList({ pokemonList }) {
  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon, i) => (
        <div key={pokemon + i}>{pokemon.pokemon}</div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import Draggable from "react-draggable";
import api from "../../api/api";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

const { usePokemonListQuery } = api;

const PokemonList: React.FC = () => {
  const { isUninitialized, isLoading, isError, data } = usePokemonListQuery();
  const [selectedPokemon, setSelectPokemon] = useState<string | undefined>(
    undefined
  );

  const onPokemonSelected = (name: string) => {
    setSelectPokemon(name);
  };

  if (isLoading || isUninitialized) {
    return <p>Loading, please wait</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      <h2>List pokemons</h2>
      <ol>
        {data.results.map((pokemon) => (
          <Draggable>
            <li key={pokemon.name}>
              <div onClick={() => onPokemonSelected(pokemon.name)}>
                {pokemon.name}
              </div>
            </li>
          </Draggable>
        ))}
      </ol>
      {selectedPokemon && (
        <>
          <PokemonDetails pokemonName={selectedPokemon} />
          <button onClick={() => setSelectPokemon(undefined)}>Close</button>
        </>
      )}
    </div>
  );
};

export default PokemonList;

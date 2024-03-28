import React from "react";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
const App = () => {
  const [selectedPokemon, selectPokemon] = React.useState<string | undefined>(
    undefined
  );

  return (
    <>
      <header>
        <h1>Pokemons</h1>
      </header>
      <main>
        {selectedPokemon ? (
          <>
            <PokemonDetails pokemonName={selectedPokemon} />
            <button onClick={() => selectPokemon(undefined)}>back</button>
          </>
        ) : (
          <PokemonList onPokemonSelected={selectPokemon} />
        )}
      </main>
    </>
  );
};
export default App;

import Draggable from "react-draggable";
import api from "../../api/api";

const { usePokemonListQuery } = api;
const PokemonList = ({
  onPokemonSelected,
}: {
  onPokemonSelected: (pokemonName: string) => void;
}) => {
  const { isUninitialized, isLoading, isError, data } = usePokemonListQuery();

  if (isLoading || isUninitialized) {
    return <p>loading, please wait</p>;
  }

  if (isError) {
    return <p>something went wrong</p>;
  }

  return (
    <div>
      <h2>List pokemons</h2>
      <ul>
        {data.results.map((pokemon) => (
          <Draggable>
            <li key={pokemon.name}>
              <button onClick={() => onPokemonSelected(pokemon.name)}>
                {pokemon.name}
              </button>
            </li>
          </Draggable>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;

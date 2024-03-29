import api from "../../api/api";
import "./PokemonDetails.css";
const { usePokemonDetailQuery } = api;

const listFormatter = new Intl.ListFormat("en-GB", {
  style: "short",
  type: "conjunction",
});

const PokemonDetails = ({ pokemonName }: { pokemonName: string }) => {
  const { isUninitialized, isLoading, isError, data } = usePokemonDetailQuery({
    name: pokemonName,
  });

  if (isLoading || isUninitialized) {
    return <p>loading, please wait</p>;
  }

  if (isError) {
    return <p>something went wrong</p>;
  }

  return (
    <div>
      <img
        className="pokemon-img"
        src={data.sprites.front_default}
        alt={data.name}
      />
      <h2>{data.name}</h2>
      <div>
        Abilities:
        {listFormatter.format(data.abilities.map((item) => item.ability.name))}
      </div>
      <ul>
        Characteristic:
        {data?.stats.slice(0, 4).map((sta, index) => (
          <li key={index}>
            {sta.stat.name}:{sta.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PokemonDetails;

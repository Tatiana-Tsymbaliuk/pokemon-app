import api from "../../api/api";

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
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />

      <div>
        Abilities:
        {listFormatter.format(data.abilities.map((item) => item.ability.name))}
      </div>
      <ol>
        Characteristic:
        {data?.stats.slice(0, 4).map((stat) => (
          <li key={stat.stat.name}>{stat.stat.name}</li>
        ))}
      </ol>

      <div>
        types:
        {listFormatter.format(data.types.map((item) => item.type.name))}
      </div>
    </div>
  );
};
export default PokemonDetails;

import PokemonList from "./components/PokemonList/PokemonList";
// import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
const App = () => {
  return (
    <>
      <header>
        <h1>Pokemons App</h1>
      </header>
      <main>{<PokemonList />}</main>
    </>
  );
};
export default App;

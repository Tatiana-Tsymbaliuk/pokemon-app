import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PokemonListing {
  count: number;
  results: Array<{
    name: string;
    url: string;
  }>;
}
interface PokemonDetailData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  sprites: {
    front_default: string;
  };
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (build) => ({
    pokemonList: build.query<PokemonListing, void>({
      query() {
        return {
          // these are specific to `fetchBaseQuery`
          url: "pokemon",
          params: { limit: 30 },
          // all the different arguments that you could also pass into the `fetch` "init" option
          // see https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters
          method: "GET", // GET is the default, this could be skipped
        };
      },
    }),
    pokemonDetail: build.query<PokemonDetailData, { name: string }>({
      query: ({ name }) => `pokemon/${name}/`,
    }),
  }),
});

export default api;

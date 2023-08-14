import {useState, useEffect} from 'react';
import {instancePokeApi} from '../services/api/pokemonsApi';
//Dados dos Pokemons
const usePokemonsApi = () => {
  //dados dos pokémons
  const [data, setData] = useState([]);
  //o índice inicial  e final da lista
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(20);
  //habilidades
  // const [pokemonAbilities, setPokemonAbilities] = useState({});

  const getAllPokemons = async () => {
    const response = await instancePokeApi.get('/pokemon');

    const normalizedResults = response.data.results
      .slice(startIndex, endIndex)
      .map(pokemon => {
        const pokemonName = pokemon.name;
        const pokemonId = pokemon.url.replace(/.*\/(\d+)\/$/, '$1');
        const normalizedPokemon = {name: pokemonName, id: pokemonId};
        console.log(normalizedPokemon);

        //   const pokemonResponse = await instancePokeApi.get(`/pokemon/${pokemonId}`);
        // const pokemonAbilities = pokemonResponse.data.abilities.map((ability) => ability.ability.name);
        // normalizedPokemon.abilities = pokemonAbilities;

        return normalizedPokemon;
      });

    setData(normalizedResults);
  };

  useEffect(() => {
    getAllPokemons();
  }, [startIndex, endIndex]);

  //Carregar mais poke, 20pag //Atualizamo o estado
  const loadMorePokemons = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + 20);
    return;
  };

  return {
    data,
    loadMorePokemons,
  };
};

export default usePokemonsApi;

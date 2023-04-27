import axios from 'axios';

export const instancePokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});



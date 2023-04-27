import React, { useEffect, useState } from 'react';

import { instancePokeApi } from '../../services/api/pokemonsApi';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

const Welcome = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState();

  const getAllPokemons = async () => {
    const response = await instancePokeApi.get('/pokemon');
    setData(response.data.results);
    setName(response.data.name);

    const normalizedResults = response.data.results.map((pokemon)=>{
      const pokemonName= pokemon.name
      const pokemonId = pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "") 
      const normalizedPokemon = {name: pokemonName, id:pokemonId}

    return(
      normalizedPokemon
    )
    })
    console.log(normalizedResults)
    
  };


  useEffect(() => {
    getAllPokemons();
  }, []);
  

    
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.title}>Search Pokemons</Text>
        {/* <ScrollView>{data.map(renderItem)}</ScrollView>
        <Image
          style={{ width: 150, height: 150 }}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
        /> */}
      </SafeAreaView>
    );
  };


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262d31',
  },
  titleContainer: {
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 20,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
});

export default Welcome;
import React from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';

import usePokemonsApi from '../../hook/usePokemonsApi';
import {
  Container,
  Title,
  ItemContainer,
  TitleContainer,
  LoadMoreButton,
  LoadMoreButtonText,
} from './Home.styles';

export const Home = () => {
  const {data, loadMorePokemons} = usePokemonsApi();

  const renderItem = ({item}) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`;

    return (
      <ItemContainer key={item.id}>
        <Image source={{uri: imageUrl}} style={styles.pokemonImage} />
        <TitleContainer>
          #{item.id} - {item.name}
        </TitleContainer>
        {/* <TitleContainer>
          <Text>Habilidades:</Text>
          {item.abilities.map((ability) => (
            <Text key={ability}>{ability}</Text>
          ))}
        </TitleContainer> */}
      </ItemContainer>
    );
  };

  const renderFooter = () => {
    return (
      <LoadMoreButton style={styles.loadMoreButton} onPress={loadMorePokemons}>
        <LoadMoreButtonText style={styles.loadMoreButtonText}>
          Load More
        </LoadMoreButtonText>
      </LoadMoreButton>
    );
  };

  return (
    <Container>
      <Title>Search Pokemons</Title>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} //extrai a chave única de cada item
        //onEndReached={loadMorePokemons} //carrega mais poke fim da lista
        initialNumToRender={20} //render 20 poke
        ListFooterComponent={renderFooter} //fun renderiza o botão "Load More" no final da lista
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  pokemonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 20,
  },
});

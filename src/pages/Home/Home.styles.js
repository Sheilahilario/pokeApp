import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #e27882;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #e6e8ed;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding-horizontal: 30px;
  flex: 1;
`;

export const TitleContainer = styled.Text`
  color: #424a54;
  font-size: 20px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
`;

export const LoadMoreButton = styled.TouchableOpacity`
  align-self: center;
  margin-vertical: 20px;
  padding: 10px;
  background-color: #e27882;
  border-radius: 10px;
`;

export const LoadMoreButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

//Tomei erro, quando tentei usar o estilo do styled. I dont know why `-0-`
/* export const PokemonImage = styled.Image`
  width: 100px;
  height: 100px;
  resize-mode: contain;
  margin-right: 20px;
`;*/

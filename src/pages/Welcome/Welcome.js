import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

import LottieView from 'lottie-react-native';
import {Container, AnimationContent, ButtonTitle} from './Welcome.styles';

export const Welcome = ({navigation}) => {
  const [animationSpin, setAnimationSpin] = useState(0);

  useEffect(() => {
    const spin = setInterval(() => {
      setAnimationSpin((animationSpin + 0.04) % 1); // Incrementa o giro da animação
    }, 100);

    return () => clearInterval(spin); // Limpa o intervalo quando o componente for desmontado
  }, [animationSpin]);

  return (
    <Container>
      <AnimationContent>
        <LottieView
          style={{height: 200, width: 300}}
          autoPlay
          progress={animationSpin}
          source={require('../../assets/pokeball-loading.json')}
        />
      </AnimationContent>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <ButtonTitle>Encontre Pokémons</ButtonTitle>
      </TouchableOpacity>
    </Container>
  );
};

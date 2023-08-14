import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './src/pages/Home/Home';
import {Welcome} from './src/pages/Welcome/Welcome';

const HomeStack = createStackNavigator();

export const App = () => (
  <NavigationContainer>
    <HomeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: '',
        headerStyle: {backgroundColor: '#e27882'},
      }}
      initialRouteName="Welcome">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Welcome" component={Welcome} />
    </HomeStack.Navigator>
  </NavigationContainer>
);

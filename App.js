import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Recipe from './screens/Recipe';
import Header from './components/Header';

const App: () => React$Node = () => {
  const [pressed, setPressed] = useState(false);

  const showMenu = () => {
    setPressed(!pressed);
  };

  const Stack = createStackNavigator();

  return (
    <SafeAreaView
      style={
        pressed
          ? {flex: 1, backgroundColor: 'black'}
          : {flex: 1, backgroundColor: 'white'}
      }>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Recipe" component={Recipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
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
      style={pressed ? {flex: 1, width: '100%'} : {flex: 1, width: '100%'}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fe9635',
            },
            headerTintColor: '#fff',
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: '#fe9635',
                elevation: 3,
              },
              headerTintColor: '#fff',
              headerLeft: () => <Header onPress={() => showMenu()} />,
            }}
          />
          <Stack.Screen name="Recipe" component={Recipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

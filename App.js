import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerMenu from './components/DrawerMenu';
import Home from './screens/Home';
import MyRecipes from './screens/MyRecipes';
import Login from './screens/Login';
import AddRecipe from './screens/AddRecipe';
import Signup from './screens/Signup';

const App: () => React$Node = () => {
  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerMenu {...props} />}
          initialRouteName="Home"
          edgeWidth={-1}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen
            name="Add recipe"
            component={AddRecipe}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#fe9635',
              },
              headerTintColor: '#fff',
            }}
          />
          <Drawer.Screen name="My recipes" component={MyRecipes} />
          <Drawer.Screen
            name="Login"
            component={Login}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#fe9635',
              },
              headerTintColor: '#fff',
            }}
          />
          <Drawer.Screen
            name="Sign up"
            component={Signup}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#fe9635',
              },
              headerTintColor: '#fff',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

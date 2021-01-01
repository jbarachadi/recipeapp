import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {DATA} from '../Data.js';
import Item from '../components/Item';
import HeaderButton from '../components/HeaderButton';
import Recipe from './Recipe';

const MyRecipes: () => React$Node = ({navigation}) => {
  const numColumns = 2;

  const renderItem = ({item}) => {
    if (item.empty) {
      return <Item item_info={item} hidden={true} />;
    } else {
      return (
        <Item
          item_info={item}
          onPress={() => navigation.navigate('Recipe', {info: item})}
        />
      );
    }
  };

  const formatData = (item_info, numberOfColumns) => {
    const numberOfFullRows = Math.floor(item_info.length / numberOfColumns);
    let numberOfElementsLastRow =
      item_info.length - numberOfFullRows * numberOfColumns;
    while (
      numberOfElementsLastRow !== numberOfColumns &&
      numberOfElementsLastRow !== 0
    ) {
      item_info.push({
        id: `blank-${numberOfElementsLastRow}`,
        title: 'Empty item',
        empty: true,
      });
      numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }

    return DATA;
  };

  const itemList = () => {
    return (
      <FlatList
        data={formatData(DATA, numColumns)}
        renderItem={renderItem}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        style={styles.homePage}
      />
    );
  };

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="My recipes"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fe9635',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="My recipes"
        component={itemList}
        options={{
          headerStyle: {
            backgroundColor: '#fe9635',
            elevation: 3,
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <HeaderButton onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
      <Stack.Screen
        name="Recipe"
        component={Recipe}
        options={{
          drawerLockMode: 'locked-closed',
          enabledGesture: 'false',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    padding: 6,
  },
});

export default MyRecipes;

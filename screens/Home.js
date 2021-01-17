import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {db} from '../config';
import Item from '../components/Item';
import HeaderButton from '../components/HeaderButton';
import Recipe from './Recipe';

const Home: () => React$Node = ({navigation}) => {
  const numColumns = 2;
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 500);
  }, [data]);

  const getData = () =>{
    let DATA=[]
    db
    .ref('/recipes/')
    .on('value', snapshot => {
      let keys = Object.keys(snapshot.val());
      keys.forEach((key) => { 
        DATA.push(snapshot.val()[key])
      });
    });
    setData(DATA)
  }

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

    return data;
  };

  const itemList = () => {
    return (
      <FlatList
        data={formatData(data, numColumns)}
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
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fe9635',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Home"
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

export default Home;

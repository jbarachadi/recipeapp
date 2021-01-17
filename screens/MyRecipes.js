import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {db} from '../config';
import auth from '@react-native-firebase/auth';
import Item from '../components/Item';
import HeaderButton from '../components/HeaderButton';
import Recipe from './Recipe';

const MyRecipes: () => React$Node = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const numColumns = 2;
  const [data, setData] = useState([]);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    if(!initializing){
      setTimeout(() => {
        getData()
      }, 500);
    }
    return subscriber; // unsubscribe on unmount
  },[initializing], [data]);

  const getData = () =>{
    let DATA=[]
    db
    .ref('/recipes/')
    .on('value', snapshot => {
      let keys = Object.keys(snapshot.val());
      keys.forEach((key) => { 
        if(snapshot.val()[key].user === user.email){
          DATA.push(snapshot.val()[key])
        }
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

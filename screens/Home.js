import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity, Text, View} from 'react-native';

import Item from '../components/Item';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: require('../images/oatmealcookies.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: require('../images/oatmealcookies.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: require('../images/oatmealcookies.jpg'),
  },
  {
    id: '58694a0f-c605-471f-bd96-145571e29d72',
    title: 'Fourth Item',
    image: require('../images/oatmealcookies.jpg'),
  },
  {
    id: '58694a0f-c605-471f-a4f8-145571e29d72',
    title: 'Fifth Item',
    image: require('../images/oatmealcookies.jpg'),
  },
];

const Home: () => React$Node = ({navigation}) => {
  const numColumns = 2;

  const renderItem = ({item}) => {
    if (item.empty) {
      return <Item item_info={item} hidden={true} />;
    } else {
      return (
        <Item
          item_info={item}
          onPress={() => navigation.navigate('Recipe', {item})}
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

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    padding: 6,
  },
});

export default Home;

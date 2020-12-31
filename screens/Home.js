import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity, Text, View} from 'react-native';

import Item from '../components/Item';
import {DATA} from '../Data.js';

const Home: () => React$Node = ({navigation}) => {
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

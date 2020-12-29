import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';

import Header from './components/Header';
import Item from './components/Item';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-c605-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-c605-471f-a4f8-145571e29d72',
    title: 'Fifth Item',
  },
];

const App: () => React$Node = () => {
  const [pressed, setPressed] = useState(false);

  const numColumns = 2;

  const renderItem = ({item}) => {
    if (item.empty) {
      return <Item item_info={item} hidden={true} />;
    } else {
      return <Item item_info={item} />;
    }
  };

  const formatData = (item_info, numColumns) => {
    const numberOfFullRows = Math.floor(item_info.length / numColumns);
    let numberOfElementsLastRow =
      item_info.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
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

  const showMenu = () => {
    setPressed(!pressed);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header onPress={showMenu} style={{flex: 1}} />
        <FlatList
          data={formatData(DATA, numColumns)}
          renderItem={renderItem}
          numColumns={numColumns}
          keyExtractor={(item) => item.id}
          style={pressed ? styles.homePageBlack : styles.homePage}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
  homePage: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 6,
    backgroundColor: 'white',
  },
  homePageBlack: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 6,
    backgroundColor: 'black',
  },
});

export default App;

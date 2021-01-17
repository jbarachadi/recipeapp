import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';

const Item: () => React$Node = ({item_info, hidden, onPress}) => {
  if (hidden === true) {
    return <View style={styles.itemInvisible} />;
  } else {
    return (
      <TouchableOpacity style={{flex: 1}} activeOpacity={0.8} onPress={onPress}>
        <View style={styles.item}>
          <Image style={styles.itemImage} source={require('../images/oatmealcookies.jpg')} />
          <View style={styles.itemTextContainer}>
            <View style={styles.itemTitleContainer}>
              <Text style={styles.itemTitle}>{item_info.name}</Text>
            </View>
            <View style={styles.itemCategoryContainer}>
              <Text>{item_info.category}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 7,
    borderRadius: 10,
    borderColor: '#ccc',
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#f1f1f1',
  },
  itemTextContainer: {
    height: 75,
    width: '100%',
    padding: 6,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  itemTitleContainer: {
    justifyContent: 'flex-start',
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemCategoryContainer: {
    position: 'absolute',
    bottom: 6,
  },
  itemImage: {
    height: 175,
    width: '100%',
  },
  itemInvisible: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default Item;

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Item: () => React$Node = ({item_info, hidden}) => {
  if (hidden === true) {
    return <View style={styles.itemInvisible} />;
  } else {
    return (
      <View style={styles.item}>
        <Image
          style={styles.itemImage}
          source={require('./oatmealcookies.jpg')}
        />
        <View style={styles.itemTextContainer}>
          <View style={styles.itemTitleContainer}>
            <Text style={styles.itemTitle}>{item_info.title}</Text>
          </View>
          <View style={styles.itemCategoryContainer}>
            <Text>{item_info.title}</Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 240,
    marginHorizontal: 6,
    marginBottom: 16,
    borderRadius: 10,
    elevation: 6,
    overflow: 'hidden',
    backgroundColor: 'gray',
  },
  itemTextContainer: {
    height: 85,
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
    height: 155,
    width: '100%',
  },
  itemInvisible: {
    flex: 1,
    marginHorizontal: 6,
    backgroundColor: 'transparent',
  },
});

export default Item;

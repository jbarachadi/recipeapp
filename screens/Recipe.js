import React from 'react';
import {StyleSheet, FlatList, View, Text, Button, Image} from 'react-native';

const Recipe: () => React$Node = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.recipeContainer}>
      <Image
        style={styles.recipeImage}
        source={require('../images/oatmealcookies.jpg')}
      />
      <View style={styles.recipeTextContainer}>
        <View style={styles.recipeTitleContainer}>
          <Text style={styles.recipeTitle}>{item.title}</Text>
        </View>
        <View style={styles.recipeCategoryContainer}>
          <Text>{item.title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
    alignContent: 'center',
  },
  recipeImage: {
    height: 220,
    width: '100%',
  },
  recipeTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  recipeTextContainer: {
    height: 85,
    width: '100%',
    padding: 6,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  recipeTitleContainer: {
    justifyContent: 'flex-start',
  },
  recipeCategoryContainer: {
    position: 'absolute',
    bottom: 6,
  },
});

export default Recipe;

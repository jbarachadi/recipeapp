import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  SectionList,
} from 'react-native';
import {DATA} from '../Data.js';

const Recipe: () => React$Node = ({route}) => {
  const {info} = route.params;

  const renderIngredient = ({item}) => {
    return (
      <View style={styles.recipeIngredient}>
        <Image source={item.image} style={styles.recipeIngredientImage} />
        <Text style={styles.recipeIngredientName}>{item.name}</Text>
        <Text style={styles.recipeIngredientDetails}>
          {item.quantity} {item.unit}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.recipeContainer}>
      <Image
        style={styles.recipeImage}
        source={require('../images/oatmealcookies.jpg')}
      />
      <View style={styles.recipeHeadContainer}>
        <View style={styles.recipeTitleContainer}>
          <Text style={styles.recipeTitle}>{info.title}</Text>
        </View>
        <View style={styles.recipeCategoryContainer}>
          <Text>{info.title}</Text>
        </View>
        <Text style={styles.recipeTitle}>Ingredients</Text>
        <View style={styles.recipeIngredientContainer}>
          <FlatList
            data={info.ingredients}
            horizontal={true}
            keyExtractor={(item) => item.key}
            renderItem={renderIngredient}
          />
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
  recipeHeadContainer: {
    flex: 1,
    height: 85,
    padding: 6,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  recipeTitleContainer: {
    justifyContent: 'flex-start',
  },
  recipeTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  recipeCategoryContainer: {},
  recipeIngredientContainer: {
    padding: 12,
  },
  recipeIngredient: {
    margin: 12,
    alignItems: 'center',
    width: 80,
  },
  recipeIngredientImage: {
    height: 60,
    width: 60,
  },
  recipeIngredientName: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  recipeIngredientDetails: {
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export default Recipe;

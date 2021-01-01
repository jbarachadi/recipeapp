import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

const Recipe: () => React$Node = ({route, navigation}) => {
  const {info} = route.params;

  const renderStep = ({item}) => {
    return (
      <View style={styles.recipeStep}>
        <Text style={styles.recipeStepDetails}>
          <Text style={{fontWeight: 'bold'}}>Step {item.number} :</Text>{' '}
          {item.desc}
        </Text>
      </View>
    );
  };

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
    <ScrollView style={styles.recipeContainer}>
      <Image
        style={styles.recipeImage}
        source={require('../images/oatmealcookies.jpg')}
      />
      <View style={styles.recipeHeadContainer}>
        <View style={styles.recipeTitleContainer}>
          <Text style={styles.recipeTitle}>{info.title}</Text>
        </View>
        <View>
          <Text>{info.title}</Text>
        </View>
      </View>
      <View style={styles.recipeStepsContainer}>
        <FlatList
          data={info.steps}
          keyExtractor={(item) => item.number}
          renderItem={renderStep}
        />
      </View>
      <FlatList
        data={info.ingredients}
        horizontal={true}
        keyExtractor={(item) => item.key}
        renderItem={renderIngredient}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  recipeImage: {
    height: 220,
    width: '100%',
  },
  recipeHeadContainer: {
    flex: 1,
    paddingTop: 12,
    alignItems: 'center',
  },
  recipeTitleContainer: {
    justifyContent: 'flex-start',
  },
  recipeTitle: {
    paddingTop: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
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
  recipeStepsContainer: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 12,
    width: '80%',
    alignSelf: 'center',
  },
  recipeStep: {
    padding: 10,
  },
  recipeStepDetails: {
    textAlign: 'justify',
  },
});

export default Recipe;

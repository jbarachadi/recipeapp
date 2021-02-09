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

  const getImage = (category) =>{
    switch(category){
      case 'Main Dish': return require('../images/main-dish.jpg'); break;
      case 'Salad': return require('../images/salad.jpg'); break;
      case 'Soup/Stew': return require('../images/soup.jpg'); break;
      case 'Cookies': return require('../images/oatmealcookies.jpg'); break;
      case 'Cakes': return require('../images/cake.jpg'); break;
      case 'Juice': return require('../images/juice.jpg'); break;
      case 'Other Desserts': return require('../images/dessert.jpg'); break;
    }
  }

  const getIngredient = (name) =>{
    switch(name){
      case 'Carrot': return require('../images/carrot.png'); break;
      case 'Chocolate': return require('../images/chocolate.png'); break;
      case 'Flour': return require('../images/flour.png'); break;
      case 'Lettuce': return require('../images/lettuce.png'); break;
      case 'Oil': return require('../images/oil.png'); break;
      case 'Orange': return require('../images/orange.png'); break;
      case 'Potato': return require('../images/russet_potato.png'); break;
      case 'Salt': return require('../images/salt.png'); break;
      case 'Spaghetti': return require('../images/spaghetti.png'); break;
      case 'Tomato': return require('../images/tomato.png'); break;
    }
  }

  const renderStep = ({item}) => {
    return (
      <View style={styles.recipeStep}>
        <Text style={styles.recipeStepDetails}>
          <Text style={{fontWeight: 'bold'}}>Step {item.index+1} :</Text>{' '}
          {item.text}
        </Text>
      </View>
    );
  };

  const renderIngredient = ({item}) => {
    return (
      <View style={styles.recipeIngredient}>
        <Image source={getIngredient(item.ingredient)} style={styles.recipeIngredientImage} />
        <Text style={styles.recipeIngredientName}>{item.ingredient}</Text>
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
        source={getImage(info.category)}
      />
      <View style={styles.recipeHeadContainer}>
        <View style={styles.recipeTitleContainer}>
          <Text style={styles.recipeTitle}>{info.name}</Text>
        </View>
        <View>
          <Text> {info.serving} serving(s) • {info.time} </Text>
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

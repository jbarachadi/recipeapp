import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import Header from '../components/Header';

const AddRecipe: () => React$Node = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Add recipe</Text>
    </View>
  );
};

export default AddRecipe;

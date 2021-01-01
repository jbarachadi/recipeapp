import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import Header from '../components/Header';

const Signup: () => React$Node = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Sign up</Text>
    </View>
  );
};

export default Signup;

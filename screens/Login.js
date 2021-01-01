import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import Header from '../components/Header';

const Login: () => React$Node = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>Login</Text>
    </View>
  );
};

export default Login;

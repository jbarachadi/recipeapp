import React from 'react';
import {View, StyleSheet} from 'react-native';

import HeaderButton from './HeaderButton';

const Header: () => React$Node = ({onPress, navigation}) => {
  return (
    <View style={styles.header}>
      <HeaderButton onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: '#fe9635',
  },
});

export default Header;

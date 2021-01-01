import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';

const DrawerMenu: () => React$Node = (props) => {
  return (
    <View style={styles.drawerSection}>
      <DrawerItem
        labelStyle={styles.drawerItem}
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        labelStyle={styles.drawerItem}
        label="Add recipe"
        onPress={() => props.navigation.navigate('Add recipe')}
      />
      <DrawerItem
        labelStyle={styles.drawerItem}
        label="My recipes"
        onPress={() => props.navigation.navigate('My recipes')}
      />
      <DrawerItem
        labelStyle={styles.drawerItem}
        label="Log in"
        onPress={() => props.navigation.navigate('Login')}
      />
      <DrawerItem
        labelStyle={styles.drawerItem}
        label="Sign up"
        onPress={() => props.navigation.navigate('Sign up')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drawerSection: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fe9635',
  },
  drawerItem: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    alignSelf: 'flex-start',
  },
});

export default DrawerMenu;

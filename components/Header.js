import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Header: () => React$Node = ({onPress}) => {
  return (
    <View style={styles.headerHome}>
      <TouchableOpacity style={styles.touchableArea} onPress={onPress}>
        <FontAwesomeIcon size={24} icon={faBars} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerHome: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 6,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
  },
  touchableArea: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 12,
    marginVertical: 10,
    height: 36,
    width: 36,
  },
  icon: {
    alignSelf: 'center',
  },
});

export default Header;

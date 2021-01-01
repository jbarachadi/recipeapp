import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Header: () => React$Node = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.touchableArea} onPress={onPress}>
      <FontAwesomeIcon size={24} icon={faBars} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableArea: {
    justifyContent: 'center',
    marginHorizontal: 13,
    marginVertical: 10,
    height: 36,
    width: 36,
  },
  icon: {
    color: 'white',
  },
});

export default Header;

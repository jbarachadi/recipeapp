import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from 'react-native';

import Home from './pages/Home';
import Header from './components/Header';

const App: () => React$Node = () => {
  const [pressed, setPressed] = useState(false);

  const showMenu = () => {
    setPressed(!pressed);
  };

  return (
    <>
      <SafeAreaView
        style={
          pressed
            ? {flex: 1, backgroundColor: 'black'}
            : {flex: 1, backgroundColor: 'white'}
        }>
        <Header onPress={showMenu} style={{flex: 1}} />
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;

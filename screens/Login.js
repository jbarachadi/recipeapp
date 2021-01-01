import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

import Header from '../components/Header';

const Login: () => React$Node = ({navigation}) => {
  const [login, setLogin] = useState({email: '', pwd: ''});

  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <View style={styles.inputPage}>
        <Text style={styles.inputPageTitle}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          spellCheck="false"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(text) => setLogin({...login, email: text})}
          value={login.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          spellCheck="false"
          textContentType="password"
          secureTextEntry
          onChangeText={(text) => setLogin({...login, pwd: text})}
          value={login.pwd}
        />
        <View style={styles.inputPageButtons}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.inputPageButton,
              {marginRight: '4%', backgroundColor: '#f1f1f1'},
            ]}>
            <Text style={styles.inputPageButtonText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={[
              styles.inputPageButton,
              {marginLeft: '4%', backgroundColor: '#fe9635'},
            ]}>
            <Text style={[styles.inputPageButtonText, {color: 'white'}]}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPage: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  inputPageTitle: {
    paddingVertical: 90,
    color: '#333',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
  },
  input: {
    width: '75%',
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  inputPageButtons: {
    width: '75%',
    flexDirection: 'row',
    borderRadius: 10,
    color: '#333',
    alignSelf: 'center',
  },
  inputPageButton: {
    height: 50,
    width: '46%',
    paddingHorizontal: 20,
    borderRadius: 10,
    color: '#333',
    elevation: 3,
    justifyContent: 'center',
  },
  inputPageButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Login;

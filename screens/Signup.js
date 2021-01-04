import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

import Header from '../components/Header';

const Signup: () => React$Node = ({navigation}) => {
  const [login, setLogin] = useState({email: '', pwd: ''});
  const [error, setError] = useState({msg: ''});

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(login.email, login.pwd)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Home');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError({msg: 'That email address is already in use!'});
        }

        if (error.code === 'auth/invalid-email') {
          setError({msg: 'That email address is invalid!'});
        }
      });
  };

  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <View style={styles.inputPage}>
        <Text style={styles.inputPageTitle}>Sign up</Text>
        <Text style={styles.errorMessage}>{error.msg}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(text) => setLogin({...login, email: text})}
          value={login.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
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
            onPress={() => createUser()}
            style={[
              styles.inputPageButton,
              {marginLeft: '4%', backgroundColor: '#fe9635'},
            ]}>
            <Text style={[styles.inputPageButtonText, {color: 'white'}]}>
              REGISTER
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
  errorMessage: {
    color: 'red',
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

export default Signup;

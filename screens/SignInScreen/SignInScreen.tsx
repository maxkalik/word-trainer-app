import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import { Scene, Btn } from '../../components/common';
// import { useUserValue } from './state/user';
import { styles } from './styles';

const SignInScreen: React.FC = (): JSX.Element => {
  // const [, dispatch] = useUserValue();
  const [user, setUser] = useState({ email: '', password: '' });
  // const validMsg = checkValidity(value, controls[type].validation);

  const handleBtnAuthPressed = () => {
    if (user.email !== '' && user.password !== '') {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => console.log('sign up succsess'))
        .catch(error => console.log(error));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Scene keyboardAvoidingView={true}>
        <View style={styles.fields}>
          <TextInput
            placeholder="login"
            placeholderTextColor={'grey'}
            onChangeText={(value: string) => setUser({ ...user, email: value })}
            // value={}
          />
          <TextInput
            placeholder="password"
            placeholderTextColor={'grey'}
            onChangeText={(value: string) => setUser({ ...user, password: value })}
            // value={}
          />
        </View>
        <Btn filled title="Sign In" onPress={handleBtnAuthPressed} />
      </Scene>
    </SafeAreaView>
  );
};

export default SignInScreen;

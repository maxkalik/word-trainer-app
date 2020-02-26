import React, { useState } from 'react';
import firebase from 'firebase';
import { View, TextInput, SafeAreaView } from 'react-native';
import { Scene, Btn } from '../../components/common';
import { styles } from './styles';

const SignInScreen: React.FC = (props: any): JSX.Element => {
  const [user, setUser] = useState({ email: '', password: '' });
  // const validMsg = checkValidity(value, controls[type].validation);

  const handleBtnAuthPressed = () => {
    if (user.email !== '' && user.password !== '') {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => console.log('sign in succsess'))
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
        <Btn size="small" title="Forgot Password?" onPress={(): void => props.navigation.navigate('Forgot Password')} />
      </Scene>
    </SafeAreaView>
  );
};

export default SignInScreen;

import React, { useState } from 'react';
import firebase from 'firebase';
import { View, TextInput, SafeAreaView } from 'react-native';
import { Scene, Btn } from '../../components/common';
import { styles } from './styles';

const ForgotPasswordScreen: React.FC = (): JSX.Element => {
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
            placeholder="new password"
            placeholderTextColor={'grey'}
            onChangeText={(value: string) => setUser({ ...user, email: value })}
            // value={}
          />
        </View>
        <Btn filled title="Send confirm" onPress={handleBtnAuthPressed} />
      </Scene>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

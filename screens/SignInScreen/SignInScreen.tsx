import React, { useState } from 'react';
// import firebase from 'firebase';
import { View, TextInput, SafeAreaView } from 'react-native';
import { Scene, Input, Btn } from '../../components/common';
import { checkValidity } from '../../helpers';
import { SignInTextInputProps } from './types';
import { inputFields } from './states';
import { styles } from './styles';

const SignInScreen: React.FC = (props: any): JSX.Element => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [signInValues, setSignInValues] = useState({
    email: {
      value: '',
      validMsg: null
    },
    password: {
      value: '',
      validMsg: null
    }
  });

  const handleInputChangeText = (value: string, fieldName: string): void => {
    const inputValue = fieldName === 'password' ? value : value.toLowerCase();
    const field = inputFields.find(({ name }) => name === fieldName);
    const validMsg = field ? checkValidity(value, field.validation) : null;
    setSignInValues({
      ...signInValues,
      [fieldName]: {
        value: inputValue,
        validMsg: validMsg
      }
    });
  };
  console.log(signInValues);

  const handleBtnAuthPressed = () => {
    const { email, password } = user;

    /*
    if (user.email !== '' && user.password !== '') {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => console.log('sign in succsess'))
        .catch(error => console.log(error));
    }
    */
  };

  return (
    <SafeAreaView style={styles.container}>
      <Scene keyboardAvoidingView={true}>
        <View style={styles.fields}>
          {inputFields.map(({ name, placeholder, textContentType, keyboardType }: SignInTextInputProps) => (
            <Input
              key={name}
              style={styles.input}
              secureTextEntry={name === 'password'}
              keyboardType={keyboardType}
              textContentType={textContentType}
              placeholder={placeholder}
              onChangeText={(value: string) => handleInputChangeText(value, name)}
              value={signInValues[name].value}
              withIcon={signInValues[name].validMsg === null}
            />
          ))}
        </View>
        <Btn filled title="Sign In" onPress={handleBtnAuthPressed} />
        <Btn size="small" title="Forgot Password?" onPress={(): void => props.navigation.navigate('Forgot Password')} />
      </Scene>
    </SafeAreaView>
  );
};

export default SignInScreen;

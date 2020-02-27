import React, { useState } from 'react';
// import firebase from 'firebase';
import { View, TextInput, SafeAreaView } from 'react-native';
import { Scene, Btn } from '../../components/common';
import { checkValidity } from '../../helpers';
import { SignInTextInputProps } from './types';
import { styles } from './styles';

const inputFields: SignInTextInputProps[] = [
  {
    name: 'email',
    placeholder: 'email',
    textContentType: 'emailAddress',
    keyboardType: 'email-address',
    validation: {
      required: true,
      isEmail: true,
      message: null
    },
    validMsg: null
  },
  {
    name: 'password',
    placeholder: 'password',
    textContentType: 'password',
    keyboardType: 'default',
    validation: {
      required: true,
      minLength: 6,
      maxLength: 25,
      message: null
    },
    validMsg: null
  }
];

const SignInScreen: React.FC = (props: any): JSX.Element => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleInputChangeText = (value: string, fieldName: string): void => {
    const inputValue = fieldName === 'password' ? value : value.toLowerCase();
    const field = inputFields.find(({ name }) => name === fieldName);
    const validMsg = field ? checkValidity(value, field.validation) : null;
    console.log(validMsg);
    setUser({ ...user, [fieldName]: inputValue });
  };

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
            <TextInput
              style={styles.input}
              key={name}
              secureTextEntry={name === 'password'}
              keyboardType={keyboardType}
              textContentType={textContentType}
              placeholder={placeholder}
              placeholderTextColor={'grey'}
              onChangeText={(value: string) => handleInputChangeText(value, name)}
              value={user[name]}
              // autoFocus={name === 'word' && actionName !== 'set'}
              // onFocus={() => setIsFocused(true)}
              // onBlur={() => setIsFocused(false)}
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

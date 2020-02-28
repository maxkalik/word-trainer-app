import React, { useState } from 'react';
import firebase from 'firebase';
import { View, SafeAreaView } from 'react-native';
import { Scene, Input, Btn } from '../../components/common';
import { useNotificationValue } from '../../state/notification';
import { checkValidity } from '../../helpers';
import { SignInTextInputProps } from './types';
import { inputFields } from './states';
import { styles } from './styles';

const SignInScreen: React.FC = (props: any): JSX.Element => {
  const [, dispatchNotification] = useNotificationValue();
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

  const handleBtnAuthPressed = () => {
    const { email, password } = signInValues;
    console.log(email.validMsg);
    console.log(password.validMsg);
    if (email.validMsg !== null || password.validMsg !== null) {
      dispatchNotification({ msg: 'Please fill correct all fields' });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => console.log('sign in succsess'))
        .catch(error => dispatchNotification({ msg: error }));
    }
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

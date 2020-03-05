import React, { useState } from 'react';
import firebase from '../../firebase';
import { View } from 'react-native';
import { Input, Btn } from '../../components/common';
import { useNotificationValue } from '../../state';
import { checkValidity } from '../../helpers';
import { SignInTextInputProps, AuthFormProps } from './types';
import { initialState, inputFields } from './states';
import { colors } from '../../util/constants';
import { styles } from './styles';

const AuthForm: React.FC<AuthFormProps> = ({
  onForgotPasswordPress,
  submitButtonName,
  requestType
}): JSX.Element => {
  const [, setNotification] = useNotificationValue();
  const [loading, setLoading] = useState(false);
  const [signInValues, setSignInValues] = useState(initialState);

  const { email, password } = signInValues;
  const isEmptyFields = email.value === '' || password.value === '';
  const isValidMessages = email.validMsg !== null || password.validMsg !== null;

  const handleInputChangeText = (value: string, fieldName: string): void => {
    const inputValue = fieldName === 'password' ? value : value.toLowerCase();
    const curField = inputFields.find(({ name }) => name === fieldName);
    const validMsg = curField ? checkValidity(inputValue, curField.validation) : null;
    setSignInValues({
      ...signInValues,
      [fieldName]: {
        value: inputValue,
        validMsg: validMsg
      }
    });
  };

  const getRequest = (type: 'signin' | 'signup') => {
    switch (type) {
      case 'signin':
        return onSignInRequest();
      case 'signup':
        return onSignUpRequest();
      default:
        break;
    }
  };

  const onSignInRequest = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => setLoading(false))
      .catch(error => {
        setLoading(false);
        setNotification(error.message);
      });
  };

  const onSignUpRequest = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(() => setLoading(false))
      .catch(error => {
        setLoading(false);
        setNotification(error.message);
      });
  };

  const handleBtnAuthPressed = () => {
    setLoading(true);
    if (isEmptyFields) {
      setLoading(false);
      setNotification('Please fill all fields');
    }
    if (isValidMessages) {
      setLoading(false);
      setNotification(email.validMsg || 'Password ' + password.validMsg);
    } else {
      try {
        getRequest(requestType);
      } catch (err) {
        setNotification('Oops. Internal error. Probably lost connection. Please, restart an application');
      }
    }
  };

  return (
    <View style={styles.container}>
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
            iconName={signInValues[name].validMsg === null ? 'check mark' : null}
            iconColor={colors.COLOR_SUCCESS}
          />
        ))}
      </View>
      <View style={styles.buttons}>
        <Btn
          filled
          title={submitButtonName}
          onPress={handleBtnAuthPressed}
          loading={loading}
          addStyle={styles.submitBtn}
        />
        {requestType === 'signin' && (
          <Btn size="small" title="Forgot Password?" onPress={onForgotPasswordPress} />
        )}
      </View>
    </View>
  );
};

export default AuthForm;

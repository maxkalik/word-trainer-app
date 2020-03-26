import React, { useState, useCallback } from 'react';
import firebase from '../../firebase';
import { View } from 'react-native';
import { Input, Btn, FadedView } from '../../components/common';
import AuthTitle from '../../components/AuthTitle/AuthTitle';
import { useNotificationValue } from '../../state';
import { checkValidity } from '../../helpers';
import { SignInTextInputProps, AuthFormProps, RequestTypes } from './types';
import { initialState, inputFields } from './states';
import { colors, sizes } from '../../util/constants';
import { styles } from './styles';

const AuthForm: React.FC<AuthFormProps> = ({
  onForgotPasswordPress,
  submitButtonName,
  requestType,
  user,
  mode,
  inputsLined,
  btnSubmitTitleColor
}): JSX.Element => {
  const [, setNotification] = useNotificationValue();
  const [loading, setLoading] = useState(false);
  const [signInValues, setSignInValues] = useState(initialState);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocusChange = useCallback(focus => {
    setIsFocus(focus);
  }, []);

  const defaultAuth = firebase.auth();
  const { email, password } = signInValues;
  const isSignIn = requestType === 'signin';
  const isSignUp = requestType === 'signup';
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

  const getRequest = (type: RequestTypes) => {
    switch (type) {
      case 'signin':
        return onSignInRequest();
      case 'signup':
        return onSignUpRequest();
      case 'link with credential':
        return onLinkWithCredential();
      default:
        break;
    }
  };

  const handleSingInAnonymously = () => {
    setLoading(true);
    defaultAuth
      .signInAnonymously()
      .then(() => setLoading(false))
      .catch(error => {
        setLoading(false);
        setNotification(error.message);
      });
  };

  const onSignInRequest = () => {
    defaultAuth
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => setLoading(false))
      .catch(error => {
        setLoading(false);
        setNotification(error.message);
      });
  };

  const onSignUpRequest = () => {
    defaultAuth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(() => setLoading(false))
      .catch(error => {
        setLoading(false);
        setNotification(error.message);
      });
  };

  const onLinkWithCredential = () => {
    if (user) {
      const credential = firebase.auth.EmailAuthProvider.credential(email.value, password.value);
      if (defaultAuth.currentUser !== null) {
        defaultAuth.currentUser
          .linkWithCredential(credential)
          .then(() => {
            setNotification(`Anonymous account successfully upgraded. ${user.email}`);
            setLoading(false);
          })
          .catch(error => {
            setLoading(false);
            setNotification(error.message);
          });
      }
    }
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
        setNotification('Oops. Internal error. Please, restart an application');
      }
    }
  };

  const marginTop = { marginTop: mode ? sizes.PADDING_SMALL : sizes.PADDING_LARGE };

  return (
    <View style={styles.container}>
      {!user && <AuthTitle isFocused={isFocus} />}
      <View style={styles.textFields}>
        {inputFields.map(({ name, placeholder, textContentType, keyboardType }: SignInTextInputProps) => (
          <Input
            focused={handleFocusChange}
            key={name}
            mode={!isSignIn && !isSignUp ? mode : 'light'}
            style={!mode && marginTop}
            secureTextEntry={name === 'password'}
            keyboardType={keyboardType}
            textContentType={textContentType}
            placeholder={placeholder}
            onChangeText={(value: string) => handleInputChangeText(value, name)}
            value={signInValues[name].value}
            iconName={signInValues[name].validMsg === null ? 'check mark' : null}
            iconColor={colors.COLOR_SUCCESS}
            lined={inputsLined}
          />
        ))}
      </View>
      <View style={styles.buttons}>
        <Btn
          mode={mode}
          filled
          title={submitButtonName}
          onPress={handleBtnAuthPressed}
          loading={!isEmptyFields && loading}
          addStyle={styles.submitBtn}
          titleColor={btnSubmitTitleColor}
        />
        {isSignIn && (
          <FadedView isFaded={isFocus} style={styles.smallBtns}>
            <Btn size="small" title="Forgot Password?" onPress={onForgotPasswordPress} mode={mode} />
            <Btn
              size="small"
              addStyle={styles.btnAnonymus}
              title="Enter anonymously"
              loading={isEmptyFields && loading}
              onPress={handleSingInAnonymously}
            />
          </FadedView>
        )}
      </View>
    </View>
  );
};

export default AuthForm;

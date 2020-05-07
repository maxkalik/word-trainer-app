import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import firebase from '../../firebase';
import { Input, Btn, Header, Scene } from '../../components/common';
import { useNotificationValue } from '../../state';
import { checkValidity } from '../../helpers';
import { styles } from './styles';
import { backgroundColors } from '../../util/constants';

interface EmailProps {
  value: string;
  validMsg: string | null;
}

const initialState: EmailProps = {
  value: '',
  validMsg: null
};

const emailTextField = {
  name: 'email',
  placeholder: 'email',
  textContentType: 'emailAddress',
  keyboardType: 'email-address',
  validation: {
    required: true,
    isEmail: true,
    message: null
  }
};

const ForgotPasswordScreen: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => {
  const [, setNotification] = useNotificationValue();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(initialState);

  const isEmpty = email.value === '';
  const isValidMessage = email.validMsg !== null;

  const handleInputChangeText = (value: string): void => {
    const inputValue = value.toLowerCase();
    const validMsg = checkValidity(inputValue, emailTextField.validation);
    setEmail({
      value: inputValue,
      validMsg: validMsg
    });
  };

  const onForgotPasswordRequest = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email.value)
      .then(() => {
        setLoading(false);
        navigation.goBack();
      })
      .catch(error => {
        setLoading(false);
        setNotification(error.message);
      });
  };

  const handleBtnAuthPressed = () => {
    setLoading(true);
    if (isEmpty) {
      setLoading(false);
      setNotification('Please fill all fields');
    }
    if (isValidMessage) {
      setLoading(false);
      setNotification(email.validMsg);
    } else {
      try {
        onForgotPasswordRequest();
      } catch (err) {
        setNotification('Oops. Internal error. Probably lost connection. Please, restart an application');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backButton onPressBackButton={(): void => navigation.goBack()} />
      <Scene keyboardAvoidingView={true} addStyle={styles.scene}>
        <Input
          mode="light"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
          onChangeText={(value: string) => handleInputChangeText(value)}
          value={email.value}
          iconName={email.validMsg === null ? 'check mark' : null}
          lined
        />
        <Btn
          filled
          title="Send new password"
          onPress={handleBtnAuthPressed}
          loading={loading}
          addStyle={styles.submitBtn}
          titleColor={backgroundColors.BACK_SIGNIN}
        />
      </Scene>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

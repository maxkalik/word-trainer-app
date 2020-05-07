import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Scene } from '../../components/common';
import AuthForm from '../../components/AuthForm/AuthForm';
import { styles } from './styles';
import { backgroundColors } from '../../util/constants';

const SignUpScreen: React.FC = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <Scene keyboardAvoidingView={true} addStyle={styles.scene}>
      <AuthForm
        submitButtonName="Sign Up"
        requestType="signup"
        inputsLined
        btnSubmitTitleColor={backgroundColors.BACK_SIGNUP}
      />
    </Scene>
  </SafeAreaView>
);

export default SignUpScreen;

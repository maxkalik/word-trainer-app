import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Scene } from '../../components/common';
import AuthForm from '../../components/AuthForm/AuthForm';
import { styles } from './styles';
import { backgroundColors } from '../../util/constants';

const SignInScreen: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <Scene keyboardAvoidingView={true} addStyle={styles.scene}>
      <AuthForm
        submitButtonName="Sign In"
        onForgotPasswordPress={() => navigation.navigate('Forgot Password')}
        requestType="signin"
        inputsLined
        btnSubmitTitleColor={backgroundColors.BACK_SIGNIN}
      />
    </Scene>
  </SafeAreaView>
);

export default SignInScreen;

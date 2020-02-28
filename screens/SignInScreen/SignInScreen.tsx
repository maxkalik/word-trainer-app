import React from 'react';
import { SafeAreaView } from 'react-native';
import { Scene } from '../../components/common';
import AuthForm from '../../components/AuthForm/AuthForm';
import { styles } from './styles';

const SignInScreen: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <Scene keyboardAvoidingView={true}>
      <AuthForm
        submitButtonName="Sign In"
        onForgotPasswordPress={(): void => navigation.navigate('Forgot Password')}
        requestType="signin"
      />
    </Scene>
  </SafeAreaView>
);

export default SignInScreen;

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Scene } from '../../components/common';
import AuthForm from '../../components/AuthForm/AuthForm';
import { styles } from './styles';

const SignInScreen: React.FC<{ navigation: any }> = ({ navigation }): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <Scene keyboardAvoidingView={true} addStyle={styles.scene}>
      <AuthForm
        submitButtonName="Sign In"
        onForgotPasswordPress={() => navigation.navigate('Forgot Password')}
        requestType="signin"
      />
    </Scene>
  </SafeAreaView>
);

export default SignInScreen;

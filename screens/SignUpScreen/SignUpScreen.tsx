import React from 'react';
import { SafeAreaView } from 'react-native';
import { Scene } from '../../components/common';
import AuthForm from '../../components/AuthForm/AuthForm';
import { styles } from './styles';

const SignUpScreen: React.FC = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <Scene keyboardAvoidingView={true}>
      <AuthForm submitButtonName="Sign Un" requestType="signup" />
    </Scene>
  </SafeAreaView>
);

export default SignUpScreen;

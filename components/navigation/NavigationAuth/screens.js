import { createStackNavigator } from 'react-navigation-stack';
import { stackOptions } from '../navOptions';
import SignUpScreen from '../../../screens/SignUpScreen/SignUpScreen';
import SignInScreen from '../../../screens/SignInScreen/SignInScreen';
import ForgotPasswordScreen from '../../../screens/ForgotPasswordScreen/ForgotPasswordScreen';

const LoginStack = createStackNavigator(
  {
    ['Login']: SignInScreen,
    ['Forgot Password']: ForgotPasswordScreen
  },
  {
    initialRouteName: 'Login',
    ...stackOptions
  }
);

export const screens = {
  ['Sign In']: LoginStack,
  ['Sign Up']: SignUpScreen
};

import { createStackNavigator } from 'react-navigation-stack';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import SignInScreen from '../../screens/SignInScreen/SignInScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen/ForgotPasswordScreen';

const stackOptions = {
  mode: 'card',
  headerMode: 'none'
};

const LoginStack = createStackNavigator(
  {
    ['SignIn']: SignInScreen,
    ['Forgot Password']: ForgotPasswordScreen,
  },
  {
    initialRouteName: 'SignIn',
    ...stackOptions
  }
);

export const screens = {
  ['SignUp']: SignUpScreen,
  ['Login']: LoginStack
};

LoginStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
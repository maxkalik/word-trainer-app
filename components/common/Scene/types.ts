import { StyleProp, ViewStyle } from 'react-native';

export interface SceneProps {
  loading?: boolean;
  children: (false | Element)[] | JSX.Element;
  keyboardAvoidingView: boolean;
  addStyle?: StyleProp<ViewStyle>;
}

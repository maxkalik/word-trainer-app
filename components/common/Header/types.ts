import { GestureResponderEvent } from 'react-native';

export interface ButtonBackProps {
  onPress?: (event: GestureResponderEvent) => void;
}

export interface HeaderProps {
  children?: JSX.Element | JSX.Element[];
  backButton?: boolean;
  onPressBackButton?: (event: GestureResponderEvent) => void;
}

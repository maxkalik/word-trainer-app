import { GestureResponderEvent } from 'react-native';

export interface ButtonBackProps {
  onPress?: (event: GestureResponderEvent) => void;
  color?: string;
}

export interface HeaderProps {
  children?: JSX.Element | JSX.Element[];
  backButton?: boolean;
  backButtonColor?: string;
  onPressBackButton?: (event: GestureResponderEvent) => void;
}

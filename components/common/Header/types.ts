import { GestureResponderEvent } from 'react-native';

export interface ButtonBackProps {
  onPress?: (event: GestureResponderEvent) => void;
}

export interface HeaderProps {
  children?: JSX.Element | JSX.Element[];
  withBottomLine?: boolean;
  backButton?: boolean;
  onPressBackButton?: (event: GestureResponderEvent) => void;
}

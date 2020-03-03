import { StyleProp, GestureResponderEvent, ViewStyle } from 'react-native';

export interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  size?: string;
  filled?: boolean;
  loading?: boolean;
  addStyle?: StyleProp<ViewStyle>;
}

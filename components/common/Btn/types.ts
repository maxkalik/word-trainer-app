import { StyleProp, GestureResponderEvent, ViewStyle } from 'react-native';
import { ModeTypes } from '../../../state/ModeState';

export interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  size?: string;
  filled?: boolean;
  loading?: boolean;
  addStyle?: StyleProp<ViewStyle>;
  mode?: ModeTypes;
  titleColor?: string;
}

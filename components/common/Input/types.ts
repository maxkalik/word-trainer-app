import { GestureResponderEvent } from 'react-native';

export interface ClearBtnProps {
  onClearBtnPress: ((event: GestureResponderEvent) => void) | undefined;
}

export interface InputProps {
  onChangeText: (_: string) => void;
  onClearBtnPress?: (event: GestureResponderEvent) => void;
  value: string;
  placeholder: string;
  style?: object;
  styleInputField?: object;
  autoFocus?: boolean;
}

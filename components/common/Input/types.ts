import { GestureResponderEvent } from 'react-native';

export interface IconProps {
  onIconPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export interface InputProps {
  onChangeText: (_: string) => void;
  onIconPress?: (event: GestureResponderEvent) => void;
  value: string;
  placeholder: string;
  style?: object;
  styleInputField?: object;
  autoFocus?: boolean;
  withIcon?: boolean;
  isEditMode?: boolean;
  secureTextEntry?: boolean;
  textContentType?: 'emailAddress' | 'password';
  keyboardType?: 'email-address' | 'default';
}

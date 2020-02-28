import { GestureResponderEvent } from 'react-native';

export interface IconProps {
  onIconPress?: ((event: GestureResponderEvent) => void) | undefined;
  touchableIcon?: boolean;
  iconName: 'close' | 'check mark';
}

export interface InputProps {
  onChangeText: (_: string) => void;
  onIconPress?: (event: GestureResponderEvent) => void;
  value: string;
  placeholder: string;
  style?: object;
  styleInputField?: object;
  autoFocus?: boolean;
  touchableIcon?: boolean;
  isEditMode?: boolean;
  secureTextEntry?: boolean;
  textContentType?: 'emailAddress' | 'password';
  keyboardType?: 'email-address' | 'default';
  iconName?: 'close' | 'check mark' | null;
}

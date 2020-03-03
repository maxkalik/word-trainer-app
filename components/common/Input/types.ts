import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export interface IconProps {
  onIconPress?: ((event: GestureResponderEvent) => void) | undefined;
  touchableIcon?: boolean;
  iconName: 'close' | 'check mark';
  iconColor?: string;
}

export interface InputProps {
  onChangeText: (_: string) => void;
  onIconPress?: (event: GestureResponderEvent) => void;
  value: string;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  styleInputField?: StyleProp<ViewStyle>;
  withBorder?: boolean;
  autoFocus?: boolean;
  touchableIcon?: boolean;
  isEditMode?: boolean;
  secureTextEntry?: boolean;
  textContentType?: 'emailAddress' | 'password';
  keyboardType?: 'email-address' | 'default';
  iconName?: 'close' | 'check mark' | null;
  iconColor?: string;
}

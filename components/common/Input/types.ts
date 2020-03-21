import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { ModeTypes } from '../../../state/ModeState';

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
  autoFocus?: boolean;
  touchableIcon?: boolean;
  isEditMode?: boolean;
  secureTextEntry?: boolean;
  textContentType?: 'emailAddress' | 'password';
  keyboardType?: 'email-address' | 'default';
  iconName?: 'close' | 'check mark' | null;
  iconColor?: string;
  mode?: ModeTypes;
  focused?: (focus: boolean) => void;
  lined?: boolean;
}

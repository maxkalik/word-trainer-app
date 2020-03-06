import { StyleProp, TextStyle } from 'react-native';
import { ModeTypes } from '../../../state/ModeState';

export interface ListItemLineItemProps {
  mode: ModeTypes;
  addStyle: StyleProp<TextStyle>;
  children: string;
}

export interface ListItemProps {
  mode: ModeTypes;
  name: string;
  value: string | null;
  containerStyle?: StyleProp<TextStyle>;
  nameStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
}

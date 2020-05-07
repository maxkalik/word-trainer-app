import { GestureResponderEvent } from 'react-native';
import { ModeTypes } from '../../../state/ModeState';

export interface MessageProps {
  title: string;
  description: string;
  btnTitle: string;
  btnOnPress: (event: GestureResponderEvent) => void;
  mode: ModeTypes;
}

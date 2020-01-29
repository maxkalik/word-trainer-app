import { GestureResponderEvent } from 'react-native';

export interface MessageProps {
  title: string;
  description: string;
  btnTitle: string;
  btnOnPress: (event: GestureResponderEvent) => void;
}

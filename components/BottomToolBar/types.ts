import { GestureResponderEvent } from 'react-native';

export interface BottomToolBarProps {
  acceptBtnTitle: string;
  acceptBtnOnPress: (event: GestureResponderEvent) => void;
  cancelBtnTitle: string;
  cancelBtnOnPress: (event: GestureResponderEvent) => void;
}

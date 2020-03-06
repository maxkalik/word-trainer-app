import { GestureResponderEvent } from 'react-native';
import { ModeTypes } from '../../state/ModeState';

export interface BottomToolBarProps {
  acceptBtnTitle: string;
  acceptBtnOnPress: (event: GestureResponderEvent) => void;
  cancelBtnTitle: string;
  cancelBtnOnPress: (event: GestureResponderEvent) => void;
  mode: ModeTypes;
}

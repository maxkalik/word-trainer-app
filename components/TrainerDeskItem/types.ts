import { GestureResponderEvent } from 'react-native';

export interface TrainerDeskItemProps {
  name: string;
  onPress: (event: GestureResponderEvent) => void;
  isActive: null | string;
  disabled: boolean;
}

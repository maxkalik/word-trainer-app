import { GestureResponderEvent } from 'react-native';

export interface TrainerItemProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

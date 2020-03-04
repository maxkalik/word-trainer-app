import { GestureResponderEvent } from 'react-native';

export interface TrainerProps {
  onPressBackButton: (event: GestureResponderEvent) => void;
  children: JSX.Element;
  backButtonColor: string;
  bgColor: string;
  backGradientOpacity?: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
}

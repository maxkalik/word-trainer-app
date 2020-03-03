import { GestureResponderEvent, ImageSourcePropType } from 'react-native';

export interface TrainerItemProps {
  title: string;
  imgSource: ImageSourcePropType;
  backgroundColor: string;
  onPress: (event: GestureResponderEvent) => void;
}

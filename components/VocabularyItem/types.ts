import { GestureResponderEvent } from 'react-native';
import { WordTypes } from '../../state/WordsState';

export interface VocabularyItemProps {
  wordItem: WordTypes;
  checkBox?: boolean;
  checked: boolean;
  onPress: (event: GestureResponderEvent) => void;
  onCheckmarkPress: () => void;
}

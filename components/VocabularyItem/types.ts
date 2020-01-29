import { WordTypes } from '../../types';

export interface VocabularyItemProps {
  wordItem: WordTypes;
  checkBox?: boolean;
  checked: boolean;
  onCheckmarkPress: () => void;
}

import { WordTypes } from '../../state/WordsState';

export interface VocabularyWordItemProps {
  item: WordTypes;
  isCheckMode?: boolean;
  checked: boolean;
}

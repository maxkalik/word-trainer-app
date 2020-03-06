import { WordTypes } from '../../state/WordsState';
import { ModeTypes } from '../../state/ModeState';

export interface VocabularyWordItemProps {
  item: WordTypes;
  isCheckMode?: boolean;
  checked: boolean;
  mode: ModeTypes;
}

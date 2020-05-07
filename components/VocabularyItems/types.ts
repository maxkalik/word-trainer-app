import { WordTypes } from '../../state/WordsState';

export interface VocabularyItemsProps {
  vocabularyWords: WordTypes[];
  editMode: boolean;
  checkedItems: string[];
  onItemPress: (item: WordTypes) => void;
  onCheckChange: (id: string) => void;
}

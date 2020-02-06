import { WordTypes } from '../../types';

export interface VocabularyItemsProps {
  vocabularyWords: WordTypes[];
  editMode: boolean;
  checkedItems: string[];
  onItemPress: (id: WordTypes) => void;
  onCheckChange: (item: string) => void;
}

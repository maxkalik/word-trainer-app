import { WordTypes } from '../../types';

export interface VocabularyItemsProps {
  vocabularyWords: WordTypes[];
  editMode: boolean;
  checkedItems: string[];
  onCheckChange: (id: string) => void;
}

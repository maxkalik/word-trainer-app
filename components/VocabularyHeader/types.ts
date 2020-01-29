export interface VocabularyHeaderProps {
  onChangeInputText: (_: string) => void;
  onClearBtnPress: () => void;
  onEditBtnPress: () => void;
  value: string;
  isEditBtnPressed: boolean;
}

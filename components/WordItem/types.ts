import { WordTypes } from 'state/WordsState';

export const initialState: WordTypes = {
  id: '',
  word: '',
  translation: ''
};

export interface WordItemProps {
  mainBtnTitle: string;
  actionName: 'push' | 'set';
  item?: WordTypes;
}

export interface TextInputsProps {
  name: keyof typeof initialState;
  placeholder: string;
}

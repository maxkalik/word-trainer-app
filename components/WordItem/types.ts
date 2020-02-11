import { WordTypes } from 'types';

export const initialState: WordTypes = {
  id: '',
  word: '',
  translation: ''
};

export interface WordItemProps {
  mainBtnTitle: string;
  actionName: 'push' | 'set';
  item?: WordTypes | undefined;
}

export interface TextInputsProps {
  name: keyof typeof initialState;
  placeholder: string;
}
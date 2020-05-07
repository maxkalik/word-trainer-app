import { WordTypes } from '../../state/WordsState';
import { ModeTypes } from '../../state/ModeState';

export const initialState: WordTypes = {
  id: '',
  word: '',
  translation: ''
};

export interface WordItemProps {
  mainBtnTitle: string;
  actionName: 'push' | 'set';
  item?: WordTypes;
  mode: ModeTypes;
}

export interface TextInputsProps {
  name: keyof typeof initialState;
  placeholder: string;
}

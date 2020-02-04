import { WordTypes } from '../../types';

export interface InitialStateProps {
  answer: null | string;
  id: null | string;
}

export interface DeskProps {
  wordsArr: WordTypes[];
  updateWordsState: () => void;
  headerWord: string;
  spinnerAfterClick: (flag: boolean) => void;
}

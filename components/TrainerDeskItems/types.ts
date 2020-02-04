import { WordTypes } from '../../types';

export interface InitialStateProps {
  answer: null | string;
  id: null | string;
}

export interface DeskProps {
  wordsArr: WordTypes[];
  updateWordsState: () => void;
  headerWordId: string;
}

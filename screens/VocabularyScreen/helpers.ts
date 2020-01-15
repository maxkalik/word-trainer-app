import { WordTypes } from '../../types';

export const findMatches = (arr: WordTypes[], str: string): WordTypes[] =>
  arr.filter(
    ({ word, translation }) => word.includes(str) || translation.includes(str)
  );

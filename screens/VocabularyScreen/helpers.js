import { normalizeString } from '../../helpers';
import { WordTypes } from '../../types';

export const findMatches = (arr: WordTypes[], value: string): WordTypes[] => {
  const preparedValue = normalizeString(value);
  return arr.filter(({ word, translation }) => {
    const preparedWord = normalizeString(word);
    const preparedTranslation = normalizeString(translation);
    return preparedWord.includes(preparedValue) || preparedTranslation.includes(preparedValue);
  });
};

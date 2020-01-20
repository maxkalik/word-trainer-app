import { WordTypes } from '../../types';

export const findMatches = (arr: WordTypes[], value: string): WordTypes[] => {
  const preparedValue = value.toLowerCase();
  return arr.filter(({ word, translation }) => {
    const preparedWord = word.toLowerCase();
    const preparedTranslation = translation.toLowerCase();
    return (
      preparedWord.includes(preparedValue) ||
      preparedTranslation.includes(preparedValue)
    );
  });
};

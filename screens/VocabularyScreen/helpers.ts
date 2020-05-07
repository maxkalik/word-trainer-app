import { normalizeString } from '../../helpers';
import { WordVluesTypes, WordTypes } from '../../state/WordsState';

export const findMatches = (arr: WordTypes[], value: string): WordTypes[] => {
  const preparedValue: string = normalizeString(value);
  return arr.filter(
    ({ word, translation }: WordVluesTypes): boolean => {
      const preparedWord = normalizeString(word);
      const preparedTranslation = normalizeString(translation);
      return preparedWord.includes(preparedValue) || preparedTranslation.includes(preparedValue);
    }
  );
};

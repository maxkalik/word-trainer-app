import { normalizeString } from '../../helpers';
import { WordTypes } from '../../state/WordsState';

export const checkStringIsPresent = (arr: WordTypes[], word: string): boolean => {
  let isPresent = false;
  if (arr.length > 0) {
    isPresent = arr.some((obj: WordTypes): boolean => normalizeString(obj.word) === normalizeString(word));
    return isPresent;
  } else {
    return false;
  }
};

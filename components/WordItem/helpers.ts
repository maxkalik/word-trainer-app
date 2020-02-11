import { normalizeString } from '../../helpers';

export const checkStringIsPresent = (arr: [], word: string) => {
  let isPresent = false;
  if (arr.length > 0) {
    isPresent = arr.some(
      (obj: any) => normalizeString(obj.word) === normalizeString(word)
    );
    return isPresent;
  } else {
    return false;
  }
};

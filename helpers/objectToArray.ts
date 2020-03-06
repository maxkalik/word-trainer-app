import { WordTypes } from '../state/WordsState';

const objectToArray = (obj: { [key: string]: WordTypes }): WordTypes[] => {
  const result = Object.keys(obj).map(key => {
    return { id: key, ...obj[key] };
  });
  return result;
};

export default objectToArray;

import { WordTypes } from '../../types';

const randomItem = (arr: []): any => arr[Math.floor(Math.random() * arr.length)];

const shuffle = (arr: []): [] => arr.sort(() => 0.5 - Math.random());

const makeWordsDesk = (count: number, wordsArr: [], result: WordTypes[] = []): [] => {
  if (wordsArr.length < 5) {
    return [];
  }
  let tmpCount = count;
  if (tmpCount <= 0) {
    return shuffle(result);
  }
  const randomWord = randomItem(wordsArr);
  if (!result.includes(randomWord)) {
    result.push(randomWord);
    tmpCount -= 1;
  }
  return makeWordsDesk(tmpCount, wordsArr, result);
};

export { randomItem, shuffle, makeWordsDesk };

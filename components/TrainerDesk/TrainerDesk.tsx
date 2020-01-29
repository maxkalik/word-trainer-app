import React, { useState } from 'react';
import TrainerDeskItems from '../../components/TrainerDeskItems/TrainerDeskItems';
import TrainerWord from '../../components/TrainerWord/TrainerWord';
import { randomItem, makeWordsDesk } from './helpers';
import { WordTypes } from '../../types';

const TrainerDesk: React.FC<{ words: WordTypes[] }> = ({
  words
}): JSX.Element => {
  const [wordsDesk, setWordsDesk] = useState(makeWordsDesk(5, words));
  const showedWord = randomItem(wordsDesk);
  console.log(wordsDesk);
  return (
    <>
      <TrainerWord word={showedWord.word} />
      <TrainerDeskItems
        wordsArr={wordsDesk}
        updateWordsState={() => setWordsDesk(makeWordsDesk(5, words))}
        headerWord={showedWord.word}
      />
    </>
  );
};

export default TrainerDesk;

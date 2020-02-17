import React, { useState } from 'react';
import TrainerDeskItems from '../TrainerDeskItems/TrainerDeskItems';
import TrainerWord from '../TrainerWord/TrainerWord';
import { randomItem, makeWordsDesk } from './helpers';
import { WordTypes } from '../../types';

const TrainerDesk: React.FC<{ words: WordTypes[] }> = ({ words }): JSX.Element => {
  const [wordsDesk, setWordsDesk] = useState(makeWordsDesk(5, words));
  const showedWord = randomItem(wordsDesk);
  return (
    <>
      <TrainerWord word={showedWord.translate} />
      <TrainerDeskItems
        wordsArr={wordsDesk}
        headerWordId={showedWord.id}
        updateWordsState={() => setWordsDesk(makeWordsDesk(5, words))}
        translateToWord
      />
    </>
  );
};

export default TrainerDesk;

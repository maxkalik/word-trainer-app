import React, { useState } from 'react';
import { View } from 'react-native';
import TrainerDeskItems from '../../components/TrainerDeskItems/TrainerDeskItems';
import TrainerWord from '../../components/TrainerWord/TrainerWord';
import { randomItem, makeWordsDesk } from './helpers';
import { WordTypes } from '../../types';

const TrainerDesk: React.FC<{ words: WordTypes[] }> = ({ words }): JSX.Element => {
  const [wordsDesk, setWordsDesk] = useState(makeWordsDesk(5, words));
  const showedWord = randomItem(wordsDesk);
  return (
    <>
      <TrainerWord word={showedWord.word} />
      <TrainerDeskItems
        wordsArr={wordsDesk}
        headerWordId={showedWord.id}
        updateWordsState={() => setWordsDesk(makeWordsDesk(5, words))}
      />
    </>
  );
};

export default TrainerDesk;

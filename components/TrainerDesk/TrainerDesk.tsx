import React, { useState } from 'react';
import TrainerDeskItems from '../../components/TrainerDeskItems/TrainerDeskItems';
import TrainerWord from '../../components/TrainerWord/TrainerWord';
import { randomItem, makeWordsDesk } from './helpers';
import { colors } from '../../util/constants';
import { WordTypes } from '../../types';

const TrainerDesk: React.FC<{ words: WordTypes[]; translateToWord?: boolean }> = ({
  words,
  translateToWord
}): JSX.Element => {
  const [wordsDesk, setWordsDesk] = useState(makeWordsDesk(5, words));
  const showedWord = randomItem(wordsDesk);
  return (
    <>
      <TrainerWord
        word={translateToWord ? showedWord.translation : showedWord.word}
        color={colors.COLOR_PRIMARY_ON_BG}
      />
      <TrainerDeskItems
        wordsArr={wordsDesk}
        headerWordId={showedWord.id}
        updateWordsState={() => setWordsDesk(makeWordsDesk(5, words))}
        translateToWord={translateToWord}
      />
    </>
  );
};

export default TrainerDesk;

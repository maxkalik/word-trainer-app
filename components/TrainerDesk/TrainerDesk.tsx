import React, { useState } from 'react';
import TrainerDeskItems from '../../components/TrainerDeskItems/TrainerDeskItems';
import TrainerWord from '../../components/TrainerWord/TrainerWord';
import { randomItem, makeWordsDesk } from './helpers';
import { WordTypes } from '../../types';

const TrainerDesk: React.FC<{ words: WordTypes[] }> = ({
  words
}): JSX.Element => {
  const [wordsDesk, setWordsDesk] = useState(makeWordsDesk(5, words));
  const [timerLine, setTimerLine] = useState(false);
  const showedWord = randomItem(wordsDesk);

  return (
    <>
      <TrainerWord word={showedWord.word} timerLine={timerLine} />
      <TrainerDeskItems
        wordsArr={wordsDesk}
        updateWordsState={() => setWordsDesk(makeWordsDesk(5, words))}
        spinnerAfterClick={spinner => setTimerLine(spinner)}
        headerWord={showedWord.word}
      />
    </>
  );
};

export default TrainerDesk;

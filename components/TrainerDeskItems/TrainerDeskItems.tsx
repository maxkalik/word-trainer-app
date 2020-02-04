import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TrainerDeskItem from '../TrainerDeskItem/TrainerDeskItem';
import { InitialStateProps, DeskProps } from './types';
import { styles } from './styles';

const INITIAL_STATE = { answer: null, id: null };

const TrainerDeskItems: React.FC<DeskProps> = ({
  wordsArr,
  updateWordsState,
  headerWord,
  spinnerAfterClick
}): JSX.Element => {
  const [selection, setSelection] = useState<InitialStateProps>(INITIAL_STATE);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    spinnerAfterClick(spinner);
  });

  const handleSelection = (word: string, id: string): void => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
      updateWordsState();
      setSelection(INITIAL_STATE);
    }, 1000);
    if (word === headerWord) {
      return setSelection({ answer: 'correct', id });
    }
    return setSelection({ answer: 'failed', id });
  };

  return (
    <View style={styles.container}>
      {wordsArr.map(({ word, translation, id }) => (
        <TrainerDeskItem
          key={id}
          disabled={selection.answer !== null}
          onPress={() => handleSelection(word, id)}
          isActive={selection.id === id ? selection.answer : null}
          name={translation}
        />
      ))}
    </View>
  );
};

export default TrainerDeskItems;

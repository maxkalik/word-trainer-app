import React, { useState } from 'react';
import { View } from 'react-native';
import TrainerDeskItem from '../TrainerDeskItem/TrainerDeskItem';
import { InitialStateProps, DeskProps } from './types';
import { styles } from './styles';

const INITIAL_STATE = { answer: null, id: null };

const TrainerDeskItems: React.FC<DeskProps> = ({ wordsArr, updateWordsState, headerWordId }): JSX.Element => {
  const [selection, setSelection] = useState<InitialStateProps>(INITIAL_STATE);

  const handleSelection = (id: string): void => {
    setTimeout(() => {
      updateWordsState();
      setSelection(INITIAL_STATE);
    }, 1000);
    if (id === headerWordId) {
      return setSelection({ answer: 'correct', id });
    }
    return setSelection({ answer: 'failed', id });
  };

  const setActive = (id: string): string | null => {
    if (selection.id === id) {
      return selection.answer;
    } else {
      if (headerWordId === id) {
        if (selection.answer !== null) {
          return 'hint';
        }
      }
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {wordsArr.map(({ translation, id }) => (
        <TrainerDeskItem
          key={id}
          disabled={selection.answer !== null}
          onPress={() => handleSelection(id)}
          isActive={setActive(id)}
          name={translation}
        />
      ))}
    </View>
  );
};

export default TrainerDeskItems;

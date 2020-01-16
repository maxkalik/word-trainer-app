import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TrainerDeskItem from './TrainerDeskItem';
import { WordTypes } from '../types';

interface InitialStateProps {
  answer: null | string;
  id: null | string;
}

interface DeskProps {
  wordsArr: WordTypes[];
  updateWordsState: () => void;
  headerWord: string;
}

const INITIAL_STATE = { answer: null, id: null };

const TrainerDeskItems: React.FC<DeskProps> = ({
  wordsArr,
  updateWordsState,
  headerWord
}): JSX.Element => {
  const [selection, setSelection] = useState<InitialStateProps>(INITIAL_STATE);

  const handleSelection = (word: string, id: string): void => {
    setTimeout(() => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TrainerDeskItems;

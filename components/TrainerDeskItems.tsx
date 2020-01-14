import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import TrainerDeskItem from './TrainerDeskItem';

interface InitialStateProps {
  answer: null | string;
  id: null | string;
}

interface DeskProps {
  wordsArr: [];
  updateWordsState: () => InitialStateProps;
  headerWord: object;
}

const INITIAL_STATE: InitialStateProps = { answer: null, id: null };

const TrainerDeskItems: React.FC<DeskProps> = ({
  wordsArr,
  updateWordsState,
  headerWord
}): JSX.Element => {
  const [selection, setSelection] = useState<InitialStateProps>(INITIAL_STATE);
  const handleSelection = (
    word: object,
    id: string
  ): { answer: string; id: string } => {
    setTimeout(() => {
      updateWordsState();
      setSelection(INITIAL_STATE);
    }, 1000);
    if (word === headerWord) {
      return setSelection({ answer: 'right', id });
    }
    return setSelection({ answer: 'failed', id });
  };

  return (
    <View>
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

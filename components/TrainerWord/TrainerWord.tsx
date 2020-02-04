import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const TrainerWord: React.FC<{ word: string; timerLine: boolean }> = ({
  word,
  timerLine
}): JSX.Element => {
  console.log(timerLine);
  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word}</Text>
    </View>
  );
};

export default TrainerWord;

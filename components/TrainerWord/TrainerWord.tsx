import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const TrainerWord: React.FC<{ word: string }> = ({ word }): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.word}>{word}</Text>
  </View>
);

export default TrainerWord;

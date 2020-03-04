import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const TrainerWord: React.FC<{ word: string; color?: string }> = ({ word, color }): JSX.Element => (
  <View style={styles.container}>
    <Text style={[styles.word, { color }]}>{word}</Text>
  </View>
);

export default TrainerWord;

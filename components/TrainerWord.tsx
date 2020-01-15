import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
interface TrainerWordProps {
  word: string;
}

const TrainerWord: React.FC<TrainerWordProps> = ({ word }): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.word}>{word}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  word: {
    color: 'black',
    fontSize: 32
  }
});

export default TrainerWord;

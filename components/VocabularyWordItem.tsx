import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WordTypes } from '../types';

const VocabularyWordItem: React.FC<{ item: WordTypes }> = ({
  item: { word, translation }
}): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.word}>{word}</Text>
    <Text style={styles.translation}>{translation}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  word: {
    flex: 1
  },
  translation: {
    flex: 1
  }
});

export default VocabularyWordItem;

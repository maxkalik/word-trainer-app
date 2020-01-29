import React from 'react';
import { View, Text } from 'react-native';
import { WordTypes } from '../../types';
import { styles } from './styles';

const VocabularyWordItem: React.FC<{ item: WordTypes }> = ({
  item: { word, translation }
}): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.word}>{word}</Text>
    <Text style={styles.translation}>{translation}</Text>
  </View>
);

export default VocabularyWordItem;

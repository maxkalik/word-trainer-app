import React from 'react';
import { Text, View } from 'react-native';
import { WordTypes } from '../../types';
import { styles } from './styles';

const VocabularyWordItem: React.FC<{
  item: WordTypes;
  isCheckMode?: boolean;
}> = ({ item: { word, translation }, isCheckMode }): JSX.Element => (
  <View style={[styles.container, isCheckMode && styles.isCheckMode]}>
    <Text style={styles.word}>{word}</Text>
    <Text style={styles.translation}>{translation}</Text>
  </View>
);

export default VocabularyWordItem;

import React from 'react';
import { Text, View } from 'react-native';
import { VocabularyWordItemProps } from './types';
import { styles } from './styles';

const VocabularyWordItem: React.FC<VocabularyWordItemProps> = ({
  item: { word, translation },
  isCheckMode,
  checked
}): JSX.Element => (
  <View style={[styles.container, isCheckMode && styles.isCheckMode]}>
    <Text style={styles.word}>{word}</Text>
    <Text style={[styles.translation, checked && styles.checkedTranslation]}>
      {translation}
    </Text>
  </View>
);

export default VocabularyWordItem;

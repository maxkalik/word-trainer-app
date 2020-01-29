import React from 'react';
import { View } from 'react-native';
import { Checkbox } from '../common';
import VocabularyWordItem from '../VocabularyWordItem/VocabularyWordItem';
import { VocabularyItemProps } from './types';
import { styles } from './styles';

const VocabularyItem: React.FC<VocabularyItemProps> = ({
  wordItem,
  checkBox,
  checked,
  onCheckmarkPress
}): JSX.Element => (
  <View style={styles.container}>
    {checkBox && <Checkbox checked={checked} onPress={onCheckmarkPress} />}
    <VocabularyWordItem item={wordItem} />
  </View>
);

export default VocabularyItem;

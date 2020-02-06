import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Checkbox } from '../common';
import VocabularyWordItem from '../VocabularyWordItem/VocabularyWordItem';
import { VocabularyItemProps } from './types';
import { styles } from './styles';

const VocabularyItem: React.FC<VocabularyItemProps> = ({
  wordItem,
  checkBox,
  checked,
  onCheckmarkPress,
  onPress
}): JSX.Element => (
  <TouchableOpacity
    style={[styles.container, checked && styles.checked]}
    onPress={onPress}>
    {checkBox && <Checkbox checked={checked} onPress={onCheckmarkPress} />}
    <VocabularyWordItem
      item={wordItem}
      isCheckMode={checkBox}
      checked={checked}
    />
  </TouchableOpacity>
);

export default VocabularyItem;

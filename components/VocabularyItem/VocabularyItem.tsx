import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Checkbox } from '../common';
import VocabularyWordItem from '../VocabularyWordItem/VocabularyWordItem';
import { VocabularyItemProps } from './types';
import { useModeValue } from '../../state';
import { colors } from '../../util/constants';
import { styles } from './styles';

const VocabularyItem: React.FC<VocabularyItemProps> = ({
  wordItem,
  checkBox,
  checked,
  onCheckmarkPress,
  onPress
}): JSX.Element => {
  const [mode] = useModeValue();
  return (
    <TouchableOpacity
      style={[styles.container, checked && { backgroundColor: colors[mode].COLOR_ACTIVE_CHECKED }]}
      onPress={onPress}
    >
      {checkBox && <Checkbox checked={checked} onPress={onCheckmarkPress} />}
      <VocabularyWordItem item={wordItem} isCheckMode={checkBox} checked={checked} mode={mode} />
    </TouchableOpacity>
  );
};

export default VocabularyItem;

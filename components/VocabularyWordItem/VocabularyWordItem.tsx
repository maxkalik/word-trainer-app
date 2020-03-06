import React from 'react';
import { ListItem } from '../common';
import { VocabularyWordItemProps } from './types';
import { styles } from './styles';

const VocabularyWordItem: React.FC<VocabularyWordItemProps> = ({
  item: { word, translation },
  isCheckMode,
  checked,
  mode
}): JSX.Element => (
  <ListItem
    mode={mode}
    containerStyle={[styles.container, isCheckMode && styles.isCheckMode]}
    name={word}
    nameStyle={styles.word}
    value={translation}
    valueStyle={[styles.translation, checked && styles.checkedTranslation]}
  />
);

export default VocabularyWordItem;

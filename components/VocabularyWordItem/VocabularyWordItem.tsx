import React from 'react';
import { ListItem } from '../common';
import { VocabularyWordItemProps } from './types';
import { useModeValue } from '../../state';
import { styles } from './styles';

const VocabularyWordItem: React.FC<VocabularyWordItemProps> = ({
  item: { word, translation },
  isCheckMode,
  checked
}): JSX.Element => {
  const [mode] = useModeValue();
  return (
    <ListItem
      mode={mode}
      containerStyle={[styles.container, isCheckMode && styles.isCheckMode]}
      name={word}
      nameStyle={styles.word}
      value={translation}
      valueStyle={[styles.translation, checked && styles.checkedTranslation]}
    />
  );
};

export default VocabularyWordItem;

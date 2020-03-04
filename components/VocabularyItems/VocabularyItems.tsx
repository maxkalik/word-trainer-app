import React from 'react';
import { FlatList } from 'react-native';
import VocabularyItem from '../../components/VocabularyItem/VocabularyItem';
import { sizes } from '../../util/constants';
import { WordTypes } from '../../types';
import { VocabularyItemsProps } from './types';

const VocabularyItems: React.FC<VocabularyItemsProps> = ({
  vocabularyWords,
  editMode,
  checkedItems,
  onItemPress,
  onCheckChange
}): JSX.Element => {
  const handleItemPress = (item: WordTypes) => {
    if (editMode) {
      onCheckChange(item.id);
    } else {
      onItemPress(item);
    }
  };

  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: sizes.HEIGHT_GENERAL }}
      data={vocabularyWords}
      renderItem={({ item }: { item: WordTypes }) => (
        <VocabularyItem
          wordItem={item}
          checkBox={editMode}
          checked={checkedItems.includes(item.id)}
          onPress={() => handleItemPress(item)}
          onCheckmarkPress={() => onCheckChange(item.id)}
        />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

export default VocabularyItems;

import React from 'react';
import { FlatList } from 'react-native';
import VocabularyItem from '../../components/VocabularyItem/VocabularyItem';
import { WordTypes } from '../../types';

interface VocabularyItemsProps {
  vocabularyWords: WordTypes[];
  editMode: boolean;
  checkedItems: string[];
  onCheckChange: (id: string) => void;
}

const VocabularyItems: React.FC<VocabularyItemsProps> = ({
  vocabularyWords,
  editMode,
  checkedItems,
  onCheckChange
}): JSX.Element => {
  const handleItemPress = (item: WordTypes) => {
    if (editMode) {
      onCheckChange(item.id);
    } else {
      // new screen with edit (similar add word screen)
      console.log(item);
    }
  };

  return (
    <FlatList
      style={{ paddingLeft: 15 }}
      data={vocabularyWords}
      renderItem={({ item }: { item: WordTypes }) => (
        <VocabularyItem
          wordItem={item}
          checkBox={editMode}
          checked={checkedItems.includes(item.id)}
          onCheckmarkPress={() => handleItemPress(item)}
        />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

export default VocabularyItems;

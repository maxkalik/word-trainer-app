import React, { useState } from 'react';
// import firebase from 'firebase';
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import VocabularyHeader from '../../components/VocabularyHeader';
import VocabularyItem from '../../components/VocabularyItem';
import { useStateValue } from '../../state';
import { WordTypes } from '../../types';

const VocabularyScreen: React.FC = (): JSX.Element => {
  const [{ words }] = useStateValue();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  console.log(checkedItems);

  const handleCheckChange = (id: string) => {
    if (!checkedItems.includes(id)) {
      setCheckedItems([...checkedItems, id]);
    } else {
      const updatedCheckedItems = checkedItems.filter(
        (itemId: string) => itemId !== id
      );
      setCheckedItems(updatedCheckedItems);
    }
  };

  if (words.length === 0) {
    return <View>Add your words</View>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <VocabularyHeader />
      <FlatList
        data={words}
        renderItem={({ item }: { item: WordTypes }) => (
          <VocabularyItem
            wordItem={item}
            checkBox
            checked={checkedItems.includes(item.id)}
            onCheckmarkPress={() => handleCheckChange(item.id)}
          />
        )}
        keyExtractor={({ id }) => id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { flex: 1, flexDirection: 'column' },
  wordItem: { flexDirection: 'row' },
  word: { flex: 1 },
  translation: { flex: 1 }
});

export default VocabularyScreen;

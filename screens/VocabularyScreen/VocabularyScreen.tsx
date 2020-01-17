import React, { useState, useEffect } from 'react';
// import firebase from 'firebase';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import VocabularyHeader from '../../components/VocabularyHeader';
import VocabularyItem from '../../components/VocabularyItem';
import BottomToolBar from '../../components/BottomToolBar';
import { useStateValue } from '../../state';
import { WordTypes } from '../../types';
import { findMatches } from './helpers';

const VocabularyScreen: React.FC = (): JSX.Element => {
  const [{ words }] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [vocabularyWords, setVocabularyWords] = useState(words);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    setEditMode(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    const result = findMatches(words, inputValue);
    setVocabularyWords(result);
    setLoading(false);
  }, [inputValue, words]);

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

  const handleEditBtnPress = () => {
    Keyboard.dismiss();
    setCheckedItems([]);
    setEditMode(!editMode);
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (words.length === 0) {
    return <View>Add your words</View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <VocabularyHeader
        onChangeInputText={(value: string) => setInputValue(value)}
        value={inputValue}
        onClearBtnPress={() => setInputValue('')}
        onEditBtnPress={handleEditBtnPress}
        isEditBtnPressed={editMode}
      />
      <FlatList
        data={vocabularyWords}
        style={styles.list}
        renderItem={({ item }: { item: WordTypes }) => (
          <VocabularyItem
            wordItem={item}
            checkBox={editMode}
            checked={checkedItems.includes(item.id)}
            onCheckmarkPress={() => handleCheckChange(item.id)}
          />
        )}
        keyExtractor={({ id }) => id}
      />
      {checkedItems.length > 0 && (
        <BottomToolBar
          acceptBtnTitle="Remove Words"
          acceptBtnOnPress={() => console.log('remove')}
          cancelBtnTitle="Cancel"
          cancelBtnOnPress={handleEditBtnPress}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { paddingLeft: 10 }
});

export default VocabularyScreen;

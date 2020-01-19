import React, { useState, useEffect } from 'react';
import { NavigationEvents } from 'react-navigation';
import firebase from 'firebase';
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
    setLoading(true);
    const result = findMatches(words, inputValue);
    setVocabularyWords(result);
    setLoading(false);
  }, [inputValue, words]);

  const updateUI = () => {
    setCheckedItems([]);
    setInputValue('');
    setEditMode(false);
  };

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

  const handleRemove = () => {
    setLoading(true);
    checkedItems.forEach(item => {
      firebase
        .database()
        .ref(`/words/${item}`)
        .remove()
        .then(() => {
          setCheckedItems([]);
          setLoading(false);
        })
        .catch(error => console.log(error));
    });
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
      <NavigationEvents onWillFocus={updateUI} />
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
          acceptBtnOnPress={handleRemove}
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

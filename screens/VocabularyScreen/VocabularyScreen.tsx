import React, { useState, useEffect } from 'react';
import { NavigationEvents } from 'react-navigation';
import firebase from 'firebase';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Keyboard,
  View,
  Text
} from 'react-native';
import { Notification, Btn } from '../../components/common';
import VocabularyHeader from '../../components/VocabularyHeader';
import VocabularyItem from '../../components/VocabularyItem';
import BottomToolBar from '../../components/BottomToolBar';
import { NotificatonProps } from '../../components/common/Notification';
import { useStateValue } from '../../state';
import { WordTypes } from '../../types';
import { findMatches } from './helpers';

const VocabularyScreen: React.FC = (props: any): JSX.Element => {
  const [{ words }] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [vocabularyWords, setVocabularyWords] = useState(words);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificatonProps>({
    visible: false,
    title: ''
  });

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
          setLoading(false);
          setNotification({
            visible: true,
            title: 'Words has been successfully removed.'
          });
          setCheckedItems([]);
        })
        .catch(error => {
          setLoading(false);
          setNotification({
            visible: true,
            title: `Error: "${error}"`
          });
        });
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
    return (
      <View>
        <Text>You have no words yet</Text>
        <Btn
          filled
          onPress={() => props.navigation.navigate('Add Word')}
          title="Add Word"
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {notification.visible && <Notification title={notification.title} />}
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
          cancelBtnOnPress={() => setCheckedItems([])}
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

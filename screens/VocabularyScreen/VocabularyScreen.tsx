import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import firebase from 'firebase';
import { Message, Spinner } from '../../components/common';
import VocabularyHeader from '../../components/VocabularyHeader/VocabularyHeader';
import VocabularyItems from '../../components/VocabularyItems/VocabularyItems';
import BottomToolBar from '../../components/BottomToolBar/BottomToolBar';
import { useWordsValue } from '../../state/words';
import { useNotificationValue } from '../../state/notification';
import { WordTypes } from '../../types';
import { findMatches } from './helpers';
import { styles } from './styles';

const VocabularyScreen: React.FC = (props: any): JSX.Element => {
  const [{ words }] = useWordsValue();
  const [{ notificationMsg }, dispatchNotification] = useNotificationValue();
  const [loading, setLoading] = useState(false);
  const [vocabularyWords, setVocabularyWords] = useState<WordTypes[]>(words);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const wordsLength = words.length === 0;

  useEffect(() => {
    // should be fixed
    setLoading(true);
    const result = findMatches(words, inputValue);
    setVocabularyWords(result);
    setLoading(false);
  }, [inputValue, words]);

  useLayoutEffect(() => {
    if (props.isFocused) {
      updateUI();
    }
  }, [props.isFocused]);

  const updateUI = () => {
    setCheckedItems([]);
    setInputValue('');
    setEditMode(false);
  };

  const handleCheckChange = (id: string) => {
    if (!checkedItems.includes(id)) {
      setCheckedItems([...checkedItems, id]);
    } else {
      const updatedCheckedItems = checkedItems.filter((itemId: string) => itemId !== id);
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
          dispatchNotification({
            type: 'NOTIFICATION',
            notificationMsg: 'Words has been successfully removed.'
          });
        })
        .catch(error => {
          setLoading(false);
          dispatchNotification({
            type: 'NOTIFICATION',
            notificationMsg: `Error: "${error}"`
          });
        });
    });
    setCheckedItems([]);
  };

  const handleEditBtnPress = () => {
    Keyboard.dismiss();
    setCheckedItems([]);
    setEditMode(!editMode);
  };

  const renderContent = () => {
    if (wordsLength) {
      return (
        <Message
          title="You have no words yet"
          description="Append at least 10 words into your vocabulary"
          btnTitle="Add More Words"
          btnOnPress={(): void => props.navigation.navigate('Add Word')}
        />
      );
    }
    if (loading) {
      return <Spinner />;
    }
    return (
      <>
        <VocabularyHeader
          onChangeInputText={(value: string) => setInputValue(value)}
          value={inputValue}
          onClearBtnPress={() => setInputValue('')}
          onEditBtnPress={handleEditBtnPress}
          isEditBtnPressed={editMode}
        />
        <VocabularyItems
          vocabularyWords={vocabularyWords}
          editMode={editMode}
          checkedItems={checkedItems}
          onItemPress={item => props.navigation.navigate('Vocabulary Item', item)}
          onCheckChange={id => handleCheckChange(id)}
        />
        {checkedItems.length > 0 && (
          <BottomToolBar
            acceptBtnTitle="Remove Words"
            acceptBtnOnPress={handleRemove}
            cancelBtnTitle="Cancel"
            cancelBtnOnPress={() => setCheckedItems([])}
          />
        )}
      </>
    );
  };

  return <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>;
};

export default withNavigationFocus(VocabularyScreen);

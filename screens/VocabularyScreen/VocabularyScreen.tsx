import React, { useState, useEffect } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import firebase from 'firebase';
import { Notification, Message, Spinner } from '../../components/common';
import VocabularyHeader from '../../components/VocabularyHeader/VocabularyHeader';
import VocabularyItems from '../../components/VocabularyItems/VocabularyItems';
import BottomToolBar from '../../components/BottomToolBar/BottomToolBar';
import { useStateValue } from '../../state';
import { WordTypes } from '../../types';
import { findMatches } from './helpers';
import { styles } from './styles';

const VocabularyScreen: React.FC = (props: any): JSX.Element => {
  const [{ words }] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [vocabularyWords, setVocabularyWords] = useState<WordTypes[]>(words);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [notification, setNotification] = useState('');
  const wordsLength = words.length === 0;

  useEffect(() => {
    // should be fixed
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
          setNotification('Words has been successfully removed.');
          setCheckedItems([]);
        })
        .catch(error => {
          setLoading(false);
          setNotification(`Error: "${error}"`);
        });
    });
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
        <Notification title={notification} />
        <NavigationEvents onWillFocus={updateUI} />
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

  return (
    <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
  );
};

export default VocabularyScreen;

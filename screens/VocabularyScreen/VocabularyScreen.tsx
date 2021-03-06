import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import firebase from 'firebase';
import { Message, Spinner } from '../../components/common';
import VocabularyHeader from '../../components/VocabularyHeader/VocabularyHeader';
import VocabularyItems from '../../components/VocabularyItems/VocabularyItems';
import BottomToolBar from '../../components/BottomToolBar/BottomToolBar';
import { useModeValue, useNotificationValue, useUserValue, useWordsValue } from '../../state';
import { WordTypes } from '../../state/WordsState';
import { findMatches } from './helpers';
import { styles } from './styles';
import { colors } from '../../util/constants';

const VocabularyScreen: React.FC<{ navigation: any; isFocused: boolean }> = ({
  navigation,
  isFocused
}): JSX.Element => {
  const [mode] = useModeValue();
  const [, setNotification] = useNotificationValue();
  const [user] = useUserValue();
  const [words] = useWordsValue();

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
    if (isFocused) {
      updateUI();
    }
  }, [isFocused]);

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

  const onGetNotification = (message: string): void => {
    setLoading(false);
    setNotification(message);
  };

  const handleRemove = () => {
    setLoading(true);
    if (user !== null) {
      checkedItems.forEach(item => {
        firebase
          .database()
          .ref(`${user.uid}/words/${item}`)
          .remove()
          .then(() => {
            onGetNotification('Words has been successfully removed.');
          })
          .catch(error => {
            onGetNotification(`Error: "${error}"`);
          });
      });
      setCheckedItems([]);
    } else {
      onGetNotification('Cannot delete this word. Restart an app');
    }
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
          mode={mode}
          title="You have no words yet"
          description="Append at least 10 words into your vocabulary"
          btnTitle="Add More Words"
          btnOnPress={(): void => navigation.navigate('Add Word')}
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
          onItemPress={item => navigation.navigate('Vocabulary Item', item)}
          onCheckChange={id => handleCheckChange(id)}
        />
        {checkedItems.length > 0 && (
          <BottomToolBar
            acceptBtnTitle="Remove Words"
            acceptBtnOnPress={handleRemove}
            cancelBtnTitle="Cancel"
            cancelBtnOnPress={() => setCheckedItems([])}
            mode={mode}
          />
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[mode].COLOR_BACKGROUND }]}>
      {renderContent()}
    </SafeAreaView>
  );
};

export default withNavigationFocus(VocabularyScreen);

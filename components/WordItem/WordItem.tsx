import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { TextInput, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Scene, Notification, Btn } from '../../components/common';
import { initialState, TextInputsProps, WordItemProps } from './types';
import { styles } from './styles';

const inputFields: TextInputsProps[] = [
  {
    name: 'word',
    placeholder: 'Word'
  },
  {
    name: 'translation',
    placeholder: 'Translation'
  }
];

const WordItem: React.FC<WordItemProps> = ({
  mainBtnTitle,
  actionName,
  item
}): JSX.Element => {
  const [newWordItem, setNewWordItem] = useState(initialState);
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (item) {
      setNewWordItem(item);
      setLoading(false);
    } else {
      setNewWordItem(initialState);
      setLoading(false);
    }
  }, [item]);

  const handleInputChangeText = (value: string, inputField: string): void => {
    setNewWordItem({ ...newWordItem, [inputField]: value });
  };

  const isWordEmpty = newWordItem.word === '';
  const isTranslationEmpty = newWordItem.translation === '';
  const isFieldsEmpty = isWordEmpty && isTranslationEmpty;
  const isEditing = actionName !== 'set';
  const isShowSaveBtn = isEditing || isFocused;
  const isShowClearBtn = isEditing && (isFocused || !isFieldsEmpty);

  const handleButtonPress = () => {
    const flag = actionName;
    setLoading(true);
    setNotification('');
    if (isWordEmpty || isTranslationEmpty) {
      setLoading(false);
      setTimeout(() => setNotification('Inputs should not be empty'), 0);
    } else {
      if (flag === 'push') {
        firebase
          .database()
          .ref('words')
          .push({
            word: newWordItem.word,
            translation: newWordItem.translation
          })
          .then(() => {
            setNewWordItem(initialState);
            setLoading(false);
            setNotification(
              `Word "${newWordItem.word}" has been successfully added.`
            );
          })
          .catch(error => {
            setLoading(false);
            setNotification(`Error: "${error}"`);
          });
      } else if (flag === 'set') {
        firebase
          .database()
          .ref(`words/${newWordItem.id}`)
          .set({ word: newWordItem.word, translation: newWordItem.translation })
          .then(() => {
            setLoading(false);
            setNotification(
              `Word "${newWordItem.word}" has been successfully saved.`
            );
          })
          .catch(error => {
            setLoading(false);
            setNotification(`Error: "${error}"`);
          });
      }
    }
  };

  const updateUI = () => {
    setNewWordItem(initialState);
    setNotification('');
  };

  return (
    <Scene keyboardAvoidingView={true}>
      {!loading && <NavigationEvents onWillFocus={updateUI} />}
      <Notification title={notification} />
      <View style={styles.container}>
        {inputFields.map(({ name, placeholder }: TextInputsProps) => (
          <TextInput
            key={name}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={'grey'}
            onChangeText={(value: string) => handleInputChangeText(value, name)}
            value={newWordItem[name]}
            autoFocus={name === 'word' && actionName !== 'set'}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        ))}
        <View style={styles.buttons}>
          {isShowSaveBtn && (
            <Btn
              filled
              loading={loading}
              onPress={handleButtonPress}
              title={mainBtnTitle}
            />
          )}
          {isShowClearBtn && (
            <Btn
              size="small"
              addStyle={styles.btnClear}
              onPress={() => setNewWordItem(initialState)}
              title="Clear Fields"
            />
          )}
        </View>
      </View>
    </Scene>
  );
};

export default WordItem;

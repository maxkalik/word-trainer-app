import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { TextInput, View, Keyboard } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Scene, Btn } from '../../components/common';
import { useStateValue } from '../../state';
import { checkStringIsPresent } from './helpers';
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
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [{ words }, dispatch] = useStateValue();

  const isWordEmpty = newWordItem.word === '';
  const isTranslationEmpty = newWordItem.translation === '';
  const isFieldsEmpty = isWordEmpty && isTranslationEmpty;
  const isEditing = actionName !== 'set';
  const isShowSaveBtn = isEditing || isFocused;
  const isShowClearBtn = isEditing && (isFocused || !isFieldsEmpty);

  useEffect(() => {
    if (item) {
      setNewWordItem(item);
    } else {
      setNewWordItem(initialState);
    }
  }, [item]);

  const handleInputChangeText = (value: string, inputField: string): void => {
    setNewWordItem({ ...newWordItem, [inputField]: value });
  };

  const makePushRequest = () => {
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
        dispatch({
          type: 'NOTIFICATION',
          notificationMsg: `Word "${
            newWordItem.word
          }" has been successfully added.`
        });
      })
      .catch(error => {
        setLoading(false);
        dispatch({
          type: 'NOTIFICATION',
          notificationMsg: `Error: "${error}"`
        });
      });
  };

  const makeSetRequest = () => {
    firebase
      .database()
      .ref(`words/${newWordItem.id}`)
      .set({
        word: newWordItem.word,
        translation: newWordItem.translation
      })
      .then(() => {
        setLoading(false);
        dispatch({
          type: 'NOTIFICATION',
          notificationMsg: `Word "${
            newWordItem.word
          }" has been successfully saved.`
        });
      })
      .catch(error => {
        setLoading(false);
        dispatch({
          type: 'NOTIFICATION',
          notificationMsg: `Error: "${error}"`
        });
      });
  };

  const pushSubmit = () => {
    const isWordPresent = checkStringIsPresent(words, newWordItem.word);
    if (isWordEmpty || isTranslationEmpty) {
      setLoading(false);
      dispatch({
        type: 'NOTIFICATION',
        notificationMsg: 'Inputs should not be empty'
      });
    } else if (isWordPresent) {
      setLoading(false);
      dispatch({
        type: 'NOTIFICATION',
        notificationMsg: `Word "${newWordItem.word}" is already exsist.`
      });
    } else {
      Keyboard.dismiss();
      return makePushRequest();
    }
  };

  const setSubmit = () => {
    if (isWordEmpty || isTranslationEmpty) {
      setLoading(false);
      dispatch({
        type: 'NOTIFICATION',
        notificationMsg: 'Inputs should not be empty'
      });
    } else {
      Keyboard.dismiss();
      return makeSetRequest();
    }
  };

  const handleButtonPress = () => {
    setLoading(true);
    switch (actionName) {
      case 'push':
        return pushSubmit();
      case 'set':
        return setSubmit();
      default:
        return;
    }
  };

  const updateUI = () => {
    setNewWordItem(initialState);
    dispatch({
      type: 'NOTIFICATION',
      notificationMsg: ''
    });
  };

  return (
    <Scene keyboardAvoidingView={true}>
      {!loading && <NavigationEvents onWillFocus={updateUI} />}
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

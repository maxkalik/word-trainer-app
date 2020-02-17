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

const WordItem: React.FC<WordItemProps> = ({ mainBtnTitle, actionName, item }): JSX.Element => {
  const [wordItem, setWordItem] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [{ words }, dispatch] = useStateValue();

  const isWordEmpty = wordItem.word === '';
  const isTranslationEmpty = wordItem.translation === '';
  const isFieldsEmpty = isWordEmpty && isTranslationEmpty;
  const isEditing = actionName !== 'set';
  const isShowSaveBtn = isEditing || isFocused;
  const isShowClearBtn = isEditing && (isFocused || !isFieldsEmpty);
  const isWordPresent = checkStringIsPresent(words, wordItem.word);

  useEffect(() => {
    if (item) {
      setWordItem(item);
    } else {
      setWordItem(initialState);
    }
  }, [item]);

  const handleInputChangeText = (value: string, inputField: string): void => {
    setWordItem({ ...wordItem, [inputField]: value });
  };

  const makeNotification = (msg: string): void => {
    dispatch({
      type: 'NOTIFICATION',
      notificationMsg: msg
    });
  };

  const getNotification = (flag: string, payload?: string): void => {
    setLoading(false);
    switch (flag) {
      case 'empty fields':
        return makeNotification('Inputs should not be empty');
      case 'same word':
        return makeNotification(`Word "${payload}" is already exsist.`);
      case 'error':
        return makeNotification(`Error: "${payload}"`);
      case 'success add':
        return makeNotification(`Word "${payload}" has been successfully added.`);
      case 'success save':
        return makeNotification(`Word "${payload}" has been successfully saved.`);
      default:
        return;
    }
  };

  const makePushRequest = () => {
    firebase
      .database()
      .ref('words')
      .push({
        word: wordItem.word,
        translation: wordItem.translation
      })
      .then(() => {
        setWordItem(initialState);
        getNotification('success add', wordItem.word);
      })
      .catch(error => {
        getNotification('error', error);
      });
  };

  const makeSetRequest = () => {
    firebase
      .database()
      .ref(`words/${wordItem.id}`)
      .set({
        word: wordItem.word,
        translation: wordItem.translation
      })
      .then(() => {
        getNotification('success save', wordItem.word);
      })
      .catch(error => {
        getNotification('error', error);
      });
  };

  const pushSubmit = () => {
    if (isWordEmpty || isTranslationEmpty) {
      getNotification('empty fields');
    } else if (isWordPresent) {
      getNotification('same word', wordItem.word);
    } else {
      Keyboard.dismiss();
      return makePushRequest();
    }
  };

  const setSubmit = () => {
    if (isWordEmpty || isTranslationEmpty) {
      getNotification('empty fields');
    } else if (item && item.word !== wordItem.word && isWordPresent) {
      getNotification('same word', wordItem.word);
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

  return (
    <Scene keyboardAvoidingView={true}>
      {!loading && <NavigationEvents onWillFocus={() => setWordItem(initialState)} />}
      <View style={styles.container}>
        {inputFields.map(({ name, placeholder }: TextInputsProps) => (
          <TextInput
            key={name}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={'grey'}
            onChangeText={(value: string) => handleInputChangeText(value, name)}
            value={wordItem[name]}
            autoFocus={name === 'word' && actionName !== 'set'}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        ))}
        <View style={styles.buttons}>
          {isShowSaveBtn && <Btn filled loading={loading} onPress={handleButtonPress} title={mainBtnTitle} />}
          {isShowClearBtn && (
            <Btn
              size="small"
              addStyle={styles.btnClear}
              onPress={() => setWordItem(initialState)}
              title="Clear Fields"
            />
          )}
        </View>
      </View>
    </Scene>
  );
};

export default WordItem;

import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { TextInput, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Scene, Notification, Btn } from '../../components/common';
import { initialState, AddWordScreenProps, TextInputsProps } from './types';
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

interface WordItemProps {
  mainBtnTitle: string;
  actionName: string;
  word?: string | undefined;
  translation?: string | undefined;
  id?: string | undefined;
}

const WordItem: React.FC<WordItemProps> = ({
  mainBtnTitle,
  actionName,
  word,
  translation,
  id
}): JSX.Element => {
  const [newWordItem, setNewWordItem] = useState<AddWordScreenProps>(
    initialState
  );
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  console.log(isFocused);

  useEffect(() => {
    if (id) {
      setNewWordItem({ id, word, translation });
    }
  }, [id, translation, word]);

  const handleInputChangeText = (value: string, inputField: string): void => {
    setNewWordItem({ ...newWordItem, [inputField]: value });
  };

  const isFieldsEmpty =
    newWordItem.word === '' && newWordItem.translation === '';

  const handleButtonPress = () => {
    const flag = actionName;
    setLoading(true);
    setNotification('');
    if (newWordItem.word === '' || newWordItem.translation === '') {
      setLoading(false);
      setTimeout(() => setNotification('Inputs should not be empty'), 0);
    } else {
      if (flag === 'push') {
        firebase
          .database()
          .ref('words')
          .push(newWordItem)
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
        {inputFields.map(({ name, placeholder }) => (
          <TextInput
            key={name}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={'grey'}
            onChangeText={(value: string) => handleInputChangeText(value, name)}
            value={newWordItem[name]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        ))}
        <View style={styles.buttons}>
          <Btn
            filled
            loading={loading}
            onPress={handleButtonPress}
            title={mainBtnTitle}
          />
          {!isFieldsEmpty && (
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

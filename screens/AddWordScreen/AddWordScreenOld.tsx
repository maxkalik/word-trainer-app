import React, { useState } from 'react';
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

const AddWordScreen: React.FC = (): JSX.Element => {
  const [newWord, setNewWord] = useState<AddWordScreenProps>(initialState);
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChangeText = (value: string, inputField: string): void => {
    setNewWord({ ...newWord, [inputField]: value });
  };

  const isFieldsEmpty = newWord.word === '' && newWord.translation === '';

  const handleButtonPress = () => {
    setLoading(true);
    setNotification('');
    if (newWord.word === '' || newWord.translation === '') {
      setLoading(false);
      setTimeout(() => setNotification('Inputs should not be empty'), 0);
    } else {
      firebase
        .database()
        .ref('words')
        .push(newWord)
        .then(() => {
          setNewWord(initialState);
          setLoading(false);
          setNotification(
            `Word "${newWord.word}" has been successfully added.`
          );
        })
        .catch(error => {
          setLoading(false);
          setNotification(`Error: "${error}"`);
        });
    }
  };

  const updateUI = () => {
    setNewWord(initialState);
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
            value={newWord[name]}
          />
        ))}
        <View style={styles.buttons}>
          <Btn
            filled
            loading={loading}
            onPress={handleButtonPress}
            title="Add Word"
          />
          {!isFieldsEmpty && (
            <Btn
              size="small"
              addStyle={styles.btnClear}
              onPress={() => setNewWord(initialState)}
              title="Clear Fields"
            />
          )}
        </View>
      </View>
    </Scene>
  );
};

export default AddWordScreen;

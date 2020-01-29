import React, { useState } from 'react';
import firebase from 'firebase';
import { TextInput, View } from 'react-native';
import { Scene, Notification, Btn } from '../../components/common';
import { NotificatonProps } from '../../components/common/Notification/types';
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
  const [notification, setNotification] = useState<NotificatonProps>({
    visible: false,
    title: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChangeText = (value: string, inputField: string): void => {
    setNewWord({ ...newWord, [inputField]: value });
  };

  const handleButtonPress = () => {
    setLoading(true);
    firebase
      .database()
      .ref('words')
      .push(newWord)
      .then(() => {
        setNewWord(initialState);
        setLoading(false);
        setNotification({
          visible: true,
          title: `Word "${newWord.word}" has been successfully added.`
        });
      })
      .catch(error => {
        setLoading(false);
        setNotification({
          visible: true,
          title: `Error: "${error}"`
        });
      });
  };

  return (
    <>
      {notification.visible && <Notification title={notification.title} />}
      <Scene keyboardAvoidingView={true}>
        <View style={styles.container}>
          {inputFields.map(({ name, placeholder }) => (
            <TextInput
              key={name}
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor={'grey'}
              onChangeText={(value: string) =>
                handleInputChangeText(value, name)
              }
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
            <Btn
              size="small"
              addStyle={styles.btnClear}
              onPress={() => setNewWord(initialState)}
              title="Clear Fields"
            />
          </View>
        </View>
      </Scene>
    </>
  );
};

export default AddWordScreen;

import React, { useState } from 'react';
import firebase from 'firebase';
import { StyleSheet, TextInput, View } from 'react-native';
import { Scene, Notification, Btn } from '../../components/common';
import { NotificatonProps } from '../../components/common/Notification';

interface AddWordScreenProps {
  [key: string]: string;
}

const initialState = {
  word: '',
  translation: ''
};

interface TextInputsProps {
  name: string | keyof typeof initialState;
  placeholder: string;
}

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 320,
    padding: 20
  },
  input: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center'
  },
  buttons: {
    height: 120,
    justifyContent: 'space-between'
  },
  btnClear: {
    alignSelf: 'center',
    marginTop: 20
  }
});

export default AddWordScreen;

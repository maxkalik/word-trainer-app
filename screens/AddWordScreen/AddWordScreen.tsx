import React, { useState } from 'react';
import firebase from 'firebase';
import { StyleSheet, TextInput, View } from 'react-native';
import { Scene, Message, Btn } from '../../components/common';
import { MessageProps } from '../../components/common/Message';

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
  const [message, setMessage] = useState<MessageProps>({
    visible: false,
    title: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

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
        setMessage({
          visible: true,
          title: `Word "${newWord.word}" has been successfully added.`
        });
      })
      .catch(error => {
        setLoading(false);
        setMessage({
          visible: true,
          title: `Error: "${error}"`
        });
      });
  };

  if (message.visible) {
    return (
      <Message
        messageProps={message}
        onPress={() => setMessage({ ...message, visible: false })}
      />
    );
  }

  return (
    <Scene keyboardAvoidingView={true}>
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
        <Btn
          filled
          addStyle={styles.acceptBtn}
          loading={loading}
          onPress={handleButtonPress}
          title="Add Word"
        />
        <Btn
          size="small"
          addStyle={styles.clearBtn}
          onPress={() => setNewWord(initialState)}
          title="Clear Fields"
        />
      </View>
    </Scene>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 360,
    padding: 20,
  },
  input: {
    fontSize: 24,
    flex: 1,
    color: 'black',
    textAlign: 'center'
  },
  translation: {
    marginTop: 20
  },
  acceptBtn: {
    marginTop: 20
  },
  clearBtn: {
    marginTop: 10
  }
});

export default AddWordScreen;

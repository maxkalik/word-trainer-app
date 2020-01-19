import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';
import { Scene, Message, Btn } from '../../components/common';

interface AddWordScreenProps {
  [key: string]: string;
}

interface MessageProps {
  visible: boolean;
  title: string;
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
        setMessage({
          visible: true,
          title: `Error: "${error}"`
        });
      });
  };

  if (message.visible) {
    return (
      <Message
        {...message}
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
        <Btn loading={loading} onPress={handleButtonPress} title="Add Word" />
        <Button title="Clear fields" onPress={() => setNewWord(initialState)} />
      </View>
    </Scene>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    padding: 20,
    justifyContent: 'space-between'
  },
  input: {
    fontSize: 24,
    flex: 1,
    color: 'black',
    textAlign: 'center'
  },
  translation: {
    marginTop: 20
  }
});

export default AddWordScreen;

import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import {
  KeyboardAvoidingView,
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';
import { Scene } from '../../components/common';

interface AddWordScreenProps {
  word: string;
  translation: string;
}

const initialState = {
  word: '',
  translation: ''
};

const AddWordScreen: React.FC = (): JSX.Element => {
  const [newWord, setNewWord] = useState<AddWordScreenProps>(initialState);
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
      })
      .catch(error => console.log(error));
  };

  return (
    <Scene loading={loading} keyboardAvoidingView={true}>
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder="Word"
          placeholderTextColor={'grey'}
          autoFocus
          onChangeText={(value: string) => handleInputChangeText(value, 'word')}
          value={newWord.word}
        />
        <TextInput
          style={[styles.input, styles.translation]}
          placeholder="Translation"
          placeholderTextColor={'grey'}
          onChangeText={(value: string) =>
            handleInputChangeText(value, 'translation')
          }
          value={newWord.translation}
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.btnTitle}>Add Word</Text>
        </TouchableOpacity>
        <Button title="Clear fields" onPress={() => setNewWord(initialState)} />
      </View>
    </Scene>
  );
};

const styles = StyleSheet.create({
  avoidingView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  inner: {
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
  },
  button: {
    padding: 20,
    marginVertical: 20,
    width: '100%',
    backgroundColor: 'black',
    alignSelf: 'flex-end'
  },
  btnTitle: {
    // flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: 24
  }
});

export default AddWordScreen;

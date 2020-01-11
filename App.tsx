import './fixtimerbug';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import initFirebase from './initFirebase';
import Navigation from './components/Navigation';
import { objectToArray } from './helpers';

interface Words {
  id: string;
  word: string;
  translation: string;
}

const App: React.FC = (): JSX.Element => {
  const [spinner, setSpinner] = useState(true);
  const [words, setWords] = useState<null | Words[]>(null);
  console.log(words);
  console.log(spinner);

  useEffect(() => {
    initFirebase();
    const database = firebase.database().ref('words');
    database.once('value', snapshot => {
      const data = snapshot.val();
      console.log(data);
      if (data !== null) {
        setWords(objectToArray(data).reverse());
        setSpinner(false);
      } else {
        console.log('Error while fetching data');
      }
    });
  }, []);

  if (spinner) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  return <Navigation theme="light" />;
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' }
});

export default App;

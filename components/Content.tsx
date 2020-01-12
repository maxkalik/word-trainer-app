import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Navigation from '../components/Navigation';
import { useStateValue } from '../state/useStateValue';
import { objectToArray } from '../helpers';

const Content: React.FC = (): JSX.Element => {
  // const [words, setWords] = useState<null | Words[]>(null);
  const [spinner, setSpinner] = useState(true);
  const [{ words }, dispatch] = useStateValue();

  useEffect(() => {
    const database = firebase.database().ref('words');
    database.on('value', snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        dispatch({
          type: 'FETCHING_WORDS',
          words: objectToArray(data).reverse()
        });
        setSpinner(false);
      } else {
        console.log('Error while fetching data');
      }
    });
  }, [dispatch]);

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

export default Content;

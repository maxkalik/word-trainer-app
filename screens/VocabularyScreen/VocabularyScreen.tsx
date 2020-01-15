import React from 'react';
// import firebase from 'firebase';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Platform,
  CheckBox
} from 'react-native';
import { useStateValue } from '../../state';

console.log(Platform.OS);

const VocabularyScreen: React.FC = (): JSX.Element => {
  const [{ words }] = useStateValue();
  return (
    <View style={styles.root}>
      {words.map(({ id, word, translation }) => (
        <View key={id} style={styles.wordItem}>
          {Platform.OS === 'android' && <CheckBox />}
          <Text style={styles.word}>{word}</Text>
          <Text style={styles.translation}>{translation}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, flexDirection: 'column' },
  wordItem: { flexDirection: 'row' },
  word: { flex: 1 },
  translation: { flex: 1 }
});

export default VocabularyScreen;

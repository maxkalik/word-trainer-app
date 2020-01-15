import React from 'react';
// import firebase from 'firebase';
import { StyleSheet, View, Text } from 'react-native';
import { WordTypes } from '../types';

interface VocabularyItemProps {
  wordItem: WordTypes;
  checkBox: boolean;
  checked: boolean;
  onChange: () => void;
}

const VocabularyItem: React.FC<VocabularyItemProps> = ({
  wordItem: { word, translation },
  checkBox,
  checked,
  onChange
}): JSX.Element => (
  <View>
    {checkBox && <Text></View>}
    <View style={styles.wordItem}>
      <Text style={styles.word}>{word}</Text>
      <Text style={styles.translation}>{translation}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  root: { flex: 1, flexDirection: 'column' },
  wordItem: { flexDirection: 'row' },
  word: { flex: 1 },
  translation: { flex: 1 }
});

export default VocabularyItem;

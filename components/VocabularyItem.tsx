import React from 'react';
// import firebase from 'firebase';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { WordTypes } from '../types';

interface VocabularyItemProps {
  wordItem: WordTypes;
  checkBox?: boolean;
  checked?: boolean;
  onPress?: () => void;
}

const VocabularyItem: React.FC<VocabularyItemProps> = ({
  wordItem: { word, translation },
  checkBox,
  checked,
  onPress
}): JSX.Element => (
  <View style={styles.container}>
    {checkBox && (
      <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
        <View style={styles.checkbox}>
          {checked && <View style={styles.mark} />}
        </View>
      </TouchableOpacity>
    )}
    <View style={styles.wordItem}>
      <Text style={{ flex: 1 }}>{word}</Text>
      <Text style={{ flex: 1 }}>{translation}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 50,
    alignItems: 'center'
  },
  wordItem: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingLeft: 10
  },
  checkboxContainer: {
    paddingLeft: 10,
    paddingRight: 10
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: 'black'
  },
  mark: {
    width: 10,
    height: 10,
    backgroundColor: 'black'
  }
});

export default VocabularyItem;

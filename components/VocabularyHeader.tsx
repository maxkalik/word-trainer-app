import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Header, Input } from './common';
// import { WordTypes } from '../types';

interface VocabularyHeaderProps {
  onChangeInputText: () => void;
  value: string;
}

const VocabularyHeader: React.FC<VocabularyHeaderProps> = ({
  onChangeInputText,
  value
}): JSX.Element => (
  <Header>
    <Input
      placeholder="Find a word"
      style={styles.input}
      onChangeText={onChangeInputText}
      value={value}
    />
    <Text>Search</Text>
  </Header>
);

const styles = StyleSheet.create({
  input: {
    flex: 1
  }
});

export default VocabularyHeader;

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useStateValue } from '../state/useStateValue';

const VocabularyScreen: React.FC = (): JSX.Element => {
  const [{ words }] = useStateValue();
  console.log('words array:', words);
  return (
    <View style={styles.root}>
      <Text>Vocabulary Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default VocabularyScreen;

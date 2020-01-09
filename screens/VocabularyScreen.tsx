import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const VocabularyScreen: React.FC = (): JSX.Element => (
  <View style={styles.root}>
    <Text>Vocabulary Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default VocabularyScreen;

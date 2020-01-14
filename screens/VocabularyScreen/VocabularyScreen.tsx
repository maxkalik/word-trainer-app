import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useStateValue } from '../../state';

const VocabularyScreen: React.FC = (): JSX.Element => {
  const [{ words }] = useStateValue();
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

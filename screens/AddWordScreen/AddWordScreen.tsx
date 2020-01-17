import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// KeyboardAvoidingView

const AddWordScreen: React.FC = (): JSX.Element => (
  <View style={styles.root}>
    <Text>Add Word Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default AddWordScreen;

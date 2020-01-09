import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

declare var global: { HermesInternal: null | {} };

const App: React.FC = (): JSX.Element => (
  <SafeAreaView>
    <View>
      <Text>Word Traners</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%'
  }
});

export default App;

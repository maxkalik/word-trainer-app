import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ProfileScreen: React.FC = (): JSX.Element => (
  <View style={styles.root}>
    <Text>Stats Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default ProfileScreen;

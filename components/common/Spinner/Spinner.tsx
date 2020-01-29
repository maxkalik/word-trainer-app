import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

const Spinner: React.FC = (): JSX.Element => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="black" />
  </View>
);

export default Spinner;

import React from 'react';
import { SafeAreaView, GestureResponderEvent } from 'react-native';
import { Header } from '../common';
import { styles } from './styles';

const Trainer: React.FC<{
  onPressBackButton: (event: GestureResponderEvent) => void;
  children: JSX.Element;
}> = ({ onPressBackButton, children }): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <Header backButton onPressBackButton={onPressBackButton} />
    {children}
  </SafeAreaView>
);

export default Trainer;

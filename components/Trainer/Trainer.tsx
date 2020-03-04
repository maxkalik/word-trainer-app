import React from 'react';
import { SafeAreaView, GestureResponderEvent, Image } from 'react-native';
import { Header } from '../common';
import { styles } from './styles';

const Trainer: React.FC<{
  onPressBackButton: (event: GestureResponderEvent) => void;
  children: JSX.Element;
  backButtonColor: string;
  bgColor: string;
  backGradientOpacity?: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
}> = ({ onPressBackButton, children, backButtonColor, bgColor, backGradientOpacity }): JSX.Element => (
  <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
    <Header backButton backButtonColor={backButtonColor} onPressBackButton={onPressBackButton} />
    {children}
    {backGradientOpacity && (
      <Image
        resizeMode="stretch"
        source={require('../../assets/images/png/gradient.png')}
        style={[styles.backImage, { opacity: backGradientOpacity }]}
      />
    )}
  </SafeAreaView>
);

export default Trainer;

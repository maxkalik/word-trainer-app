import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { Header } from '../common';
import { TrainerProps } from './types';
import { styles } from './styles';

const Trainer: React.FC<TrainerProps> = ({
  onPressBackButton,
  children,
  backButtonColor,
  bgColor,
  backGradientOpacity
}): JSX.Element => (
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

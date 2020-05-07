import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon24px } from '../../icons';
import { ButtonBackProps, HeaderProps } from './types';
import { styles } from './styles';

const BackButton: React.FC<ButtonBackProps> = ({ onPress, color }): JSX.Element => (
  <TouchableOpacity onPress={onPress} style={styles.backButton}>
    <Icon24px name="arrow left line" color={color} />
  </TouchableOpacity>
);

const Header: React.FC<HeaderProps> = ({
  backButton,
  onPressBackButton,
  backButtonColor,
  children
}): JSX.Element => (
  <View style={styles.container}>
    {backButton && <BackButton color={backButtonColor} onPress={onPressBackButton} />}
    {children}
  </View>
);

export default Header;

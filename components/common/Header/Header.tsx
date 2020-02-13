import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon24px } from '../../icons';
import { ButtonBackProps, HeaderProps } from './types';
import { styles } from './styles';

const BackButton: React.FC<ButtonBackProps> = ({ onPress }): JSX.Element => (
  <TouchableOpacity onPress={onPress} style={styles.backButton}>
    <Icon24px name="arrow left line" />
  </TouchableOpacity>
);

const Header: React.FC<HeaderProps> = ({ withBottomLine, backButton, onPressBackButton, children }): JSX.Element => (
  <View style={[styles.container, withBottomLine && styles.withBottomLine]}>
    {backButton && <BackButton onPress={onPressBackButton} />}
    {children}
  </View>
);

export default Header;

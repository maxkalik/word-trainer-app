import React from 'react';
import { Image } from 'react-native';
import { FadedView } from '../../components/common';
import { styles } from './styles';

const AuthTitle: React.FC<{ isFocused: boolean }> = ({ isFocused }): JSX.Element => (
  <FadedView style={styles.title} isFaded={isFocused}>
    <Image resizeMode="contain" source={require('../../assets/images/png/logo.png')} style={styles.logo} />
  </FadedView>
);

export default AuthTitle;

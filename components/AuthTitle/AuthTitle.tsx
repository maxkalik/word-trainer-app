import React from 'react';
import { FadedView, Title } from '../../components/common';
import { styles } from './styles';

const AuthTitle: React.FC<{ isFocused: boolean }> = ({ isFocused }): JSX.Element => (
  <FadedView style={styles.title} isFaded={isFocused}>
    <Title>Word Trainer App</Title>
  </FadedView>
);

export default AuthTitle;

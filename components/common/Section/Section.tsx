import React from 'react';
import { View } from 'react-native';
import Title from '../Title/Title';
import { styles } from './styles';

const Section: React.FC<{ title?: string; children: JSX.Element[] | JSX.Element }> = ({
  title,
  children
}): JSX.Element => (
  <View style={styles.container}>
    {title && <Title addStyles={styles.title}>{title}</Title>}
    {children}
  </View>
);

export default Section;

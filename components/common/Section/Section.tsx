import React from 'react';
import { View } from 'react-native';
import Title from '../Title/Title';
import { SectionProps } from './types';
import { styles } from './styles';

const Section: React.FC<SectionProps> = ({ title, mode, children }): JSX.Element => (
  <View style={styles.container}>
    {title && (
      <Title mode={mode} addStyles={styles.title}>
        {title}
      </Title>
    )}
    {children}
  </View>
);

export default Section;

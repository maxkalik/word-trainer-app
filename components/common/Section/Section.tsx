import React from 'react';
import { View } from 'react-native';
import Title from '../Title/Title';
import { SectionProps } from './types';
import { styles } from './styles';
import { colors } from '../../../util/constants';

const Section: React.FC<SectionProps> = ({ title, mode, children }): JSX.Element => {
  const { COLOR_BORDER } = mode === 'dark' ? colors.dark : colors.light;
  return (
    <View style={[styles.container, { borderColor: COLOR_BORDER }]}>
      {title && (
        <Title mode={mode} addStyles={styles.title}>
          {title}
        </Title>
      )}
      {children}
    </View>
  );
};

export default Section;

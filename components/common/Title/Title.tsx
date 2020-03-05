import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import { colors } from '../../../util/constants';
import { styles } from './styles';

const Title: React.FC<{ children: string; mode: 'light' | 'dark'; addStyles?: StyleProp<TextStyle> }> = ({
  children,
  mode,
  addStyles
}): JSX.Element => (
  <Text
    style={[
      styles.title,
      addStyles,
      { color: mode === 'dark' ? colors.dark.COLOR_PRIMARY : colors.light.COLOR_PRIMARY }
      // { color: colors[mode].COLOR_PRIMARY }
    ]}
  >
    {children}
  </Text>
);

export default Title;

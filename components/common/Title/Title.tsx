import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import { colors } from '../../../util/constants';
import { ModeTypes } from '../../../state/ModeState';
import { styles } from './styles';

const Title: React.FC<{ children: string; mode: ModeTypes; addStyles?: StyleProp<TextStyle> }> = ({
  children,
  mode,
  addStyles
}): JSX.Element => {
  const { COLOR_PRIMARY } = mode === 'dark' ? colors.dark : colors.light;
  return <Text style={[styles.title, addStyles, { color: COLOR_PRIMARY }]}>{children}</Text>;
};

export default Title;

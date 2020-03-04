import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import { styles } from './styles';

const Title: React.FC<{ children: string; addStyles?: StyleProp<TextStyle> }> = ({
  children,
  addStyles
}): JSX.Element => <Text style={[styles.title, addStyles]}>{children}</Text>;

export default Title;

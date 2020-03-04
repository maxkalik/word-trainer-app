import React from 'react';
import { TouchableOpacity, Text, Switch } from 'react-native';
import { SwitcherProps } from './types';
import { styles } from './styles';

const Switcher: React.FC<SwitcherProps> = ({ onValueChange, titleOn, titleOff, value }): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onValueChange}>
    <Switch onValueChange={onValueChange} value={value} />
    <Text style={[styles.title, value && styles.on]}>{value ? titleOn : titleOff}</Text>
  </TouchableOpacity>
);

export default Switcher;

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CheckboxProps } from './types';
import { Icon16px } from '../../icons';
import { styles } from './styles';

const Checkbox: React.FC<CheckboxProps> = ({ checked, onPress }): JSX.Element => (
  <TouchableOpacity style={[styles.container, checked && styles.checked]} onPress={onPress}>
    {checked && <Icon16px name="check mark" color="white" />}
  </TouchableOpacity>
);

export default Checkbox;

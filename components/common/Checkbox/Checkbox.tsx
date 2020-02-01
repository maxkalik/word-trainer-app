import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CheckboxProps } from './types';
import { Icn16px } from '../../icons';
import { styles } from './styles';

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onPress
}): JSX.Element => (
  <TouchableOpacity
    style={[styles.container, checked && styles.checked]}
    onPress={onPress}>
    {checked && <Icn16px name="check mark" />}
  </TouchableOpacity>
);

export default Checkbox;

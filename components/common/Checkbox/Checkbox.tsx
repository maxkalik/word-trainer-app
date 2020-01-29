import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CheckboxProps } from './types';
import { styles } from './styles';

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onPress
}): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.checkbox}>
      {checked && <View style={styles.mark} />}
    </View>
  </TouchableOpacity>
);

export default Checkbox;

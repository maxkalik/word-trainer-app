import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Icon16px } from '../../icons';
import { ClearBtnProps, InputProps } from './types';
import { styles, clearBtnStyles } from './styles';

const ClearButton: React.FC<ClearBtnProps> = ({
  onClearBtnPress
}): JSX.Element => (
  <TouchableOpacity style={clearBtnStyles.container} onPress={onClearBtnPress}>
    <Icon16px name="close" />
  </TouchableOpacity>
);

const Input: React.FC<InputProps> = ({
  onChangeText,
  placeholder,
  value,
  onClearBtnPress,
  styleInputField,
  style,
  autoFocus
}): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const isValue = value.length > 0;

  return (
    <View
      style={[styles.container, (focus || isValue) && styles.focused, style]}>
      <TextInput
        style={[styles.inputField, styleInputField]}
        autoFocus={autoFocus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
      />
      {isValue && <ClearButton onClearBtnPress={onClearBtnPress} />}
    </View>
  );
};

export default Input;

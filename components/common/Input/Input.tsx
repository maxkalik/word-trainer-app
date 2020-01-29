import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { ClearBtnProps, InputProps } from './types';
import { styles } from './styles';

const ClearButton: React.FC<ClearBtnProps> = ({
  onClearBtnPress
}): JSX.Element => (
  <TouchableOpacity style={styles.clearButton} onPress={onClearBtnPress}>
    <Text style={styles.clearButtonIcon}>×</Text>
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
    <View style={[styles.container, focus && styles.focused, style]}>
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

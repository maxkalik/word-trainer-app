import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputProps {
  onChangeText: () => void;
  value: string;
  placeholder: string;
  style?: object;
}

const Input: React.FC<InputProps> = ({
  onChangeText,
  placeholder,
  value,
  style
}): JSX.Element => (
  <TextInput
    style={[styles.container, style]}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    placeholderTextColor={'grey'}
  />
);

const styles = StyleSheet.create({
  container: {
    height: 40,
    fontSize: 18
  }
});

export default Input;

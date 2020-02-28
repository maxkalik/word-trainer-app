import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Icon16px } from '../../icons';
import { IconProps, InputProps } from './types';
import { styles, clearBtnStyles } from './styles';

const Icon: React.FC<IconProps> = ({ onIconPress, touchableIcon, iconName }): JSX.Element => {
  if (touchableIcon) {
    return (
      <TouchableOpacity style={clearBtnStyles.container} onPress={onIconPress}>
        <Icon16px name={iconName} />
      </TouchableOpacity>
    );
  }
  return <Icon16px name={iconName} />;
};

const Input: React.FC<InputProps> = ({
  onChangeText,
  placeholder,
  value,
  onIconPress,
  styleInputField,
  style,
  autoFocus,
  secureTextEntry,
  keyboardType,
  textContentType,
  touchableIcon,
  iconName
}): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const isValue = value.length > 0;

  return (
    <View style={[styles.container, (focus || isValue) && styles.focused, style]}>
      <TextInput
        style={[styles.inputField, styleInputField]}
        autoFocus={autoFocus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        textContentType={textContentType}
      />
      {iconName && isValue && <Icon onIconPress={onIconPress} touchableIcon={touchableIcon} iconName={iconName} />}
    </View>
  );
};

export default Input;

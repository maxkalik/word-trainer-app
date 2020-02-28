import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Icon16px } from '../../icons';
import { IconProps, InputProps } from './types';
import { styles, clearBtnStyles } from './styles';

interface IconInFiledProps extends IconProps {
  touchableIcon?: boolean;
}

const Icon: React.FC<IconInFiledProps> = ({ onIconPress, touchableIcon }): JSX.Element => {
  if (touchableIcon) {
    return (
      <TouchableOpacity style={clearBtnStyles.container} onPress={onIconPress}>
        <Icon16px name="close" />
      </TouchableOpacity>
    );
  }
  return <Icon16px name="close" />;
};

const Input: React.FC<InputProps> = ({
  onChangeText,
  placeholder,
  value,
  onIconPress,
  styleInputField,
  style,
  withIcon,
  autoFocus,
  secureTextEntry,
  keyboardType,
  textContentType,
  touchableIcon
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
      {withIcon && isValue && <Icon onIconPress={onIconPress} touchableIcon={touchableIcon} />}
    </View>
  );
};

export default Input;

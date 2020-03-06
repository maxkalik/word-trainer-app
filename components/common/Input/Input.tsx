import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Icon16px } from '../../icons';
import { IconProps, InputProps } from './types';
import { styles, clearBtnStyles } from './styles';
import { colors } from '../../../util/constants';

const Icon: React.FC<IconProps> = ({ onIconPress, touchableIcon, iconName, iconColor }): JSX.Element => {
  if (touchableIcon) {
    return (
      <TouchableOpacity style={clearBtnStyles.container} onPress={onIconPress}>
        <Icon16px name={iconName} color={iconColor} />
      </TouchableOpacity>
    );
  }
  return (
    <View style={clearBtnStyles.container}>
      <Icon16px name={iconName} color={iconColor} />
    </View>
  );
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
  iconName,
  iconColor,
  mode
}): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const isValue = value.length > 0;
  const isEdit = focus || isValue;
  const isFocusedStyle = isEdit && styles.focused;
  const generalModeStyle = isEdit && {
    backgroundColor: mode && colors[mode].COLOR_ACTIVE_INPUT_BACKGROUND
  };

  return (
    <View style={[styles.container, isFocusedStyle, generalModeStyle, style]}>
      <TextInput
        style={[styles.inputField, styleInputField, { color: mode && colors[mode].COLOR_PRIMARY }]}
        autoFocus={autoFocus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.COLOR_INPUT_PLACEHOLDER}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        textContentType={textContentType}
      />
      {iconName && isValue && (
        <Icon
          onIconPress={onIconPress}
          touchableIcon={touchableIcon}
          iconName={iconName}
          iconColor={iconColor}
        />
      )}
    </View>
  );
};

export default Input;
